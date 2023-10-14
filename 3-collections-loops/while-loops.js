// Array of Complex Objects
const fs = require('fs');
let employees = JSON.parse(fs.readFileSync('./3-collections-loops/data.json').toString());


// Basic while loop
let i = 0;
while(employees[i]) {
  console.log(`Name: ${employees[i].firstName} ${employees[i].lastName}`);
  i++;
}

console.log('-----');

// Do while loop
i = 0;
do {
  console.log(`Name: ${employees[i].firstName} ${employees[i].lastName}`);
  i++;
} while(employees[i]);


