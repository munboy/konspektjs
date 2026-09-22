// ──────────────────────────────────────────────────────────────────────
// Блок 9 · Задача 7 · Легко · ★ минимум
//
// Что выведет этот код?
//
// Сначала подумай и впиши ответ в шаблон ниже: каждая строка вывода — отдельной строкой.
// Лишние пробелы и кавычки ' или " не важны — [1, 2] и [ 1, 2 ] засчитаются одинаково.
// Проверить себя:  node test.js 09/7
// Разбор — в js-lekciya-2.html, блок 9, задача 7.
// ──────────────────────────────────────────────────────────────────────

const answer = `

`;

// ─── код задачи (не меняй) ───
const uk = new Intl.PluralRules('uk');
console.log([1, 2, 5, 11, 21, 22].map(n => uk.select(n)).join(' '));
const ord = new Intl.PluralRules('en', { type: 'ordinal' });
console.log([1, 2, 3, 4, 11, 22].map(n => ord.select(n)).join(' '));
console.log(new Intl.ListFormat('uk', { type: 'conjunction' }).format(['чай', 'кава', 'сік']));
console.log(new Intl.RelativeTimeFormat('uk', { numeric: 'auto' }).format(-1, 'day'), new Intl.RelativeTimeFormat('uk').format(-3, 'day'));
