// Тесты к задаче 04-chto-vyvedet.js. Запуск: node 04-join-reduce/04-chto-vyvedet.test.js
const { runOutput } = require('../_lib/check');

runOutput(__dirname, {
  task: "04-chto-vyvedet.js",
  answerVar: "answer",
  block: 4, no: 4, must: true,
  // правильный вывод спрятан, чтобы не подсматривать
  expected: "WyAxLCAyLCAzIF0KOAo1Ck5hTgpUeXBlRXJyb3I6IFJlZHVjZSBvZiBlbXB0eSBhcnJheSB3aXRoIG5vIGluaXRpYWwgdmFsdWU=",
});
