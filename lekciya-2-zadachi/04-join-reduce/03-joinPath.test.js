// Тесты к задаче 03-joinPath.js. Запуск: node 04-join-reduce/03-joinPath.test.js
const { runTask } = require('../_lib/check');

runTask(__dirname, {
  task: "03-joinPath.js",
  fn: "joinPath",
  block: 4, no: 3, must: false,
  rules: {"loops":1},
  setup: [],
  tests: [
    ["joinPath('users', '', 'kate', 'photo.png')", "'users/kate/photo.png'"],
    ["joinPath('', 'a')", "'a'"],
    ["joinPath()", "''"],
    ["joinPath('a', 'b')", "'a/b'"],
  ],
});
