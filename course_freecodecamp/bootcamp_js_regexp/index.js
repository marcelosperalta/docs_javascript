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


// Match Single Character with Multiple Possibilities

let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/ig;
let result = quoteSample.match(vowelRegex);
console.log(result); // [
//                        'e', 'a', 'e', 'o', 'u', 'i',
//                        'e', 'a', 'o', 'e', 'o', 'e',
//                        'I', 'a', 'e', 'o', 'o', 'e',
//                        'i', 'o', 'e', 'o', 'i', 'e',
//                        'i'
//                      ]


// Match Letters of the Alphabet

let quoteSample = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /change/; // Change this line
let result = alphabetRegex;   // Change this line

let quoteSample = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/ig; 
let result = quoteSample.match(alphabetRegex);
console.log(result); // [
//                        'T', 'h', 'e', 'q', 'u', 'i', 'c',
//                        'k', 'b', 'r', 'o', 'w', 'n', 'f',
//                        'o', 'x', 'j', 'u', 'm', 'p', 's',
//                        'o', 'v', 'e', 'r', 't', 'h', 'e',
//                        'l', 'a', 'z', 'y', 'd', 'o', 'g'
//                      ]


// Match Numbers and Letters of the Alphabet

let quoteSample = "Blueberry 3.141592653s are delicious.";
let myRegex = /change/; // Change this line
let result = myRegex;   // Change this line

let quoteSample = "Blueberry 3.141592653s are delicious.";
let myRegex = /[h-s2-6]/ig;
let result = quoteSample.match(myRegex);
console.log(result); // [
//                        'l', 'r', 'r', '3', '4',
//                        '5', '2', '6', '5', '3',
//                        's', 'r', 'l', 'i', 'i',
//                        'o', 's'
//                      ]


// Match Single Characters Not Specified

let quoteSample = "3 blind mice.";
let myRegex = /change/; // Change this line
let result = myRegex;   // Change this line

let quoteSample = "3 blind mice.";
let myRegex = /[^aeiou0-9]/gi;
let result = quoteSample.match(myRegex);
console.log(result); // [
//                        ' ', 'b', 'l',
//                        'n', 'd', ' ',
//                        'm', 'c', '.'
//                      ]


// Match Characters that Occur One or More Times

let difficultSpelling = "Mississippi";
let myRegex = /change/; // Change this line
let result = difficultSpelling.match(myRegex);

let difficultSpelling = "Mississippi";
let myRegex = /s+/g; 
let result = difficultSpelling.match(myRegex);
console.log(result); // [ 'ss', 'ss' ]


// Match Characters that Occur Zero or More Times

// Only change code below this line
let chewieRegex = /change/; // Change this line
// Only change code above this line
let result = chewieQuote.match(chewieRegex);

let chewieQuote = "Aaaaaaaaaaaaaaaarrrgh!";
let chewieRegex = /Aa*/;
let result = chewieQuote.match(chewieRegex);
console.log(result); // 