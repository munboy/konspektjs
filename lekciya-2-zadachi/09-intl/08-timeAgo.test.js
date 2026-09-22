// Тесты к задаче 08-timeAgo.js. Запуск: node 09-intl/08-timeAgo.test.js
const { runTask } = require('../_lib/check');

runTask(__dirname, {
  task: "08-timeAgo.js",
  fn: "timeAgo",
  block: 9, no: 8, must: false,
  rules: {},
  setup: [],
  tests: [
    ["timeAgo(0)", "'now'"],
    ["timeAgo(30)", "'30 seconds ago'"],
    ["timeAgo(90)", "'1 minute ago'"],
    ["timeAgo(7200)", "'2 hours ago'"],
    ["timeAgo(86400)", "'yesterday'"],
    ["timeAgo(3 * 86400)", "'3 days ago'"],
  ],
});
