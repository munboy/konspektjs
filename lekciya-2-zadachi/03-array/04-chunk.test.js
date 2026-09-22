// Тесты к задаче 04-chunk.js. Запуск: node 03-array/04-chunk.test.js
const { runTask } = require('../_lib/check');

runTask(__dirname, {
  task: "04-chunk.js",
  fn: "chunk",
  block: 3, no: 4, must: true,
  rules: {},
  setup: [],
  tests: [
    ["chunk([1, 2, 3, 4, 5], 2)", "[[1, 2], [3, 4], [5]]"],
    ["chunk([], 3)", "[]"],
    ["chunk([1, 2], 5)", "[[1, 2]]"],
    ["chunk([1, 2, 3], 1)", "[[1], [2], [3]]"],
  ],
});
