// Тесты к задаче 17-averageAmount.js. Запуск: node 01-povtorenie/17-averageAmount.test.js
const { runTask } = require('../_lib/check');

runTask(__dirname, {
  task: "17-averageAmount.js",
  fn: "averageAmount",
  block: 1, no: 17, must: false,
  rules: {"strict":true,"allow":[],"onefor":true,"noarrays":true},
  setup: [],
  tests: [
    ["averageAmount('Paid 10 and 20.5')", "15.25"],
    ["averageAmount('a 1, b 2, c 3')", "2"],
    ["averageAmount('3')", "3"],
    ["averageAmount('')", "null"],
  ],
});
