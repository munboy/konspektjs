// Тесты к задаче 09-chto-vyvedet.js. Запуск: node 02-object/09-chto-vyvedet.test.js
const { runOutput } = require('../_lib/check');

runOutput(__dirname, {
  task: "09-chto-vyvedet.js",
  answerVar: "answer",
  block: 2, no: 9, must: true,
  // правильный вывод спрятан, чтобы не подсматривать
  expected: "S2F0ZSBBbm4gTWF4ClsgJ2pzJywgJ2NzcycgXSB0cnVl",
});
