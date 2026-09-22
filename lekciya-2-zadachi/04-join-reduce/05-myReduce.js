// ──────────────────────────────────────────────────────────────────────
// Блок 4 · Задача 5 · Средне · ★ минимум
// Правила: не больше одного цикла (forEach, map, slice, spread — это тоже циклы); без рекурсии; нельзя вызывать: reduce
//
// Напиши `myReduce(arr, callback, initialValue)` — копию `arr.reduce(callback, initialValue)` 1 в
// 1: один цикл, дырки пропускаются, начальное значение определяется по количеству аргументов,
// пустой массив без него — `TypeError` с тем же текстом, `callback` не функция — тоже `TypeError`.
//
// Проверить себя:  node test.js myReduce
// Решение и разбор — в js-lekciya-2.html, блок 4, задача 5.
// ──────────────────────────────────────────────────────────────────────

function myReduce(arr, callback, initialValue) {
  // твой код
}

// Примеры — запусти файл (node 04-join-reduce/05-myReduce.js) и сравни:
console.log(myReduce([1, 2, 3], (acc, x) => acc + x)); // ожидается: 6
console.log(myReduce([1, 2, 3], (acc, x) => acc + x, 10)); // ожидается: 16
console.log(myReduce([], (acc, x) => acc + x, 0)); // ожидается: 0
