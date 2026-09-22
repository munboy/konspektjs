// Тесты к задаче 06-diffDays.js. Запуск: node 08-date/06-diffDays.test.js
const { runTask } = require('../_lib/check');

runTask(__dirname, {
  task: "06-diffDays.js",
  fn: "diffDays",
  block: 8, no: 6, must: true,
  rules: {},
  setup: [],
  tests: [
    ["diffDays(new Date(2024, 0, 1), new Date(2024, 2, 1))", "60"],
    ["diffDays(new Date(2024, 2, 30), new Date(2024, 3, 1))", "2"],
    ["diffDays(new Date(2024, 0, 10, 23, 59), new Date(2024, 0, 11, 0, 1))", "1"],
    ["diffDays(new Date(2024, 0, 11), new Date(2024, 0, 1))", "-10"],
    ["diffDays(new Date(2024, 0, 1), new Date(2025, 0, 1))", "366"],
  ],
});
