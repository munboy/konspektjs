// Тесты к задаче 06-myMap.js. Запуск: node 12-ekzamen/06-myMap.test.js
const { runTask } = require('../_lib/check');

runTask(__dirname, {
  task: "06-myMap.js",
  fn: "myMap",
  block: 12, no: 6, must: false,
  rules: {"loops":1,"forbid":["map","forEach","flatMap"]},
  setup: [],
  tests: [
    ["myMap([1, 2, 3], x => x * 2)", "[2, 4, 6]"],
    ["myMap(['a', 'b'], (x, i) => x + i)", "['a0', 'b1']"],
    ["myMap([1, , 3], x => x * 10).length", "3"],
    ["1 in myMap([1, , 3], x => x * 10)", "false"],
    ["myMap([], x => x)", "[]"],
  ],
});
