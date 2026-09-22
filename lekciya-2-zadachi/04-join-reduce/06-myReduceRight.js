// ──────────────────────────────────────────────────────────────────────
// Блок 4 · Задача 6 · Средне · ★ минимум
// Правила: не больше одного цикла (forEach, map, slice, spread — это тоже циклы); без рекурсии; нельзя вызывать: reduceRight, reverse
//
// Напиши `myReduceRight(arr, callback, initialValue)` — копию `reduceRight` по тем же правилам,
// одним циклом, без `reverse`.
//
// `myReduceRight(['a', 'b', 'c'], (acc, x) => acc + x)` → `'cba'`.
//
// Проверить себя:  node test.js myReduceRight
// Решение и разбор — в js-lekciya-2.html, блок 4, задача 6.
// ──────────────────────────────────────────────────────────────────────

function myReduceRight(arr, callback, initialValue) {
  // твой код
}

// Примеры — запусти файл (node 04-join-reduce/06-myReduceRight.js) и сравни:
console.log(myReduceRight(['a', 'b', 'c'], (acc, x) => acc + x)); // ожидается: 'cba'
console.log(myReduceRight([1, 2, 3], (acc, x) => acc.concat(x), [])); // ожидается: [3, 2, 1]
console.log(myReduceRight([1, 2, 3], (acc, x, i) => acc + i, '')); // ожидается: '210'
