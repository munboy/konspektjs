// Тесты к задаче 10-parseFromEnd.js. Запуск: node 01-povtorenie/10-parseFromEnd.test.js
const { runTask } = require('../_lib/check');

runTask(__dirname, {
  task: "10-parseFromEnd.js",
  fn: "parseFromEnd",
  block: 1, no: 10, must: true,
  rules: {"strict":true,"allow":[]},
  setup: [],
  tests: [
    ["parseFromEnd('4096')", "4096"],
    ["parseFromEnd('0')", "0"],
    ["parseFromEnd('10')", "10"],
    ["parseFromEnd('')", "0"],
    ["parseFromEnd('100500')", "100500"],
  ],
});
