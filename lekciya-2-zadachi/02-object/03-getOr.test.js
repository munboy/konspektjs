// Тесты к задаче 03-getOr.js. Запуск: node 02-object/03-getOr.test.js
const { runTask } = require('../_lib/check');

runTask(__dirname, {
  task: "03-getOr.js",
  fn: "getOr",
  block: 2, no: 3, must: false,
  rules: {},
  setup: [],
  tests: [
    ["getOr({ a: 0 }, 'a', 5)", "0"],
    ["getOr({ a: undefined }, 'a', 5)", "undefined"],
    ["getOr({}, 'a', 5)", "5"],
    ["getOr({}, 'toString', 5)", "5"],
  ],
});
