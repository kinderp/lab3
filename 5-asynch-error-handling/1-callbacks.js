const fs = require("node:fs");

// https://nodejs.org/docs/latest-v20.x/api/fs.html#fsreadfilepath-options-callback

/*
fs.readFile("data.json", (err, data) => {
    if (err) throw err;
    const objData = JSON.parse(data);
    console.log(objData);
});
*/

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

const myCallbackFunction = function (err) {
    if (err) throw err;
    console.log("data.json has been written");
}

fs.writeFile("data.json", serData, myCallbackFunction);

/*
fs.writeFile("data.json", serData, function (err) {
    if (err) throw err;
    console.log("data.json has been written");
});

fs.writeFile("data.json", serData, (err) => {
    if (err) throw err;
    console.log("data.json has been written");
});
*/

fs.readFile("data.json", (err, data) => {
    if (err) throw err;
    const objData = JSON.parse(data);
    console.log(objData);
});
