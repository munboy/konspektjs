// ──────────────────────────────────────────────────────────────────────
// Блок 2 · Задача 6 · Средне
//
// Напиши `filterObject(obj, predicate)` — новый объект только из тех свойств, для которых
// `predicate(value, key)` истинно.
//
// `filterObject({ a: 1, b: 0, c: 3 }, v => v > 0)` → `{ a: 1, c: 3 }`.
//
// Проверить себя:  node test.js filterObject
// Решение и разбор — в js-lekciya-2.html, блок 2, задача 6.
// ──────────────────────────────────────────────────────────────────────

function filterObject(obj, predicate) {
  // твой код
}

// Примеры — запусти файл (node 02-object/06-filterObject.js) и сравни:
console.log(filterObject({ a: 1, b: 0, c: 3 }, v => v > 0)); // ожидается: { a: 1, c: 3 }
console.log(filterObject({ id: 1, _tmp: 2 }, (v, k) => k[0] !== '_')); // ожидается: { id: 1 }
console.log(filterObject({}, () => true)); // ожидается: {}
