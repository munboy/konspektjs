// Тесты к задаче 07-sumBy.js. Запуск: node 04-join-reduce/07-sumBy.test.js
const { runTask } = require('../_lib/check');

runTask(__dirname, {
  task: "07-sumBy.js",
  fn: "sumBy",
  block: 4, no: 7, must: false,
  rules: {},
  setup: [],
  tests: [
    ["sumBy([{ price: 10 }, { price: 5 }], 'price')", "15"],
    ["sumBy([], 'price')", "0"],
  ],
});
