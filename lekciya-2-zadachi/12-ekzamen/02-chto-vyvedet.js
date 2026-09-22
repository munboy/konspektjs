// ──────────────────────────────────────────────────────────────────────
// Блок 12 · Задача 2 · Средне
//
// Что выведет этот код?
//
// Сначала подумай и впиши ответ в шаблон ниже: каждая строка вывода — отдельной строкой.
// Лишние пробелы и кавычки ' или " не важны — [1, 2] и [ 1, 2 ] засчитаются одинаково.
// Проверить себя:  node test.js 12/2
// Разбор — в js-lekciya-2.html, блок 12, задача 2.
// ──────────────────────────────────────────────────────────────────────

const answer = `

`;

// ─── код задачи (не меняй) ───
const orders = [
  { user: 'kate', sum: 30 },
  { user: 'max', sum: 10 },
  { user: 'kate', sum: 5 },
];
const totals = orders.reduce((acc, o) => ({ ...acc, [o.user]: (acc[o.user] ?? 0) + o.sum }), {});
console.log(totals);
console.log(Object.entries(totals).sort((a, b) => a[1] - b[1]).map(([u]) => u).join());
console.log(JSON.stringify(totals), JSON.stringify(Object.keys(totals).flatMap(k => [k, k.length])));
