// ──────────────────────────────────────────────────────────────────────
// Блок 1 · Задача 15 · Средне · ★ минимум · экзамен
// Правила: только циклы, индексы str[i], charCodeAt и арифметика — без готовых методов, parseInt и Number(); ровно один цикл for; без массивов
//
// Напиши `parseCurrencyRate(str)`: в строке две суммы в двух валютах; верни курс — сколько второй
// валюты стоит 1 единица первой (`второе число / первое`). Дробная часть — через точку или
// запятую.
//
// Можно только: `charCodeAt`, ровно один `for`, арифметика между числами. Нельзя: `parseInt`,
// `parseFloat`, `Number()`, унарный плюс, регулярки, массивы, лишние циклы. Если чисел меньше двух
// — `null`.
//
// `parseCurrencyRate('Exchanged 250 USD to 23125 CZK')` → `92.5`, `parseCurrencyRate('Converted
// 3.5 BTC to 196000 USD')` → `56000`, `parseCurrencyRate('Swapped 1000 EUR to 1085.50 USD')` →
// `1.0855`.
//
// Проверить себя:  node test.js parseCurrencyRate
// Решение и разбор — в js-lekciya-2.html, блок 1, задача 15.
// ──────────────────────────────────────────────────────────────────────

function parseCurrencyRate(str) {
  // твой код
}

// Примеры — запусти файл (node 01-povtorenie/15-parseCurrencyRate.js) и сравни:
console.log(parseCurrencyRate('Exchanged 250 USD to 23125 CZK')); // ожидается: 92.5
console.log(parseCurrencyRate('Converted 3.5 BTC to 196000 USD')); // ожидается: 56000
console.log(parseCurrencyRate('Swapped 1000 EUR to 1085.50 USD')); // ожидается: 1.0855
