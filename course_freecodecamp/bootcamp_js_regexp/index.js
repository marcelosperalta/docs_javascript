// Using the Test Method

let testStr = "freeCodeCamp";
let testRegex = /Code/;
console.log(testRegex.test(testStr)); // true

let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex; // Change this line

let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString);
console.log(result); // true


// Match Literal Strings

let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /search/; // Change this line
let result = waldoRegex.test(waldoIsHiding);

let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /Waldo/;
let result = waldoRegex.test(waldoIsHiding);
console.log(result); // true


// Match a Literal String with Different Possibilities

let petString = "James has a pet cat.";
let petRegex = /change/; // Change this line
let result = petRegex.test(petString);

let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/;
let result = petRegex.test(petString);
console.log(result); // true


// Ignore Case While Matching

let myString = "freeCodeCamp";
let fccRegex = /change/; // Change this line
let result = fccRegex.test(myString);

let myString = "freeCodeCamp";
let fccRegex = /freeCodeCamp/i;
let result = fccRegex.test(myString);
console.log(result); // true

let myString = "freecodecamp";
let fccRegex = /freeCodeCamp/i;
let result = fccRegex.test(myString);
console.log(result); // true

let myString = "FreeCodeCamp";
let fccRegex = /freeCodeCamp/i;
let result = fccRegex.test(myString);
console.log(result); // true