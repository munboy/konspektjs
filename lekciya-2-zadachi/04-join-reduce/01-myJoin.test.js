// Тесты к задаче 01-myJoin.js. Запуск: node 04-join-reduce/01-myJoin.test.js
const { runTask } = require('../_lib/check');

runTask(__dirname, {
  task: "01-myJoin.js",
  fn: "myJoin",
  block: 4, no: 1, must: true,
  rules: {"loops":1,"forbid":["join"]},
  setup: [],
  tests: [
    ["myJoin([1, 2, 3])", "'1,2,3'"],
    ["myJoin([1, null, undefined, , 'a'], '-')", "'1----a'"],
    ["myJoin([], '-')", "''"],
    ["myJoin(['x'])", "'x'"],
    ["myJoin([1, [2, 3]], ';')", "'1;2,3'"],
    ["myJoin([1, 2], 0)", "'102'"],
    ["myJoin([true, {}], '|')", "'true|[object Object]'"],
    ["myJoin([1, 2], undefined)", "'1,2'"],
  ],
});
