// https://nodejs.org/docs/latest-v20.x/api/fs.html#synchronous-example
const fs = require("node:fs");

const rawData = fs.readFileSync("data.json");
const objData = JSON.parse(rawData);
console.log(objData);