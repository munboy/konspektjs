// Тесты к задаче 08-chto-vyvedet.js. Запуск: node 03-array/08-chto-vyvedet.test.js
const { runOutput } = require('../_lib/check');

runOutput(__dirname, {
  task: "08-chto-vyvedet.js",
  answerVar: "answer",
  block: 3, no: 8, must: true,
  // правильный вывод спрятан, чтобы не подсматривать
  expected: "WyA8MyBlbXB0eSBpdGVtcz4gXSBbIDAsIDIsIDQgXSBbIDEsIDIgXQpbIDEsIDwxIGVtcHR5IGl0ZW0+LCAzIF0gMyBbIDEwLCA8MSBlbXB0eSBpdGVtPiwgMzAgXQ==",
});
