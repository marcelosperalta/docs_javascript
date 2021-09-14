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
console.log(result); // [
//                        'Aaaaaaaaaaaaaaaa',
//                        index: 0,
//                        input: 'Aaaaaaaaaaaaaaaarrrgh!',
//                        groups: undefined
//                      ]


// Find Characters with Lazy Matching

let text = "<h1>Winter is coming</h1>";
let myRegex = /<.*>/; // Change this line
let result = text.match(myRegex);

let text = "<h1>Winter is coming</h1>";
let myRegex = /<h[0-9]*?1>/;
let result = text.match(myRegex);
console.log(result); // [
//                        '<h1>',
//                        index: 0,
//                        input: '<h1>Winter is coming</h1>',
//                        groups: undefined
//                      ]


// Find One or More Criminals in a Hunt

let reCriminals = /./; // Change this line

let reCriminals = /c+|C+/g;


// Match Beginning String Patterns

let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /change/; // Change this line
let result = calRegex.test(rickyAndCal);

let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/;
let result = calRegex.test(rickyAndCal);
console.log(result); // true


// Match Ending String Patterns

let caboose = "The last car on a train is the caboose";
let lastRegex = /change/; // Change this line
let result = lastRegex.test(caboose);

let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/;
let result = lastRegex.test(caboose);
console.log(result); // true


// Match All Letters and Numbers

let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /change/; // Change this line
let result = quoteSample.match(alphabetRegexV2).length;

let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/g;
let result = quoteSample.match(alphabetRegexV2).length;
console.log(result); // 31


// Match Everything But Letters and Numbers

let quoteSample = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /change/; // Change this line
let result = quoteSample.match(nonAlphabetRegex).length;

let quoteSample = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/g;
let result = quoteSample.match(nonAlphabetRegex).length;
console.log(result); // 6


// Match All Numbers

let movieName = "2001: A Space Odyssey";
let numRegex = /change/; // Change this line
let result = movieName.match(numRegex).length;

let movieName = "2001: A Space Odyssey";
let numRegex = /\d/g;
let result = movieName.match(numRegex).length;
console.log(result); // 4


// Match All Non-Numbers

let movieName = "2001: A Space Odyssey";
let noNumRegex = /change/; // Change this line
let result = movieName.match(noNumRegex).length;

let movieName = "2001: A Space Odyssey";
let noNumRegex = /\D/g;
let result = movieName.match(noNumRegex).length;
console.log(result); // 17


// Restrict Possible Usernames

// 1. Usernames can only use alpha-numeric characters.
// 2. The only numbers in the username have to be at the end. 
//    There can be zero or more of them at the end. Username cannot start with the number.
// 3. Username letters can be lowercase and uppercase.
// 4. Usernames have to be at least two characters long. 
//    A two-character username can only use alphabet letters as characters.

let username = "JackOfAllTrades";
let userCheck = /change/; // Change this line
let result = userCheck.test(username);

let username = "JackOfAllTrades";
let userCheck = /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/i;
let result = userCheck.test(username);
console.log(result); // true


// Match Whitespace

let sample = "Whitespace is important in separating words";
let countWhiteSpace = /change/; // Change this line
let result = sample.match(countWhiteSpace);

let sample = "Whitespace is important in separating words";
let countWhiteSpace = /\s/g;
let result = sample.match(countWhiteSpace);
console.log(result); // [ ' ', ' ', ' ', ' ', ' ' ]


// Match Non-Whitespace Characters

let sample = "Whitespace is important in separating words";
let countNonWhiteSpace = /change/; // Change this line
let result = sample.match(countNonWhiteSpace);

let sample = "Whitespace is important in separating words";
let countNonWhiteSpace = /\S/g;
let result = sample.match(countNonWhiteSpace);
console.log(result); // [
//                        'W', 'h', 'i', 't', 'e', 's', 'p',
//                        'a', 'c', 'e', 'i', 's', 'i', 'm',
//                        'p', 'o', 'r', 't', 'a', 'n', 't',
//                        'i', 'n', 's', 'e', 'p', 'a', 'r',
//                        'a', 't', 'i', 'n', 'g', 'w', 'o',
//                        'r', 'd', 's'
//                      ]


// Specify Upper and Lower Number of Matches

let ohStr = "Ohhh no";
let ohRegex = /change/; // Change this line
let result = ohRegex.test(ohStr);

let ohStr = "Ohhh no";
let ohRegex = /Oh{3,6} no/;
let result = ohRegex.test(ohStr);
console.log(result); // true


// Specify Only the Lower Number of Matches

let haStr = "Hazzzzah";
let haRegex = /change/; // Change this line
let result = haRegex.test(haStr);

let haStr = "Hazzzzah";
let haRegex = /Haz{4,}ah/;
let result = haRegex.test(haStr);
console.log(result); // true


// Specify Exact Number of Matches

let timStr = "Timmmmber";
let timRegex = /change/; // Change this line
let result = timRegex.test(timStr);

let timStr = "Timmmmber";
let timRegex = /Tim{4}ber/;
let result = timRegex.test(timStr);
console.log(result); // true


// Check for All or None

let favWord = "favorite";
let favRegex = /change/; // Change this line
let result = favRegex.test(favWord);

let favWord = "favorite";
let favRegex = /favou?rite/;
let result = favRegex.test(favWord);
console.log(result); // true


// Positive and Negative Lookahead

let sampleWord = "astronaut";
let pwRegex = /change/; // Change this line
let result = pwRegex.test(sampleWord);

let sampleWord = "astronaut";
let pwRegex = /(?=\w{6})(?=\w*\d{2})/;
let result = pwRegex.test(sampleWord);
console.log(result); // false


// Check For Mixed Grouping of Characters

let myString = "Eleanor Roosevelt";
let myRegex = /False/; // Change this line
let result = false; // Change this line
// After passing the challenge experiment with myString and see how the grouping works

let myString = "Eleanor Roosevelt";
let myRegex = /(Franklin|Eleanor)*Roosevelt/;
let result = myRegex.test(myString);
console.log(result); // true

let myString = "Franklin D. Roosevelt";
let myRegex = /(Franklin|Eleanor).*Roosevelt/;
let result = myRegex.test(myString);
console.log(result); // true

let myString = "Frank Roosevelt";
let myRegex = /(Franklin|Eleanor).*Roosevelt/;
let result = myRegex.test(myString);
console.log(result); // false

// Reuse Patterns Using Capture Groups

let repeatNum = "42 42 42";
let reRegex = /change/; // Change this line
let result = reRegex.test(repeatNum);

let repeatNum = "42 42 42";
let reRegex = /^(\d+)\s\1\s\1$/;
let result = reRegex.test(repeatNum);
let result2 = repeatNum.match(reRegex)
console.log(result);  // true
console.log(result2); // [ '42 42 42', '42', index: 0, input: '42 42 42', groups: undefined ]


// Use Capture Groups to Search and Replace

let str = "one two three";
let fixRegex = /change/; // Change this line
let replaceText = ""; // Change this line
let result = str.replace(fixRegex, replaceText);

let str = "one two three";
let fixRegex = /change/;
let replaceText = "";
let result = str.replace(fixRegex, replaceText);
