// Тесты к задаче 01-chto-vyvedet.js. Запуск: node 03-array/01-chto-vyvedet.test.js
const { runOutput } = require('../_lib/check');

runOutput(__dirname, {
  task: "01-chto-vyvedet.js",
  answerVar: "answer",
  block: 3, no: 1, must: true,
  // правильный вывод спрятан, чтобы не подсматривать
  expected: "NCBbIDEsIDIgXSBbIDMsIDQgXSB0cnVlClsgNCwgMyBdIFsgMywgNCBdIGZhbHNl",
});
