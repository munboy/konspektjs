// Тесты к задаче 10-countWeekdays.js. Запуск: node 08-date/10-countWeekdays.test.js
const { runTask } = require('../_lib/check');

runTask(__dirname, {
  task: "10-countWeekdays.js",
  fn: "countWeekdays",
  block: 8, no: 10, must: false,
  rules: {},
  setup: [],
  tests: [
    ["countWeekdays(new Date(2024, 0, 1), new Date(2024, 0, 7))", "5"],
    ["countWeekdays(new Date(2024, 0, 6), new Date(2024, 0, 7))", "0"],
    ["countWeekdays(new Date(2024, 0, 1), new Date(2024, 0, 1))", "1"],
    ["countWeekdays(new Date(2024, 0, 1), new Date(2024, 0, 31))", "23"],
    ["countWeekdays(new Date(2024, 0, 5), new Date(2024, 0, 1))", "0"],
  ],
});
