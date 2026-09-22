// Тесты к задаче 09-insertSorted.js. Запуск: node 11-pamyat/09-insertSorted.test.js
const { runTask } = require('../_lib/check');

runTask(__dirname, {
  task: "09-insertSorted.js",
  fn: "insertSorted",
  block: 11, no: 9, must: false,
  rules: {},
  setup: [],
  tests: [
    ["insertSorted([1, 3, 5], 4)", "[1, 3, 4, 5]"],
    ["insertSorted([], 7)", "[7]"],
    ["insertSorted([1, 2], 0)", "[0, 1, 2]"],
    ["insertSorted([1, 2], 9)", "[1, 2, 9]"],
    ["insertSorted([1, 2, 2, 3], 2)", "[1, 2, 2, 2, 3]"],
  ],
});
