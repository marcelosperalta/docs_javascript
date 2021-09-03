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


// Extract Matches

let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /change/; // Change this line
let result = extractStr;    // Change this line

let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/;
let result = extractStr.match(codingRegex);
console.log(result); // [
//                        'coding',
//                        index: 18,
//                        input: "Extract the word 'coding' from this string.",
//                        groups: undefined
//                      ]


// Find More Than the First Match

let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /change/; // Change this line
let result = twinkleStar; // Change this line

let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /Twinkle/gi;
let result = twinkleStar.match(starRegex);
console.log(result); // [ 'Twinkle', 'twinkle' ]


// Match Anything with Wildcard Period

let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /change/; // Change this line
let result = unRegex.test(exampleStr);

let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un./;
let result = unRegex.test(exampleStr);
console.log(result); // true