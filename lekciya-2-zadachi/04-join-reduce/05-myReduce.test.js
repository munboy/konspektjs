// Тесты к задаче 05-myReduce.js. Запуск: node 04-join-reduce/05-myReduce.test.js
const { runTask } = require('../_lib/check');

runTask(__dirname, {
  task: "05-myReduce.js",
  fn: "myReduce",
  block: 4, no: 5, must: true,
  rules: {"loops":1,"norec":true,"forbid":["reduce"]},
  setup: [],
  tests: [
    ["myReduce([1, 2, 3], (acc, x) => acc + x)", "6"],
    ["myReduce([1, 2, 3], (acc, x) => acc + x, 10)", "16"],
    ["myReduce([], (acc, x) => acc + x, 0)", "0"],
    ["myReduce([], (acc, x) => acc + x)", "throws TypeError"],
    ["myReduce([, 5], (acc, x) => acc + x)", "5"],
    ["myReduce([1, 2, 3], (acc, x) => acc + x, undefined)", "NaN"],
    ["myReduce(['a', 'b'], (acc, x, i) => acc + i + x, '')", "'0a1b'"],
    ["myReduce([1], 'nope')", "throws TypeError"],
  ],
});
