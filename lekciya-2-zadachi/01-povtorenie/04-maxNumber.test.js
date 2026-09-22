// Тесты к задаче 04-maxNumber.js. Запуск: node 01-povtorenie/04-maxNumber.test.js
const { runTask } = require('../_lib/check');

runTask(__dirname, {
  task: "04-maxNumber.js",
  fn: "maxNumber",
  block: 1, no: 4, must: true,
  rules: {"strict":true,"allow":[]},
  setup: [],
  tests: [
    ["maxNumber('a 5 b 12 c 7')", "12"],
    ["maxNumber('none')", "null"],
    ["maxNumber('0')", "0"],
    ["maxNumber('3 3')", "3"],
  ],
});
