// Тесты к задаче 05-hashString.js. Запуск: node 10-pod-kapotom/05-hashString.test.js
const { runTask } = require('../_lib/check');

runTask(__dirname, {
  task: "05-hashString.js",
  fn: "hashString",
  block: 10, no: 5, must: true,
  rules: {"loops":1},
  setup: [],
  tests: [
    ["hashString('abc', 16)", "2"],
    ["hashString('', 16)", "0"],
    ["hashString('abc', 16) === hashString('abc', 16)", "true"],
    ["hashString('hello world', 1000) < 1000", "true"],
    ["hashString('ab', 1000) !== hashString('ba', 1000)", "true"],
  ],
});
