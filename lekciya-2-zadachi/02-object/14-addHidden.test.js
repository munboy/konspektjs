// Тесты к задаче 14-addHidden.js. Запуск: node 02-object/14-addHidden.test.js
const { runTask } = require('../_lib/check');

runTask(__dirname, {
  task: "14-addHidden.js",
  fn: "addHidden",
  block: 2, no: 14, must: false,
  rules: {},
  setup: ["const u = addHidden({ name: 'Kate' }, 'id', 7);"],
  tests: [
    ["u.id", "7"],
    ["Object.keys(u)", "['name']"],
    ["JSON.stringify(u)", "'{\"name\":\"Kate\"}'"],
    ["'id' in u", "true"],
    ["Object.getOwnPropertyNames(u)", "['name', 'id']"],
  ],
});
