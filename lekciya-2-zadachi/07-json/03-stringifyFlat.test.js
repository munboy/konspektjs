// Тесты к задаче 03-stringifyFlat.js. Запуск: node 07-json/03-stringifyFlat.test.js
const { runTask } = require('../_lib/check');

runTask(__dirname, {
  task: "03-stringifyFlat.js",
  fn: "stringifyFlat",
  block: 7, no: 3, must: false,
  rules: {"loops":2,"forbid":["JSON.stringify"]},
  setup: [],
  tests: [
    ["stringifyFlat({ a: 1, b: undefined, c: 'x' })", "'{\"a\":1,\"c\":\"x\"}'"],
    ["stringifyFlat([1, 'a', null, undefined, NaN])", "'[1,\"a\",null,null,null]'"],
    ["stringifyFlat([])", "'[]'"],
    ["stringifyFlat({})", "'{}'"],
    ["stringifyFlat({ 'say \"hi\"': true })", "'{\"say \\\\\"hi\\\\\"\":true}'"],
  ],
});
