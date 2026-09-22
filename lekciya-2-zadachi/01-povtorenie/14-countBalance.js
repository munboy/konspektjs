// ──────────────────────────────────────────────────────────────────────
// Блок 1 · Задача 14 · Средне · ★ минимум · экзамен
// Правила: только циклы, индексы str[i], charCodeAt и арифметика — без готовых методов, parseInt и Number(); ровно один цикл for; без массивов
//
// Напиши `countBalance(str)`: достань из строки все числа (целые и дробные через точку), найди
// наибольшее и верни `наибольшее − сумма всех остальных`.
//
// Можно только: `charCodeAt`, ровно один `for`, арифметика между числами. Нельзя: `parseInt`,
// `parseFloat`, `Number()`, унарный плюс, регулярки, массивы.
//
// `countBalance('My wallet balance is 14690 USDT. I paid 750.50 USDT and 921.25 USDT')` →
// `13018.25`, и с числами в другом порядке — тоже `13018.25`.
//
// Проверить себя:  node test.js countBalance
// Решение и разбор — в js-lekciya-2.html, блок 1, задача 14.
// ──────────────────────────────────────────────────────────────────────

function countBalance(str) {
  // твой код
}

// Примеры — запусти файл (node 01-povtorenie/14-countBalance.js) и сравни:
console.log(countBalance('My wallet balance is 14690 USDT. I paid 750.50 USDT and 921.25 USDT')); // ожидается: 13018.25
console.log(countBalance('I paid 750.50 USDT and 921.25 USDT. My wallet balance is 14690 USDT.')); // ожидается: 13018.25
console.log(countBalance('Only 100 USDT')); // ожидается: 100
