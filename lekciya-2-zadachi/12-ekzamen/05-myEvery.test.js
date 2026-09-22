// Тесты к задаче 05-myEvery.js. Запуск: node 12-ekzamen/05-myEvery.test.js
const { runTask } = require('../_lib/check');

runTask(__dirname, {
  task: "05-myEvery.js",
  fn: "myEvery",
  block: 12, no: 5, must: false,
  rules: {"loops":1,"forbid":["every","some","find","findIndex"]},
  setup: [],
  tests: [
    ["myEvery([2, 4], x => x % 2 === 0)", "true"],
    ["myEvery([2, 3], x => x % 2 === 0)", "false"],
    ["myEvery([], () => false)", "true"],
    ["myEvery([1, , 1], x => x === 1)", "true"],
    ["myEvery(['a', 'b'], (x, i) => i < 2)", "true"],
  ],
});
