// ----- Explore Differences Between the var and let Keywords

var camper = 'James';
var camper = 'David';
console.log(camper); // David

let camper = 'James';
let camper = 'David';
console.log(camper); // Identifier 'camper' has already been declared

// Note the "use strict". This enables Strict Mode, 
// which catches common coding mistakes and "unsafe" actions. 
// For instance:  

"use strict";
x = 3.14;            // x is not defined

// Test

let catName;
let quote;
function catTalk() {
  "use strict";

  catName = "Oliver";
  quote = catName + " says Meow!";

}
catTalk();

// ----- Compare Scopes of the var and let Keywords

// Test

// function checkScope() {
//   var i = 'function scope';
//   if (true) {
//     i = 'block scope';
//     console.log('Block scope i is: ', i);
//   }
//   console.log('Function scope i is: ', i);
//   return i;
// }

function checkScope() {
  let i = 'function scope';
  if (true) {
    let i = 'block scope';
    console.log('Block scope i is: ', i);
  }
  console.log('Function scope i is: ', i);
  return i;
}

// ----- Declare a Read-Only Variable with the const Keyword

// Test

function printManyTimes(str) {

  // Only change code below this line

  var sentence = str + " is cool!";
  for (var i = 0; i < str.length; i+=2) {
    console.log(sentence);
  }

  // Only change code above this line

}
printManyTimes("freeCodeCamp");

function printManyTimes(str) {
  const SENTENCE = str + " is cool!";
  for (let i = 0; i < str.length; i+=2) {
    console.log(SENTENCE);
  }
}
printManyTimes("freeCodeCamp");

// ----- Mutate an Array Declared with const

const s = [5, 6, 7];
s = [1, 2, 3];
s[2] = 45;
console.log(s);

// s = [1, 2, 3] will result in an error. The console.log 
// will display the value [5, 6, 45].

// As you can see, you can mutate the object [5, 6, 7] itself 
// and the variable s will still point to the altered array [5, 6, 45]. 
// Like all arrays, the array elements in s are mutable, 
// but because const was used, you cannot use the variable identifier s 
// to point to a different array using the assignment operator.

// Test

const s = [5, 7, 2];
function editInPlace() {
  s[0] = 2;
  s[1] = 5;
  s[2] = 7;
  return s;
}
console.log(editInPlace());

// or

const s = [5, 7, 2];
function editInPlace() {
  return s[0, 1, 2] = [2, 5, 7];
}
console.log(editInPlace());

// ----- Prevent Object Mutation

// Object.freeze

let obj = {
  name:"FreeCodeCamp",
  review:"Awesome"
};
Object.freeze(obj);
obj.review = "bad";
obj.newProp = "Test";
console.log(obj);

// The obj.review and obj.newProp assignments will result in errors, 
// and the console will display the value { name: "FreeCodeCamp", review: "Awesome" }.

// Test

function freezeObj() {
  const MATH_CONSTANTS = {
    PI: 3.14
  };
  // Only change code below this line


  // Only change code above this line
  try {
    MATH_CONSTANTS.PI = 99;
  } catch(ex) {
    console.log(ex);
  }
  return MATH_CONSTANTS.PI;
}
const PI = freezeObj();

function freezeObj() {
  const MATH_CONSTANTS = {
    PI: 3.14
  };
  Object.freeze(MATH_CONSTANTS);
  try {
    MATH_CONSTANTS.PI = 99;
  } catch(ex) {
    console.log(ex);
  }
  return MATH_CONSTANTS.PI;
}
const PI = freezeObj();

// ----- Use Arrow Functions to Write Concise Anonymous Functions

// ES5
const myFunc = function() {
  const myVar = "value";
  return myVar;
}
// ES6
const myFunc = () => {
  const myVar = "value";
  return myVar;
}

// When there is no function body, and only a return value, 
// arrow function syntax allows you to omit the keyword 
// return as well as the brackets surrounding the code. This helps 
// simplify smaller functions into one-line statements:

const myFunc = () => "value";

// This code will still return the string value by default.

// Test

// ES5
var magic = function() {
  return new Date();
};
// ES6
const magic = () => new Date();

// ----- Write Arrow Functions with Parameters

// Just like a regular function, you can pass arguments into an arrow function.

const doubler = (item) => item * 2;
doubler(4);

// If an arrow function has a single parameter, the parentheses enclosing the parameter may be omitted.

const doubler = item => item * 2;

// It is possible to pass more than one argument into an arrow function.

const multiplier = (item, multi) => item * multi;
multiplier(4, 2);

// Test

var myConcat = function(arr1, arr2) {
  return arr1.concat(arr2);
};
console.log(myConcat([1, 2], [3, 4, 5]));

const myConcat = (arr1, arr2) => arr1.concat(arr2);
console.log(myConcat([1, 2], [3, 4, 5]));

// ----- Set Default Parameters for Your Functions

const greeting = (name = "Anonymous") => "Hello " + name;
console.log(greeting("John"));
console.log(greeting());

// Test

// Only change code below this line
const increment = (number, value) => number + value;
// Only change code above this line

const increment = (number, value = 1) => number + value;

// ----- Use the Rest Parameter with Function Parameters

function howMany(...args) {
  return "You have passed " + args.length + " arguments.";
}
console.log(howMany(0, 1, 2));
console.log(howMany("string", null, [1, 2, 3], { }));

// Test

