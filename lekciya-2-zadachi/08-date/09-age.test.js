// Тесты к задаче 09-age.js. Запуск: node 08-date/09-age.test.js
const { runTask } = require('../_lib/check');

runTask(__dirname, {
  task: "09-age.js",
  fn: "age",
  block: 8, no: 9, must: false,
  rules: {},
  setup: [],
  tests: [
    ["age(new Date(2000, 5, 15), new Date(2024, 5, 14))", "23"],
    ["age(new Date(2000, 5, 15), new Date(2024, 5, 15))", "24"],
    ["age(new Date(2004, 1, 29), new Date(2024, 1, 28))", "19"],
    ["age(new Date(2004, 1, 29), new Date(2024, 1, 29))", "20"],
    ["age(new Date(2004, 1, 29), new Date(2023, 2, 1))", "19"],
  ],
});
