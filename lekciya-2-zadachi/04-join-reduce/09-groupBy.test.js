// Тесты к задаче 09-groupBy.js. Запуск: node 04-join-reduce/09-groupBy.test.js
const { runTask } = require('../_lib/check');

runTask(__dirname, {
  task: "09-groupBy.js",
  fn: "groupBy",
  block: 4, no: 9, must: true,
  rules: {},
  setup: [],
  tests: [
    ["groupBy([1, 2, 3, 4], x => x % 2 === 0 ? 'even' : 'odd')", "{ odd: [1, 3], even: [2, 4] }"],
    ["groupBy(['apple', 'avocado', 'banana'], w => w[0])", "{ a: ['apple', 'avocado'], b: ['banana'] }"],
    ["groupBy([], x => x)", "{}"],
  ],
});