const sum = (x, y, z) => {
  const args = [x, y, z];
  return args.reduce((a, b) => a + b, 0);
}

const sum = (...args) => {
  return args.reduce((a, b) => a + b, 0);
}

// ----- Use the Spread Operator to Evaluate Arrays In-Place

const arr = [6, 89, 3, 45];
const maximus = Math.max(...arr);


// Test

const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
arr2 = [];  // Change this line
console.log(arr2);

const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
arr2 = [...arr1];
console.log(arr2);

// ----- Use Destructuring Assignment to Extract Values from Objects

// ES5
const user = { name: 'John Doe', age: 34 };
const name = user.name;
const age = user.age;
console.log(name, age); // John Doe 34
// ES6
const user = { name: 'John Doe', age: 34 };
const { name, age } = user;
console.log(name, age); // John Doe 34

// Test

const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};
// Only change code below this line
const today = HIGH_TEMPERATURES.today;
const tomorrow = HIGH_TEMPERATURES.tomorrow;
// Only change code above this line

const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};
const { today, tomorrow } = HIGH_TEMPERATURES;
console.log(today, tomorrow);

// ----- Use Destructuring Assignment to Assign Variables from Objects

// Test

const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};
// Only change code below this line
const highToday = HIGH_TEMPERATURES.today;
const highTomorrow = HIGH_TEMPERATURES.tomorrow; 
// Only change code above this line

const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};
const { today: highToday , tomorrow: highTomorrow } = HIGH_TEMPERATURES;
console.log(highToday, highTomorrow);

// ----- Use Destructuring Assignment to Assign Variables from Nested Objects

// Test

const LOCAL_FORECAST = {
  yesterday: { low: 61, high: 75 },
  today: { low: 64, high: 77 },
  tomorrow: { low: 68, high: 80 }
};
// Only change code below this line
const lowToday = LOCAL_FORECAST.today.low;
const highToday = LOCAL_FORECAST.today.high;
// Only change code above this line

const LOCAL_FORECAST = {
  yesterday: { low: 61, high: 75 },
  today: { low: 64, high: 77 },
  tomorrow: { low: 68, high: 80 }
};
const { today: {low: lowToday, high: highToday} } = LOCAL_FORECAST;
console.log(lowToday, highToday);

// ----- Use Destructuring Assignment to Assign Variables from Arrays

// Test

let a = 8, b = 6;
// Only change code below this line

let a = 8, b = 6;
[b, a] = [a, b]
console.log(a, b);

// ----- Use Destructuring Assignment with the Rest Parameter to Reassign Array Elements

const [a, b, ...arr] = [1, 2, 3, 4, 5, 7];
console.log(a, b);
console.log(arr);

// Test

const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
  // Only change code below this line
  const arr = list; // Change this line
  // Only change code above this line
  return arr;
}
const arr = removeFirstTwo(source);

const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
  const [, , ...arr] = list; // Change this line
  return arr;
}
const arr = removeFirstTwo(source);
console.log(arr);

// ----- Use Destructuring Assignment to Pass an Object as a Function's Parameters

// Test

const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};
// Only change code below this line
const half = (stats) => (stats.max + stats.min) / 2.0; 
// Only change code above this line

const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};
const half = ({max, min}) => (max + min) / 2.0; 

// ----- Create Strings using Template Literals

// Test

const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"]
};
function makeList(arr) {
  // Only change code below this line
  const failureItems = [];
  // Only change code above this line
  return failureItems;
}
const failuresList = makeList(result.failure);

const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"]
};
function makeList(arr) {
  const failureItems = arr.map(element => `<li class="text-warning">${element}</li>`);
  return failureItems;
}
const failuresList = makeList(result.failure);
console.log(failuresList);

// ----- Write Concise Object Literal Declarations Using Object Property Shorthand

// Test

const createPerson = (name, age, gender) => {
  // Only change code below this line
  return {
    name: name,
    age: age,
    gender: gender
  };
  // Only change code above this line
};

const createPerson = (name, age, gender) => ({ name, age, gender });
console.log(createPerson("Marcelo", "40", "Male"));
// output: { name: 'Marcelo', age: '40', gender: 'Male' }

// ----- Write Concise Declarative Functions with ES6

// Test

// Only change code below this line
const bicycle = {
  gear: 2,
  setGear: function(newGear) {
    this.gear = newGear;
  }
};
// Only change code above this line
bicycle.setGear(3);
console.log(bicycle.gear);

const bicycle = {
  gear: 2,
  setGear(newGear) {
    this.gear = newGear;
  }
};
bicycle.setGear(3);
console.log(bicycle.gear);

// ----- Use class Syntax to Define a Constructor Function

// Test

// Only change code below this line

// Only change code above this line
const carrot = new Vegetable('carrot');
console.log(carrot.name); // Should display 'carrot'

class Vegetable {
  constructor(name) {
    this.name = name;
  }
}
const carrot = new Vegetable('carrot');
console.log(carrot.name); // Should display 'carrot'

// ----- Use getters and setters to Control Access to an Object

class Book {
  constructor(author) {
    this._author = author;
  }
  // getter
  get writer() {
    return this._author;
  }
  // setter
  set writer(updatedAuthor) {
    this._author = updatedAuthor;
  }
}
const novel = new Book('anonymous');
console.log(novel.writer);
novel.writer = 'newAuthor';
console.log(novel.writer);

// Test



// -----

// Test



// -----