const fs = require("node:fs/promises");

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


fs.writeFile("file.json", serData)
    .then(() => {
        console.log("file.json has been written");
        fs.writeFile("file1.json", serData);
    })
    .then(() => {
        console.log("file1.json has been written");
        fs.writeFile("file2.json", serData);
    })
    .then(() => {
        throw new Error("errore fatale");
        console.log("file2.json has been written");
        fs.writeFile("file3.json", serData);
    })
    .then(() => {
        console.log("file3 has been written");
    })
    .catch(err => console.log(err.message));

// let's make a promise api from a callback one!
const fsc = require("node:fs");

async function writeFile(filename, data){
    return new Promise((resolve, reject) => {
        fsc.writeFile(filename, data, (err) => {
            if(err) reject(err);
            resolve(data);
        });
    });
}