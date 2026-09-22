// Тесты к задаче 10-maxBy.js. Запуск: node 04-join-reduce/10-maxBy.test.js
const { runTask } = require('../_lib/check');

runTask(__dirname, {
  task: "10-maxBy.js",
  fn: "maxBy",
  block: 4, no: 10, must: false,
  rules: {},
  setup: [],
  tests: [
    ["maxBy([{ n: 'a', age: 20 }, { n: 'b', age: 30 }], u => u.age)", "{ n: 'b', age: 30 }"],
    ["maxBy(['aa', 'b', 'cc'], s => s.length)", "'aa'"],
    ["maxBy([], x => x)", "undefined"],
  ],
});
