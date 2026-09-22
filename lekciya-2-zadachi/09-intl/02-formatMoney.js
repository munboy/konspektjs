// ──────────────────────────────────────────────────────────────────────
// Блок 9 · Задача 2 · Легко
//
// Напиши `formatMoney(amount, currency, locale)` — сумму в денежном формате через
// `Intl.NumberFormat`.
//
// `formatMoney(1234.5, 'USD', 'en-US')` → `'$1,234.50'`.
//
// Проверить себя:  node test.js formatMoney
// Решение и разбор — в js-lekciya-2.html, блок 9, задача 2.
// ──────────────────────────────────────────────────────────────────────

function formatMoney(amount, currency, locale) {
  // твой код
}

// Примеры — запусти файл (node 09-intl/02-formatMoney.js) и сравни:
console.log(formatMoney(1234.5, 'USD', 'en-US')); // ожидается: '$1,234.50'
console.log(formatMoney(-5, 'EUR', 'en-US')); // ожидается: '-€5.00'
console.log(formatMoney(0.1 + 0.2, 'USD', 'en-US')); // ожидается: '$0.30'
