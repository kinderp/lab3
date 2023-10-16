// Function declaration
function add(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

// Using fucntion
let a = 2;
let b = 1;
let c = add(a, b);
console.log(`${a} + ${b} = ${c}`);

// function expression

const add_ = function (a, b) {
    return a + b;
}
let d = add_(a, b);
console.log(`${a} + ${b} = ${d}`);


const sub_ = function (a, b) {
    return a - b;
}

function calc(a, b, op) {
    return op(a, b);
}

let res1 = calc(a, b, add_);
console.log(res1)
let res2 = calc(a, b, sub_);
console.log(res2);

//multiline arrow function (compact alternative to a func expression)
const add2 = (a, b) => {
    return a + b;
}

const sub2 = (a, b) => {
    return a - b;
}

const calc2 = (a, b, op) => {
    return op(a,b);
}

let res4 = add2(a, b);
console.log(res4);
let res5 = sub2(a, b);
console.log(res5);

// single line arrow function
const printLineBreak = () => console.log("\n");
console.log("Ciao");
printLineBreak();
console.log("Mondo");


const add3 = (a, b) => a + b;
const sub3 = (a, b) => a - b;
const calc3 = (a, b, op) => op(a, b);
let res6 = add3(a, b);
let res7 = sub3(a, b);
console.log(res6);
console.log(res7);

let res_add3 = calc3(a, b, add3);
let res_sub3 = calc3(a, b, sub3);
console.log(res_add3);
console.log(res_sub3);

// High Order function (functions that return another function)
let calculator1 = (a, b, command) => {
    if(typeof command !== 'string'){
        return () => { 
            return `Command must be a String like:
                    add
                    sub
                    `
        }
    }
    let op;
    switch(command){
        case "add":
            return (a, b) => {
                return a + b;
            } 
            break;
        case "sub":
            return (a, b) => {
                return a - b;
            }
            break;
        default:
            return (a, b) => "Bad command";
    }
}

console.log(calculator1(a, b, "add")(a, b));
console.log(calculator1(a, b, "sub")(a, b));
console.log(calculator1(a, b, 1234)(a, b));
console.log(calculator1(a, b, "aaa")(a, b));

