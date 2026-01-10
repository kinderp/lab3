import { readFile } from "node:fs/promises";
import * as local from "./myFile.js";
import sampleJson from "./sample.json" assert {type: "json"};

const loadData = async () => {
    const data = await readFile("./data.json");
    return JSON.parse(data);
};

export {
    jsonData,
    loadData
}