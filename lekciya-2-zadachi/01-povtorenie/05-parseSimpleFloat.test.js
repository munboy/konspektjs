// Тесты к задаче 05-parseSimpleFloat.js. Запуск: node 01-povtorenie/05-parseSimpleFloat.test.js
const { runTask } = require('../_lib/check');

runTask(__dirname, {
  task: "05-parseSimpleFloat.js",
  fn: "parseSimpleFloat",
  block: 1, no: 5, must: true,
  rules: {"strict":true,"allow":[]},
  setup: [],
  tests: [
    ["parseSimpleFloat('3.14')", "3.14"],
    ["parseSimpleFloat('45.99')", "45.99"],
    ["parseSimpleFloat('10')", "10"],
    ["parseSimpleFloat('0.5')", "0.5"],
    ["parseSimpleFloat('100.01')", "100.01"],
    ["parseSimpleFloat('9.95')", "9.95"],
  ],
});
