// ──────────────────────────────────────────────────────────────────────
// Блок 2 · Задача 8 · Сложно
//
// Напиши `diffObjects(a, b)` — что изменилось между двумя плоскими объектами: `{ added, removed,
// changed }` — массивы ключей. `removed` и `changed` — в порядке ключей `a`, `added` — в порядке
// ключей `b`. Значения сравниваются через `===`.
//
// `diffObjects({ a: 1, b: 2, c: 3 }, { a: 1, b: 5, d: 4 })` → `{ added: ['d'], removed: ['c'],
// changed: ['b'] }`.
//
// Проверить себя:  node test.js diffObjects
// Решение и разбор — в js-lekciya-2.html, блок 2, задача 8.
// ──────────────────────────────────────────────────────────────────────

function diffObjects(a, b) {
  // твой код
}

// Примеры — запусти файл (node 02-object/08-diffObjects.js) и сравни:
console.log(diffObjects({ a: 1, b: 2, c: 3 }, { a: 1, b: 5, d: 4 })); // ожидается: { added: ['d'], removed: ['c'], changed: ['b'] }
console.log(diffObjects({}, {})); // ожидается: { added: [], removed: [], changed: [] }
console.log(diffObjects({ x: undefined }, {})); // ожидается: { added: [], removed: ['x'], changed: [] }
