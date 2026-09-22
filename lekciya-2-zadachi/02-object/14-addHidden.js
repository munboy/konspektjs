// ──────────────────────────────────────────────────────────────────────
// Блок 2 · Задача 14 · Средне
//
// Напиши `addHidden(obj, key, value)` — добавить свойство, которое можно прочитать, но которого не
// видно в `Object.keys` и `JSON.stringify` и которое нельзя изменить. Вернуть `obj`.
//
// `addHidden({ name: 'Kate' }, 'id', 7).id` → `7`, а `Object.keys` вернёт только `['name']`.
//
// Проверить себя:  node test.js addHidden
// Решение и разбор — в js-lekciya-2.html, блок 2, задача 14.
// ──────────────────────────────────────────────────────────────────────

function addHidden(obj, key, value) {
  // твой код
}

// Примеры — запусти файл (node 02-object/14-addHidden.js) и сравни:
const u = addHidden({ name: 'Kate' }, 'id', 7);
console.log(u.id, Object.keys(u)); // ожидается: 7 [ 'name' ]
