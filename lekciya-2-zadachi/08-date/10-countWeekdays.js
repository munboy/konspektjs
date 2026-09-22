// ──────────────────────────────────────────────────────────────────────
// Блок 8 · Задача 10 · Сложно
//
// Напиши `countWeekdays(from, to)` — сколько рабочих дней (пн–пт) в промежутке от `from` до `to`
// включительно. Если `to` раньше `from` — `0`.
//
// `countWeekdays(new Date(2024, 0, 1), new Date(2024, 0, 7))` → `5`.
//
// Проверить себя:  node test.js countWeekdays
// Решение и разбор — в js-lekciya-2.html, блок 8, задача 10.
// ──────────────────────────────────────────────────────────────────────

function countWeekdays(from, to) {
  // твой код
}

// Примеры — запусти файл (node 08-date/10-countWeekdays.js) и сравни:
console.log(countWeekdays(new Date(2024, 0, 1), new Date(2024, 0, 7))); // ожидается: 5
console.log(countWeekdays(new Date(2024, 0, 6), new Date(2024, 0, 7))); // ожидается: 0
console.log(countWeekdays(new Date(2024, 0, 1), new Date(2024, 0, 1))); // ожидается: 1
