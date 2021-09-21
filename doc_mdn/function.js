// MDN 
// https://developer.mozilla.org/


// Web technology for developers > JavaScript >JavaScript reference > Standard built-in objects > Function:


// Function.length ----------------------------------------------------------------------------------------- //
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/length

function func1() {}
function func2(a, b) {}
console.log(func1.length); // expected output: 0
console.log(func2.length); // expected output: 2

console.log(Function.length); /* 1 */

console.log((function()        {}).length); /* 0 */
console.log((function(a)       {}).length); /* 1 */
console.log((function(a, b)    {}).length); /* 2 etc. */

console.log((function(...args) {}).length); 
// 0, rest parameter is not counted

console.log((function(a, b = 1, c) {}).length); 
// 1, only parameters before the first one with
// a default value is counted
// --------------------------------------------------------------------------------------------------------- //