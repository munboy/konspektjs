// Тесты к задаче 12-parseLastNumber.js. Запуск: node 01-povtorenie/12-parseLastNumber.test.js
const { runTask } = require('../_lib/check');

runTask(__dirname, {
  task: "12-parseLastNumber.js",
  fn: "parseLastNumber",
  block: 1, no: 12, must: false,
  rules: {"strict":true,"allow":[]},
  setup: [],
  tests: [
    ["parseLastNumber('Order 12, total 350')", "350"],
    ["parseLastNumber('abc 7')", "7"],
    ["parseLastNumber('x-20')", "-20"],
    ["parseLastNumber('42 is the answer')", "42"],
    ["parseLastNumber('no numbers')", "null"],
    ["parseLastNumber('')", "null"],
    ["parseLastNumber('a1b2')", "2"],
    ["parseLastNumber('-5')", "-5"],
  ],
});
