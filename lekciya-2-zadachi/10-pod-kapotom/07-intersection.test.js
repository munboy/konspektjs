// Тесты к задаче 07-intersection.js. Запуск: node 10-pod-kapotom/07-intersection.test.js
const { runTask } = require('../_lib/check');

runTask(__dirname, {
  task: "07-intersection.js",
  fn: "intersection",
  block: 10, no: 7, must: false,
  rules: {},
  setup: [],
  tests: [
    ["intersection([1, 2, 2, 3], [2, 3, 4])", "[2, 3]"],
    ["intersection([], [1])", "[]"],
    ["intersection([NaN, 1], [NaN])", "[NaN]"],
    ["intersection(['a', 'b'], ['c'])", "[]"],
  ],
});
