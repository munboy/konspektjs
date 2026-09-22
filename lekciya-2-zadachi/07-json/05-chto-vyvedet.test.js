// Тесты к задаче 05-chto-vyvedet.js. Запуск: node 07-json/05-chto-vyvedet.test.js
const { runOutput } = require('../_lib/check');

runOutput(__dirname, {
  task: "05-chto-vyvedet.js",
  answerVar: "answer",
  block: 7, no: 5, must: false,
  // правильный вывод спрятан, чтобы не подсматривать
  expected: "MTAwMCBzdHJpbmcgZmFsc2UgdHJ1ZQp0ZXh0IDUgdHJ1ZQpTeW50YXhFcnJvcg==",
});
