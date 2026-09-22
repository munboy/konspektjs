// Тесты к задаче 04-bubbleSort.js. Запуск: node 06-sort/04-bubbleSort.test.js
const { runTask } = require('../_lib/check');

runTask(__dirname, {
  task: "04-bubbleSort.js",
  fn: "bubbleSort",
  block: 6, no: 4, must: true,
  rules: {"loops":2,"norec":true,"forbid":["sort","toSorted"]},
  setup: ["const same = [3, 1];"],
  tests: [
    ["bubbleSort([5, 1, 4, 2])", "[1, 2, 4, 5]"],
    ["bubbleSort([])", "[]"],
    ["bubbleSort([1, 2, 3])", "[1, 2, 3]"],
    ["bubbleSort([2, 2, 1])", "[1, 2, 2]"],
    ["bubbleSort(same) === same", "true"],
  ],
});
