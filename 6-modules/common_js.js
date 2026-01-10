const fs = require("node:fs/promises");
const localFile = require("./myFile");
const sampleJSON = require("./sample.json");

const loadData = async () => {
    const data = await fs.readFile("./data.json");
    return JSON.parse(data);
};

module.exports.jsonData = sampleJSON;
module.exports.loadData = loadData;