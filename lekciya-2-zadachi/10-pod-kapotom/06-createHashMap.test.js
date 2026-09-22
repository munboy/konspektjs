// Тесты к задаче 06-createHashMap.js. Запуск: node 10-pod-kapotom/06-createHashMap.test.js
const { runTask } = require('../_lib/check');

runTask(__dirname, {
  task: "06-createHashMap.js",
  fn: "createHashMap",
  block: 10, no: 6, must: true,
  rules: {},
  setup: ["const m = createHashMap();","m.set(1, 'num').set('1', 'str').set(NaN, 'nan');","const o = createHashMap();","o.set('a', 1).set('b', 2).set('c', 3);","o.delete('a');","o.set('a', 4).set('b', 20);","const k = {};","const withObj = createHashMap().set(k, 'yes');","const big = createHashMap();","for (let i = 0; i < 1000; i++) big.set('k' + i, i);"],
  tests: [
    ["m.get(1)", "'num'"],
    ["m.get('1')", "'str'"],
    ["m.get(NaN)", "'nan'"],
    ["m.size", "3"],
    ["m.has(2)", "false"],
    ["createHashMap().set('x', 1).delete('x')", "true"],
    ["createHashMap().delete('zzz')", "false"],
    ["o.keys()", "['b', 'c', 'a']"],
    ["o.get('b')", "20"],
    ["o.size", "3"],
    ["withObj.get(k)", "'yes'"],
    ["withObj.get({})", "undefined"],
    ["big.get('k500')", "500"],
    ["big.size", "1000"],
    ["big.keys()[999]", "'k999'"],
  ],
});
