// Тесты к задаче 06-deepCloneCycles.js. Запуск: node 11-pamyat/06-deepCloneCycles.test.js
const { runTask } = require('../_lib/check');

runTask(__dirname, {
  task: "06-deepCloneCycles.js",
  fn: "deepCloneCycles",
  block: 11, no: 6, must: false,
  rules: {},
  setup: ["const a = { name: 'A', list: [1, 2] };","a.self = a;","a.list.push(a);","const b = deepCloneCycles(a);","const shared = { x: 1 };","const pair = deepCloneCycles([shared, shared]);"],
  tests: [
    ["b !== a", "true"],
    ["b.self === b", "true"],
    ["b.list[2] === b", "true"],
    ["b.list !== a.list", "true"],
    ["b.name", "'A'"],
    ["pair[0] === pair[1]", "true"],
    ["pair[0] !== shared", "true"],
    ["deepCloneCycles(5)", "5"],
  ],
});
