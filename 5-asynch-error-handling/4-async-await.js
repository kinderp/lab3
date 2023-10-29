const fsp = require('node:fs/promises');

data = {
    1: "uno",
    2: "due",
    3: "tre",
    4: "quattro"
}

data = JSON.stringify(data);

async function writeFiles(){
    await fsp.writeFile("file1.json", data);
    await fsp.writeFile("file2.json", data);
    await fsp.writeFile("file3.json", data);
}

writeFiles().then(() => console.log("All files have been written"));
console.log("---");