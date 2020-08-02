// Edabit
// https://edabit.com/

// Challenges
// JavaScript

// Very Easy

console.log(`
Challenges 
JavaScript 
Very Easy
`);

// How Edabit Works
function hello() {
	return "hello edabit.com"
}
console.log(hello()); // expected output: hello edabit.com


console.log(``);


// Return the Sum of Two Numbers
function addition(a, b) {
	return a + b;
}
console.log(addition(2, 2)); // expected output: 4


console.log(``);


// Return the Next Number from the Integer Passed
function addition2(num) {
	return num + 1;
}
console.log(addition2(1));  // expected output: 2
console.log(addition2(-1)); // expected output: 0


console.log(``);


// Using the "&&" Operator
function and(a, b) {
	if (a === true && b === true){
        return true;
    } else {
        return false;
    }
}
console.log(and(true, true));  // expected output: true
console.log(and(false, true)); // expected output: false


console.log(``);


// Correct the Mistakes
function squared(b) {
	return b * b;
}
console.log(squared(5));   // expected output: 25
console.log(squared(9));   // expected output: 81
console.log(squared(100)); // expected output: 10000


console.log(``);


// Return the Remainder from Two Numbers
function remainder(x, y) {
	return x % y;
}
console.log(remainder(1, 3));   // expected output:  1
console.log(remainder(3, 4));   // expected output:  3
console.log(remainder(7, 10));  // expected output:  7
console.log(remainder(-4, 2));  // expected output: -0
console.log(remainder(-12, 5)); // expected output: -2


console.log(``);


// Football Points
function footballPoints(wins, draws, losses) {
	return (wins * 3) + (draws * 1) + (losses * 0);
}
console.log(footballPoints(3, 4, 2)); // expected output: 13
console.log(footballPoints(5, 0, 2)); // expected output: 15
console.log(footballPoints(0, 0, 1)); // expected output: 0


console.log(``);


// Are the Numbers Equal?
function isSameNum(num1, num2) {
    if (num1 === num2) {
        return true;
    } else {
        return false
    }
}
console.log(isSameNum(4, 8));   // expected output: false
console.log(isSameNum(2, 2));   // expected output: true
console.log(isSameNum(2, "2")); // expected output: false


console.log(``);


// Area of a Triangle
function triArea (base, height) {
    return (base * height) / 2;
}
console.log(triArea(3, 2));   // expected output: 3
console.log(triArea(7, 4));   // expected output: 14
console.log(triArea(10, 10)); // expected output: 50


console.log(``);


// Convert Minutes into Seconds
function convert(minutes) {
    return minutes * 60;
}
console.log(convert(5)); // expected output: 300
console.log(convert(3)); // expected output: 180
console.log(convert(2)); // expected output: 120


console.log(``);


// Less Than 100?
function lessThan100(a, b) {
    if (a + b < 100) {
        return true;
    } else {
        return false;
    }
}
console.log(lessThan100(22, 15)); // expected output: true
console.log(lessThan100(83, 34)); // expected output: false