// Тесты к задаче 06-formatInZone.js. Запуск: node 09-intl/06-formatInZone.test.js
const { runTask } = require('../_lib/check');

runTask(__dirname, {
  task: "06-formatInZone.js",
  fn: "formatInZone",
  block: 9, no: 6, must: false,
  rules: {},
  setup: ["const noon = new Date(Date.UTC(2024, 2, 15, 12));"],
  tests: [
    ["formatInZone(noon, 'Asia/Tokyo')", "'21:00'"],
    ["formatInZone(noon, 'UTC')", "'12:00'"],
    ["formatInZone(noon, 'Asia/Kolkata')", "'17:30'"],
    ["formatInZone(noon, 'America/New_York')", "'08:00'"],
    ["formatInZone(noon, 'Europe/Kyiv')", "'14:00'"],
  ],
});
