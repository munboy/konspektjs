// Тесты к задаче 12-compose.js. Запуск: node 04-join-reduce/12-compose.test.js
const { runTask } = require('../_lib/check');

runTask(__dirname, {
  task: "12-compose.js",
  fn: "compose",
  block: 4, no: 12, must: false,
  rules: {},
  setup: [],
  tests: [
    ["compose(x => x + 1, x => x * 2)(5)", "11"],
    ["compose(x => x * 2, x => x + 1)(5)", "12"],
    ["compose()(5)", "5"],
    ["compose(s => s + '!', s => s.toUpperCase())('hi')", "'HI!'"],
  ],
});
