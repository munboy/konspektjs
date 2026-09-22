// ──────────────────────────────────────────────────────────────────────
// Блок 1 · Задача 8 · Средне
// Правила: только циклы, индексы str[i], charCodeAt и арифметика — без готовых методов, parseInt и Number()
//
// Напиши `countBalanceDecimal(str)` — исправленный `countBalance`, который понимает дроби через
// точку (точка — разделитель, только если после неё цифра; иначе это конец предложения).
//
// `countBalanceDecimal('I paid 12.50 USDT and 7.25 USDT. My balance is 100 USDT.')` → `80.25`.
//
// Проверить себя:  node test.js countBalanceDecimal
// Решение и разбор — в js-lekciya-2.html, блок 1, задача 8.
// ──────────────────────────────────────────────────────────────────────

function countBalanceDecimal(str) {
  // твой код
}

// Примеры — запусти файл (node 01-povtorenie/08-countBalanceDecimal.js) и сравни:
console.log(countBalanceDecimal('I paid 12.50 USDT and 7.25 USDT. My balance is 100 USDT.')); // ожидается: 80.25
console.log(countBalanceDecimal('balance 10.5, paid 0.5')); // ожидается: 10
console.log(countBalanceDecimal('Balance: 7.')); // ожидается: 7
