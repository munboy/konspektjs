'use strict';
/*
  Проверялка задач. Её не надо менять и даже читать — она:
  1) загружает твой файл с задачей в отдельной «песочнице»;
  2) вызывает твою функцию на тестах из файла *.test.js и сравнивает ответы;
  3) проверяет правила задачи: сколько циклов, нет ли рекурсии и запрещённых методов.
  Бесконечный цикл не повесит компьютер: каждый тест прерывается через 2 секунды.
*/
const fs = require('fs');
const path = require('path');
const vm = require('vm');
const util = require('util');

const TIMEOUT = 2000;
const RUNNER = process.env.ZADACHI_RUNNER === '1';
const DETAIL = !RUNNER || process.env.ZADACHI_DETAIL === '1';

const useColor = process.stdout.isTTY && !process.env.NO_COLOR;
const paint = (code, s) => (useColor ? `\x1b[${code}m${s}\x1b[0m` : s);
const green = s => paint('32', s);
const red = s => paint('31', s);
const gray = s => paint('90', s);
const bold = s => paint('1', s);
const yellow = s => paint('33', s);

/* ---------------- разбор кода ученика ---------------- */

// убрать комментарии и содержимое строк, чтобы искать только по коду
function stripCode(code) {
  let out = '';
  let i = 0;
  while (i < code.length) {
    const c = code[i];
    const d = code[i + 1];
    if (c === '/' && d === '/') { while (i < code.length && code[i] !== '\n') i++; continue; }
    if (c === '/' && d === '*') { const e = code.indexOf('*/', i + 2); i = e < 0 ? code.length : e + 2; continue; }
    if (c === '"' || c === "'" || c === '`') {
      const q = c;
      i++;
      while (i < code.length && code[i] !== q) { if (code[i] === '\\') i++; i++; }
      i++;
      out += q + q;
      continue;
    }
    out += c;
    i++;
  }
  return out;
}

