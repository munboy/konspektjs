// Тесты к задаче 04-chto-vyvedet.js. Запуск: node 05-flat/04-chto-vyvedet.test.js
const { runOutput } = require('../_lib/check');

runOutput(__dirname, {
  task: "04-chto-vyvedet.js",
  answerVar: "answer",
  block: 5, no: 4, must: false,
  // правильный вывод спрятан, чтобы не подсматривать
  expected: "WyAnYScsICdiJywgJ2MnIF0KWyBbIDEwIF0sIFsgMjAgXSBdClsgMSwgMyBd",
});
