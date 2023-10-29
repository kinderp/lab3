const fs = require("node:fs");
const { serialize } = require("node:v8");

obj1 = {
    firstName: "Antonio",
    lastName: "Caristia",
    age: 39
}

obj2 = {
    firstName: "Roberto",
    lastName: "Baggio",
    age: 56
}

objData = [obj1, obj2];

serData = JSON.stringify(objData);

fs.writeFile("file.json", serData, () => {
    console.log("file1.json has been written");
    fs.writeFile("file2.json", serData, () => {
        console.log("file2.json has been written");
        fs.writeFile("file3.json", serData, () => {
            console.log("file3.json has been written");
        });
    });
});