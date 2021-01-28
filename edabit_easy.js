// How to run: *********** //
// npm install -g nodemon  //
// nodemon edabit.js       //
// *********************** //

// Edabit
// https://edabit.com/

// Challenges
// JavaScript

// Easy:

console.log(`
Challenges 
JavaScript 
Easy
`);

// Sort Numbers in Descending Order
// https://edabit.com/challenge/yaXQvCzAXJLe37Qie

function sortDescending(num) {
    if (num >= 0) {
        return parseInt(num.toString().split("").sort(function(a, b){return b - a}).join(""));
    } else {
        return 'Only positive numbers are allowed';
    }
}
console.log(sortDescending(123));        // expected output: 321
console.log(sortDescending(1254859723)); // expected output: 9875543221
console.log(sortDescending(73065));      // expected output: 76530
console.log(sortDescending(-1));         // expected output: Only positive numbers are allowed

console.log(`--------------------------------------------`);


// Reverse the Case
// https://edabit.com/challenge/PTvYKkvf7oytHmJFm

function reverseCase(str) {
    let array = str.split("");
    let newString = "";
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if (element === element.toUpperCase()) {
            result = element.toLowerCase();
        } else {
            result = element.toUpperCase();
        }
        newString = newString + result;
    }
    return newString;
}
console.log(reverseCase("Happy Birthday")); // expected output: "hAPPY bIRTHDAY"
console.log(reverseCase("MANY THANKS"));    // expected output: "many thanks"
console.log(reverseCase("sPoNtAnEoUs"));    // expected output: "SpOnTaNeOuS"

console.log(`
or
`)

function reverseCaseYavor(str) {
	return [...str].map(c => c.toLowerCase() == c ? c.toUpperCase() : c.toLowerCase()).join("")
}
console.log(reverseCaseYavor("Happy Birthday")); // expected output: "hAPPY bIRTHDAY"
console.log(reverseCaseYavor("MANY THANKS"));    // expected output: "many thanks"
console.log(reverseCaseYavor("sPoNtAnEoUs"));    // expected output: "SpOnTaNeOuS"

console.log(`--------------------------------------------`);


// 


console.log(`--------------------------------------------`);


// 