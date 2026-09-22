// Тесты к задаче 02-invert.js. Запуск: node 02-object/02-invert.test.js
const { runTask } = require('../_lib/check');

runTask(__dirname, {
  task: "02-invert.js",
  fn: "invert",
  block: 2, no: 2, must: true,
  rules: {},
  setup: [],
  tests: [
    ["invert({ a: 'x', b: 'y' })", "{ x: 'a', y: 'b' }"],
    ["invert({ a: 1, b: 1 })", "{ 1: 'b' }"],
    ["invert({})", "{}"],
  ],
});
