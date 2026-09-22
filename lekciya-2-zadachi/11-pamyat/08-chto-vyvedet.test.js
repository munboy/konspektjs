// Тесты к задаче 08-chto-vyvedet.js. Запуск: node 11-pamyat/08-chto-vyvedet.test.js
const { runOutput } = require('../_lib/check');

runOutput(__dirname, {
  task: "08-chto-vyvedet.js",
  answerVar: "answer",
  block: 11, no: 8, must: true,
  // правильный вывод спрятан, чтобы не подсматривать
  expected: "MiAxMCBiIC0xIDEuNSBhIDAxCjggeyIyIjoxLCIxMCI6MSwiYiI6MSwiLTEiOjEsIjEuNSI6MSwiYSI6MSwiMDEiOjF9ClsgJ2InLCAyLCAxMCBd",
});
