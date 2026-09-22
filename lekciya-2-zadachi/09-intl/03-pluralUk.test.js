// Тесты к задаче 03-pluralUk.js. Запуск: node 09-intl/03-pluralUk.test.js
const { runTask } = require('../_lib/check');

runTask(__dirname, {
  task: "03-pluralUk.js",
  fn: "pluralUk",
  block: 9, no: 3, must: true,
  rules: {},
  setup: ["const DAYS = ['день', 'дні', 'днів'];"],
  tests: [
    ["pluralUk(1, DAYS)", "'1 день'"],
    ["pluralUk(3, DAYS)", "'3 дні'"],
    ["pluralUk(5, DAYS)", "'5 днів'"],
    ["pluralUk(11, DAYS)", "'11 днів'"],
    ["pluralUk(12, DAYS)", "'12 днів'"],
    ["pluralUk(21, DAYS)", "'21 день'"],
    ["pluralUk(22, DAYS)", "'22 дні'"],
    ["pluralUk(111, DAYS)", "'111 днів'"],
    ["pluralUk(0, DAYS)", "'0 днів'"],
    ["[0, 1, 2, 5, 11, 12, 14, 21, 22, 25, 101, 111, 112].every(n => pluralUk(n, ['one', 'few', 'many']).endsWith(new Intl.PluralRules('uk').select(n)))", "true"],
  ],
});
