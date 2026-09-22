// ──────────────────────────────────────────────────────────────────────
// Блок 7 · Задача 3 · Средне
// Правила: не больше 2 циклов (forEach, map, slice, spread — это тоже циклы); нельзя вызывать: JSON.stringify
//
// Напиши `stringifyFlat(value)` — `JSON.stringify` для плоского массива или объекта (внутри только
// примитивы: строки, числа, `true`/`false`, `null`, `undefined`). Не больше двух циклов — второй
// уже есть в экранировании строки.
//
// `stringifyFlat({ a: 1, b: undefined, c: 'x' })` → `'{"a":1,"c":"x"}'`.
//
// Проверить себя:  node test.js stringifyFlat
// Решение и разбор — в js-lekciya-2.html, блок 7, задача 3.
// ──────────────────────────────────────────────────────────────────────

function stringifyFlat(value) {
  // твой код
}

// Примеры — запусти файл (node 07-json/03-stringifyFlat.js) и сравни:
console.log(stringifyFlat({ a: 1, b: undefined, c: 'x' })); // ожидается: '{"a":1,"c":"x"}'
console.log(stringifyFlat([1, 'a', null, undefined, NaN])); // ожидается: '[1,"a",null,null,null]'
console.log(stringifyFlat([])); // ожидается: '[]'
