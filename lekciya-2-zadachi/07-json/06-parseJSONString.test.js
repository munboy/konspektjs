// Тесты к задаче 06-parseJSONString.js. Запуск: node 07-json/06-parseJSONString.test.js
const { runTask } = require('../_lib/check');

runTask(__dirname, {
  task: "06-parseJSONString.js",
  fn: "parseJSONString",
  block: 7, no: 6, must: true,
  rules: {"loops":1,"forbid":["JSON.parse"]},
  setup: [],
  tests: [
    ["parseJSONString('\"a\\\\nb\"')", "'a\\nb'"],
    ["parseJSONString('\"a\\\\u0062c\"')", "'abc'"],
    ["parseJSONString('\"say \\\\\"hi\\\\\"\"')", "'say \"hi\"'"],
    ["parseJSONString('\"C:\\\\\\\\dir\"')", "'C:\\\\dir'"],
    ["parseJSONString('\"\\\\u041F\\\\u0440\\\\u0438\"')", "'При'"],
    ["parseJSONString('\"\"')", "''"],
    ["parseJSONString('abc')", "throws SyntaxError"],
    ["parseJSONString('\"abc')", "throws SyntaxError"],
    ["parseJSONString('\"a\\\\x\"')", "throws SyntaxError"],
    ["parseJSONString('\"a\\\\u12\"')", "throws SyntaxError"],
    ["parseJSONString('\"a\"b')", "throws SyntaxError"],
  ],
});
