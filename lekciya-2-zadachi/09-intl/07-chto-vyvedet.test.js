// Тесты к задаче 07-chto-vyvedet.js. Запуск: node 09-intl/07-chto-vyvedet.test.js
const { runOutput } = require('../_lib/check');

runOutput(__dirname, {
  task: "07-chto-vyvedet.js",
  answerVar: "answer",
  block: 9, no: 7, must: true,
  // правильный вывод спрятан, чтобы не подсматривать
  expected: "b25lIGZldyBtYW55IG1hbnkgb25lIGZldwpvbmUgdHdvIGZldyBvdGhlciBvdGhlciB0d28K0YfQsNC5LCDQutCw0LLQsCDRliDRgdGW0LoK0YPRh9C+0YDQsCAzINC00L3RliDRgtC+0LzRgw==",
});
