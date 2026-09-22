// Тесты к задаче 08-diffObjects.js. Запуск: node 02-object/08-diffObjects.test.js
const { runTask } = require('../_lib/check');

runTask(__dirname, {
  task: "08-diffObjects.js",
  fn: "diffObjects",
  block: 2, no: 8, must: false,
  rules: {},
  setup: [],
  tests: [
    ["diffObjects({ a: 1, b: 2, c: 3 }, { a: 1, b: 5, d: 4 })", "{ added: ['d'], removed: ['c'], changed: ['b'] }"],
    ["diffObjects({}, {})", "{ added: [], removed: [], changed: [] }"],
    ["diffObjects({ x: undefined }, {})", "{ added: [], removed: ['x'], changed: [] }"],
  ],
});
