let arr1 = [];
let arr2 = new Array();

let arr3 = ["Antonio", "Giuseppe", "Francesco"];
let arr4 = new Array("Antonio","Giuseppe","Francesco");

console.log(`arr3: ${arr3}`);
console.log(`arr4: ${arr4}`);

let arr5 = new Array();
arr5.push("Antonio");
arr5.push("Giuseppe");
arr5.push("Francesco");
console.log(`arr5: ${arr5}`);

arr5.shift();
console.log(`arr5: ${arr5}`);
arr5.unshift("Antonio");
console.log(`arr5: ${arr5}`);

arr5.splice(1, 0, "Sofia");
console.log(`arr5: ${arr5}`);
arr5.splice(1, 1);
console.log(`arr5: ${arr5}`);


console.log(arr5.includes("Antonio"));
console.log(arr5.indexOf("Antonio"));

for(let i=0; i<arr5.length; i++){
    console.log(
        `${arr5[i]}`
    );
}

for(let name of arr5){
    console.log(
        name
    );
}

let j = 0;
while(j<arr5.length){
    console.log(
        `${arr5[j]}`
    );
    j++;
}

arr5.push("Ultimo");
console.log(arr5);
arr5.pop();
console.log(arr5);

arr5.shift();
console.log(arr5);
arr5.unshift("Antonio");
console.log(arr5);

arr5.splice(1, 1);
console.log(arr5);
arr5.splice(1, 0, "Giuseppe");
console.log(arr5);




let obj1 = {}
let obj2 = new Object();
console.log(obj1);
console.log(obj2);

let obj3 = {
    firstName: "Antonio",
    lastName: "Caristia",
    age: 39
};
console.log(obj3);

obj2.firstName = "Roberto";
obj2.lastName = "Baggio";
console.log(obj2);

let players = [obj2, obj3];
console.log(players);

for(let player of players){
    console.log(
        `${player.firstName} ${player.lastName}`
        );
}

let map1 = new Map();
map1.set("firstName", "Antonio");
map1.set("lastName", "Caristia");
console.log(map1)

map1.delete("firstName");

map2 = new Map();
map2.set(1, "uno");
map2.set(2, "due");
map2.set(3, "tre");
map2.set(4, "quattro");
for(let [key, value] of map2){
    console.log(`${key} => ${value}`);
}

console.log(map2.keys());
for(let key of map2.keys()){
    console.log(map2.get(key));
}
console.log(map2.values());
console.log(map2.entries());
for(let [key, value] of map2){
    console.log(
        `${key} => ${value}`
    );
}
map2.delete(2);
console.log(map2);

set1 = new Set();
set1.add("Antonio");
set1.add("Antonio");
console.log(set1);

set1.delete("Antonio");
console.log(set1);

//passaggio per valore
let a = "Antonio";
let b;
b = a;
b = "Giuseppe";
console.log(a);
console.log(b);

let a2 = {
    name: "Antonio"
};

let b2 = {
    name: "Giuseppe"
};

b2 = a2;
b2.name = "Francesco"
console.log(b2.name);
console.log(a2.name);

a = 1;
b = 2;
function swap(a, b){
    b = a
}
console.log(a);
console.log(b);

a2 = {
    n: 1
}

b2 = {
    n: 2
}

function swap2(a, b){
    b.n = a.n;
}
swap2(a2, b2);
console.log(a2.n);
console.log(b2.n);



