// Тесты к задаче 10-chto-vyvedet.js. Запуск: node 03-array/10-chto-vyvedet.test.js
const { runOutput } = require('../_lib/check');

runOutput(__dirname, {
  task: "10-chto-vyvedet.js",
  answerVar: "answer",
  block: 3, no: 10, must: false,
  // правильный вывод спрятан, чтобы не подсматривать
  expected: "WyBbICd4JyBdLCBbICd4JyBdIF0KWyBbICd4JyBdLCBbXSBd",
});
