// Тесты к задаче 05-mapValues.js. Запуск: node 02-object/05-mapValues.test.js
const { runTask } = require('../_lib/check');

runTask(__dirname, {
  task: "05-mapValues.js",
  fn: "mapValues",
  block: 2, no: 5, must: true,
  rules: {},
  setup: [],
  tests: [
    ["mapValues({ a: 1, b: 2 }, v => v * 10)", "{ a: 10, b: 20 }"],
    ["mapValues({ x: 'k' }, (v, k) => k + v)", "{ x: 'xk' }"],
    ["mapValues({}, v => v)", "{}"],
  ],
});
