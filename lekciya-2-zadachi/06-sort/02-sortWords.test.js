// Тесты к задаче 02-sortWords.js. Запуск: node 06-sort/02-sortWords.test.js
const { runTask } = require('../_lib/check');

runTask(__dirname, {
  task: "02-sortWords.js",
  fn: "sortWords",
  block: 6, no: 2, must: false,
  rules: {},
  setup: ["const w = ['bb', 'a'];"],
  tests: [
    ["sortWords(['banana', 'kiwi', 'apple', 'fig', 'date'])", "['fig', 'date', 'kiwi', 'apple', 'banana']"],
    ["sortWords(w)", "['a', 'bb']"],
    ["w", "['bb', 'a']"],
  ],
});
