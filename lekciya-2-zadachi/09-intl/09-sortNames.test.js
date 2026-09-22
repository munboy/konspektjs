// Тесты к задаче 09-sortNames.js. Запуск: node 09-intl/09-sortNames.test.js
const { runTask } = require('../_lib/check');

runTask(__dirname, {
  task: "09-sortNames.js",
  fn: "sortNames",
  block: 9, no: 9, must: false,
  rules: {},
  setup: [],
  tests: [
    ["sortNames(['file10', 'file2', 'File1'])", "['File1', 'file2', 'file10']"],
    ["sortNames(['b', 'a', 'C'])", "['a', 'b', 'C']"],
    ["sortNames(['Item 20', 'item 3', 'Item 100'])", "['item 3', 'Item 20', 'Item 100']"],
  ],
});
