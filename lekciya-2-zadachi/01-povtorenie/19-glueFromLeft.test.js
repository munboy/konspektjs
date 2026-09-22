// Тесты к задаче 19-glueFromLeft.js. Запуск: node 01-povtorenie/19-glueFromLeft.test.js
const { runTask } = require('../_lib/check');

runTask(__dirname, {
  task: "19-glueFromLeft.js",
  fn: "glueFromLeft",
  block: 1, no: 19, must: false,
  rules: {"strict":true,"allow":[],"onefor":true,"noarrays":true},
  setup: [],
  tests: [
    ["glueFromLeft('Left 56,02 then 15 and 49')", "56.021549"],
    ["glueFromLeft('a 12 b 34')", "1234"],
    ["glueFromLeft('x 0.5 y 7')", "0.57"],
    ["glueFromLeft('Left part is 56,02 and right part 15 49 72')", "56.02154972"],
    ["glueFromLeft('none')", "null"],
  ],
});
