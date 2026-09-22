// Тесты к задаче 08-uniqueBy.js. Запуск: node 10-pod-kapotom/08-uniqueBy.test.js
const { runTask } = require('../_lib/check');

runTask(__dirname, {
  task: "08-uniqueBy.js",
  fn: "uniqueBy",
  block: 10, no: 8, must: false,
  rules: {},
  setup: [],
  tests: [
    ["uniqueBy([{ id: 1, n: 'a' }, { id: 2, n: 'b' }, { id: 1, n: 'c' }], x => x.id).map(x => x.n)", "['a', 'b']"],
    ["uniqueBy(['apple', 'avocado', 'banana'], w => w[0])", "['apple', 'banana']"],
    ["uniqueBy([], x => x)", "[]"],
  ],
});
