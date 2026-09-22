// Тесты к задаче 09-allAmounts.js. Запуск: node 01-povtorenie/09-allAmounts.test.js
const { runTask } = require('../_lib/check');

runTask(__dirname, {
  task: "09-allAmounts.js",
  fn: "allAmounts",
  block: 1, no: 9, must: true,
  rules: {"strict":true,"allow":[],"onefor":true},
  setup: [],
  tests: [
    ["allAmounts('Paid 12,50 and 3.25, got -1')", "[12.5, 3.25, -1]"],
    ["allAmounts('')", "[]"],
    ["allAmounts('1, 2, 3')", "[1, 2, 3]"],
    ["allAmounts('v1.2.3')", "[1.2, 3]"],
    ["allAmounts('a-b')", "[]"],
    ["allAmounts('-0,5')", "[-0.5]"],
  ],
});
