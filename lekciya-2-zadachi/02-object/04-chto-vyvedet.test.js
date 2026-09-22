// Тесты к задаче 04-chto-vyvedet.js. Запуск: node 02-object/04-chto-vyvedet.test.js
const { runOutput } = require('../_lib/check');

runOutput(__dirname, {
  task: "04-chto-vyvedet.js",
  answerVar: "answer",
  block: 2, no: 4, must: false,
  // правильный вывод спрятан, чтобы не подсматривать
  expected: "WyAnMScsICcyJywgJ2InLCAnYScgXQp0cnVlIHRydWUgZmFsc2U=",
});
