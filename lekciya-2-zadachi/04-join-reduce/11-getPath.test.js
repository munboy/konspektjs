// Тесты к задаче 11-getPath.js. Запуск: node 04-join-reduce/11-getPath.test.js
const { runTask } = require('../_lib/check');

runTask(__dirname, {
  task: "11-getPath.js",
  fn: "getPath",
  block: 4, no: 11, must: false,
  rules: {},
  setup: [],
  tests: [
    ["getPath({ a: { b: { c: 7 } } }, 'a.b.c')", "7"],
    ["getPath({ a: { b: null } }, 'a.b.c')", "undefined"],
    ["getPath({ list: [10, 20] }, 'list.1')", "20"],
    ["getPath({}, 'x.y')", "undefined"],
  ],
});
