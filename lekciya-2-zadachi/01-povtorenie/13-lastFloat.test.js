// Тесты к задаче 13-lastFloat.js. Запуск: node 01-povtorenie/13-lastFloat.test.js
const { runTask } = require('../_lib/check');

runTask(__dirname, {
  task: "13-lastFloat.js",
  fn: "lastFloat",
  block: 1, no: 13, must: false,
  rules: {"strict":true,"allow":[]},
  setup: [],
  tests: [
    ["lastFloat('Total: 45.99')", "45.99"],
    ["lastFloat('Price -3.5')", "-3.5"],
    ["lastFloat('a 1.5 b 2.25')", "2.25"],
    ["lastFloat('none')", "null"],
    ["lastFloat('v2')", "2"],
    ["lastFloat('3.')", "3"],
    ["lastFloat('.5')", "0.5"],
    ["lastFloat('1.2.3')", "2.3"],
    ["lastFloat('')", "null"],
  ],
});
