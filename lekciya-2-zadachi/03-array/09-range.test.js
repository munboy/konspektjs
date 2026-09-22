// Тесты к задаче 09-range.js. Запуск: node 03-array/09-range.test.js
const { runTask } = require('../_lib/check');

runTask(__dirname, {
  task: "09-range.js",
  fn: "range",
  block: 3, no: 9, must: true,
  rules: {},
  setup: [],
  tests: [
    ["range(0, 5)", "[0, 1, 2, 3, 4]"],
    ["range(1, 10, 3)", "[1, 4, 7]"],
    ["range(5, 0, -2)", "[5, 3, 1]"],
    ["range(3, 3)", "[]"],
    ["range(0, 3, -1)", "[]"],
  ],
});
