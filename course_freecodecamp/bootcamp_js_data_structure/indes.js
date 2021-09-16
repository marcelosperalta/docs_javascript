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

// Remove Items from an Array with pop() and shift()

// Remove Items Using splice()

// Add Items Using splice()

// Copy Array Items Using slice()

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