// Тесты к задаче 02-extractNumbers.js. Запуск: node 01-povtorenie/02-extractNumbers.test.js
const { runTask } = require('../_lib/check');

runTask(__dirname, {
  task: "02-extractNumbers.js",
  fn: "extractNumbers",
  block: 1, no: 2, must: true,
  rules: {"strict":true,"allow":[]},
  setup: [],
  tests: [
    ["extractNumbers('I paid 750 and 921, left 14690')", "[750, 921, 14690]"],
    ["extractNumbers('')", "[]"],
    ["extractNumbers('no digits')", "[]"],
    ["extractNumbers('0 and 00')", "[0, 0]"],
    ["extractNumbers('a1b2c3')", "[1, 2, 3]"],
  ],
});
