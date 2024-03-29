// MDN 
// https://developer.mozilla.org/


// JavaScript > JavaScript reference > Standard built-in objects > String:


// String Length                  -------------------------------------------------------------------------- //
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length
var strLength = "The length property of a String object contains the length of the string";
console.log(strLength.length); // expected output: 72
// --------------------------------------------------------------------------------------------------------- //


// String.prototype[@@iterator]() -------------------------------------------------------------------------- //
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/@@iterator
const str = 'ABC';
const strIter = str[Symbol.iterator]();
console.log(strIter.next().value); // expected output: A
console.log(strIter.next().value); // expected output: B
console.log(strIter.next().value); // expected output: C
const str2 = 'DEF';
const strIter2 = str2[Symbol.iterator]();
console.log(strIter2.next().value, strIter2.next().value, strIter2.next().value); // expected output: D E F
// --------------------------------------------------------------------------------------------------------- //


// String.prototype.charAt() ------------------------------------------------------------------------------- //
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charAt
const strCharAt = 'Returns a new string';
// index:        0123456789
console.log(strCharAt.charAt(4)); // expected output: "r"
console.log(strCharAt.charAt(9)); // expected output: " "
// --------------------------------------------------------------------------------------------------------- //


// String.prototype.charCodeAt() --------------------------------------------------------------------------- //
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt
const strCharCodeAt = 'Returns an integer between 0 and 65535';
// index:            0123456789
const index = 0;
console.log(`The character code ${strCharCodeAt.charCodeAt(index)} is equal to ${strCharCodeAt.charAt(index)}`); 
// expected output: "The character code 82 is equal to R"
// --------------------------------------------------------------------------------------------------------- //


// String.prototype.codePointAt() -------------------------------------------------------------------------- //
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/codePointAt
const icons = '☃★♲';
console.log(icons.codePointAt(1)); // expected output: "9733"
// 9733 Decimal = 2605 Hex => "BLACK STAR"
// https://www.unicode.org/charts/PDF/U2600.pdf
// https://www.unicode.org/charts/#symbols
// --------------------------------------------------------------------------------------------------------- //


// String.prototype.concat() ------------------------------------------------------------------------------- //
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/concat
const strConcat1 = "Hello";
const strConcat2 = "World";
console.log(strConcat1.concat(' ', strConcat2));  // expected output: "Hello World"
console.log(strConcat2.concat(', ', strConcat1)); // expected output: "World, Hello"
console.log(strConcat1 + " " + strConcat2);       // expected output: "Hello World"
console.log(strConcat1 + ", " + strConcat2);      // expected output: "Hello, World"
// --------------------------------------------------------------------------------------------------------- //


// String.prototype.endsWith() ----------------------------------------------------------------------------- //
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith
const strEndsWith = "Cats are the best!";
//                   0123456789        
console.log(strEndsWith.endsWith("!"))                            // expected output: "true"
console.log(strEndsWith.endsWith("!", 18))                        // expected output: "true"
console.log(strEndsWith.endsWith("best"))                         // expected output: "false"
console.log(strEndsWith.endsWith("!", 17))                        // expected output: "false"
console.log(strEndsWith.endsWith("best", 17))                     // expected output: "true"
console.log(strEndsWith.endsWith("best", strEndsWith.length - 1)) // expected output: "true"
// --------------------------------------------------------------------------------------------------------- //


// String.fromCharCode() ----------------------------------------------------------------------------------- //
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode
// Share on PinboardShare on HackerNewsShare on TwitterShare on FacebookShare on Reddit
// https://www.fileformat.info/info/charset/UTF-16/list.htm
console.log(String.fromCharCode(33));               // expected output: "!"
// UTF-16 (decimal) >  33 > https://www.fileformat.info/info/unicode/char/0021/index.htm
console.log(String.fromCharCode(189, 43, 190, 61)); // expected output: "½+¾="
// UTF-16 (decimal) > 189 > https://www.fileformat.info/info/unicode/char/00bd/index.htm
// UTF-16 (decimal) >  43 > https://www.fileformat.info/info/unicode/char/002b/index.htm
// UTF-16 (decimal) > 190 > https://www.fileformat.info/info/unicode/char/00be/index.htm
// UTF-16 (decimal) >  61 > https://www.fileformat.info/info/unicode/char/003d/index.htm
// --------------------------------------------------------------------------------------------------------- //


