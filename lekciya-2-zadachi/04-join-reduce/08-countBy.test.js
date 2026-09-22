// Тесты к задаче 08-countBy.js. Запуск: node 04-join-reduce/08-countBy.test.js
const { runTask } = require('../_lib/check');

runTask(__dirname, {
  task: "08-countBy.js",
  fn: "countBy",
  block: 4, no: 8, must: true,
  rules: {},
  setup: [],
  tests: [
    ["countBy(['one', 'two', 'three'], w => w.length)", "{ 3: 2, 5: 1 }"],
    ["countBy([1, 2, 3, 4], x => x % 2 === 0 ? 'even' : 'odd')", "{ odd: 2, even: 2 }"],
    ["countBy([], x => x)", "{}"],
  ],
});
