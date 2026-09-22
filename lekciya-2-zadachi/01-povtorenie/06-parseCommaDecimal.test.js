// Тесты к задаче 06-parseCommaDecimal.js. Запуск: node 01-povtorenie/06-parseCommaDecimal.test.js
const { runTask } = require('../_lib/check');

runTask(__dirname, {
  task: "06-parseCommaDecimal.js",
  fn: "parseCommaDecimal",
  block: 1, no: 6, must: false,
  rules: {"strict":true,"allow":[]},
  setup: [],
  tests: [
    ["parseCommaDecimal('12,75')", "12.75"],
    ["parseCommaDecimal('45.99')", "45.99"],
    ["parseCommaDecimal('0,5')", "0.5"],
    ["parseCommaDecimal('1,2,3')", "1.2"],
    ["parseCommaDecimal('7')", "7"],
    ["parseCommaDecimal('123,0000341')", "123.0000341"],
  ],
});
