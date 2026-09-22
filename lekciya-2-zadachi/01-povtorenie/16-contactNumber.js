// ──────────────────────────────────────────────────────────────────────
// Блок 1 · Задача 16 · Сложно · ★ минимум · экзамен
// Правила: только циклы, индексы str[i], charCodeAt и арифметика — без готовых методов, parseInt и Number(); ровно один обратный цикл: for (let i = str.length - 1; i >= 0; i--); без массивов
//
// Напиши `contactNumber(str)`: читая строку справа налево, собери числа. Первое число справа —
// начало результата (со своей дробной частью через запятую или точку, если она есть). Цифры
// каждого следующего числа (в порядке, в котором числа встречаются справа налево) дописываются в
// конец результата.
//
// Можно только: `charCodeAt`, ровно один обратный цикл `for (let i = str.length - 1; i >= 0;
// i--)`, арифметика между числами. Нельзя: `parseInt`, `parseFloat`, `Number()`, унарный плюс,
// регулярки, массивы. Чисел нет — `null`.
//
// `contactNumber('Right part 72 is 49 asdhsad 15 and left part is 56,02')` → `56.02154972`,
// `contactNumber('Right part is 14992 and left part is 0.006')` → `0.00614992`,
// `contactNumber('Right part is 1493 and left part is 5602')` → `56021493`.
//
// Проверить себя:  node test.js contactNumber
// Решение и разбор — в js-lekciya-2.html, блок 1, задача 16.
// ──────────────────────────────────────────────────────────────────────

function contactNumber(str) {
  // твой код
}

// Примеры — запусти файл (node 01-povtorenie/16-contactNumber.js) и сравни:
console.log(contactNumber('Right part 72 is 49 asdhsad 15 and left part is 56,02')); // ожидается: 56.02154972
console.log(contactNumber('Right part is 14992 and left part is 0.006')); // ожидается: 0.00614992
console.log(contactNumber('Right part is 1493 and left part is 5602')); // ожидается: 56021493
