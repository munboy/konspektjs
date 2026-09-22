// ──────────────────────────────────────────────────────────────────────
// Блок 12 · Задача 1 · Легко
//
// Напиши `parsePrices(text)` — строку `'apple:30, milk:45.5'` превратить в объект `{ apple: 30,
// milk: 45.5 }`. Методами строк и массивов, пустые куски пропускать.
//
// Проверить себя:  node test.js parsePrices
// Решение и разбор — в js-lekciya-2.html, блок 12, задача 1.
// ──────────────────────────────────────────────────────────────────────

function parsePrices(text) {
  // твой код
}

// Примеры — запусти файл (node 12-ekzamen/01-parsePrices.js) и сравни:
console.log(parsePrices('apple:30, milk:45.5')); // ожидается: { apple: 30, milk: 45.5 }
console.log(parsePrices('bread:20')); // ожидается: { bread: 20 }
console.log(parsePrices('')); // ожидается: {}
