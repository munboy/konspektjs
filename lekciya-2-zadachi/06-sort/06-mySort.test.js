// Тесты к задаче 06-mySort.js. Запуск: node 06-sort/06-mySort.test.js
const { runTask } = require('../_lib/check');

runTask(__dirname, {
  task: "06-mySort.js",
  fn: "mySort",
  block: 6, no: 6, must: true,
  rules: {"loops":2,"norec":true,"forbid":["sort","toSorted"]},
  setup: ["const h = mySort([3, , 1, undefined, 2]);","const s = [2, 1];"],
  tests: [
    ["mySort([10, 9, 1, 100])", "[1, 10, 100, 9]"],
    ["mySort([3, 1, 2], (a, b) => a - b)", "[1, 2, 3]"],
    ["mySort(['b', undefined, 'a'])", "['a', 'b', undefined]"],
    ["mySort([undefined, 2, 1], (a, b) => a - b)", "[1, 2, undefined]"],
    ["mySort([3, 1, 2], () => NaN)", "[3, 1, 2]"],
    ["mySort([{ n: 'x', v: 1 }, { n: 'y', v: 0 }, { n: 'z', v: 1 }], (a, b) => a.v - b.v).map(o => o.n)", "['y', 'x', 'z']"],
    ["h", "[1, 2, 3, undefined, ,]"],
    ["h.length", "5"],
    ["4 in h", "false"],
    ["mySort(s) === s", "true"],
    ["mySort([1], 5)", "throws TypeError"],
  ],
});
