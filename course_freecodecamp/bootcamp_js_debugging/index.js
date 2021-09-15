// Use the JavaScript Console to Check the Value of a Variable

let a = 5;
let b = 1;
a++;
console.log(a);     // 6
let sumAB = a + b;
console.log(sumAB); // 7


// Understanding the Differences between the freeCodeCamp and Browser Console

let output = "Get this to show once in the freeCodeCamp console and not at all in the browser console";
console.log(output);
console.clear(); // use this with the browser's console (inspect > Console)


// Use typeof to Check the Type of a Variable

console.log(typeof ""); // string
console.log(typeof 0);  // number
console.log(typeof []); // object
console.log(typeof {}); // object

let seven = 7;
let three = "3";
console.log(typeof seven); // number
console.log(typeof three); // string


// Catch Misspelled Variable and Function Names

let receivables = 10;
let payables = 8;
let netWorkingCapital = receivables - payables;
console.log(`Net working capital is: ${netWorkingCapital}`); // Net working capital is: 2


// Catch Unclosed Parentheses, Brackets, Braces and Quotes

let myArray = [1, 2, 3];
let arraySum = myArray.reduce((previous, current) =>  previous + current);
console.log(`Sum of array values is: ${arraySum}`); // Sum of array values is: 6


// Catch Mixed Usage of Single and Double Quotes

let innerHtml = "<p>Click here to <a href=\"#Home\">return home</a></p>";
console.log(innerHtml); // <p>Click here to <a href="#Home">return home</a></p>


// Catch Use of Assignment Operator Instead of Equality Operator

let x = 7;
let y = 9;
let result = "to come";
if(x == y) {
  result = "Equal!";
} else {
  result = "Not equal!";
}
console.log(result); // Not equal!

let x = 7;
let y = 9;
let result = "to come";
if(x === y) {
  result = "Equal!";
} else {
  result = "Not equal!";
}
console.log(result); // Not equal!


// Catch Missing Open and Closing Parenthesis After a Function Call

function getNine() {
    let x = 6;
    let y = 3;
    return x + y;
}
let result = getNine;
console.log(result); // [Function: getNine]

function getNine() {
    let x = 6;
    let y = 3;
    return x + y;
}
let result = getNine();
console.log(result); // 9


// Catch Arguments Passed in the Wrong Order When Calling a Function

function raiseToPower(b, e) {
    return Math.pow(b, e);
}
let base = 2;
let exp = 3;
let power = raiseToPower(base, exp);
console.log(power); // 8


// Catch Off By One Errors When Using Indexing

function countToFive() {
    let firstFive = "12345";
    let len = firstFive.length;
    for (let i = 0; i <= len - 1; i++) {
      console.log(firstFive[i]);
    }
  }
countToFive(); // 1
               // 2
               // 3
               // 4
               // 5

// or

function countToFive() {
    let firstFive = "12345";
    let len = firstFive.length;
    for (let i = 0; i < len; i++) {
      console.log(firstFive[i]);
    }
  }
countToFive(); // 1
               // 2
               // 3
               // 4
               // 5


// Use Caution When Reinitializing Variables Inside a Loop

function zeroArray(m, n) {
    // Creates a 2-D array with m rows and n columns of zeroes
    let newArray = [];
    let row = [];
    for (let i = 0; i < m; i++) {
      // Adds the m-th row into newArray
      for (let j = 2; j < n; j++) {
        // Pushes n zeroes into the current row to create the columns
        row.push(0);
      }
      // Pushes the current row, which now has n zeroes in it, to the array
      newArray.push(row);
    }
    return newArray;
}
let matrix = zeroArray(3, 2);
console.log(matrix);

// solution

function zeroArray(m, n) {
    let newArray = [];
    for (let i = 0; i < m; i++) {
      let row = []; /* <-----  row has been declared inside the outer loop. 
                               Now a new row will be initialised during each iteration of the outer loop allowing 
                               for the desired matrix. */
      for (let j = 0; j < n; j++) {
        row.push(0);
      }
      newArray.push(row);
    }
    return newArray;
  }
  let matrix = zeroArray(3, 2);
  console.log(matrix);


// Prevent Infinite Loops with a Valid Terminal Condition

function myFunc() {
    for (let i = 1; i <= 4; i += 2) {
      console.log("Still going!");
    }
}
myFunc() // Still going!
         // Still going!