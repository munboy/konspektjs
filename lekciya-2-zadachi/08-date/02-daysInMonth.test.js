// Тесты к задаче 02-daysInMonth.js. Запуск: node 08-date/02-daysInMonth.test.js
const { runTask } = require('../_lib/check');

runTask(__dirname, {
  task: "02-daysInMonth.js",
  fn: "daysInMonth",
  block: 8, no: 2, must: true,
  rules: {},
  setup: [],
  tests: [
    ["daysInMonth(2024, 2)", "29"],
    ["daysInMonth(2023, 2)", "28"],
    ["daysInMonth(2024, 12)", "31"],
    ["daysInMonth(2024, 4)", "30"],
    ["daysInMonth(1900, 2)", "28"],
  ],
});
