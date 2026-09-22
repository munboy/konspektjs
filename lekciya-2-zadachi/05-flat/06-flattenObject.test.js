// Тесты к задаче 06-flattenObject.js. Запуск: node 05-flat/06-flattenObject.test.js
const { runTask } = require('../_lib/check');

runTask(__dirname, {
  task: "06-flattenObject.js",
  fn: "flattenObject",
  block: 5, no: 6, must: false,
  rules: {"loops":2,"norec":true},
  setup: [],
  tests: [
    ["flattenObject({ a: { b: 1, c: { d: 2 } }, e: 3 })", "{ 'a.b': 1, 'a.c.d': 2, e: 3 }"],
    ["Object.keys(flattenObject({ a: { b: 1 }, c: 2 }))", "['a.b', 'c']"],
    ["flattenObject({ x: {}, y: [1], z: null })", "{ x: {}, y: [1], z: null }"],
    ["flattenObject({})", "{}"],
  ],
});