// String.fromCodePoint() ---------------------------------------------------------------------------------- //
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCodePoint
console.log(String.fromCodePoint(9731, 32, 9733, 32, 9842, 32, 0x4F60)); // expected output: "☃★♲你"
// UTF-16 (decimal) > 32      > "SPACE" > https://www.fileformat.info/info/unicode/char/0020/index.htm
// UTF-16 (decimal) > 9731    > ☃       > https://www.fileformat.info/info/unicode/char/2603/index.htm
// UTF-16 (decimal) > 9733    > ★       > https://www.fileformat.info/info/unicode/char/2605/index.htm
// UTF-16 (decimal) > 9842    > ♲       > https://www.fileformat.info/info/unicode/char/2672/index.htm
// UTF-16 (hex)     > 0x2F804 > 你       > https://www.fileformat.info/info/unicode/char/4f60/index.htm
// --------------------------------------------------------------------------------------------------------- //


// String.prototype.includes() ----------------------------------------------------------------------------- //
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
const sentence = "Return true or false";
console.log(sentence.includes("Return"));    // expected output: "true";
console.log(sentence.includes("Test"));      // expected output: "false";
console.log(sentence.includes("Return", 0)); // expected output: "true";
console.log(sentence.includes("Return", 1)); // expected output: "false";
console.log(sentence.includes("false", 15)); // expected output: "true";
console.log(sentence.includes("false", 16)); // expected output: "false";
// --------------------------------------------------------------------------------------------------------- //


// String.prototype.indexOf() ------------------------------------------------------------------------------ //
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf
const strIndexOf = "Returns the index within the calling String...";
console.log(strIndexOf.indexOf("Returns"));     // expected output: "0"
console.log(strIndexOf.indexOf("eturns"));      // expected output: "1"
console.log(strIndexOf.indexOf("and"));         // expected output: "-1"
console.log(strIndexOf.indexOf("Returns", 0));  // expected output: "0"
console.log(strIndexOf.indexOf("Returns", 1));  // expected output: "-1"
console.log(`-----`);
const strIndexOf2 = "And the and the and";
console.log(strIndexOf2.indexOf("And"));        // expected output: "0"
console.log(strIndexOf2.indexOf("and"));        // expected output: "8"
console.log(strIndexOf2.indexOf("Returns"));    // expected output: "-1"
console.log(`-----`);
const strIndexOf3 = "Returns";
console.log(strIndexOf3.indexOf("Returns"));    // expected output: "0"
console.log(strIndexOf3.indexOf("Returns", 0)); // expected output: "0"
console.log(strIndexOf3.indexOf("Returns", 1)); // expected output: "-1"
console.log(strIndexOf3.indexOf("Returns", 6)); // expected output: "-1"
console.log(`-----`);
console.log('Blue Whale'.indexOf('Whale', 0));  // returns  5
console.log('Blue Whale'.indexOf('Whale', 5));  // returns  5
// --------------------------------------------------------------------------------------------------------- //


// String.prototype.lastIndexOf() -------------------------------------------------------------------------- //
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/lastIndexOf
const strLastIndexOf = "The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?";
console.log(strLastIndexOf.lastIndexOf("dog"));  // expected output: "52"
console.log(strLastIndexOf.lastIndexOf("test")); // expected output: "-1"
// --------------------------------------------------------------------------------------------------------- //


