// Тесты к задаче 02-chto-vyvedet.js. Запуск: node 12-ekzamen/02-chto-vyvedet.test.js
const { runOutput } = require('../_lib/check');

runOutput(__dirname, {
  task: "02-chto-vyvedet.js",
  answerVar: "answer",
  block: 12, no: 2, must: false,
  // правильный вывод спрятан, чтобы не подсматривать
  expected: "eyBrYXRlOiAzNSwgbWF4OiAxMCB9Cm1heCxrYXRlCnsia2F0ZSI6MzUsIm1heCI6MTB9IFsia2F0ZSIsNCwibWF4IiwzXQ==",
});
