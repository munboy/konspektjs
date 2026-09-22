// Тесты к задаче 04-myStringify.js. Запуск: node 07-json/04-myStringify.test.js
const { runTask } = require('../_lib/check');

runTask(__dirname, {
  task: "04-myStringify.js",
  fn: "myStringify",
  block: 7, no: 4, must: true,
  rules: {"loops":2,"norec":true,"forbid":["JSON.stringify"]},
  setup: ["const sh = { x: 1 };","const cyc = {}; cyc.self = cyc;"],
  tests: [
    ["myStringify({ a: [1, { b: 'x' }] })", "'{\"a\":[1,{\"b\":\"x\"}]}'"],
    ["myStringify([undefined, () => 1, NaN, -0, [,]])", "'[null,null,null,0,[null]]'"],
    ["myStringify({ u: undefined, f() {}, d: new Date(0) })", "'{\"d\":\"1970-01-01T00:00:00.000Z\"}'"],
    ["myStringify('say \"hi\"\\n')", "'\"say \\\\\"hi\\\\\"\\\\n\"'"],
    ["myStringify(undefined)", "undefined"],
    ["myStringify(() => 1)", "undefined"],
    ["myStringify([[], {}])", "'[[],{}]'"],
    ["myStringify({ 2: 'b', 1: 'a', x: 1 })", "'{\"1\":\"a\",\"2\":\"b\",\"x\":1}'"],
    ["myStringify(new Map([[1, 2]]))", "'{}'"],
    ["myStringify([sh, sh])", "'[{\"x\":1},{\"x\":1}]'"],
    ["myStringify(cyc)", "throws TypeError"],
    ["myStringify({ n: 1n })", "throws TypeError"],
  ],
});
