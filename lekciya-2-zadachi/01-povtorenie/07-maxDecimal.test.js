// Тесты к задаче 07-maxDecimal.js. Запуск: node 01-povtorenie/07-maxDecimal.test.js
const { runTask } = require('../_lib/check');

runTask(__dirname, {
  task: "07-maxDecimal.js",
  fn: "maxDecimal",
  block: 1, no: 7, must: true,
  rules: {"strict":true,"allow":[]},
  setup: [],
  tests: [
    ["maxDecimal('a 1.5 b 12.25 c 3')", "12.25"],
    ["maxDecimal('none')", "null"],
    ["maxDecimal('0.5 0.25')", "0.5"],
    ["maxDecimal('v2.0')", "2"],
    ["maxDecimal('price 7. only')", "7"],
  ],
});
