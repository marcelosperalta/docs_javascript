for (let index = 0; index < 5; index++) {
    console.log(index);
}
// expected output: 0
// expected output: 1
// expected output: 2
// expected output: 3
// expected output: 4
// expected output: 5

// -------------------------------
console.log("-----");
// -------------------------------

for (let index = 0; index < 10; index++) {
    if (index == 3) {
        console.log("3");
    }
}
// expected output: 3

// -------------------------------
console.log("-----");
// -------------------------------

var a = [1, 2, 3, 4, 5]
for (let index = 0; len = a.length, index < len; index++) {
    console.log(a[index]);
}
// expected output: 1
// expected output: 2
// expected output: 3
// expected output: 4
// expected output: 5

// -------------------------------
console.log("-----");
// -------------------------------

var b = [1, 2, 3, 4, 5]
for (var i = 0, item; item = b[i++];) {
    console.log(item);
}
// expected output: 1
// expected output: 2
// expected output: 3
// expected output: 4
// expected output: 5

// -------------------------------
console.log("-----");
// -------------------------------

// for...in statement
// The for...in statement iterates over all enumerable properties of 
// an object that are keyed by strings (ignoring ones keyed by Symbols),
// including inherited enumerable properties.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in
var c = [1, 2, 3, 4, 5]
for (var i in c) {
    console.log(c[i]);
}
// expected output: 1
// expected output: 2
// expected output: 3
// expected output: 4
// expected output: 5

// -------------------------------
console.log("-----");
// -------------------------------

// for...of statement
// ES2015 introduced the more concise for...of loop for iterable objects such as arrays.
// The for...of statement creates a loop iterating over iterable objects, 
// including: built-in String, Array, array-like objects (e.g., arguments or NodeList), 
// TypedArray, Map, Set, and user-defined iterables. It invokes a custom iteration hook 
// with statements to be executed for the value of each distinct property of the object.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
var d = [1, 2, 3, 4, 5]
for (const element of d) {
    console.log(element);
}
