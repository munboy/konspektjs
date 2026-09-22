// ──────────────────────────────────────────────────────────────────────
// Блок 11 · Задача 4 · Легко · ★ минимум
//
// Что выведет этот код?
//
// Сначала подумай и впиши ответ в шаблон ниже: каждая строка вывода — отдельной строкой.
// Лишние пробелы и кавычки ' или " не важны — [1, 2] и [ 1, 2 ] засчитаются одинаково.
// Проверить себя:  node test.js 11/4
// Разбор — в js-lekciya-2.html, блок 11, задача 4.
// ──────────────────────────────────────────────────────────────────────

const answer = `

`;

// ─── код задачи (не меняй) ───
const wm = new WeakMap();
const user = { name: 'Kate' };
wm.set(user, { visits: 1 });
console.log(wm.get(user), wm.has({ name: 'Kate' }), wm.size, typeof wm.keys);
try {
  wm.set('str', 1);
} catch (e) {
  console.log(e.constructor.name + ': ' + e.message);
}
try {
  new WeakSet().add(1);
} catch (e) {
  console.log(e.constructor.name + ': ' + e.message);
}
