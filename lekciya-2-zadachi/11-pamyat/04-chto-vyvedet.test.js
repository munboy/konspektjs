// Тесты к задаче 04-chto-vyvedet.js. Запуск: node 11-pamyat/04-chto-vyvedet.test.js
const { runOutput } = require('../_lib/check');

runOutput(__dirname, {
  task: "04-chto-vyvedet.js",
  answerVar: "answer",
  block: 11, no: 4, must: true,
  // правильный вывод спрятан, чтобы не подсматривать
  expected: "eyB2aXNpdHM6IDEgfSBmYWxzZSB1bmRlZmluZWQgdW5kZWZpbmVkClR5cGVFcnJvcjogSW52YWxpZCB2YWx1ZSB1c2VkIGFzIHdlYWsgbWFwIGtleQpUeXBlRXJyb3I6IEludmFsaWQgdmFsdWUgdXNlZCBpbiB3ZWFrIHNldA==",
});
