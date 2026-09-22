// Тесты к задаче 02-createDynamicArray.js. Запуск: node 10-pod-kapotom/02-createDynamicArray.test.js
const { runTask } = require('../_lib/check');

runTask(__dirname, {
  task: "02-createDynamicArray.js",
  fn: "createDynamicArray",
  block: 10, no: 2, must: true,
  rules: {},
  setup: ["const d = createDynamicArray();","d.push('a');","const d2 = createDynamicArray();","for (let i = 0; i < 18; i++) d2.push(i);","const d3 = createDynamicArray();","for (let i = 0; i < 1000; i++) d3.push(i);"],
  tests: [
    ["createDynamicArray().push('x')", "1"],
    ["d.length", "1"],
    ["d.capacity", "17"],
    ["d.get(0)", "'a'"],
    ["d.get(1)", "undefined"],
    ["d2.capacity", "43"],
    ["d2.get(17)", "17"],
    ["d3.length", "1000"],
    ["d3.copies", "2269"],
    ["d3.copies < 3 * d3.length", "true"],
  ],
});
