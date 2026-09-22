// Тесты к задаче 13-runningTotals.js. Запуск: node 04-join-reduce/13-runningTotals.test.js
const { runTask } = require('../_lib/check');

runTask(__dirname, {
  task: "13-runningTotals.js",
  fn: "runningTotals",
  block: 4, no: 13, must: false,
  rules: {"loops":1},
  setup: [],
  tests: [
    ["runningTotals([1, 2, 3, 4])", "[1, 3, 6, 10]"],
    ["runningTotals([])", "[]"],
    ["runningTotals([5, -5, 5])", "[5, 0, 5]"],
  ],
});
