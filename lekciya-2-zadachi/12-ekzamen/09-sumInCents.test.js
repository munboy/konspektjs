// Тесты к задаче 09-sumInCents.js. Запуск: node 12-ekzamen/09-sumInCents.test.js
const { runTask } = require('../_lib/check');

runTask(__dirname, {
  task: "09-sumInCents.js",
  fn: "sumInCents",
  block: 12, no: 9, must: true,
  rules: {"onefor":true,"noarrays":true},
  setup: [],
  tests: [
    ["sumInCents('12.5 and 0.1 and 0.2')", "1280"],
    ["sumInCents('Paid 10,99 USDT')", "1099"],
    ["sumInCents('7. End')", "700"],
    ["sumInCents('0.999')", "99"],
    ["sumInCents('none')", "0"],
  ],
});
