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
	return "hello edabit.com";
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
        return false;
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


console.log(``);


// Is the Number Less than or Equal to Zero?
function lessThanOrEqualToZero(num) {
    if (num <= 0) {
        return true;
    } else {
        return false;
    }
}
console.log(lessThanOrEqualToZero(5));  // expected output: false
console.log(lessThanOrEqualToZero(0));  // expected output: true
console.log(lessThanOrEqualToZero(-2)); // expected output: true


console.log(``);


// Equality Check
function checkEquality(a, b) {
    if (a === b) {
        return true;
    } else {
        return false;
    }
}
console.log(checkEquality(1, true)); // expected output: false
console.log(checkEquality(0, "0"));  // expected output: false
console.log(checkEquality(1, 1));    // expected output: true


console.log(``);


// Find the Perimeter of a Rectangle
function findPerimeter(lenght, width) {
    return (lenght + width) * 2;
}
console.log(findPerimeter(6, 7));   // expected output: 26
console.log(findPerimeter(20, 10)); // expected output: 30
console.log(findPerimeter(2, 9));   // expected output: 22


console.log(``);


// Return the First Element in an Array
function getFirstValue(arr) {
    return arr[0];
}
console.log(getFirstValue([1, 2, 3]));     // expected output:    1
console.log(getFirstValue([80, 5, 100]));  // expected output:   80
console.log(getFirstValue([-500, 0, 50])); // expected output: -500


console.log(``);


// Return Something to Me!
function giveMeSomething(a) {
    return `something ${a}`;
}
console.log(giveMeSomething("is better than nothing")); // expected output: "something is better than nothing"
console.log(giveMeSomething("Bob Jane"));               // expected output: "something Bob Jane"
console.log(giveMeSomething("something") );             // expected output: "something something"


console.log(``);


// Compare Strings by Count of Characters
function comp(str1, str2) {
    if (str1.length === str2.length) {
        return true;
    } else {
        return false;
    }
}
console.log(comp("AB", "CD"));        // expected output: true
console.log(comp("ABC", "DE"));       // expected output: false
console.log(comp("hello", "edabit")); // expected output: false


console.log(``);


// Maximum Edge of a Triangle
function nextEdge(side1, side2) {
    return (side1 + side2) - 1;
}
console.log(nextEdge(8, 10)); // expected output: 17
console.log(nextEdge(5, 7));  // expected output: 11
console.log(nextEdge(9, 2));  // expected output: 10


console.log(``);


// Convert Hours and Minutes into Seconds
function convert(hours, minutes) {
    return ((hours * 60) + minutes) * 60;
}
console.log(convert(1, 3)); // expected output: 3780
console.log(convert(2, 0)); // expected output: 7200
console.log(convert(0, 0)); // expected output: 0


console.log(``);


// Convert Hours into Seconds
function howManySeconds(hours) {
    return (hours * 60) * 60;
}
console.log(howManySeconds(2));  // expected output: 7200
console.log(howManySeconds(10)); // expected output: 36000
console.log(howManySeconds(24)); // expected output: 86400


console.log(``);


// Return a String as an Integer
function stringInt(str) {
    return parseInt(str);
}
console.log(stringInt("6"));    // expected output: 6
console.log(stringInt("1000")); // expected output: 1000
console.log(stringInt("12"));   // expected output: 12


console.log(``);


// Recursion: Length of a String
function length(str) {
    return str.length;
}
console.log(length("apple")); // expected output: 5
console.log(length("make"));  // expected output: 4
console.log(length("a"));     // expected output: 1
console.log(length(""));      // expected output: 0


console.log(``);


// Movie Theatre Admittance
function acceptIntoMovie(age, isSupervised) {
    if (age < 15 && isSupervised == true) {
        return true;
    } else if (age >= 15) {
        return true;
    } else {
        return false;
    }
}
console.log(acceptIntoMovie(14, true));  // expected output: true
console.log(acceptIntoMovie(14, false)); // expected output: false
console.log(acceptIntoMovie(16, false)); // expected output: true
console.log(acceptIntoMovie(16, true));  // expected output: true
console.log(acceptIntoMovie(15, true));  // expected output: true
console.log(acceptIntoMovie(15, false)); // expected output: true


console.log(``);


// Divides Evenly
function dividesEvenly(a, b) {
    if (a % b === 0) {
        return true;
    } else {
        return false;
    }
}
console.log(dividesEvenly(98, 7)); // expected output: true
console.log(dividesEvenly(85, 4)); // expected output: false


console.log(``);


// Evaluate an Equation
function eq(evaluate) {
    return eval(evaluate);
}
console.log(eq("1+2"));     // expected output: 3
console.log(eq("6/(9-7)")); // expected output: 3
console.log(eq("3+2-4"));   // expected output: 1
// Warning: Executing JavaScript from a string is an enormous security risk. 
// It is far too easy for a bad actor to run arbitrary code when you use eval(). 
// See Never use eval()!, below.


console.log(``);


// Solve the Equation
function equation(s) {
    return eval(s);
}
console.log(equation("1+1"));       // expected output: 2
console.log(equation("7*4-2"));     // expected output: 26
console.log(equation("1+1+1+1+1")); // expected output: 5