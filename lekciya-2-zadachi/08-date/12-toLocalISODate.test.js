// Тесты к задаче 12-toLocalISODate.js. Запуск: node 08-date/12-toLocalISODate.test.js
const { runTask } = require('../_lib/check');

runTask(__dirname, {
  task: "12-toLocalISODate.js",
  fn: "toLocalISODate",
  block: 8, no: 12, must: false,
  rules: {},
  setup: [],
  tests: [
    ["toLocalISODate(new Date(2024, 2, 15))", "'2024-03-15'"],
    ["toLocalISODate(new Date(2024, 2, 15, 0, 30))", "'2024-03-15'"],
    ["toLocalISODate(new Date(2024, 11, 31, 23, 59))", "'2024-12-31'"],
  ],
});
