// Тесты к задаче 07-mySlice.js. Запуск: node 12-ekzamen/07-mySlice.test.js
const { runTask } = require('../_lib/check');

runTask(__dirname, {
  task: "07-mySlice.js",
  fn: "mySlice",
  block: 12, no: 7, must: true,
  rules: {"loops":1,"forbid":["slice","splice","concat"]},
  setup: ["const s = [1, 2];"],
  tests: [
    ["mySlice([1, 2, 3, 4], 1, 3)", "[2, 3]"],
    ["mySlice([1, 2, 3], -2)", "[2, 3]"],
    ["mySlice([1, 2, 3])", "[1, 2, 3]"],
    ["mySlice([1, 2, 3], 2, 1)", "[]"],
    ["mySlice([1, 2, 3], -10, 10)", "[1, 2, 3]"],
    ["mySlice([1, 2, 3], 1.7)", "[2, 3]"],
    ["mySlice([1, 2, 3], NaN, 2)", "[1, 2]"],
    ["mySlice([1, 2, 3], 0, -1)", "[1, 2]"],
    ["1 in mySlice([1, , 3])", "false"],
    ["mySlice([1, 2, ,], 1).length", "2"],
    ["mySlice(s) !== s", "true"],
  ],
});
