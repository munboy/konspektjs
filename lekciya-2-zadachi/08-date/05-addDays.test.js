// Тесты к задаче 05-addDays.js. Запуск: node 08-date/05-addDays.test.js
const { runTask } = require('../_lib/check');

runTask(__dirname, {
  task: "05-addDays.js",
  fn: "addDays",
  block: 8, no: 5, must: true,
  rules: {},
  setup: ["const start = new Date(2024, 0, 1);"],
  tests: [
    ["addDays(new Date(2024, 0, 30), 3)", "new Date(2024, 1, 2)"],
    ["addDays(new Date(2024, 2, 1), -1)", "new Date(2024, 1, 29)"],
    ["addDays(new Date(2024, 11, 31), 1)", "new Date(2025, 0, 1)"],
    ["addDays(start, 10).getDate()", "11"],
    ["start.getDate()", "1"],
  ],
});