// String.prototype.localeCompare() ------------------------------------------------------------------------ //
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare
console.log('a'.localeCompare('c'));           // expected output: "-2 or -1"
console.log('check'.localeCompare('against')); // expected output: "2 or 1"
console.log('a'.localeCompare('a'));           // expected output: "0"
console.log('b'.localeCompare('a'));           // expected output: "1"
console.log('c'.localeCompare('a'));           // expected output: "1"
console.log('d'.localeCompare('a'));           // expected output: "1"
console.log(`-----`);
let items = ['réservé', 'Premier', 'Cliché', 'communiqué', 'café', 'Adieu'];
items.sort( (a, b) => a.localeCompare(b, 'fr', {ignorePunctuation: true})); 
console.log(items)                             // expected output: "['Adieu', 'café', 'Cliché', 'communiqué', 'Premier', 'réservé']""
console.log(`-----`);
// in German, ä has a as the base letter
console.log('ä'.localeCompare('a', 'de', { sensitivity: 'base' })); // expected output: "0"
// in Swedish, ä and a are separate base letters
console.log('ä'.localeCompare('a', 'sv', { sensitivity: 'base' })); // expected output: a positive value
// --------------------------------------------------------------------------------------------------------- //


// String.prototype.match() -------------------------------------------------------------------------------- //
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match
const strMatch = "The quick brown fox jumps over the lazy dog. It barked."
const regex = /[A-Z]/g;
const found = strMatch.match(regex);
console.log(found);         // expected output: Array ["T", "I"]
console.log(`-----`);
const strMatch2 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
const regexp2 = /[A-E]/gi;
const matches_array = str.match(regexp2);
console.log(matches_array); // expected output: ['A', 'B', 'C', 'D', 'E', 'a', 'b', 'c', 'd', 'e']
// --------------------------------------------------------------------------------------------------------- //


// String.prototype.matchAll() ----------------------------------------------------------------------------- //
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/matchAll
const regexp = /t(e)(st(\d?))/g;
const strMatchAll = 'test1test2';
const arrayMatchAll = [...strMatchAll.matchAll(regexp)];
console.log(arrayMatchAll[0]); // expected output: Array ["test1", "e", "st1", "1"]
console.log(arrayMatchAll[1]); // expected output: Array ["test2", "e", "st2", "2"]
// --------------------------------------------------------------------------------------------------------- //


// String.prototype.normalize() ---------------------------------------------------------------------------- //
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/normalize
const name1 = '\u0041\u006d\u00e9\u006c\u0069\u0065';
const name2 = '\u0041\u006d\u0065\u0301\u006c\u0069\u0065';
console.log(`${name1}, ${name2}`);                // expected output: "Amélie, Amélie"
console.log(name1 === name2);                     // expected output: false
console.log(name1.length === name2.length);       // expected output: false
const name1NFC = name1.normalize('NFC');
const name2NFC = name2.normalize('NFC');
console.log(`${name1NFC}, ${name2NFC}`);          // expected output: "Amélie, Amélie"
console.log(name1NFC === name2NFC);               // expected output: true
console.log(name1NFC.length === name2NFC.length); // expected output: true
// --------------------------------------------------------------------------------------------------------- //


// String.prototype.padEnd() ------------------------------------------------------------------------------- //
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padEnd
const strPadEnd1 = 'Breaded Mushrooms';
console.log(strPadEnd1.padEnd(18, '.'));   // expected output: "Breaded Mushrooms."
const strPadEnd2 = 'Breaded Mushrooms';
console.log(strPadEnd2.padEnd(25, '.'));   // expected output: "Breaded Mushrooms........"
const strPadEnd3 = 'Breaded Mushrooms';
console.log(strPadEnd3.padEnd(25, '123')); // expected output: "Breaded Mushrooms12312312"
const strPadEnd4 = '200';
console.log(strPadEnd4.padEnd(5));         // expected output: "200  "
const strPadEnd5 = '200';
console.log(strPadEnd5.padEnd(4, "abc"));  // expected output: "200a"
const strPadEnd6 = '200';
console.log(strPadEnd6.padEnd(6, "abc"));  // expected output: "200abc"
// --------------------------------------------------------------------------------------------------------- //


// String.prototype.padStart() ----------------------------------------------------------------------------- //
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart
const strPadStart1 = '5';
console.log(strPadStart1.padStart(2, '0')); // expected output: "05"
const strPadStart2 = '5';
console.log(strPadStart2.padStart(5, '0')); // expected output: "00005"
const fullNumber = '2034399002125581';
const last4Digits = fullNumber.slice(-4);
const maskedNumber = last4Digits.padStart(fullNumber.length, '*');
console.log(maskedNumber);                  // expected output: "************5581"
// --------------------------------------------------------------------------------------------------------- //


