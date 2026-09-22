// Тесты к задаче 01-digitsToNumber.js. Запуск: node 01-povtorenie/01-digitsToNumber.test.js
const { runTask } = require('../_lib/check');

runTask(__dirname, {
  task: "01-digitsToNumber.js",
  fn: "digitsToNumber",
  block: 1, no: 1, must: true,
  rules: {"strict":true,"allow":[]},
  setup: [],
  tests: [
    ["digitsToNumber('2025')", "2025"],
    ["digitsToNumber('0')", "0"],
    ["digitsToNumber('007')", "7"],
    ["digitsToNumber('')", "0"],
    ["digitsToNumber('9007199254740991')", "9007199254740991"],
  ],
});
