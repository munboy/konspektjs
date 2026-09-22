// Тесты к задаче 05-ordinal.js. Запуск: node 09-intl/05-ordinal.test.js
const { runTask } = require('../_lib/check');

runTask(__dirname, {
  task: "05-ordinal.js",
  fn: "ordinal",
  block: 9, no: 5, must: false,
  rules: {},
  setup: [],
  tests: [
    ["ordinal(1)", "'1st'"],
    ["ordinal(2)", "'2nd'"],
    ["ordinal(3)", "'3rd'"],
    ["ordinal(4)", "'4th'"],
    ["ordinal(11)", "'11th'"],
    ["ordinal(13)", "'13th'"],
    ["ordinal(21)", "'21st'"],
    ["ordinal(101)", "'101st'"],
    ["ordinal(111)", "'111th'"],
    ["[1, 2, 3, 4, 11, 12, 13, 21, 22, 23, 101, 111].every(n => ordinal(n).slice(-2) === { one: 'st', two: 'nd', few: 'rd', other: 'th' }[new Intl.PluralRules('en', { type: 'ordinal' }).select(n)])", "true"],
  ],
});
