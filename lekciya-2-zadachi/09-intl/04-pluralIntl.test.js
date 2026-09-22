// Тесты к задаче 04-pluralIntl.js. Запуск: node 09-intl/04-pluralIntl.test.js
const { runTask } = require('../_lib/check');

runTask(__dirname, {
  task: "04-pluralIntl.js",
  fn: "pluralIntl",
  block: 9, no: 4, must: false,
  rules: {},
  setup: ["const APPLES = { one: 'яблуко', few: 'яблука', many: 'яблук', other: 'яблука' };"],
  tests: [
    ["pluralIntl(1, APPLES)", "'1 яблуко'"],
    ["pluralIntl(5, APPLES)", "'5 яблук'"],
    ["pluralIntl(1.5, APPLES)", "'1.5 яблука'"],
  ],
});
