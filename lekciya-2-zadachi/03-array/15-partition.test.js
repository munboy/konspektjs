// Тесты к задаче 15-partition.js. Запуск: node 03-array/15-partition.test.js
const { runTask } = require('../_lib/check');

runTask(__dirname, {
  task: "15-partition.js",
  fn: "partition",
  block: 3, no: 15, must: false,
  rules: {},
  setup: [],
  tests: [
    ["partition([1, 2, 3, 4], x => x % 2 === 0)", "[[2, 4], [1, 3]]"],
    ["partition([], Boolean)", "[[], []]"],
    ["partition([0, 'a', null], Boolean)", "[['a'], [0, null]]"],
  ],
});
