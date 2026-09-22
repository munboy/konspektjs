// Тесты к задаче 08-unflattenObject.js. Запуск: node 12-ekzamen/08-unflattenObject.test.js
const { runTask } = require('../_lib/check');

runTask(__dirname, {
  task: "08-unflattenObject.js",
  fn: "unflattenObject",
  block: 12, no: 8, must: false,
  rules: {"loops":2,"norec":true},
  setup: [],
  tests: [
    ["unflattenObject({ 'a.b': 1, 'a.c.d': 2, e: 3 })", "{ a: { b: 1, c: { d: 2 } }, e: 3 }"],
    ["unflattenObject({})", "{}"],
    ["unflattenObject({ x: 1 })", "{ x: 1 }"],
    ["unflattenObject({ 'a.b.c.d': 'deep' })", "{ a: { b: { c: { d: 'deep' } } } }"],
  ],
});
