// ──────────────────────────────────────────────────────────────────────
// Блок 6 · Задача 7 · Сложно
//
// Напиши `sortByMultiple(arr, keys)` — новый массив объектов, отсортированный по нескольким полям
// по очереди. Поле с минусом впереди (`'-age'`) — по убыванию.
//
// Для `[{ name: 'Kate', age: 25 }, { name: 'Ann', age: 30 }, { name: 'Bob', age: 25 }]` и `['age',
// 'name']` → Bob, Kate, Ann.
//
// Проверить себя:  node test.js sortByMultiple
// Решение и разбор — в js-lekciya-2.html, блок 6, задача 7.
// ──────────────────────────────────────────────────────────────────────

function sortByMultiple(arr, keys) {
  // твой код
}

// Примеры — запусти файл (node 06-sort/07-sortByMultiple.js) и сравни:
const users = [{ name: 'Kate', age: 25 }, { name: 'Ann', age: 30 }, { name: 'Bob', age: 25 }];
console.log(sortByMultiple(users, ['age', 'name']).map(u => u.name)); // ожидается: ['Bob', 'Kate', 'Ann']
