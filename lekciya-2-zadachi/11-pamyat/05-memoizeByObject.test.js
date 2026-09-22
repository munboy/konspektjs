// Тесты к задаче 05-memoizeByObject.js. Запуск: node 11-pamyat/05-memoizeByObject.test.js
const { runTask } = require('../_lib/check');

runTask(__dirname, {
  task: "05-memoizeByObject.js",
  fn: "memoizeByObject",
  block: 11, no: 5, must: true,
  rules: {},
  setup: ["let calls = 0;","const area = memoizeByObject(r => { calls++; return r.w * r.h; });","const r1 = { w: 2, h: 3 };","const r2 = { w: 2, h: 3 };","const first = area(r1);","const again = area(r1);","const other = area(r2);"],
  tests: [
    ["first", "6"],
    ["again", "6"],
    ["other", "6"],
    ["calls", "2"],
  ],
});
