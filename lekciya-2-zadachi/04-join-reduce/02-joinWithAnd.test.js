// Тесты к задаче 02-joinWithAnd.js. Запуск: node 04-join-reduce/02-joinWithAnd.test.js
const { runTask } = require('../_lib/check');

runTask(__dirname, {
  task: "02-joinWithAnd.js",
  fn: "joinWithAnd",
  block: 4, no: 2, must: false,
  rules: {"loops":1},
  setup: [],
  tests: [
    ["joinWithAnd(['a', 'b', 'c'])", "'a, b and c'"],
    ["joinWithAnd(['a', 'b'])", "'a and b'"],
    ["joinWithAnd(['a'])", "'a'"],
    ["joinWithAnd([])", "''"],
  ],
});
