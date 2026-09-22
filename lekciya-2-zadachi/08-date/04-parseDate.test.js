// Тесты к задаче 04-parseDate.js. Запуск: node 08-date/04-parseDate.test.js
const { runTask } = require('../_lib/check');

runTask(__dirname, {
  task: "04-parseDate.js",
  fn: "parseDate",
  block: 8, no: 4, must: true,
  rules: {},
  setup: [],
  tests: [
    ["parseDate('05.01.2024')", "new Date(2024, 0, 5)"],
    ["parseDate('29.02.2024')", "new Date(2024, 1, 29)"],
    ["parseDate('31.02.2024')", "null"],
    ["parseDate('29.02.2023')", "null"],
    ["parseDate('00.01.2024')", "null"],
    ["parseDate('1.1.2024')", "null"],
    ["parseDate('05-01-2024')", "null"],
  ],
});
