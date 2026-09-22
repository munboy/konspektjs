// Тесты к задаче 02-myFlat.js. Запуск: node 05-flat/02-myFlat.test.js
const { runTask } = require('../_lib/check');

runTask(__dirname, {
  task: "02-myFlat.js",
  fn: "myFlat",
  block: 5, no: 2, must: true,
  rules: {"loops":2,"norec":true,"forbid":["flat","flatMap","concat"]},
  setup: ["const deep = [1, [2, [3, [4]]]];"],
  tests: [
    ["myFlat(deep)", "[1, 2, [3, [4]]]"],
    ["myFlat(deep, 2)", "[1, 2, 3, [4]]"],
    ["myFlat(deep, Infinity)", "[1, 2, 3, 4]"],
    ["myFlat([1, , [2, , 3]])", "[1, 2, 3]"],
    ["myFlat([1, , 3], 0)", "[1, 3]"],
    ["myFlat([[1]], -1)", "[[1]]"],
    ["myFlat([[1]], NaN)", "[[1]]"],
    ["myFlat([[[1]]], '2')", "[1]"],
    ["myFlat([[[1]]], 1.7)", "[[1]]"],
    ["myFlat([])", "[]"],
    ["myFlat(['ab', [[]]])", "['ab', []]"],
  ],
});
