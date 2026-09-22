// Тесты к задаче 03-moveItem.js. Запуск: node 03-array/03-moveItem.test.js
const { runTask } = require('../_lib/check');

runTask(__dirname, {
  task: "03-moveItem.js",
  fn: "moveItem",
  block: 3, no: 3, must: false,
  rules: {},
  setup: [],
  tests: [
    ["moveItem(['a', 'b', 'c', 'd'], 0, 2)", "['b', 'c', 'a', 'd']"],
    ["moveItem([1, 2, 3], 2, 0)", "[3, 1, 2]"],
    ["moveItem([1, 2, 3], 1, 1)", "[1, 2, 3]"],
  ],
});
