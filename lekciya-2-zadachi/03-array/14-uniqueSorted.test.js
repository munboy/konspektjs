// Тесты к задаче 14-uniqueSorted.js. Запуск: node 03-array/14-uniqueSorted.test.js
const { runTask } = require('../_lib/check');

runTask(__dirname, {
  task: "14-uniqueSorted.js",
  fn: "uniqueSorted",
  block: 3, no: 14, must: false,
  rules: {},
  setup: [],
  tests: [
    ["uniqueSorted([3, 1, 3, 10, 1])", "[1, 3, 10]"],
    ["uniqueSorted([])", "[]"],
    ["uniqueSorted([5, 5, 5])", "[5]"],
  ],
});
