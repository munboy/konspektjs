// Тесты к задаче 07-pick.js. Запуск: node 02-object/07-pick.test.js
const { runTask } = require('../_lib/check');

runTask(__dirname, {
  task: "07-pick.js",
  fn: "pick",
  block: 2, no: 7, must: true,
  rules: {},
  setup: [],
  tests: [
    ["pick({ a: 1, b: 2, c: 3 }, ['a', 'c'])", "{ a: 1, c: 3 }"],
    ["pick({ a: 1 }, ['a', 'z'])", "{ a: 1 }"],
    ["pick({ a: undefined }, ['a'])", "{ a: undefined }"],
    ["pick({ a: 1 }, [])", "{}"],
  ],
});