// String.raw() -------------------------------------------------------------------------------------------- //
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/raw

// Create a variable that uses a Windows path without escaping the backslashes:
const filePath = String.raw`C:\Development\profile\aboutme.html`;
console.log(`The file was uploaded from: ${filePath}`);
// expected output: "The file was uploaded from: C:\Development\profile\aboutme.html"

String.raw`Hi\n${2+3}!`;
// 'Hi\\n5!', the character after 'Hi'
// is not a newline character,
// '\' and 'n' are two characters.
// --------------------------------------------------------------------------------------------------------- //


// String.prototype.repeat() ------------------------------------------------------------------------------- //
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat
const chorus = 'Because I\'m happy. ';
console.log(`Chorus lyrics for "Happy": ${chorus.repeat(27)}`);
// expected output: 
// "Chorus lyrics for "Happy": Because I'm happy. Because I'm happy. Because I'm happy. 
// Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. 
// Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. 
// Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. 
// Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. 
// Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. 
// Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. "
'abc'.repeat(-1)    // RangeError
'abc'.repeat(0)     // ''
'abc'.repeat(3.5)   // 'abcabcabc' (count will be converted to integer)
// --------------------------------------------------------------------------------------------------------- //


// String.prototype.replace() ------------------------------------------------------------------------------ //
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace

const p = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';
console.log(p.replace('dog', 'monkey'));
// expected output: "The quick brown fox jumps over the lazy monkey. If the dog reacted, was it really lazy?"
const regex = /Dog/i;
console.log(p.replace(regex, 'ferret'));
// expected output: "The quick brown fox jumps over the lazy ferret. If the dog reacted, was it really lazy?"

let str = 'Twas the night before Xmas...';
let newstr = str.replace(/xmas/i, 'Christmas');
console.log(newstr);  // Twas the night before Christmas...

let re = /apples/gi;
let str = 'Apples are round, and apples are juicy.';
let newstr = str.replace(re, 'oranges');
console.log(newstr);  // oranges are round, and oranges are juicy.

let re = /(\w+)\s(\w+)/;
let str = 'John Smith';
let newstr = str.replace(re, '$2, $1');
console.log(newstr);  // Smith, John

function styleHyphenFormat(propertyName) {
    function upperToHyphenLower(match, offset, string) {
      return (offset > 0 ? '-' : '') + match.toLowerCase();
    }
    return propertyName.replace(/[A-Z]/g, upperToHyphenLower);
  }
console.log(styleHyphenFormat('borderTop')); // border-top

// Replacing a Fahrenheit degree with its Celsius equivalent
function f2c(x) {
    function convert(str, p1, offset, s) {
      return ((p1 - 32) * 5/9) + 'C';
    }
    let s = String(x);
    let test = /(-?\d+(?:\.\d*)?)F\b/g;
    return s.replace(test, convert);
  }
console.log(f2c("86F")); // 30C
// --------------------------------------------------------------------------------------------------------- //


// String.prototype.replaceAll() --------------------------------------------------------------------------- //
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replaceAll

const p = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';
console.log(p.replaceAll('dog', 'monkey'));
// expected output: "The quick brown fox jumps over the lazy monkey. If the monkey reacted, was it really lazy?"

// global flag required when calling replaceAll with regex
const regex = /Dog/ig;
console.log(p.replaceAll(regex, 'ferret'));
// expected output: "The quick brown fox jumps over the lazy ferret. If the ferret reacted, was it really lazy?"
// --------------------------------------------------------------------------------------------------------- //


// String.prototype.search() ------------------------------------------------------------------------------- //
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

const paragraph = 'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?';
const regex = /[^\w\s]/g; // any character that is not a word character or whitespace
console.log(paragraph.search(regex));            // expected output: 43
console.log(paragraph[paragraph.search(regex)]); // expected output: "."

