// Тесты к задаче 08-countBalanceDecimal.js. Запуск: node 01-povtorenie/08-countBalanceDecimal.test.js
const { runTask } = require('../_lib/check');

runTask(__dirname, {
  task: "08-countBalanceDecimal.js",
  fn: "countBalanceDecimal",
  block: 1, no: 8, must: false,
  rules: {"strict":true,"allow":[]},
  setup: [],
  tests: [
    ["countBalanceDecimal('I paid 12.50 USDT and 7.25 USDT. My balance is 100 USDT.')", "80.25"],
    ["countBalanceDecimal('I paid 750 USDT for plane tickets and 921 USDT for a flat. My wallet balance is 14690 USDT.')", "13019"],
    ["countBalanceDecimal('balance 10.5, paid 0.5')", "10"],
    ["countBalanceDecimal('Balance: 7.')", "7"],
  ],
});
