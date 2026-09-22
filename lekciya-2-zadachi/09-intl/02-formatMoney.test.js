// Тесты к задаче 02-formatMoney.js. Запуск: node 09-intl/02-formatMoney.test.js
const { runTask } = require('../_lib/check');

runTask(__dirname, {
  task: "02-formatMoney.js",
  fn: "formatMoney",
  block: 9, no: 2, must: false,
  rules: {},
  setup: [],
  tests: [
    ["formatMoney(1234.5, 'USD', 'en-US')", "'$1,234.50'"],
    ["formatMoney(-5, 'EUR', 'en-US')", "'-€5.00'"],
    ["formatMoney(0.1 + 0.2, 'USD', 'en-US')", "'$0.30'"],
    ["formatMoney(1000, 'JPY', 'en-US')", "'¥1,000'"],
  ],
});
