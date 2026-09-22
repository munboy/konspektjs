// ──────────────────────────────────────────────────────────────────────
// Блок 12 · Задача 8 · Сложно
// Правила: не больше 2 циклов (forEach, map, slice, spread — это тоже циклы); без рекурсии
//
// Напиши `unflattenObject(flat)` — обратную к `flattenObject` из блока 5: `{ 'a.b': 1, 'a.c.d': 2,
// e: 3 }` → `{ a: { b: 1, c: { d: 2 } }, e: 3 }`. Без рекурсии, не больше двух циклов.
//
// Проверить себя:  node test.js unflattenObject
// Решение и разбор — в js-lekciya-2.html, блок 12, задача 8.
// ──────────────────────────────────────────────────────────────────────

function unflattenObject(flat) {
  // твой код
}

// Примеры — запусти файл (node 12-ekzamen/08-unflattenObject.js) и сравни:
console.log(unflattenObject({ 'a.b': 1, 'a.c.d': 2, e: 3 })); // ожидается: { a: { b: 1, c: { d: 2 } }, e: 3 }
console.log(unflattenObject({})); // ожидается: {}
console.log(unflattenObject({ x: 1 })); // ожидается: { x: 1 }
