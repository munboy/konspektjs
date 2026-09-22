// Тесты к задаче 01-parsePrices.js. Запуск: node 12-ekzamen/01-parsePrices.test.js
const { runTask } = require('../_lib/check');

runTask(__dirname, {
  task: "01-parsePrices.js",
  fn: "parsePrices",
  block: 12, no: 1, must: false,
  rules: {},
  setup: [],
  tests: [
    ["parsePrices('apple:30, milk:45.5')", "{ apple: 30, milk: 45.5 }"],
    ["parsePrices('bread:20')", "{ bread: 20 }"],
    ["parsePrices('')", "{}"],
    ["parsePrices('a:1,,b:2')", "{ a: 1, b: 2 }"],
  ],
});
