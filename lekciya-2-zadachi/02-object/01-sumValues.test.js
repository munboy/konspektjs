// Тесты к задаче 01-sumValues.js. Запуск: node 02-object/01-sumValues.test.js
const { runTask } = require('../_lib/check');

runTask(__dirname, {
  task: "01-sumValues.js",
  fn: "sumValues",
  block: 2, no: 1, must: true,
  rules: {},
  setup: [],
  tests: [
    ["sumValues({ apple: 30, milk: 45 })", "75"],
    ["sumValues({})", "0"],
    ["sumValues({ a: -5, b: 5.5 })", "0.5"],
  ],
});