let str = "hey JudE"
let re = /[A-Z]/g
let reDot = /[.]/g
console.log(str.search(re))    // returns 4, which is the index of the first capital letter "J"
console.log(str.search(reDot)) // returns -1 cannot find '.' dot punctuation
// --------------------------------------------------------------------------------------------------------- //


// String.prototype.slice() -------------------------------------------------------------------------------- //
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice

// The zero-based index
//           0123456789                                 43
//                     10                   31
//                                                     -1
//                                                  -4
//                                   -19       -9  -5
const str = 'The quick brown fox jumps over the lazy dog.';
console.log(str.slice(31));      // expected output: "the lazy dog."
console.log(str.slice(4, 19));   // expected output: "quick brown fox"´
console.log(str.slice(43));      // expected output: "."
console.log(str.slice(-1));      // expected output: "."
console.log(str.slice(-4));      // expected output: "dog."
console.log(str.slice(-9, -5));  // expected output: "lazy"
console.log(str.slice(44));      // expected output: "" (an empty string is returned)
console.log(str.slice(-43));     // expected output: "he quick brown fox jumps over the lazy dog."
console.log(str.slice(-44));     // expected output: "The quick brown fox jumps over the lazy dog."
console.log(str.slice(10, -19)); // expected output: "brown fox jumps"
// --------------------------------------------------------------------------------------------------------- //


// String.prototype.split() -------------------------------------------------------------------------------- //
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split

const str = 'The quick brown fox jumps over the lazy dog.';

const words = str.split(' ');
console.log(words[3]); // expected output: "fox"

const chars = str.split('');
console.log(chars[8]); // expected output: "k"

const strCopy = str.split();
console.log(strCopy); // expected output: Array ["The quick brown fox jumps over the lazy dog."]

function splitString(stringToSplit, separator) {
  const arrayOfStrings = stringToSplit.split(separator)

  console.log('The original string is: ', stringToSplit)
  console.log('The separator is: ', separator)
  console.log('The array has ', arrayOfStrings.length, ' elements: ', arrayOfStrings.join(' / '))
}
const tempestString = 'Oh brave new world that has such people in it.'
const monthString = 'Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec'
const space = ' '
const comma = ','
splitString(tempestString, space) 
// The original string is:  Oh brave new world that has such people in it.
// The separator is:   
// The array has  10  elements:  Oh / brave / new / world / that / has / such / people / in / it.
splitString(tempestString)
// The original string is:  Oh brave new world that has such people in it.
// The separator is:  undefined
// The array has  1  elements:  Oh brave new world that has such people in it.
splitString(monthString, comma)
// The original string is:  Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec
// The separator is:  ,
// The array has  12  elements:  Jan / Feb / Mar / Apr / May / Jun / Jul / Aug / Sep / Oct / Nov / Dec

// // Removing spaces from a string
const names = 'Harry Trump ;Fred Barney; Helen Rigby ; Bill Abel ;Chris Hand '
console.log(names) // Harry Trump ;Fred Barney; Helen Rigby ; Bill Abel ;Chris Hand 
const re = /\s*(?:;|$)\s*/
const nameList = names.split(re)
console.log(nameList) // [
//                         'Harry Trump',
//                         'Fred Barney',
//                         'Helen Rigby',
//                         'Bill Abel',
//                         'Chris Hand',
//                         ''
//                       ]

// // Returning a limited number of splits
const myString = 'Hello World. How are you doing?'
const splits = myString.split(' ', 3)
console.log(splits) // [ 'Hello', 'World.', 'How' ]

// Splitting with a RegExp to include parts of the separator in the result
const myString = 'Hello 1 word. Sentence number 2.'
const splits = myString.split(/(\d)/)
console.log(splits) // [ 'Hello ', '1', ' word. Sentence number ', '2', '.' ]

// Reversing a String using split()
const str = 'asdfghjkl'
const strReverse = str.split('').reverse().join('') // 'lkjhgfdsa'
// Is it a palindrome?
console.log(str === strReverse); // false
const str2 = 'level'
const strReverse2 = str2.split('').reverse().join('') // 'level'
console.log(str2 === strReverse2); // true
// It doesn't work if the string contains grapheme clusters 
//: Use https://github.com/mathiasbynens/esrever
// --------------------------------------------------------------------------------------------------------- //


