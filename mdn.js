// MDN 
// https://developer.mozilla.org/

// JavaScript > JavaScript reference > Standard built-in objects > String:

// String Length                  -------------------------------------------------------------------------- //
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length
var strLength = "The length property of a String object contains the length of the string";
console.log(strLength.length); // expected output: 72
// --------------------------------------------------------------------------------------------------------- //

console.log(`-----------------------------------------------------------------------------------------------`);

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

console.log(`-----------------------------------------------------------------------------------------------`);

// String.prototype.charAt() ------------------------------------------------------------------------------- //
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charAt
const strCharAt = 'Returns a new string';
// index:        0123456789
console.log(strCharAt.charAt(4)); // expected output: "r"
console.log(strCharAt.charAt(9)); // expected output: " "
// --------------------------------------------------------------------------------------------------------- //

console.log(`-----------------------------------------------------------------------------------------------`);

// String.prototype.charCodeAt() --------------------------------------------------------------------------- //
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt
const strCharCodeAt = 'Returns an integer between 0 and 65535';
// index:            0123456789
const index = 0;
console.log(`The character code ${strCharCodeAt.charCodeAt(index)} is equal to ${strCharCodeAt.charAt(index)}`); 
// expected output: "The character code 82 is equal to R"
// --------------------------------------------------------------------------------------------------------- //

console.log(`-----------------------------------------------------------------------------------------------`);

// String.prototype.codePointAt() -------------------------------------------------------------------------- //
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/codePointAt
const icons = '☃★♲';
console.log(icons.codePointAt(1)); // expected output: "9733"
// 9733 Decimal = 2605 Hex => "BLACK STAR"
// https://www.unicode.org/charts/PDF/U2600.pdf
// https://www.unicode.org/charts/#symbols
// --------------------------------------------------------------------------------------------------------- //

console.log(`-----------------------------------------------------------------------------------------------`);

// String.prototype.concat() ------------------------------------------------------------------------------- //
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/concat
const strConcat1 = "Hello";
const strConcat2 = "World";
console.log(strConcat1.concat(' ', strConcat2));  // expected output: "Hello World"
console.log(strConcat2.concat(', ', strConcat1)); // expected output: "World, Hello"
console.log(strConcat1 + " " + strConcat2);       // expected output: "Hello World"
console.log(strConcat1 + ", " + strConcat2);      // expected output: "Hello, World"
// --------------------------------------------------------------------------------------------------------- //

console.log(`-----------------------------------------------------------------------------------------------`);

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

console.log(`-----------------------------------------------------------------------------------------------`);

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

console.log(`-----------------------------------------------------------------------------------------------`);

// String.fromCodePoint() ---------------------------------------------------------------------------------- //
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCodePoint
console.log(String.fromCodePoint(9731, 32, 9733, 32, 9842, 32, 0x4F60)); // expected output: "☃★♲你"
// UTF-16 (decimal) > 32      > "SPACE" > https://www.fileformat.info/info/unicode/char/0020/index.htm
// UTF-16 (decimal) > 9731    > ☃       > https://www.fileformat.info/info/unicode/char/2603/index.htm
// UTF-16 (decimal) > 9733    > ★       > https://www.fileformat.info/info/unicode/char/2605/index.htm
// UTF-16 (decimal) > 9842    > ♲       > https://www.fileformat.info/info/unicode/char/2672/index.htm
// UTF-16 (hex)     > 0x2F804 > 你       > https://www.fileformat.info/info/unicode/char/4f60/index.htm
// --------------------------------------------------------------------------------------------------------- //

console.log(`-----------------------------------------------------------------------------------------------`);

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

console.log(`-----------------------------------------------------------------------------------------------`);

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

console.log(`-----------------------------------------------------------------------------------------------`);

// String.prototype.lastIndexOf() -------------------------------------------------------------------------- //
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/lastIndexOf
const strLastIndexOf = "The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?";
console.log(strLastIndexOf.lastIndexOf("dog"));  // expected output: "52"
console.log(strLastIndexOf.lastIndexOf("test")); // expected output: "-1"
// --------------------------------------------------------------------------------------------------------- //

console.log(`-----------------------------------------------------------------------------------------------`);

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

console.log(`-----------------------------------------------------------------------------------------------`);

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

console.log(`-----------------------------------------------------------------------------------------------`);

// String.prototype.matchAll() ----------------------------------------------------------------------------- //
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/matchAll
const regexp = /t(e)(st(\d?))/g;
const strMatchAll = 'test1test2';
const arrayMatchAll = [...strMatchAll.matchAll(regexp)];
console.log(arrayMatchAll[0]); // expected output: Array ["test1", "e", "st1", "1"]
console.log(arrayMatchAll[1]); // expected output: Array ["test2", "e", "st2", "2"]
// --------------------------------------------------------------------------------------------------------- //

console.log(`-----------------------------------------------------------------------------------------------`);

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

console.log(`-----------------------------------------------------------------------------------------------`);

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

console.log(`-----------------------------------------------------------------------------------------------`);

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

console.log(`-----------------------------------------------------------------------------------------------`);

//  ----------------------------------------------------------------------------- //
// 

// --------------------------------------------------------------------------------------------------------- //

console.log(`-----------------------------------------------------------------------------------------------`);