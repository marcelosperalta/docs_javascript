// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in

// for...in

// The "for...in" statement iterates over all enumerable properties of an object 
// that are keyed by strings (ignoring ones keyed by Symbols), 
// including inherited enumerable properties.

const object = { a: 1, b: 2, c: 3 };
for (const property in object) {
  console.log(`${property}: ${object[property]}`);
}
// expected output:
// "a: 1"
// "b: 2"
// "c: 3"

var triangle = {a: 1, b: 2, c: 3};
function ColoredTriangle() {
  this.color = 'red';
}
ColoredTriangle.prototype = triangle;
var obj = new ColoredTriangle();
for (const prop in obj) {
  if (obj.hasOwnProperty(prop)) {
    console.log(`obj.${prop} = ${obj[prop]}`);
  }
}
// Output:
// "obj.color = red"