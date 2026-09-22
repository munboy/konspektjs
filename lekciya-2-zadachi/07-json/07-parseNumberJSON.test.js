// Тесты к задаче 07-parseNumberJSON.js. Запуск: node 07-json/07-parseNumberJSON.test.js
const { runTask } = require('../_lib/check');

runTask(__dirname, {
  task: "07-parseNumberJSON.js",
  fn: "parseNumberJSON",
  block: 7, no: 7, must: false,
  rules: {"loops":1,"forbid":["JSON.parse"]},
  setup: [],
  tests: [
    ["parseNumberJSON('-12.5e1')", "-125"],
    ["parseNumberJSON('0')", "0"],
    ["parseNumberJSON('-0')", "-0"],
    ["parseNumberJSON('1e+2')", "100"],
    ["parseNumberJSON('0.5')", "0.5"],
    ["parseNumberJSON('01')", "throws SyntaxError"],
    ["parseNumberJSON('1.')", "throws SyntaxError"],
    ["parseNumberJSON('.5')", "throws SyntaxError"],
    ["parseNumberJSON('+1')", "throws SyntaxError"],
    ["parseNumberJSON('1e')", "throws SyntaxError"],
    ["parseNumberJSON('')", "throws SyntaxError"],
  ],
});
