// Тесты к задаче 18-balanceSpread.js. Запуск: node 01-povtorenie/18-balanceSpread.test.js
const { runTask } = require('../_lib/check');

runTask(__dirname, {
  task: "18-balanceSpread.js",
  fn: "balanceSpread",
  block: 1, no: 18, must: false,
  rules: {"strict":true,"allow":[],"onefor":true,"noarrays":true},
  setup: [],
  tests: [
    ["balanceSpread('Min 12.5, max 40')", "27.5"],
    ["balanceSpread('a 3,5 b 1,25')", "2.25"],
    ["balanceSpread('only 7')", "0"],
    ["balanceSpread('none')", "null"],
  ],
});
