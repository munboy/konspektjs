// ──────────────────────────────────────────────────────────────────────
// Блок 12 · Задача 4 · Средне
//
// Что выведет этот код?
//
// Сначала подумай и впиши ответ в шаблон ниже: каждая строка вывода — отдельной строкой.
// Лишние пробелы и кавычки ' или " не важны — [1, 2] и [ 1, 2 ] засчитаются одинаково.
// Проверить себя:  node test.js 12/4
// Разбор — в js-lekciya-2.html, блок 12, задача 4.
// ──────────────────────────────────────────────────────────────────────

const answer = `

`;

// ─── код задачи (не меняй) ───
const text = JSON.stringify({ title: 'exam', at: new Date(Date.UTC(2024, 8, 27, 9)) });
console.log(text);
const plain = JSON.parse(text);
console.log(typeof plain.at, typeof plain.at.getUTCHours);
const revived = JSON.parse(text, (key, value) => (key === 'at' ? new Date(value) : value));
console.log(revived.at instanceof Date, revived.at.getUTCHours());
