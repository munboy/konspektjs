// Тесты к задаче 15-parseCurrencyRate.js. Запуск: node 01-povtorenie/15-parseCurrencyRate.test.js
const { runTask } = require('../_lib/check');

runTask(__dirname, {
  task: "15-parseCurrencyRate.js",
  fn: "parseCurrencyRate",
  block: 1, no: 15, must: true,
  rules: {"strict":true,"allow":[],"onefor":true,"noarrays":true},
  setup: [],
  tests: [
    ["parseCurrencyRate('Exchanged 250 USD to 23125 CZK')", "92.5"],
    ["parseCurrencyRate('Converted 3.5 BTC to 196000 USD')", "56000"],
    ["parseCurrencyRate('Swapped 1000 EUR to 1085.50 USD')", "1.0855"],
    ["parseCurrencyRate('Swapped 2,5 ETH to 10 SOL')", "4"],
    ["parseCurrencyRate('Only 5 USD')", "null"],
    ["parseCurrencyRate('no numbers')", "null"],
  ],
});
