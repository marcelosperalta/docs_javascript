// Use an Array to Store a Collection of Data

let simpleArray = ['one', 2, 'three', true, false, undefined, null];
console.log(simpleArray.length); // 7

let complexArray = [
    [
      {
        one: 1,
        two: 2
      },
      {
        three: 3,
        four: 4
      }
    ],
    [
      {
        a: "a",
        b: "b"
      },
      {
        c: "c",
        d: "d"
      }
    ]
  ];
console.log(complexArray.length); // 2

let yourArray = [1, 2, 3, "four", true];
console.log(yourArray.length); // 5


// Access an Array's Contents Using Bracket Notation

let ourArray = ["a", "b", "c"];
let ourVariable = ourArray[0]; 
console.log(ourVariable);      // a
ourArray[1] = "not b anymore"; 
console.log(ourArray);         // ["a", "not b anymore", "c"];

let myArray = ["a", "b", "c", "d"];
myArray[1] = "2"
console.log(myArray);


// Add Items to an Array with push() and unshift()

let twentyThree = 'XXIII';
let romanNumerals = ['XXI', 'XXII'];
romanNumerals.unshift('XIX', 'XX');
console.log(romanNumerals); // [ 'XIX', 'XX', 'XXI', 'XXII' ]
romanNumerals.push(twentyThree);
console.log(romanNumerals); // [ 'XIX', 'XX', 'XXI', 'XXII', 'XXIII' ]

function mixedNumbers(arr) {
  arr.unshift('I', 2, 'three');
  arr.push(7, 'VIII', 9);
  return arr;
}
console.log(mixedNumbers(['IV', 5, 'six'])); // [
                                             //   'I',     2,
                                             //   'three', 'IV',
                                             //   5,       'six',
                                             //   7,       'VIII',
                                             //   9
                                             // ]


// Remove Items from an Array with pop() and shift()

let greetings = ['whats up?', 'hello', 'see ya!'];
greetings.pop();
console.log(greetings);       // [ 'whats up?', 'hello' ]
greetings.shift();
console.log(greetings);       // [ 'hello' ]
let popped = greetings.pop();
console.log(popped);          // hello

function popShift(arr) {
  let popped = arr.pop();
  let shifted = arr.shift();
  return [shifted, popped];
}
console.log(popShift(['challenge', 'is', 'not', 'complete']));


// Remove Items Using splice()

let array = ['today', 'was', 'not', 'so', 'great'];
array.splice(2, 2);
console.log(array);    // [ 'today', 'was', 'great' ]

let array = ['I', 'am', 'feeling', 'really', 'happy'];
let newArray = array.splice(3, 2);
console.log(newArray); // [ 'really', 'happy' ]

const arr = [2, 4, 5, 1, 7, 5, 2, 1];
arr.splice(1, 4);
console.log(arr);      // [ 2, 5, 2, 1 ]


// Add Items Using splice()

const numbers = [10, 11, 12, 12, 15];
const startIndex = 3;
const amountToDelete = 1;
numbers.splice(startIndex, amountToDelete, 13, 14);
console.log(numbers);  // [ 10, 11, 12, 13, 14, 15 ]


// Copy Array Items Using slice()

function htmlColorNames(arr) {
arr.splice(0, 2, 'DarkSalmon', 'BlanchedAlmond')
  return arr;
}
console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']));
// [
//   'DarkSalmon',
//   'BlanchedAlmond',
//   'LavenderBlush',
//   'PaleTurquoise',
//   'FireBrick'
// ]


// Copy an Array with the Spread Operator


// Combine Arrays with the Spread Operator


// Check For The Presence of an Element With indexOf()


// Iterate Through All an Array's Items Using For Loops


// Create complex multi-dimensional arrays


// Add Key-Value Pairs to JavaScript Objects


// Modify an Object Nested Within an Object


// Access Property Names with Bracket Notation


// Use the delete Keyword to Remove Object Properties


// Check if an Object has a Property


// Iterate Through the Keys of an Object with a for...in Statement


// Generate an Array of All Object Keys with Object.keys()


// Modify an Array Stored in an Object