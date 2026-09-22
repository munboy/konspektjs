// Тесты к задаче 07-myIncludes.js. Запуск: node 03-array/07-myIncludes.test.js
const { runTask } = require('../_lib/check');

runTask(__dirname, {
  task: "07-myIncludes.js",
  fn: "myIncludes",
  block: 3, no: 7, must: true,
  rules: {},
  setup: [],
  tests: [
    ["myIncludes([1, NaN], NaN)", "true"],
    ["myIncludes([1, 2, 3], 1, 1)", "false"],
    ["myIncludes([1, 2, 3], 3, -1)", "true"],
    ["myIncludes([1, 2, 3], 1, -10)", "true"],
    ["myIncludes([0], -0)", "true"],
    ["myIncludes([, 1], undefined)", "true"],
    ["myIncludes([], undefined)", "false"],
  ],
});
