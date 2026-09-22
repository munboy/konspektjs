// Тесты к задаче 01-chto-vyvedet.js. Запуск: node 07-json/01-chto-vyvedet.test.js
const { runOutput } = require('../_lib/check');

runOutput(__dirname, {
  task: "01-chto-vyvedet.js",
  answerVar: "answer",
  block: 7, no: 1, must: true,
  // правильный вывод спрятан, чтобы не подсматривать
  expected: "eyJuYW1lIjoiS2F0ZSIsImJvcm4iOiIyMDAwLTAxLTAxVDAwOjAwOjAwLjAwMFoiLCJza2lsbHMiOlsianMiLG51bGwsbnVsbF0sInNjb3JlIjpudWxsfQpbe30sbnVsbCwwXQpudWxs",
});
