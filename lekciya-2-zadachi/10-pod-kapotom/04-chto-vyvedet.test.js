// Тесты к задаче 04-chto-vyvedet.js. Запуск: node 10-pod-kapotom/04-chto-vyvedet.test.js
const { runOutput } = require('../_lib/check');

runOutput(__dirname, {
  task: "04-chto-vyvedet.js",
  answerVar: "answer",
  block: 10, no: 4, must: true,
  // правильный вывод спрятан, чтобы не подсматривать
  expected: "NCBudW0gc3RyIHVuZGVmaW5lZCBvYmogbmFuClNldCgzKSB7IDMsIDEsIDIgfSB0cnVlIDMKe30gWzEsIjEiXQ==",
});