// код без комментариев, строк и строк-примеров console.log(...)
function codeOnly(src) {
  return stripCode(src).split('\n').filter(l => !/^\s*console\.\w+\(/.test(l)).join('\n');
}

const METHODS = 'indexOf lastIndexOf includes split slice substring substr trim trimStart trimEnd toLowerCase toUpperCase replace replaceAll match matchAll search push pop shift unshift join reverse map filter reduce forEach some every find findIndex startsWith endsWith padStart padEnd repeat at concat sort toFixed toString charAt codePointAt localeCompare flat splice fill keys values entries'.split(' ');
const GLOBALS = 'parseInt parseFloat Number String eval RegExp BigInt'.split(' ');
const HIDDEN = /(\w+)?\s*\.\s*(forEach|map|filter|some|every|find|findIndex|findLast|findLastIndex|reduce|reduceRight|flat|flatMap|includes|indexOf|lastIndexOf|join|sort|toSorted|concat|slice|splice|fill|reverse|toReversed|repeat|padStart|padEnd)\s*\(/g;

function analyze(src) {
  const body = codeOnly(src);
  let m;

  const methods = new Set();
  const reM = /\.\s*([A-Za-z_$][\w$]*)\s*\(/g;
  while ((m = reM.exec(body))) if (METHODS.includes(m[1])) methods.add(m[1]);
  const reG = /(^|[^.\w$])([A-Za-z_$][\w$]*)\s*\(/g;
  while ((m = reG.exec(body))) {
    if (!GLOBALS.includes(m[2])) continue;
    const pre = body.slice(Math.max(0, m.index - 12), m.index + m[1].length);
    if (/function\s*$/.test(pre)) continue;
    methods.add(m[2]);
  }
  if (/\bMath\.\w+/.test(body)) methods.add('Math');
  if (/\/[^/\n*]+\/[gimsuy]*\.(test|exec)\(|\.(match|replace|split)\(\s*\//.test(body)) methods.add('регулярные выражения');

  const fors = (body.match(/\bfor\s*\(/g) || []).length;
  const whiles = (body.match(/\bwhile\s*\(/g) || []).length;
  const hidden = [];
  while ((m = HIDDEN.exec(body))) if (m[1] !== 'Object') hidden.push(m[2]);
  const revfor = /\bfor\s*\(\s*let\s+\w+\s*=\s*[\w.]+\.length\s*-\s*1\s*;[^;]*>=\s*0\s*;\s*\w+--\s*\)/.test(body);

  const recursive = [];
  const reF = /function\s+([A-Za-z_$][\w$]*)\s*\([^)]*\)\s*\{/g;
  while ((m = reF.exec(body))) {
    let depth = 1;
    let k = m.index + m[0].length;
    const start = k;
    while (k < body.length && depth) {
      if (body[k] === '{') depth++;
      else if (body[k] === '}') depth--;
      k++;
    }
    if (new RegExp('(^|[^.\\w$])' + m[1] + '\\s*\\(').test(body.slice(start, k))) recursive.push(m[1]);
  }

  const arrays = /(^|[=(,:?]|\breturn)\s*\[/m.test(body) || /\bnew\s+Array\b|\bArray\.(from|of)\b/.test(body);
  return { body, methods: [...methods], fors, whiles, hidden, revfor, recursive, arrays };
}

// тело функции name без комментариев — пустое, если задачу ещё не начинали
function isUntouched(src, name) {
  const body = stripCode(src);
  const re = new RegExp('function\\s+' + name + '\\s*\\(');
  const m = re.exec(body);
  if (!m) return false;
  let k = m.index + m[0].length;
  let depth = 1;
  while (k < body.length && depth) {           // пропустить параметры (там бывают скобки)
    if (body[k] === '(') depth++;
    else if (body[k] === ')') depth--;
    k++;
  }
  const open = body.indexOf('{', k);
  if (open < 0) return false;
  depth = 1;
  let j = open + 1;
  while (j < body.length && depth) {
    if (body[j] === '{') depth++;
    else if (body[j] === '}') depth--;
    j++;
  }
  return body.slice(open + 1, j - 1).trim() === '';
}

function checkRules(src, rules) {
  const a = analyze(src);
  const problems = [];
  const loops = a.fors + a.whiles + a.hidden.length;
  const loopsText = `for: ${a.fors}, while: ${a.whiles}` + (a.hidden.length ? `, спрятанные в методах: ${a.hidden.join(', ')}` : '');

  if (rules.strict) {
    const allowed = rules.allow || [];
    const bad = a.methods.filter(x => !allowed.includes(x));
    if (bad.length) problems.push(`в этой задаче нельзя готовые методы, а у тебя: ${bad.join(', ')}. Разрешены только циклы, индексы str[i], charCodeAt, арифметика и свои функции`);
  }
  if (rules.onefor && (a.fors !== 1 || a.whiles || a.hidden.length)) problems.push(`нужен ровно один цикл for, а у тебя ${loopsText}`);
  if (rules.revfor && (a.fors !== 1 || a.whiles || a.hidden.length || !a.revfor)) problems.push(`нужен ровно один обратный цикл вида for (let i = str.length - 1; i >= 0; i--), а у тебя ${loopsText}${a.fors === 1 && !a.revfor ? ' (цикл не обратный)' : ''}`);
  if (rules.loops && loops > rules.loops) problems.push(`можно не больше ${rules.loops} ${rules.loops === 1 ? 'цикла' : 'циклов'}, а у тебя ${loops} (${loopsText})`);
  if (rules.norec && a.recursive.length) problems.push(`рекурсия запрещена, а функция ${a.recursive.join(', ')} вызывает сама себя`);
  if (rules.forbid) {
    const bad = rules.forbid.filter(name => (name.includes('.') ? a.body.includes(name) : new RegExp('\\.\\s*' + name + '\\s*\\(').test(a.body)));
    if (bad.length) problems.push(`нельзя вызывать ${bad.join(', ')} — эту функцию и надо написать самой`);
  }
  if (rules.noarrays && a.arrays) problems.push('массивы запрещены (нашла [ ... ] или new Array) — храни всё в переменных');
  return problems;
}

/* ---------------- сравнение ответов ---------------- */

const tag = x => Object.prototype.toString.call(x);

// глубокое сравнение; работает для объектов из «песочницы»
function same(a, b) {
  if (Object.is(a, b)) return true;
  if (typeof a !== 'object' || typeof b !== 'object' || !a || !b) return false;
  if (Array.isArray(a) !== Array.isArray(b)) return false;
  if (tag(a) === '[object Date]' || tag(b) === '[object Date]') {
    return tag(a) === tag(b) && Object.is(a.getTime(), b.getTime());
  }
  if (Array.isArray(a) && a.length !== b.length) return false;
  const ka = Object.keys(a);
  const kb = Object.keys(b);
  if (ka.length !== kb.length) return false;
  return ka.every(k => Object.prototype.hasOwnProperty.call(b, k) && same(a[k], b[k]));
}

const show = v => util.inspect(v, { depth: 5, breakLength: Infinity });

function errorText(e) {
  if (e && e.code === 'ERR_SCRIPT_EXECUTION_TIMEOUT') return 'зависла больше 2 секунд — похоже на бесконечный цикл';
  const name = e && e.constructor && e.constructor.name ? e.constructor.name : 'Error';
  return `${name}: ${e && e.message}`;
}

/* ---------------- вывод ---------------- */

function finish(result, lines) {
  if (!RUNNER || result.single) console.log(lines.join('\n'));
  if (RUNNER) console.log('@@RESULT ' + JSON.stringify(result));
  process.exitCode = result.status === 'solved' ? 0 : 1;
}

function header(spec) {
  return bold(`${spec.task}`) + gray(`  (блок ${spec.block}, задача ${spec.no}${spec.must ? ', ★ минимум' : ''})`);
}

/* ---------------- задача «напиши функцию» ---------------- */

function runTask(dir, spec) {
  const file = path.join(dir, spec.task);
  const lines = [header(spec)];
  const result = { task: spec.task, status: 'failed', passed: 0, total: spec.tests.length, rules: 0 };

  let src;
  try {
    src = fs.readFileSync(file, 'utf8');
  } catch (e) {
    lines.push(red(`  ✗ не нашла файл ${spec.task}`));
    return finish(result, lines);
  }

  if (isUntouched(src, spec.fn)) {
    result.status = 'todo';
    lines.push(gray(`  · задача ещё не начата: функция ${spec.fn} пустая. Напиши решение в ${spec.task} и запусти проверку снова.`));
    return finish(result, lines);
  }

  const silent = { log() {}, info() {}, warn() {}, error() {}, table() {}, dir() {} };
  const ctx = vm.createContext({ console: silent });
  try {
    vm.runInContext(src, ctx, { filename: spec.task, timeout: TIMEOUT });
  } catch (e) {
    if (e instanceof SyntaxError || (e && e.name === 'SyntaxError')) {
      lines.push(red(`  ✗ в файле синтаксическая ошибка: ${e.message}`));
      const where = String(e.stack || '').split('\n').slice(0, 3).join('\n    ');
      if (where) lines.push(gray('    ' + where));
      return finish(result, lines);
    }
    lines.push(yellow(`  ! примеры внизу файла упали: ${errorText(e)} — тесты всё равно запускаю`));
  }

  let fnType = 'undefined';
  try { fnType = vm.runInContext(`typeof ${spec.fn}`, ctx); } catch (e) { /* нет такой функции */ }
  if (fnType !== 'function') {
    lines.push(red(`  ✗ в файле нет функции ${spec.fn} — не переименовывай её`));
    return finish(result, lines);
  }

  const setup = spec.setup.join('\n');
  for (const [expr, expected] of spec.tests) {
    const throwsWant = /^throws\b/.test(expected) ? (expected.split(/\s+/)[1] || '') : null;
    let got;
    let err = null;
    try {
      got = vm.runInContext(`(function () {\n${setup}\nreturn (${expr});\n})()`, ctx, { timeout: TIMEOUT });
    } catch (e) {
      err = e;
    }

    let ok = false;
    let why = '';
    if (throwsWant !== null) {
      if (err && err.code !== 'ERR_SCRIPT_EXECUTION_TIMEOUT' && (!throwsWant || (err.constructor && err.constructor.name === throwsWant))) ok = true;
      else if (err) why = errorText(err) + (throwsWant ? `, а ждали ошибку ${throwsWant}` : '');
      else why = `ждали ошибку ${throwsWant || ''}, а вернулось ${show(got)}`.replace('  ', ' ');
    } else if (err) {
      why = errorText(err);
    } else {
      const want = vm.runInContext(`(${expected})`, ctx);
      ok = same(got, want);
      if (!ok) why = `ждали ${expected}, получилось ${show(got)}`;
    }

    if (ok) {
      result.passed++;
      lines.push(green('  ✓ ') + gray(`${expr}  →  ${expected}`));
    } else {
      lines.push(red('  ✗ ') + `${expr}\n      ${red(why)}`);
    }
  }

  const problems = checkRules(src, spec.rules || {});
  result.rules = problems.length;
  for (const p of problems) lines.push(red('  ✗ правило: ') + p);

  const allTests = result.passed === result.total;
  if (allTests && !problems.length) {
    result.status = 'solved';
    lines.push(green(bold(`  Решено! ${result.passed} из ${result.total} тестов, правила соблюдены.`)));
  } else {
    lines.push(bold(`  Тестов пройдено: ${result.passed} из ${result.total}`) + (problems.length ? red(`, нарушено правил: ${problems.length}`) : ''));
  }
  finish(result, lines);
}

/* ---------------- задача «что выведет код» ---------------- */

function normLine(line) {
  return line
    .replace(/"/g, "'")
    .replace(/\s+/g, ' ')
    .replace(/\s*([,:])\s*/g, '$1')
    .replace(/([[{(])\s+/g, '$1')
    .replace(/\s+([\]})])/g, '$1')
    .trim();
}

function runOutput(dir, spec) {
  const file = path.join(dir, spec.task);
  const lines = [header(spec)];
  const expected = Buffer.from(spec.expected, 'base64').toString('utf8').split('\n');
  const result = { task: spec.task, status: 'failed', passed: 0, total: expected.length, rules: 0 };

  let src;
  try {
    src = fs.readFileSync(file, 'utf8');
  } catch (e) {
    lines.push(red(`  ✗ не нашла файл ${spec.task}`));
    return finish(result, lines);
  }
  const m = new RegExp('const ' + spec.answerVar + ' = `([\\s\\S]*?)`;').exec(src);
  if (!m) {
    lines.push(red(`  ✗ не нашла в файле строку const ${spec.answerVar} = \`...\`; — не удаляй её, ответ пиши между обратными кавычками`));
    return finish(result, lines);
  }
  const mine = m[1].split('\n').map(normLine).filter(Boolean);
  if (!mine.length) {
    result.status = 'todo';
    lines.push(gray(`  · ответ ещё не написан: впиши его в ${spec.answerVar} в файле ${spec.task}`));
    return finish(result, lines);
  }

  const want = expected.map(normLine).filter(Boolean);
  result.total = want.length;
  for (let i = 0; i < Math.max(want.length, mine.length); i++) {
    if (mine[i] === want[i]) {
      result.passed++;
      lines.push(green(`  ✓ строка ${i + 1}: `) + gray(mine[i]));
    } else if (i >= want.length) {
      lines.push(red(`  ✗ строка ${i + 1}: `) + `у тебя «${mine[i]}», а код выводит меньше строк`);
    } else if (i >= mine.length) {
      lines.push(red(`  ✗ строка ${i + 1}: `) + 'не написана — код выводит больше строк');
    } else {
      lines.push(red(`  ✗ строка ${i + 1}: `) + `у тебя «${mine[i]}» — неверно`);
    }
  }
  if (result.passed === want.length && mine.length === want.length) {
    result.status = 'solved';
    lines.push(green(bold(`  Верно! Все ${want.length} строк совпали.`)));
  } else {
    lines.push(bold(`  Верных строк: ${result.passed} из ${want.length}.`) + gray(' Правильный вывод и разбор — в js-lekciya-2.html.'));
  }
  finish(result, lines);
}

module.exports = { runTask, runOutput, analyze, checkRules, isUntouched, same, normLine };
