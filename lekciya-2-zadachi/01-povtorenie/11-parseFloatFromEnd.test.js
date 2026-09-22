// Тесты к задаче 11-parseFloatFromEnd.js. Запуск: node 01-povtorenie/11-parseFloatFromEnd.test.js
const { runTask } = require('../_lib/check');

runTask(__dirname, {
  task: "11-parseFloatFromEnd.js",
  fn: "parseFloatFromEnd",
  block: 1, no: 11, must: true,
  rules: {"strict":true,"allow":[]},
  setup: [],
  tests: [
    ["parseFloatFromEnd('45.99')", "45.99"],
    ["parseFloatFromEnd('10')", "10"],
    ["parseFloatFromEnd('0.07')", "0.07"],
    ["parseFloatFromEnd('.5')", "0.5"],
    ["parseFloatFromEnd('28844.48468448')", "28844.48468448"],
  ],
});
