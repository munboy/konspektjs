// Тесты к задаче 05-chto-vyvedet.js. Запуск: node 03-array/05-chto-vyvedet.test.js
const { runOutput } = require('../_lib/check');

runOutput(__dirname, {
  task: "05-chto-vyvedet.js",
  answerVar: "answer",
  block: 3, no: 5, must: true,
  // правильный вывод спрятан, чтобы не подсматривать
  expected: "LTEgdHJ1ZSAzCjMgLTEgMwp0cnVlIGZhbHNl",
});
