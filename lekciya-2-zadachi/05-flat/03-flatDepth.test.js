// Тесты к задаче 03-flatDepth.js. Запуск: node 05-flat/03-flatDepth.test.js
const { runTask } = require('../_lib/check');

runTask(__dirname, {
  task: "03-flatDepth.js",
  fn: "flatDepth",
  block: 5, no: 3, must: true,
  rules: {"loops":2,"norec":true},
  setup: [],
  tests: [
    ["flatDepth([1, [2, [3]]])", "3"],
    ["flatDepth([1, 2])", "1"],
    ["flatDepth([])", "1"],
    ["flatDepth([[]])", "2"],
    ["flatDepth([[1], [[2]], 3])", "3"],
  ],
});
