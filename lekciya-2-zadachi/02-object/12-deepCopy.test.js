// Тесты к задаче 12-deepCopy.js. Запуск: node 02-object/12-deepCopy.test.js
const { runTask } = require('../_lib/check');

runTask(__dirname, {
  task: "12-deepCopy.js",
  fn: "deepCopy",
  block: 2, no: 12, must: false,
  rules: {},
  setup: ["const src = { d: new Date(0), list: [1, { x: 2 }] };","const cp = deepCopy(src);"],
  tests: [
    ["cp.list[1] !== src.list[1]", "true"],
    ["cp.list[1]", "{ x: 2 }"],
    ["cp.d !== src.d", "true"],
    ["Array.isArray(cp.list)", "true"],
    ["deepCopy(5)", "5"],
    ["deepCopy(null)", "null"],
  ],
});
