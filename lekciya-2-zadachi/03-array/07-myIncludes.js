// ──────────────────────────────────────────────────────────────────────
// Блок 3 · Задача 7 · Средне · ★ минимум
//
// Напиши свой `myIncludes(arr, value, fromIndex)` как настоящий `includes`: сравнение
// SameValueZero (`NaN` находится, `0` равен `-0`), `fromIndex` по умолчанию 0, отрицательный — от
// конца, если после этого меньше нуля — ищем с начала.
//
// `myIncludes([1, NaN], NaN)` → `true`, `myIncludes([1, 2, 3], 3, -1)` → `true`, `myIncludes([1,
// 2, 3], 1, 1)` → `false`.
//
// Проверить себя:  node test.js myIncludes
// Решение и разбор — в js-lekciya-2.html, блок 3, задача 7.
// ──────────────────────────────────────────────────────────────────────

function myIncludes(arr, value, fromIndex = 0) {
  // твой код
}

// Примеры — запусти файл (node 03-array/07-myIncludes.js) и сравни:
console.log(myIncludes([1, NaN], NaN)); // ожидается: true
console.log(myIncludes([1, 2, 3], 1, 1)); // ожидается: false
console.log(myIncludes([1, 2, 3], 3, -1)); // ожидается: true
