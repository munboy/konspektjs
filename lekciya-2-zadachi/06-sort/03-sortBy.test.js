// Тесты к задаче 03-sortBy.js. Запуск: node 06-sort/03-sortBy.test.js
const { runTask } = require('../_lib/check');

runTask(__dirname, {
  task: "03-sortBy.js",
  fn: "sortBy",
  block: 6, no: 3, must: false,
  rules: {},
  setup: [],
  tests: [
    ["sortBy([{ n: 'b', age: 30 }, { n: 'a', age: 20 }], 'age').map(u => u.n)", "['a', 'b']"],
    ["sortBy([{ n: 'b' }, { n: 'a' }, { n: 'c' }], 'n').map(u => u.n)", "['a', 'b', 'c']"],
    ["sortBy([{ n: 'x', v: 1 }, { n: 'y', v: 0 }, { n: 'z', v: 1 }], 'v').map(u => u.n)", "['y', 'x', 'z']"],
  ],
});
