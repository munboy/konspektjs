// Тесты к задаче 03-sumNumbers.js. Запуск: node 01-povtorenie/03-sumNumbers.test.js
const { runTask } = require('../_lib/check');

runTask(__dirname, {
  task: "03-sumNumbers.js",
  fn: "sumNumbers",
  block: 1, no: 3, must: false,
  rules: {"strict":true,"allow":[]},
  setup: [],
  tests: [
    ["sumNumbers('I paid 750 and 921')", "1671"],
    ["sumNumbers('')", "0"],
    ["sumNumbers('1 2 3')", "6"],
    ["sumNumbers('x100')", "100"],
  ],
});
