// Тесты к задаче 08-startOfWeek.js. Запуск: node 08-date/08-startOfWeek.test.js
const { runTask } = require('../_lib/check');

runTask(__dirname, {
  task: "08-startOfWeek.js",
  fn: "startOfWeek",
  block: 8, no: 8, must: false,
  rules: {},
  setup: [],
  tests: [
    ["startOfWeek(new Date(2024, 0, 31))", "new Date(2024, 0, 29)"],
    ["startOfWeek(new Date(2024, 1, 4))", "new Date(2024, 0, 29)"],
    ["startOfWeek(new Date(2024, 0, 29))", "new Date(2024, 0, 29)"],
    ["startOfWeek(new Date(2024, 2, 1, 15, 30))", "new Date(2024, 1, 26)"],
  ],
});
