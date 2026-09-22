// Тесты к задаче 07-sortByMultiple.js. Запуск: node 06-sort/07-sortByMultiple.test.js
const { runTask } = require('../_lib/check');

runTask(__dirname, {
  task: "07-sortByMultiple.js",
  fn: "sortByMultiple",
  block: 6, no: 7, must: false,
  rules: {},
  setup: ["const users = [{ name: 'Kate', age: 25 }, { name: 'Ann', age: 30 }, { name: 'Bob', age: 25 }];"],
  tests: [
    ["sortByMultiple(users, ['age', 'name']).map(u => u.name)", "['Bob', 'Kate', 'Ann']"],
    ["sortByMultiple(users, ['-age', 'name']).map(u => u.name)", "['Ann', 'Bob', 'Kate']"],
    ["sortByMultiple(users, []).map(u => u.name)", "['Kate', 'Ann', 'Bob']"],
    ["users[0].name", "'Kate'"],
  ],
});
