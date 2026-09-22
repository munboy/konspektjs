'use strict';
/*
  Запуск проверок.

    node test.js                  все задачи, итог по блокам
    node test.js 04               только блок 4
    node test.js myReduce         задачи, в названии которых есть «myReduce»
    node test.js 04/05            блок 4, задача 5
    node test.js --must           только задачи минимума ★ (можно вместе с блоком: node test.js 04 --must)

  Если под фильтр попала одна задача — показываю все её тесты подробно.
*/
const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');

const root = __dirname;
const manifest = JSON.parse(fs.readFileSync(path.join(root, '_lib', 'manifest.json'), 'utf8'));

const args = process.argv.slice(2);
const mustOnly = args.includes('--must');
const filters = args.filter(a => !a.startsWith('--')).map(a => a.toLowerCase());

const useColor = process.stdout.isTTY && !process.env.NO_COLOR;
const paint = (code, s) => (useColor ? `\x1b[${code}m${s}\x1b[0m` : s);
const green = s => paint('32', s);
const red = s => paint('31', s);
const gray = s => paint('90', s);
const bold = s => paint('1', s);

function matches(t) {
  if (mustOnly && !t.must) return false;
  if (!filters.length) return true;
  return filters.some(f => {
    const [b, n] = f.split('/');
    if (/^\d+$/.test(b) && n !== undefined) return t.block === Number(b) && t.no === Number(n);
    if (/^\d+$/.test(b)) return t.block === Number(b);
    return (t.name + ' ' + t.file).toLowerCase().includes(f);
  });
}

const selected = manifest.tasks.filter(matches);
if (!selected.length) {
  console.log('Под фильтр не попала ни одна задача. Примеры: node test.js 04, node test.js myReduce, node test.js --must');
  process.exit(1);
}
const single = selected.length === 1;

function run(t) {
  const res = spawnSync(process.execPath, [path.join(root, t.test)], {
    encoding: 'utf8',
    timeout: 20000,
    env: Object.assign({}, process.env, { ZADACHI_RUNNER: '1', ZADACHI_DETAIL: single ? '1' : '0', FORCE_COLOR: useColor ? '1' : '0' }),
  });
  const out = (res.stdout || '') + (res.stderr || '');
  const line = out.split('\n').find(l => l.startsWith('@@RESULT '));
  if (single) process.stdout.write(out.split('\n').filter(l => !l.startsWith('@@RESULT ')).join('\n') + '\n');
  if (res.error && res.error.code === 'ETIMEDOUT') return { status: 'failed', note: 'зависла' };
  if (!line) return { status: 'failed', note: 'проверка упала: ' + out.trim().split('\n').slice(-1)[0] };
  return JSON.parse(line.slice('@@RESULT '.length));
}

let lastBlock = null;
const stats = {};
for (const t of selected) {
  const r = run(t);
  const s = stats[t.block] || (stats[t.block] = { solved: 0, total: 0, mustSolved: 0, must: 0, title: t.blockTitle });
  s.total++;
  if (t.must) s.must++;
  if (r.status === 'solved') { s.solved++; if (t.must) s.mustSolved++; }
  if (single) continue;

  if (t.block !== lastBlock) {
    console.log('\n' + bold(`Блок ${t.block} · ${t.blockTitle}`));
    lastBlock = t.block;
  }
  const mark = r.status === 'solved' ? green('✓') : r.status === 'todo' ? gray('·') : red('✗');
  const name = (t.file.split('/').pop().replace(/\.js$/, '')).padEnd(34);
  const star = t.must ? '★' : ' ';
  let info;
  if (r.status === 'solved') info = green('решено');
  else if (r.status === 'todo') info = gray('ещё не начата');
  else if (r.note) info = red(r.note);
  else info = red(`${r.passed}/${r.total} тестов`) + (r.rules ? red(`, правил нарушено: ${r.rules}`) : '');
  console.log(`  ${mark} ${star} ${name} ${info}`);
}

if (!single) {
  let solved = 0, total = 0, mustSolved = 0, must = 0;
  for (const s of Object.values(stats)) { solved += s.solved; total += s.total; mustSolved += s.mustSolved; must += s.must; }
  console.log('\n' + bold(`Итого: решено ${solved} из ${total}`) + (must ? bold(` · минимум ★: ${mustSolved} из ${must}`) : ''));
  console.log(gray('Подробности по одной задаче: node test.js <название>, например node test.js myReduce'));
}
