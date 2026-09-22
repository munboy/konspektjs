// ──────────────────────────────────────────────────────────────────────
// Блок 1 · Задача 12 · Средне
// Правила: только циклы, индексы str[i], charCodeAt и арифметика — без готовых методов, parseInt и Number()
//
// Напиши `parseLastNumber(str)` — последнее целое число в строке, читая её справа налево (это и
// есть «задом наперёд» из задания лекции). Минус прямо перед цифрами считается знаком. Чисел нет —
// `null`.
//
// `parseLastNumber('Order 12, total 350')` → `350`, `parseLastNumber('x-20')` → `-20`.
//
// Проверить себя:  node test.js parseLastNumber
// Решение и разбор — в js-lekciya-2.html, блок 1, задача 12.
// ──────────────────────────────────────────────────────────────────────

function parseLastNumber(str) {
  // твой код
}

// Примеры — запусти файл (node 01-povtorenie/12-parseLastNumber.js) и сравни:
console.log(parseLastNumber('Order 12, total 350')); // ожидается: 350
console.log(parseLastNumber('abc 7')); // ожидается: 7
console.log(parseLastNumber('x-20')); // ожидается: -20
