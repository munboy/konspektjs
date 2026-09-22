// Тесты к задаче 06-filterObject.js. Запуск: node 02-object/06-filterObject.test.js
const { runTask } = require('../_lib/check');

runTask(__dirname, {
  task: "06-filterObject.js",
  fn: "filterObject",
  block: 2, no: 6, must: false,
  rules: {},
  setup: [],
  tests: [
    ["filterObject({ a: 1, b: 0, c: 3 }, v => v > 0)", "{ a: 1, c: 3 }"],
    ["filterObject({ id: 1, _tmp: 2 }, (v, k) => k[0] !== '_')", "{ id: 1 }"],
    ["filterObject({}, () => true)", "{}"],
  ],
});
