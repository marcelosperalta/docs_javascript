let a, b, rest;
[a, b] = [10, 20];
console.log(a); // 10
console.log(b); // 20
[a, b, ...rest] = [10, 20, 30, 40, 50];
console.log(rest); // [30, 40, 50]

// syntax
// ({ a, b } = { a: 10, b: 20 });
// console.log(a); // 10
// console.log(b); // 20
// ({a, b, ...rest} = {a: 10, b: 20, c: 30, d: 40});
// console.log(rest); // // {c: 30, d: 40}

const x = [1, 2, 3, 4, 5];
const [y, z] = x;
console.log(y); // 1
console.log(z); // 2

// Similarly, you can destructure arrays 
// on the left-hand side of the assignment:
// const [fisrtElement, secondElement] = list;
// is equivalent to:
// const firstElement = list[0];
// const secondElement = list[1];

// Examples

// Basic
const foo = ['one', 'two', 'three'];
const [red, yellow, green] = foo;
console.log(red);    // "one"
console.log(yellow); // "two"
console.log(green);  // "three"

// Separate from delcaration
let c, d;
[c, d] = [1, 2]
console.log(c); // 1
console.log(d); // 2

// Defaul values
let e, f;
[e=5, f=7] = [1];
console.log(e); // 1
console.log(f); // 7

// Swapping variables
let g = 1;
let h = 3;
[g, h] = [h, g];
console.log(g); // 3
console.log(h); // 1
const arr = [1, 2, 3];
[arr[2], arr[1]] = [arr[1], arr[2]];
console.log(arr); // [1, 3, 2]

// Parsing an array returned from a function
function func() {
    return [1, 2];
}
let i, j;
[i, j] = func();
console.log(i); // 1
console.log(j); // 2

// Ignoring some returned values
function funct() {
    return [1, 2, 3];
}
const [k, ,l] = funct();
console.log(k); // 1
console.log(l); // 3
const [m] = funct();
console.log(m); // 1
// Ignoring all returned values
[,,] = funct();

// Assigning the rest of an array to a variable (using rest pattern)
const [n, ...o] = [1, 2, 3];
console.log(n); // 1
console.log(o); // [2, 3]

// Unpacking values from a regular expression match
