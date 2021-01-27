// MDN 
// https://developer.mozilla.org/

// JavaScript > JavaScript reference > Standard built-in objects > String:

// String Length                  -------------------------------------------------------------------------- //
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/@@iterator
var strLength = "The length property of a String object contains the length of the string";
console.log(strLength.length); // expected output: 72
// --------------------------------------------------------------------------------------------------------- //

console.log(`-----------------------------------------------------------------------------------------------`);

// String.prototype[@@iterator]() -------------------------------------------------------------------------- //
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/@@iterator
var str = 'ABC';
var strIter = str[Symbol.iterator]();
console.log(strIter.next().value); // expected output: A
console.log(strIter.next().value); // expected output: B
console.log(strIter.next().value); // expected output: C
var str2 = 'DEF';
var strIter2 = str2[Symbol.iterator]();
console.log(strIter2.next().value, strIter2.next().value, strIter2.next().value); // expected output: D E F
// --------------------------------------------------------------------------------------------------------- //

console.log(`-----------------------------------------------------------------------------------------------`);