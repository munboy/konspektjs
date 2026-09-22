// Тесты к задаче 15-deepFreeze.js. Запуск: node 02-object/15-deepFreeze.test.js
const { runTask } = require('../_lib/check');

runTask(__dirname, {
  task: "15-deepFreeze.js",
  fn: "deepFreeze",
  block: 2, no: 15, must: true,
  rules: {"norec":true},
  setup: ["const o = deepFreeze({ a: { b: { c: 1 } }, list: [1, { x: 2 }] });","const cyc = {}; cyc.self = cyc;"],
  tests: [
    ["Object.isFrozen(o)", "true"],
    ["Object.isFrozen(o.a.b)", "true"],
    ["Object.isFrozen(o.list)", "true"],
    ["Object.isFrozen(o.list[1])", "true"],
    ["Object.isFrozen(deepFreeze(cyc))", "true"],
  ],
});
