// Тесты к задаче 10-chto-vyvedet.js. Запуск: node 02-object/10-chto-vyvedet.test.js
const { runOutput } = require('../_lib/check');

runOutput(__dirname, {
  task: "10-chto-vyvedet.js",
  answerVar: "answer",
  block: 2, no: 10, must: false,
  // правильный вывод спрятан, чтобы не подсматривать
  expected: "eyBkOiAnMTk3MC0wMS0wMVQwMDowMDowMC4wMDBaJywgbjogbnVsbCwgbGlzdDogWyBudWxsLCAxIF0gfQpzdHJpbmc=",
});
