// Тесты к задаче 04-chto-vyvedet.js. Запуск: node 12-ekzamen/04-chto-vyvedet.test.js
const { runOutput } = require('../_lib/check');

runOutput(__dirname, {
  task: "04-chto-vyvedet.js",
  answerVar: "answer",
  block: 12, no: 4, must: false,
  // правильный вывод спрятан, чтобы не подсматривать
  expected: "eyJ0aXRsZSI6ImV4YW0iLCJhdCI6IjIwMjQtMDktMjdUMDk6MDA6MDAuMDAwWiJ9CnN0cmluZyB1bmRlZmluZWQKdHJ1ZSA5",
});
