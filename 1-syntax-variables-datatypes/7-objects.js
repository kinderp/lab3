// Create Objects with literals
let obj1 = {};

// Create Objects with constructors
let obj2 = new Object(); // new operator

// populate an object
obj1.firstName = "Antonio";
obj1.lastName = "Caristia";
obj1.isPresent = true;
obj1.birthDate = new Date("June 15, 1984");
obj1.age = 39;
console.log(obj1);

// populate an object with literals
let obj3 = {
    firstName: "Antonio",
    lastName: "Caristia",
    isPresent: true,
    birthDate: new Date("June 15, 1984"),
    age: 39,
};
console.log(obj3)

// accessing properties from an object
console.log(`Firt Name: ${obj3.firstName}`);
console.log(`Last Name: ${obj3.lastName}`);
console.log(`Is Present: ${obj1.isPresent}`);
console.log(`Age: ${obj1.age}`);

// delete properties from an object
delete obj3.age;
console.log(obj3);
console.log(obj3.age);

// objects are passed by reference not by value
let obj4 = obj3;
obj4.firstName = "Nino";
console.log(obj3);
