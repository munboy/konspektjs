// Тесты к задаче 03-busiestWeekday.js. Запуск: node 12-ekzamen/03-busiestWeekday.test.js
const { runTask } = require('../_lib/check');

runTask(__dirname, {
  task: "03-busiestWeekday.js",
  fn: "busiestWeekday",
  block: 12, no: 3, must: false,
  rules: {},
  setup: [],
  tests: [
    ["busiestWeekday(['2024-03-15', '2024-03-22', '2024-03-18'])", "'Friday'"],
    ["busiestWeekday(['2024-01-01'])", "'Monday'"],
    ["busiestWeekday([])", "null"],
    ["busiestWeekday(['2024-01-01', '2024-01-02', '2024-01-09'])", "'Tuesday'"],
  ],
});
