// Тесты к задаче 05-myFlatMap.js. Запуск: node 05-flat/05-myFlatMap.test.js
const { runTask } = require('../_lib/check');

runTask(__dirname, {
  task: "05-myFlatMap.js",
  fn: "myFlatMap",
  block: 5, no: 5, must: false,
  rules: {"loops":2,"forbid":["flat","flatMap","map"]},
  setup: [],
  tests: [
    ["myFlatMap([1, 2], x => [x, x * 10])", "[1, 10, 2, 20]"],
    ["myFlatMap([1, 2, 3], x => (x === 2 ? [] : x))", "[1, 3]"],
    ["myFlatMap(['a b', 'c'], s => s.split(' '))", "['a', 'b', 'c']"],
    ["myFlatMap([1], x => [[x]])", "[[1]]"],
    ["myFlatMap(['a', 'b'], (x, i) => x + i)", "['a0', 'b1']"],
  ],
});
