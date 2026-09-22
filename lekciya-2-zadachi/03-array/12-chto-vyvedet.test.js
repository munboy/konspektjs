// Тесты к задаче 12-chto-vyvedet.js. Запуск: node 03-array/12-chto-vyvedet.test.js
const { runOutput } = require('../_lib/check');

runOutput(__dirname, {
  task: "12-chto-vyvedet.js",
  answerVar: "answer",
  block: 3, no: 12, must: true,
  // правильный вывод спрятан, чтобы не подсматривать
  expected: "WyAxLCBOYU4sIE5hTiBdClsgMSwgMTAsIDEwMCwgOSBdClsgMSwgOSwgMTAsIDEwMCBdClsgMSwgMiwgWyAzLCBbIDQgXSBdIF0gWyAxLCAyLCAzLCA0IF0=",
});
