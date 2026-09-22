// Тесты к задаче 01-chto-vyvedet.js. Запуск: node 06-sort/01-chto-vyvedet.test.js
const { runOutput } = require('../_lib/check');

runOutput(__dirname, {
  task: "01-chto-vyvedet.js",
  answerVar: "answer",
  block: 6, no: 1, must: true,
  // правильный вывод спрятан, чтобы не подсматривать
  expected: "WyAnQycsICdhJywgJ2InIF0KWyAnYScsICdiJywgJ0MnIF0KWyAtMSwgLTIsIDIwLCAzIF0KWyAzLCAxLCAyIF0=",
});
