// Тесты к задаче 11-matrix.js. Запуск: node 03-array/11-matrix.test.js
const { runTask } = require('../_lib/check');

runTask(__dirname, {
  task: "11-matrix.js",
  fn: "matrix",
  block: 3, no: 11, must: false,
  rules: {},
  setup: ["const m = matrix(2, 2, 0);","m[0][0] = 1;"],
  tests: [
    ["matrix(2, 3, 0)", "[[0, 0, 0], [0, 0, 0]]"],
    ["matrix(0, 3, 0)", "[]"],
    ["m", "[[1, 0], [0, 0]]"],
  ],
});
