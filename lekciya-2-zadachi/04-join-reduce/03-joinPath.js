// ──────────────────────────────────────────────────────────────────────
// Блок 4 · Задача 3 · Легко
// Правила: не больше одного цикла (forEach, map, slice, spread — это тоже циклы)
//
// Напиши `joinPath(...parts)` — склеить части пути через `'/'`, пропуская пустые строки. Один
// цикл, без `join` и `filter`.
//
// `joinPath('users', '', 'kate', 'photo.png')` → `'users/kate/photo.png'`.
//
// Проверить себя:  node test.js joinPath
// Решение и разбор — в js-lekciya-2.html, блок 4, задача 3.
// ──────────────────────────────────────────────────────────────────────

function joinPath(...parts) {
  // твой код
}

// Примеры — запусти файл (node 04-join-reduce/03-joinPath.js) и сравни:
console.log(joinPath('users', '', 'kate', 'photo.png')); // ожидается: 'users/kate/photo.png'
console.log(joinPath('', 'a')); // ожидается: 'a'
console.log(joinPath()); // ожидается: ''
