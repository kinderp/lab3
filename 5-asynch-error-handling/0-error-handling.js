const fs = require("node:fs");

try {
    const rawData = fs.readFileSync("data.json");
    const dataObj = JSON.parse(rawData);
    console.log(dataObj);
} catch (err) {
    // err is an object with 3 properties:
    // 1. name, 2. message, 3. stack
    console.log(`Error name: ${err.name}`);
    console.log(`Error message: ${err.message}`);
    //console.log(`Error stack ${err.stack}`);
}
