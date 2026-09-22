// Тесты к задаче 08-myParse.js. Запуск: node 07-json/08-myParse.test.js
const { runTask } = require('../_lib/check');

runTask(__dirname, {
  task: "08-myParse.js",
  fn: "myParse",
  block: 7, no: 8, must: true,
  rules: {"loops":2,"norec":true,"forbid":["JSON.parse"]},
  setup: [],
  tests: [
    ["myParse('{\"a\":[1,{\"b\":\"x\"}],\"ok\":true}')", "{ a: [1, { b: 'x' }], ok: true }"],
    ["myParse(' [ 1 , -2.5e1 , true , null ] ')", "[1, -25, true, null]"],
    ["myParse('\"a\\\\u0062c\"')", "'abc'"],
    ["myParse('{}')", "{}"],
    ["myParse('[[]]')", "[[]]"],
    ["myParse('{\"a\":1,\"a\":2}')", "{ a: 2 }"],
    ["myParse('0')", "0"],
    ["myParse('[1,]')", "throws SyntaxError"],
    ["myParse('{a:1}')", "throws SyntaxError"],
    ["myParse(\"'x'\")", "throws SyntaxError"],
    ["myParse('')", "throws SyntaxError"],
    ["myParse('01')", "throws SyntaxError"],
    ["myParse('[1] 2')", "throws SyntaxError"],
    ["myParse('{\"a\":1')", "throws SyntaxError"],
    ["myParse('{\"a\" 1}')", "throws SyntaxError"],
  ],
});
