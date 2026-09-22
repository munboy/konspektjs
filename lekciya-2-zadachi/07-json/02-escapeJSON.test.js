// Тесты к задаче 02-escapeJSON.js. Запуск: node 07-json/02-escapeJSON.test.js
const { runTask } = require('../_lib/check');

runTask(__dirname, {
  task: "02-escapeJSON.js",
  fn: "escapeJSON",
  block: 7, no: 2, must: true,
  rules: {"loops":1,"forbid":["JSON.stringify"]},
  setup: [],
  tests: [
    ["escapeJSON('say \"hi\"')", "'\"say \\\\\"hi\\\\\"\"'"],
    ["escapeJSON('a\\nb')", "'\"a\\\\nb\"'"],
    ["escapeJSON('C:\\\\dir')", "'\"C:\\\\\\\\dir\"'"],
    ["escapeJSON('\\u0001')", "'\"\\\\u0001\"'"],
    ["escapeJSON('\\u001f')", "'\"\\\\u001f\"'"],
    ["escapeJSON('')", "'\"\"'"],
    ["escapeJSON('Привет 😀')", "'\"Привет 😀\"'"],
  ],
});
