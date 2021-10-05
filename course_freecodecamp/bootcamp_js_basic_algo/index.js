// Convert Celsius to Fahrenheit

// 9/5 = 1.8

function convertToF(celsius) {
    let fahrenheit;
    return fahrenheit = (celsius * 9 / 5) + 32;
}
console.log(convertToF(30)); // 86

// or

function convertToF(celsius) {
    let fahrenheit;
    return fahrenheit = (celsius * 1.8) + 32;
}
console.log(convertToF(30)); // 86


// Reverse a String

function reverseString(str) {
    return str.split("").reverse().join("");
}
console.log(reverseString("hello")); // olleh


// Factorialize a Number

function factorialize(num) {
    for (var product = 1; num > 0; num--) {
      product *= num;
    }
    return product;
}
console.log(factorialize(5));

// or

// (using Recursion)
function factorialize(num) {
    if (num === 0) {
      return 1;
    }
    return num * factorialize(num - 1);
}
factorialize(5);


// Find the Longest Word in a StringPassed

function findLongestWordLength(str) {
    let array = str.split(" ");
    let maxLength = 0;

    for (let index = 0; index < array.length; index++) {
        if (maxLength < array[index].length) {
            maxLength = array[index].length
        }
    }

    return console.log(maxLength);
}
findLongestWordLength("The quick brown fox jumped over the lazy dog");


// Return Largest Numbers in Arrays

function largestOfFour(arr) {

  let results = [];

  for (let i = 0; i < arr.length; i++) {

    let largestNumber = arr[i][0];

    for (let j = 1; j < arr[i].length; j++) {

      if (arr[i][j] > largestNumber) {

        largestNumber = arr[i][j];
      }
    }

    results[i] = largestNumber;
  }

  return console.log(results);
}
largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
            // [ 5,               27,                       39,         1001 ]


// Confirm the Ending