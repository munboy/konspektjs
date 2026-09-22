// Тесты к задаче 13-chto-vyvedet.js. Запуск: node 02-object/13-chto-vyvedet.test.js
const { runOutput } = require('../_lib/check');

runOutput(__dirname, {
  task: "13-chto-vyvedet.js",
  answerVar: "answer",
  block: 2, no: 13, must: false,
  // правильный вывод спрятан, чтобы не подсматривать
  expected: "eyB4OiAxIH0geyB4OiAyIH0ge30=",
});
