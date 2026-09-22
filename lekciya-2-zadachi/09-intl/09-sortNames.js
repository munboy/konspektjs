// ──────────────────────────────────────────────────────────────────────
// Блок 9 · Задача 9 · Легко
//
// Напиши `sortNames(names)` — новый массив имён, отсортированный «как люди»: без учёта регистра,
// числа внутри сравниваются как числа (`file2` раньше `file10`). Через `Intl.Collator`.
//
// `sortNames(['file10', 'file2', 'File1'])` → `['File1', 'file2', 'file10']`.
//
// Проверить себя:  node test.js sortNames
// Решение и разбор — в js-lekciya-2.html, блок 9, задача 9.
// ──────────────────────────────────────────────────────────────────────

function sortNames(names) {
  // твой код
}

// Примеры — запусти файл (node 09-intl/09-sortNames.js) и сравни:
console.log(sortNames(['file10', 'file2', 'File1'])); // ожидается: ['File1', 'file2', 'file10']
console.log(sortNames(['b', 'a', 'C'])); // ожидается: ['a', 'b', 'C']
console.log(sortNames(['Item 20', 'item 3', 'Item 100'])); // ожидается: ['item 3', 'Item 20', 'Item 100']
