// Тесты к задаче 14-countBalance.js. Запуск: node 01-povtorenie/14-countBalance.test.js
const { runTask } = require('../_lib/check');

runTask(__dirname, {
  task: "14-countBalance.js",
  fn: "countBalance",
  block: 1, no: 14, must: true,
  rules: {"strict":true,"allow":[],"onefor":true,"noarrays":true},
  setup: [],
  tests: [
    ["countBalance('My wallet balance is 14690 USDT. I paid 750.50 USDT and 921.25 USDT')", "13018.25"],
    ["countBalance('I paid 750.50 USDT and 921.25 USDT. My wallet balance is 14690 USDT.')", "13018.25"],
    ["countBalance('Only 100 USDT')", "100"],
    ["countBalance('Balance 10.5. Paid 0.5')", "10"],
    ["countBalance('no numbers')", "0"],
  ],
});
