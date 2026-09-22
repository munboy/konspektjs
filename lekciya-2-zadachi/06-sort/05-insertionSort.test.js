// Тесты к задаче 05-insertionSort.js. Запуск: node 06-sort/05-insertionSort.test.js
const { runTask } = require('../_lib/check');

runTask(__dirname, {
  task: "05-insertionSort.js",
  fn: "insertionSort",
  block: 6, no: 5, must: true,
  rules: {"loops":2,"norec":true,"forbid":["sort","toSorted"]},
  setup: [],
  tests: [
    ["insertionSort([5, 2, 4, 1])", "[1, 2, 4, 5]"],
    ["insertionSort([])", "[]"],
    ["insertionSort([3, 1, 2], (a, b) => b - a)", "[3, 2, 1]"],
    ["insertionSort(['b', 'a', 'c'], (x, y) => (x < y ? -1 : x > y ? 1 : 0))", "['a', 'b', 'c']"],
    ["insertionSort([{ n: 'x', v: 1 }, { n: 'y', v: 0 }, { n: 'z', v: 1 }], (a, b) => a.v - b.v).map(o => o.n)", "['y', 'x', 'z']"],
  ],
});
