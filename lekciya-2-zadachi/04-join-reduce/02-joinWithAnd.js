// ──────────────────────────────────────────────────────────────────────
// Блок 4 · Задача 2 · Легко
// Правила: не больше одного цикла (forEach, map, slice, spread — это тоже циклы)
//
// Напиши `joinWithAnd(items)` — склеить через запятую, а последний элемент — через `' and '`. Один
// цикл, без `join`.
//
// `joinWithAnd(['a', 'b', 'c'])` → `'a, b and c'`.
//
// Проверить себя:  node test.js joinWithAnd
// Решение и разбор — в js-lekciya-2.html, блок 4, задача 2.
// ──────────────────────────────────────────────────────────────────────

function joinWithAnd(items) {
  // твой код
}

// Примеры — запусти файл (node 04-join-reduce/02-joinWithAnd.js) и сравни:
console.log(joinWithAnd(['a', 'b', 'c'])); // ожидается: 'a, b and c'
console.log(joinWithAnd(['a', 'b'])); // ожидается: 'a and b'
console.log(joinWithAnd(['a'])); // ожидается: 'a'
