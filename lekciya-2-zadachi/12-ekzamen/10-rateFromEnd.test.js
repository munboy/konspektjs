// Тесты к задаче 10-rateFromEnd.js. Запуск: node 12-ekzamen/10-rateFromEnd.test.js
const { runTask } = require('../_lib/check');

runTask(__dirname, {
  task: "10-rateFromEnd.js",
  fn: "rateFromEnd",
  block: 12, no: 10, must: true,
  rules: {"revfor":true,"noarrays":true},
  setup: [],
  tests: [
    ["rateFromEnd('Exchanged 250 USD to 23125 CZK')", "92.5"],
    ["rateFromEnd('Converted 3.5 BTC to 196000 USD')", "56000"],
    ["rateFromEnd('Swapped 1000 EUR to 1085.50 USD')", "1.0855"],
    ["rateFromEnd('Rate 7 then 2,5 to 10')", "4"],
    ["rateFromEnd('only 5')", "null"],
    ["rateFromEnd('')", "null"],
  ],
});
