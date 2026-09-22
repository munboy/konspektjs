// Тесты к задаче 02-removeAt.js. Запуск: node 03-array/02-removeAt.test.js
const { runTask } = require('../_lib/check');

runTask(__dirname, {
  task: "02-removeAt.js",
  fn: "removeAt",
  block: 3, no: 2, must: false,
  rules: {},
  setup: ["const src = [1, 2, 3];"],
  tests: [
    ["removeAt([1, 2, 3], 1)", "[1, 3]"],
    ["removeAt([1, 2, 3], -1)", "[1, 2]"],
    ["removeAt([1, 2, 3], 5)", "[1, 2, 3]"],
    ["removeAt(src, 0)", "[2, 3]"],
    ["src", "[1, 2, 3]"],
  ],
});
