// Тесты к задаче 06-indexOfAll.js. Запуск: node 03-array/06-indexOfAll.test.js
const { runTask } = require('../_lib/check');

runTask(__dirname, {
  task: "06-indexOfAll.js",
  fn: "indexOfAll",
  block: 3, no: 6, must: false,
  rules: {},
  setup: [],
  tests: [
    ["indexOfAll([1, 2, 1, 3, 1], 1)", "[0, 2, 4]"],
    ["indexOfAll([], 1)", "[]"],
    ["indexOfAll(['a', 'b'], 'b')", "[1]"],
    ["indexOfAll([NaN], NaN)", "[]"],
  ],
});
