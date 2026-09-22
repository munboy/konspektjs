// Тесты к задаче 06-myReduceRight.js. Запуск: node 04-join-reduce/06-myReduceRight.test.js
const { runTask } = require('../_lib/check');

runTask(__dirname, {
  task: "06-myReduceRight.js",
  fn: "myReduceRight",
  block: 4, no: 6, must: true,
  rules: {"loops":1,"norec":true,"forbid":["reduceRight","reverse"]},
  setup: [],
  tests: [
    ["myReduceRight(['a', 'b', 'c'], (acc, x) => acc + x)", "'cba'"],
    ["myReduceRight([1, 2, 3], (acc, x) => acc.concat(x), [])", "[3, 2, 1]"],
    ["myReduceRight([1, 2, 3], (acc, x, i) => acc + i, '')", "'210'"],
    ["myReduceRight([], (acc, x) => acc)", "throws TypeError"],
    ["myReduceRight([7, ,], (acc, x) => acc + x)", "7"],
  ],
});
