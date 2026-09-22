// Тесты к задаче 11-defaults.js. Запуск: node 02-object/11-defaults.test.js
const { runTask } = require('../_lib/check');

runTask(__dirname, {
  task: "11-defaults.js",
  fn: "defaults",
  block: 2, no: 11, must: false,
  rules: {},
  setup: [],
  tests: [
    ["defaults({ a: 1 }, { a: 2, b: 2 }, { b: 3, c: 3 })", "{ a: 1, b: 2, c: 3 }"],
    ["defaults({ a: undefined }, { a: 5 })", "{ a: 5 }"],
    ["defaults({ a: null }, { a: 5 })", "{ a: null }"],
    ["defaults({})", "{}"],
  ],
});
