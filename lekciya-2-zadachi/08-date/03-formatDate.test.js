// Тесты к задаче 03-formatDate.js. Запуск: node 08-date/03-formatDate.test.js
const { runTask } = require('../_lib/check');

runTask(__dirname, {
  task: "03-formatDate.js",
  fn: "formatDate",
  block: 8, no: 3, must: true,
  rules: {},
  setup: [],
  tests: [
    ["formatDate(new Date(2024, 0, 5))", "'05.01.2024'"],
    ["formatDate(new Date(1999, 11, 31))", "'31.12.1999'"],
    ["formatDate(new Date(2024, 9, 10))", "'10.10.2024'"],
  ],
});
