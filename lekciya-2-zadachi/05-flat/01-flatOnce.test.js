// Тесты к задаче 01-flatOnce.js. Запуск: node 05-flat/01-flatOnce.test.js
const { runTask } = require('../_lib/check');

runTask(__dirname, {
  task: "01-flatOnce.js",
  fn: "flatOnce",
  block: 5, no: 1, must: true,
  rules: {"loops":2,"forbid":["flat","flatMap","concat"]},
  setup: [],
  tests: [
    ["flatOnce([1, [2, 3], [[4]], , 5])", "[1, 2, 3, [4], 5]"],
    ["flatOnce([])", "[]"],
    ["flatOnce([[], [1, , 2]])", "[1, 2]"],
    ["flatOnce(['ab'])", "['ab']"],
  ],
});
