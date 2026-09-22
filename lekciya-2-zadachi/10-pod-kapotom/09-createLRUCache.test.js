// Тесты к задаче 09-createLRUCache.js. Запуск: node 10-pod-kapotom/09-createLRUCache.test.js
const { runTask } = require('../_lib/check');

runTask(__dirname, {
  task: "09-createLRUCache.js",
  fn: "createLRUCache",
  block: 10, no: 9, must: false,
  rules: {},
  setup: ["const c = createLRUCache(2);","c.set('a', 1);","c.set('b', 2);","c.get('a');","c.set('c', 3);","const c2 = createLRUCache(2);","c2.set('a', 1);","c2.set('b', 2);","c2.set('a', 10);","c2.set('d', 4);"],
  tests: [
    ["c.keys()", "['a', 'c']"],
    ["c.get('b')", "undefined"],
    ["c.get('a')", "1"],
    ["c2.keys()", "['a', 'd']"],
    ["c2.get('a')", "10"],
  ],
});
