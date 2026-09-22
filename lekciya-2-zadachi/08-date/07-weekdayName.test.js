// Тесты к задаче 07-weekdayName.js. Запуск: node 08-date/07-weekdayName.test.js
const { runTask } = require('../_lib/check');

runTask(__dirname, {
  task: "07-weekdayName.js",
  fn: "weekdayName",
  block: 8, no: 7, must: false,
  rules: {},
  setup: [],
  tests: [
    ["weekdayName(new Date(2024, 0, 31))", "'среда'"],
    ["weekdayName(new Date(2024, 1, 4))", "'воскресенье'"],
    ["weekdayName(new Date(2024, 0, 1))", "'понедельник'"],
  ],
});