// String.prototype.startsWith() --------------------------------------------------------------------------- //
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith

const str1 = 'Saturday night plans';
console.log(str1.startsWith('Sat'));    // expected output: true
console.log(str1.startsWith('Sat', 3)); // expected output: false

// startswith
//         0123456789
//                   10
//                    11
let str = 'To be, or not to be, that is the question.'
console.log(str.startsWith('To be'))          // true
console.log(str.startsWith('not to be'))      // false
console.log(str.startsWith('not to be', 10))  // true
// --------------------------------------------------------------------------------------------------------- //


// String.prototype.substring() ---------------------------------------------------------------------------- //
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring

//           0123456
const str = 'Mozilla';
console.log(str.substring(1, 3)); // expected output: "oz"
console.log(str.substring(2));    // expected output: "zilla"

//               0123456
let anyString = 'Mozilla'
// Displays 'M'
console.log(anyString.substring(0, 1))
console.log(anyString.substring(1, 0))
// Displays 'Mozill'
console.log(anyString.substring(0, 6))
// Displays 'lla'
console.log(anyString.substring(4))
console.log(anyString.substring(4, 7))
console.log(anyString.substring(7, 4))
// Displays 'Mozilla'
console.log(anyString.substring(0, 7))
console.log(anyString.substring(0, 10))

// // using length
// Displays 'illa' the last 4 characters
//               0123456
let anyString = 'Mozilla'
let anyString4 = anyString.substring(anyString.length - 4)
console.log(anyString4)
// Displays 'zilla' the last 5 characters
//               0123456
let anyString = 'Mozilla'
let anyString5 = anyString.substring(anyString.length - 5)
console.log(anyString5)

// // The difference between substring() and substr()
//          0123456
let text = 'Mozilla'
console.log(text.substring(2,5))  // => "zil"
console.log(text.substr(2,3))     // => "zil" (legacy feature in ECMAScript)

// // Differences between substring() and slice()
//          0123456
let text = 'Mozilla'
console.log(text.substring(5, 2))   // => "zil"
console.log(text.slice(5, 2))       // => ""
console.log(text.substring(-5, 2))  // => "Mo"
console.log(text.substring(-5, -2)) // => ""
console.log(text.slice(-5, 2))      // => ""
console.log(text.slice(-5, -2))     // => "zil"

// // Replacing a substring within a string
// Replaces oldS with newS in the string fullS
function replaceString(oldS, newS, fullS) {
  for (let i = 0; i < fullS.length; ++i) {
    if (fullS.substring(i, i + oldS.length) == oldS) {
      fullS = fullS.substring(0, i) + newS + fullS.substring(i + oldS.length, fullS.length)
    }
  }
  return fullS
}
console.log(replaceString('World', 'Web', 'Brave New World')); // Brave New Web

function replaceString(oldS, newS, fullS) {
  return fullS.split(oldS).join(newS)
}
console.log(replaceString('World', 'OtherWorld', 'Brave New World')); // Brave New OtherWorld
// --------------------------------------------------------------------------------------------------------- //


// String.prototype.toLocaleLowerCase() -------------------------------------------------------------------- //
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLocaleLowerCase

const dotted = 'İstanbul';
console.log(`EN-US: ${dotted.toLocaleLowerCase('en-US')}`); // expected output: "i̇stanbul"
console.log(`TR: ${dotted.toLocaleLowerCase('tr')}`);       // expected output: "istanbul"

'ALPHABET'.toLocaleLowerCase();              // 'alphabet'
'\u0130'.toLocaleLowerCase('tr') === 'i';    // true
'\u0130'.toLocaleLowerCase('en-US') === 'i'; // false
let locales = ['tr', 'TR', 'tr-TR', 'tr-u-co-search', 'tr-x-turkish'];
'\u0130'.toLocaleLowerCase(locales) === 'i'; // true
// --------------------------------------------------------------------------------------------------------- //


