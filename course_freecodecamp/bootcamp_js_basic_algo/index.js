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