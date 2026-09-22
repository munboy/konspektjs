// Тесты к задаче 13-topScores.js. Запуск: node 03-array/13-topScores.test.js
const { runTask } = require('../_lib/check');

runTask(__dirname, {
  task: "13-topScores.js",
  fn: "topScores",
  block: 3, no: 13, must: false,
  rules: {},
  setup: [],
  tests: [
    ["topScores({ kate: 90, max: 75, ann: 95 }, 2)", "['ann', 'kate']"],
    ["topScores({}, 3)", "[]"],
    ["topScores({ a: 1, b: 1 }, 1)", "['a']"],
    ["topScores({ a: 1 }, 5)", "['a']"],
  ],
});
