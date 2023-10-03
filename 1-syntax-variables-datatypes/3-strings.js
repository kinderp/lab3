let firstName = "Antonio";
let lastName = "Caristia";
let title = "Engineer";
title = "Prof";

// string concatenation with plus operator
let fullName = firstName + " " + lastName;

// string concatenation with ` (backtips)
fullName = `${firstName} ${lastName}`;
console.log(fullName);

// creating multiline strings with \n
let bio = "line 1\nline 2\nline 3\n";
console.log(bio);
//creating multiline with backtips
bio = `Once upon a time...
.....
.....
and they all lived happily ever after
`
console.log(bio);

// Escaping characters
let antonioSays = '"Javascript is great!"';
console.log(antonioSays);
antonioSays = "\"Javascript is great!\""
console.log(antonioSays);
antonioSays = `
"Javascript is great!" 
'Javascript is great!'
`;
console.log(antonioSays);

// String length
let length = antonioSays.length;
console.log(`antonioSays var is ${length} chars`);

// Indexing strings
let secondChar = antonioSays[1];
console.log(`2nd char is ${secondChar}`);

// Changing Case
let upperCaseName = fullName.toUpperCase();
console.log(upperCaseName);
let lowerCase = fullName.toLowerCase();
console.log(lowerCase);

// Substring
let doesContain = fullName.includes("Car");
console.log(doesContain);