// String.prototype.toLocaleUpperCase() -------------------------------------------------------------------- //
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLocaleUpperCase

const city = 'istanbul';
console.log(city.toLocaleUpperCase('en-US')); // expected output: "ISTANBUL"
console.log(city.toLocaleUpperCase('TR'));    // expected output: "İSTANBUL"

'alphabet'.toLocaleUpperCase();       // 'ALPHABET'
'Gesäß'.toLocaleUpperCase();          // 'GESÄSS'
'i\u0307'.toLocaleUpperCase('lt-LT'); // 'I'
let locales = ['lt', 'LT', 'lt-LT', 'lt-u-co-phonebk', 'lt-x-lietuva'];
'i\u0307'.toLocaleUpperCase(locales); // 'I'
// --------------------------------------------------------------------------------------------------------- //


// String.prototype.toLowerCase() -------------------------------------------------------------------------- //
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase

const sentence = 'The quick brown fox jumps over the lazy dog.';
console.log(sentence.toLowerCase()); // expected output: "the quick brown fox jumps over the lazy dog."

console.log('ALPHABET'.toLowerCase()); // 'alphabet'
// --------------------------------------------------------------------------------------------------------- //


// String.prototype.toString() ----------------------------------------------------------------------------- //
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toString

const stringObj = new String('foo');
console.log(stringObj);            // expected output: [String: 'foo']
console.log(stringObj.toString()); // expected output: "foo"

var x = new String('Hello world');
console.log(x);            // [String: 'Hello world']
console.log(x.toString()); // logs 'Hello world'
// --------------------------------------------------------------------------------------------------------- //


// String.prototype.toUpperCase() -------------------------------------------------------------------------- //
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase

const sentence = 'The quick brown fox jumps over the lazy dog.';
console.log(sentence.toUpperCase()); // expected output: "THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG."

console.log('alphabet'.toUpperCase()); // 'ALPHABET'

// // Conversion of non-string this values to strings
const a = String.prototype.toUpperCase.call({
  toString: function toString() {
    return 'abcdef';
  }
});
const b = String.prototype.toUpperCase.call(true);
// prints out 'ABCDEF TRUE'.
console.log(a, b);
// --------------------------------------------------------------------------------------------------------- //


// String.prototype.trim() --------------------------------------------------------------------------------- //
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/Trim

const greeting = '   Hello world!   ';
console.log(greeting);        // expected output: "   Hello world!   ";
console.log(greeting.trim()); // expected output: "Hello world!";

var orig = '   foo  ';
console.log(orig.trim()); // 'foo'
// --------------------------------------------------------------------------------------------------------- //


// String.prototype.trimEnd() ------------------------------------------------------------------------------ //
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trimEnd

const greeting = '   Hello world!   ';
console.log(greeting);           // expected output: "   Hello world!   ";
console.log(greeting.trimEnd()); // expected output: "   Hello world!";

var str = '   foo  ';
console.log(str.length); // 8
str = str.trimEnd();
console.log(str.length); // 6
console.log(str);        // '   foo'
// --------------------------------------------------------------------------------------------------------- //


// String.prototype.trimStart() ---------------------------------------------------------------------------- //
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trimStart

const greeting = '   Hello world!   ';
console.log(greeting);             // expected output: "   Hello world!   ";
console.log(greeting.trimStart()); // expected output: "Hello world!   ";

var str = '   foo  ';
console.log(str.length); // 8
str = str.trimStart();
console.log(str.length); // 5
console.log(str);        // 'foo  '
// --------------------------------------------------------------------------------------------------------- //


// String.prototype.valueOf() ------------------------------------------------------------------------------ //
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/valueOf

// This value is equivalent to String.prototype.toString().
// This method is usually called internally by JavaScript and not explicitly in code.

const stringObj = new String('foo');
console.log(stringObj);           // expected output: String { "foo" }
console.log(stringObj.valueOf()); // expected output: "foo"

var x = new String('Hello world');
console.log(x.valueOf()); // Displays 'Hello world'
// --------------------------------------------------------------------------------------------------------- //