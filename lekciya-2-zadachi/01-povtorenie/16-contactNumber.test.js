// Тесты к задаче 16-contactNumber.js. Запуск: node 01-povtorenie/16-contactNumber.test.js
const { runTask } = require('../_lib/check');

runTask(__dirname, {
  task: "16-contactNumber.js",
  fn: "contactNumber",
  block: 1, no: 16, must: true,
  rules: {"strict":true,"allow":[],"revfor":true,"noarrays":true},
  setup: [],
  tests: [
    ["contactNumber('Right part 72 is 49 asdhsad 15 and left part is 56,02')", "56.02154972"],
    ["contactNumber('Right part is 14992 and left part is 0.006')", "0.00614992"],
    ["contactNumber('Right part is 1493 and left part is 5602')", "56021493"],
    ["contactNumber('Right part 82 is 93 lasdlkask 14 and left part is 5602')", "5602149382"],
    ["contactNumber('x 9 y 0.5')", "0.59"],
    ["contactNumber('just 7')", "7"],
    ["contactNumber('')", "null"],
  ],
});
