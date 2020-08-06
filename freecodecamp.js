// freeCodeCamp

// Basic JavaScript (110 items)

// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/

// Glossary

/**
 *      backslash          \
 *      forward slash      /
 *      single quotes      '
 *      double quotes      "
 *      backquote/backtick `
 *
 */

// Comment Your JavaScript Code

// comment

/*
comment
*/

/**
 * comment
 */

console.log(``);

// Declare JavaScript Variables

/** data types (seven data types):
 *
 * undefined
 * null
 * boolean
 * string
 * symbol
 * number
 * object
 *
 *  */

/**
 * Variables are a simple name to represent the data we want to refer to.
 */

// declare a variable: (but may not contain spaces or start with a number.)

var ourName;
var myName;
console.log(myName); // expect output: undefined

console.log(``);

// Storing Values with the Assignment Operator

/**
 * assignment operator > "=" (equals sign or equality sign)
 */

myVariable = 5; // This assigns the Number value 5 to myVariable.

myVar = 5;
console.log(myVar); // expect output: 5
myNum = myVar;
console.log(myNum); // expect output: 5

console.log(``);

// Initializing Variables with the Assignment Operator

/**
 * "initialize a variable:"
 * var myVar = 0;
 */

var myVar = 0;
console.log(myVar); // expect output: 0

console.log(``);

// Understanding Uninitialized Variables

/**
 * If you do a mathematical operation on an undefined variable
 * your result will be NaN which means "Not a Number".
 */

var a = 5;
var b = 10;
var c = "I am a";

// Understanding Case Sensitivity in Variables

/**
 * In JavaScript all variables and function names are case sensitive.
 * MYVAR is not the same as MyVar nor myvar.
 *
 * camelCase
 * snake_case
 * Pascal (Pascal case)
 *
 * Best Practice: Write variable names in JavaScript in camelCase.
 */

var someVariable;
var anotherVariableName;
var thisVariableNameIsSoLong;

// Add Two Numbers with JavaScript

myVar = 5 + 10; // assigned 15

// Subtract One Number from Another with JavaScript

myVar = 12 - 6; // assigned 6

// Multiply Two Numbers with JavaScript

myVar = 13 * 13; // assigned 169

// Divide One Number by Another with JavaScript

myVar = 16 / 2; // assigned 8

// Increment a Number with JavaScript

/**
 * You can easily increment or add one to a variable with the ++ operator.
 *
 * i++;
 *
 * is the equivalent of
 *
 * i = i + 1;
 *
 */

let i = 1;
console.log(i); // expect output: 1
i++; // i = i + 1;
console.log(i); // expect output: 2

console.log(``);

// Arithmetic operators

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Increment_()

console.log(2 + 3 - 1); // expected output: 4
console.log((4 * 3) / 2); // 12 / 2 // expected output: 6
console.log(11 % 3 ** 2); // 11 % 9 // expected output: 2

console.log(``);

/**
 * ----- Addition (+) > sum of numeric operands or string concatenation
 *
 * 1 + 2           // 3      > // Number + Number -> addition
 * 5 + 'foo'       // "5foo" > // Number + String -> concatenation
 *
 * ----- Subtraction (-)
 *
 * 3 - 5           // -2
 * 'foo' - 3       // NaN (Not-A-Number)
 * (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN)
 *
 * ----- Division (/)
 *
 * 1 / 2           // returns 0.5 in JavaScript
 * 1.0 / 2.0       // returns 0.5 in JavaScript
 * 2.0 / 0         // returns Infinity in JavaScript
 *
 * ----- Multiplication (*)
 *
 *  2 * 2          //  4
 * -2 * 2          // -4
 * 'foo' * 2       // NaN
 *
 * ----- Remainder (%)
 *
 * The remainder operator returns the remainder left over
 * when one operand is divided by a second operand.
 * It always takes the sign of the dividend.
 *
 * 12 % 5          // 2
 * 15 % 9          // 6
 * 5.5 % 2         // 1.5
 *
 * ----- Exponentiation (**)
 *
 * a ** b ** c is equal to a ** (b ** c)
 *
 * 2 ** 3          //   8
 * 3 ** 2.5        //  15.588457268119896
 * 2 ** 3 ** 2     // 512
 * 2 ** (3 ** 2)   // 512
 * (2 ** 3) ** 2   //  64
 * -(2 ** 2)       //  -4
 * (-2) ** 2       //   4
 *
 * Note: JavaScript also has a bitwise operator ^ (logical XOR).
 * ** and ^ are different
 * for example:
 * 2 ** 3 === 8
 * when
 * 2 ^  3 === 1
 * 3 ^  2 === 1
 * 2 ^  2 === 0
 * 5 ^  5 === 0
 * 6 ^  2 === 4
 * 2 ^  6 === 4
 * 6 ^  3 === 5
 *
 * ----- Increment (++)
 */
// Postfix
var x = 3;
console.log(x); // 3
y = x++; // y = 3, x = 4
console.log(y); // 3
console.log(x); // 4

console.log(``);

// Prefix
var a = 2;
console.log(a); // 2
b = ++a; // a = 3, b = 3
console.log(b); // 3
console.log(a); // 3

console.log(``);

/*
 * ----- Decrement (--)
 */
// Postfix
var x = 3;
console.log(x); // 3
y = x--; // y = 3, x = 2
console.log(y); // 3
console.log(x); // 2

console.log(``);

// Prefix
var a = 2;
console.log(a); // 2
b = --a; // a = 1, b = 1
console.log(b); // 1
console.log(a); // 1

console.log(``);

/**
 * ----- Unary negation (-)
 *
 * var x = 3;
 * y = -x;         // y = -3, x = 3
 *
 * Unary negation operator can convert non-numbers into a number
 * var x = "4";
 * y = -x;         // y = -4
 *
 * ----- Unary plus (+)
 *
 * +3                           // 3
 * +'3'                         // 3
 * +'aa'                        // NaN
 * +true                        // 1
 * +false                       // 0
 * +null                        // 0
 * +function(val){ return val } // NaN
 *
 */

// Decrement a Number with JavaScript

/**
 * You can easily decrement or decrease a variable by one with the -- operator.
 *
 * i--;
 *
 * is the equivalent of
 *
 * i = i - 1;
 *
 */

// Create Decimal Numbers with JavaScript

/**
 * Decimal numbers (floating point numbers or floats)
 */

var ourDecimal = 5.7;
var myDecimal = 6.1;

// Multiply Two Decimals with JavaScript

var product = 2.0 * 2.5;

// Divide One Decimal by Another with JavaScript

var quotient = 4.4 / 2.0; // (quotient = 2.2)

/**
 *         4 / 2       = 2        (remainder = 0)
 *  dividend / divisor = quotient
 *
 *         3 / 2       = 1        (remainder = 1)
 *  dividend / divisor = quotient
 */

// Finding a Remainder in JavaScript

/**
 * The remainder operator % gives the remainder of the division of two numbers.
 *
 * 5 % 2 = 1 because
 * Math.floor(5 / 2) = 2 (Quotient)
 * 2 * 2 = 4
 * 5 - 4 = 1 (Remainder)
 *
 * Usage
 * In mathematics, a number can be checked to be even or odd
 * by checking the remainder of the division of the number by 2.
 *
 * 17 % 2 = 1 (17 is Odd)
 * 48 % 2 = 0 (48 is Even)
 */

// Compound Assignment With Augmented Addition

myVar = myVar + 5;

var myVar = 1;
myVar += 5;
console.log(myVar); // Returns 6

console.log(``);

// Compound Assignment With Augmented Subtraction

myVar = myVar - 5;
console.log(myVar); // Returns 1

myVar -= 5;
console.log(myVar); // Returns -4

console.log(``);

// Compound Assignment With Augmented Multiplication

myVar = myVar * 5;
console.log(myVar); // Returns -20

myVar *= 5;
console.log(myVar); // Returns -100

console.log(``);

// Compound Assignment With Augmented Division

myVar = myVar / 5;
console.log(myVar); // Returns -20

myVar /= 5;
console.log(myVar); // Returns -4

console.log(``);

// Declare String Variables

var myName1 = "this is a string literal (using double quotes)";
console.log(myName1); // expected output: this is a string literal (using double quotes)
var myName2 = "this is a string literal (using single quotes)";
console.log(myName2); // expected output: this is a string literal (using single quotes)
var myName3 = `this is a string literal (using backquote/backtick)`;
console.log(myName3); // expected output: this is a string literal (using backquote/backtick)

console.log(``);

// Escaping Literal Quotes in Strings

/**
 * In JavaScript, you can escape a quote from considering it
 * as an end of string quote by placing a backslash (\) in front of the quote.
 */

var sampleStr = 'Alan said, "Peter is learning JavaScript".';
console.log(sampleStr); // expected output: Alan said, "Peter is learning JavaScript".

console.log(``);

// Quoting Strings with Single Quotes

/**
 * Single and double quotes work the same in JavaScript.
 */

doubleQuoteStr = "This is a string";
singleQuoteStr = "This is also a string";
conversation = 'Finn exclaims to Jake, "Algebraic!"';
goodStr = 'Jake asks Finn, "Hey, let\'s go on an adventure?"';
console.log(goodStr); // expected output: Jake asks Finn, "Hey, let's go on an adventure?"

console.log(``);

// Escape Sequences in Strings

/**
 * Code Output
 *  \'  single quote
 *  \"  double quote
 *  \\  backslash
 *  \n  newline
 *  \r  carriage return
 *  \t  tab
 *  \b  word boundary
 *  \f  form feed
 */

var singleQuote = "single quote    (')";
console.log(singleQuote); // expected output: single quote    (')
var doubleQuote = 'double quote    (")';
console.log(doubleQuote); // expected output: double quote    (")
var backslash = "backslash       (\\)";
console.log(backslash); // expected output: backslash       (\)
var newline = "\nnew line        (\\n)\n";
console.log(newline); // expected output:
//                  new line        (\n)
var carriageReturn = "carriage return (\\r) \r  ";
console.log(carriageReturn); // expected output:   rriage return (\r)
var tab = "\ttab     (\\t)";
console.log(tab); // expected output:         tab     (\t)
var wordBoundary = "word \bboundary    (\\b)";
console.log(wordBoundary); // expected output: wordboundary    (\b)
var formFeed = "\fform feed\f       (\\f)";
console.log(formFeed); // expected output: form feed
//                                  (\f)

console.log(``);

// Concatenating Strings with Plus Operator

/**
 * When the + operator is used with a String value,
 * it is called the concatenation operator
 */

var ourStr = "I come first. " + "I come second.";
console.log(ourStr); // expected output: I come first. I come second.

console.log(``);

// Concatenating Strings with the Plus Equals Operator

var ourStr = "I come first. ";
ourStr += "I come second.";
console.log(ourStr); // expected output: I come first. I come second.

console.log(``);

// Constructing Strings with Variables

var ourName = "freeCodeCamp";
var ourStr = "Hello, our name is " + ourName + ", how are you?";
console.log(ourStr); // expected output: Hello, our name is freeCodeCamp, how are you?

console.log(``);

// Appending Variables to Strings

var anAdjective = "awesome!";
var ourStr = "freeCodeCamp is ";
ourStr += anAdjective;
console.log(ourStr); // expected output: freeCodeCamp is awesome!

console.log(``);

// Find the Length of a String

console.log("Alan Peter".length); // expected output: 10

var firstNameLength = 0;
var firstName = "Ada";
firstNameLength = firstName.length;
console.log(firstNameLength); // expected output: 3

console.log(``);

// Use Bracket Notation to Find the First Character in a String

/**
 * Bracket notation ( "[]" ) is a way to get a character at a specific index within a string.
 *
 * Most modern programming languages, like JavaScript, don't start counting at 1 like humans do.
 * They start at 0. This is referred to as Zero-based indexing.
 */

var firstName = "Marcelo";
//0123456 // Zero-based indexing
console.log(firstName[0]); // expected output: "M"
console.log(firstName[1]); // expected output: "a"
console.log(firstName[2]); // expected output: "r"
console.log(firstName[3]); // expected output: "c"
console.log(firstName[4]); // expected output: "e"
console.log(firstName[5]); // expected output: "l"
console.log(firstName[6]); // expected output: "o"
console.log(firstName[7]); // expected output: undefined
console.log(firstName[-1]); // expected output: undefined

console.log(``);

// Understand String Immutability

/**
 * In JavaScript, String values are immutable,
 * which means that they cannot be altered once created.
 */

var myStr = "Bob";
myStr[0] = "J";
console.log(myStr); // expected output: Bob

var myStr = "Bob";
myStr = "Job";
console.log(myStr); // expected output: Job

console.log(``);

// Use Bracket Notation to Find the Nth Character in a String

/**
 * You can also use bracket notation to get the character
 * at other positions within a string.
 *
 * Remember that computers start counting at 0,
 * so the first character is actually the zeroth character.
 */

var firstName = "Ada";
var secondLetterOfFirstName = firstName[1];
console.log(secondLetterOfFirstName); // expected output: d

console.log(``);

// Use Bracket Notation to Find the Last Character in a String

/**
 * In order to get the last letter of a string,
 * you can subtract one from the string's length.
 */

var firstName = "Ada";
var lastLetterOfFirstName = firstName[firstName.length - 1];
console.log(lastLetterOfFirstName); // expected output: a

console.log(``);

// Use Bracket Notation to Find the Nth-to-Last Character in a String

/**
 * You can use the same principle we just used to retrieve the last character
 * in a string to retrieve the Nth-to-last character.
 */

var firstName = "Ada";
var thirdToLastLetterOfFirstName = firstName[firstName.length - 3];
console.log(thirdToLastLetterOfFirstName); // expected output: A

console.log(``);

// Word Blanks

/**
 * In a "Mad Libs" game, you are provided sentences with some missing words,
 * like nouns, verbs, adjectives and adverbs.
 *
 * Consider this sentence - "It was really ____, and we ____ ourselves ____".
 */

var sentence =
  "It was really " +
  "hot" +
  ", and we " +
  "laughed" +
  " ourselves " +
  "silly" +
  ".";
console.log(sentence); // expected output: It was really hot, and we laughed ourselves silly.

var myNoun = "dog";
var myAdjective = "big";
var myVerb = "ran";
var myAdverb = "quickly";
var wordBlanks =
  "My " +
  myNoun +
  " saw a " +
  myAdjective +
  " ball and " +
  myVerb +
  " " +
  myAdverb +
  ".";
console.log(wordBlanks); // expected output: My dog saw a big ball and ran quickly.

console.log(``);

// Store Multiple Values in one Variable using JavaScript Arrays

/**
 * With JavaScript array variables, we can store several pieces of data in one place.
 */

var sandwich = ["peanut butter", "jelly", "bread"];
console.log(sandwich); // expected output: [ 'peanut butter', 'jelly', 'bread' ]

var myArray = ["Marcelo", 39];
console.log(myArray); // expected output: [ 'Marcelo', 39 ]

console.log(``);

// Nest one Array within Another Array

/**
 * You can also nest arrays within other arrays, like this:
 * [["Bulls", 23], ["White Sox", 45]].
 * This is also called a multi-dimensional array.
 */

var ourArray = [
  ["the universe", 42],
  ["everything", 101010],
];
console.log(ourArray); // expected output: [ [ 'the universe', 42 ], [ 'everything', 101010 ] ]

console.log(``);

// Access Array Data with Indexes

/**
 * Like strings, arrays use zero-based indexing,
 * so the first element in an array has an index of 0.
 * There shouldn't be any spaces between the array name
 * and the square brackets.
 */

//          [ 0, 1, 2]
var array = [50, 60, 70];
console.log(array[0]); // expected output: 50
var data = array[1];
console.log(data); // expected output: 60

console.log(``);

// Modify Array Data With Indexes

/**
 * Unlike strings, the entries of arrays are mutable
 * and can be changed freely.
 */

var ourArray = [50, 40, 30];
ourArray[0] = 15;
console.log(ourArray); // expected output: [ 15, 40, 30 ]

console.log(``);

// Access Multi-Dimensional Arrays With Indexes

/**
 * One way to think of a multi-dimensional array, is as an array of arrays.
 * When you use brackets to access your array,
 * the first set of brackets refers to the entries in the outer-most (the first level) array,
 * and each additional pair of brackets refers to the next level of entries inside.
 */

var arr = [
  [1, 2, 3],
  //            0, 0, 0
  //            0, 1, 2
  [4, 5, 6],
  //            1, 1, 1
  //            0, 1, 2
  [7, 8, 9],
  //            2, 2, 2
  //            0, 1, 2
  [[10, 11, 12], 13, 14],
  //            3, 3, 3 ,  3,  3
  //            0, 0, 0 ,  1,  2
  //            0, 1, 2
];
console.log(arr[3]); // expected output: [[10,11,12], 13, 14]
console.log(arr[3][0]); // expected output: [10,11,12]
console.log(arr[3][0][0]); // expected output: 10
console.log(arr[3][0][1]); // expected output: 11
console.log(arr[3][0][2]); // expected output: 12
console.log(arr[3][1]); // expected output: 13
console.log(arr[1][2]); // expected output: 6
console.log(arr[0][2]); // expected output: 3

console.log(``);

// Manipulate Arrays With push()

/**
 * An easy way to append data to the end of an array is via the push() function.
 *
 * .push() takes one or more parameters and "pushes" them onto the end of the array.
 */

var arr = [1, 2, 3];
arr.push(4);
console.log(arr); // expected output: [ 1, 2, 3, 4 ]

var myArray = [
  ["John", 23],
  ["cat", 2],
];
myArray.push(["dog", 3]);
console.log(myArray); // expected output: [ [ 'John', 23 ], [ 'cat', 2 ], [ 'dog', 3 ] ]

console.log(``);

// Manipulate Arrays With pop()

/**
 * .pop() removes the last element from an array and returns that element.
 */

var threeArr = [1, 4, 6];
var oneDown = threeArr.pop();
console.log(oneDown); // expected output: Returns 6
console.log(threeArr); // expected output: Returns [1, 4]

console.log(``);

// Manipulate Arrays With shift()

/**
 * .shift() removes the first element instead of the last.
 */

var ourArray = ["Stimpson", "J", ["cat"]];
var removedFromOurArray = ourArray.shift();
console.log(removedFromOurArray); // expected output: Stimpson
console.log(ourArray); // expected output: [ 'J', [ 'cat' ] ]

console.log(``);

// Manipulate Arrays With unshift()

/**
 * .unshift() works exactly like .push(), but instead of adding the element
 * at the end of the array, unshift() adds the element at the beginning of the array.
 */

var ourArray = ["Stimpson", "J", "cat"];
console.log(ourArray.shift()); // expected output: Stimpson
console.log(ourArray); // expected output: [ 'J', 'cat' ]
ourArray.unshift("Happy");
console.log(ourArray); // expected output: ["Happy", "J", "cat"]

console.log(``);

// Exercise: "Shopping List"

/**
 * Create a shopping list in the variable myList.
 * The list should be a multi-dimensional array containing several sub-arrays.
 *
 * The first element in each sub-array should contain a string with the name of the item.
 * The second element should be a number representing the quantity i.e.
 *
 * ["Chocolate Bar", 15]
 *
 * There should be at least 5 sub-arrays in the list.
 */

var myList = [
  ["Chocolate Bar", 15],
  ["Egg", 10],
  ["Milk", 1],
  ["Bread", 1],
  ["Coffee", 1],
];
console.log(myList); // expected output: [
//                     [ 'Chocolate Bar', 15 ],
//                     [ 'Egg', 10 ],
//                     [ 'Milk', 1 ],
//                     [ 'Bread', 1 ],
//                     [ 'Coffee', 1 ]
//                  ]

console.log(``);

// Write Reusable JavaScript with Functions

/**
 * In JavaScript, we can divide up our code into reusable parts called functions.
 *
 * You can call or invoke this function by using its name followed by parentheses,
 * like this: functionName();
 */

function functionName() {
  console.log("Hello World"); // expected output: Hello World
}
functionName();

console.log(``);

// Passing Values to Functions with Arguments

/**
 * Parameters are variables that act as placeholders for the values that
 * are to be input to a function when it is called. When a function is defined,
 * it is typically defined along with one or more parameters. The actual values
 * that are input (or "passed") into a function when it is called are known as arguments.
 */

function functionWithArgs(a, b) {
  console.log(a + b);
}
functionWithArgs(2, 2); // expected output: 4

console.log(``);

// Global Scope and Functions

/**
 * In JavaScript, scope refers to the visibility of variables.
 * Variables which are defined outside of a function block have Global scope.
 * This means, they can be seen everywhere in your JavaScript code.
 *
 * Variables which are used without the var keyword
 * are automatically created in the global scope.
 * This can create unintended consequences elsewhere in your code
 * or when running a function again.
 * You should always declare your variables with var.
 */

var myGlobal = 10;

function fun1() {
  oopsGlobal = 5;
}

function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}
console.log(fun2()); // expected output: myGlobal: 10
//                  undefined

console.log(``);

// Local Scope and Functions

/**
 * Variables which are declared within a function,
 * as well as the function parameters have local scope.
 * That means, they are only visible within that function.
 */

function myTest() {
  var loc = "foo";
  console.log(loc);
}
myTest(); // expected output: "foo"
// console.log(loc); // expected output: "ReferenceError: loc is not defined"

console.log(``);

// Global vs. Local Scope in Functions

/**
 * It is possible to have both local and global variables with the same name.
 * When you do this, the local variable takes precedence over the global variable.
 */

var someVar = "Hat";

function myFun() {
  var someVar = "Head";
  return someVar;
}
myFun(); // expected output: "Head"
console.log(myFun()); // expected output: "Head"

console.log(someVar); // expected output: "Hat"

function myFun2() {
  return someVar;
}
myFun2(); // expected output: "Hat"
console.log(myFun2()); // expected output: "Hat"

console.log(``);

// Return a Value from a Function with Return

/**
 * We can pass values into a function with arguments.
 * You can use a return statement to send a value back out of a function.
 */

function plusThree(num) {
  return num + 3;
}
var answer = plusThree(5);
console.log(answer); // expected output: 8

console.log(``);

// Understanding Undefined Value returned from a Function

/**
 * A function can include the return statement but it does not have to.
 * In the case that the function doesn't have a return statement,
 * when you call it, the function processes the inner code
 * but the returned value is undefined.
 */

var sum = 0;
function addSum(num) {
  sum = sum + num;
}
addSum(3); // sum will be modified but returned value is undefined
console.log(addSum(3)); // expected output: undefined

console.log(``);

// Assignment with a Returned Value

/**
 * If you'll recall from our discussion of Storing Values with the Assignment Operator,
 * everything to the right of the equal sign is resolved before the value is assigned.
 * This means we can take the return value of a function and assign it to a variable.
 */

var processed = 0;
function processArg(num) {
  return (num + 3) / 5;
}
processed = processArg(7);
console.log(processed); // expected output: 2

console.log(``);

// Stand in Line

/**
 * In Computer Science a queue is an abstract Data Structure where items are kept in order.
 * New items can be added at the back of the queue
 * and old items are taken off from the front of the queue.
 */

function nextInLine(arr, item) {
  item = arr.push(item);
  item = arr.shift();
  return item;
}
console.log(nextInLine([1, 2], 3)); // expected output: 1

console.log(``);

// Understanding Boolean Values

/**
 * Another data type is the Boolean.
 * Booleans may only be one of two values: true or false.
 * They are basically little on-off switches, where true is "on"
 * and false is "off." These two states are mutually exclusive.
 */

function welcomeToBooleans() {
  return true;
}
console.log(welcomeToBooleans()); // expected output: true

function welcomeToBooleans2() {
  return false;
}
console.log(welcomeToBooleans2()); // expected output: false

console.log(``);

// Use Conditional Logic with If Statements

/**
 * If statements are used to make decisions in code.
 * The keyword if tells JavaScript to execute the code
 * in the curly braces under certain conditions, defined in the parentheses.
 * These conditions are known as Boolean conditions
 * and they may only be true or false.
 */

function test(myCondition) {
  if (myCondition) {
    return "It was true";
  }
  return "It was false";
}
console.log(test(true)); // expected output: "It was true"
console.log(test(false)); // expected output: "It was false"

console.log(``);

// Comparison with the Equality Operator

/**
 * The most basic operator is the equality operator ==.
 * The equality operator compares two values
 * and returns true if they're equivalent or false if they are not.
 * Note that equality is different from assignment (=),
 * which assigns the value at the right of the operator
 * to a variable in the left.
 *
 * In order for JavaScript to compare two different data types
 * (for example, numbers and strings), it must convert one type to another.
 * This is known as "Type Coercion".
 * Once it does, however, it can compare terms as follows:
 *
 * 1   ==  1   // true
 * 1   ==  2   // false
 * 1   == '1'  // true
 * "3" ==  3   // true
 */

function equalityTest(myVal) {
  if (myVal == 10) {
    return "Equal";
  }
  return "Not Equal";
}
console.log(equalityTest(10)); // expected output: "Equal"
console.log(equalityTest(11)); // expected output: "Not Equal"

console.log(``);

// Comparison with the Strict Equality Operator

/**
 * Strict equality (===) is the counterpart to the equality operator (==).
 * However, unlike the equality operator,
 * which attempts to convert both values being compared to a common type,
 * the strict equality operator does not perform a type conversion.
 *
 * If the values being compared have different types,
 * they are considered unequal,
 * and the strict equality operator will return false.
 *
 * 3 ===  3   // true
 * 3 === '3'  // false
 */

function testStrict(val) {
  if (val === 7) {
    return "Equal";
  }
  return "Not Equal";
}
console.log(testStrict(10)); // expected output: "Not Equal"
console.log(testStrict(7)); // expected output: "Equal"

console.log(``);

// Practice comparing different values

/**
 * If the values being compared are not of the same type,
 * the equality operator will perform a type conversion,
 * and then evaluate the values.
 * However, the strict equality operator will compare both the data type and value as-is,
 * without converting one type to the other.
 *
 * 3 == '3'  // returns true because JavaScript performs type conversion from string to number
 * 3 === '3' // returns false because the types are different and type conversion is not performed
 *
 * typeof 3   // returns 'number'
 * typeof '3' // returns 'string'
 *
 */

function compareEquality(a, b) {
  if (a == b) {
    return "Equal";
  }
  return "Not Equal";
}
console.log(compareEquality(10, "10")); // expected output: "Equal"

function compareEquality2(a, b) {
  if (a === b) {
    return "Equal";
  }
  return "Not Equal";
}
console.log(compareEquality2(10, "10")); // expected output: "Not Equal"

console.log(``);

// Comparison with the Inequality Operator

/**
 * The inequality operator (!=) is the opposite of the equality operator.
 * It means "Not Equal" and returns false where equality would return true
 * and vice versa. Like the equality operator,
 * the inequality operator will convert data types of values while comparing.
 *
 * 1 !=  2     // true
 * 1 != "1"    // false
 * 1 != '1'    // false
 * 1 != true   // false
 * 0 != false  // false
 */

function testNotEqual(val) {
  if (val != 99) {
    return "Not Equal";
  }
  return "Equal";
}
console.log(testNotEqual(10)); // expected output: Not Equal
console.log(testNotEqual(99)); // expected output: Equal

console.log(``);

// Comparison with the Strict Inequality Operator

/**
 * The strict inequality operator (!==) is the logical opposite of the strict equality operator.
 * It means "Strictly Not Equal" and returns false where strict equality would return true
 * and vice versa. Strict inequality will not convert data types.
 *
 * 3 !==  3   // false
 * 3 !== '3'  // true
 * 4 !==  3   // true
 */

function testStrictNotEqual(val) {
  if (val !== 17) {
    return "Not Equal";
  }
  return "Equal";
}
console.log(testStrictNotEqual(10)); // expected output: Not Equal
console.log(testStrictNotEqual(17)); // expected output: Equal

console.log(``);

// Comparison with the Greater Than Operator

/**
 * The greater than operator (>) compares the values of two numbers.
 * If the number to the left is greater than the number to the right, it returns true.
 * Otherwise, it returns false.
 *
 * Like the equality operator,
 * greater than operator will convert data types of values while comparing.
 *
 * 5   >  3   // true
 * 7   > '3'  // true
 * 2   >  3   // false
 * '1' >  9   // false
 */

function testGreaterThan(val) {
  if (val > 100) {
    return "Over 100";
  }
  if (val > 10) {
    return "Over 10";
  }
  return "10 or Under";
}
console.log(testGreaterThan(10)); // expected output: 10 or Under
console.log(testGreaterThan(11)); // expected output: Over 10
console.log(testGreaterThan(101)); // expected output: Over 100

console.log(``);

// Comparison with the Greater Than Or Equal To Operator

/**
 * The greater than or equal to operator (>=) compares the values of two numbers.
 * If the number to the left is greater than or equal to the number to the right,
 * it returns true. Otherwise, it returns false.
 *
 * Like the equality operator,
 * greater than or equal to operator will convert data types while comparing.
 *
 * 6   >=  6   // true
 * 7   >= '3'  // true
 * 2   >=  3   // false
 * '7' >=  9   // false
 */

function testGreaterOrEqual(val) {
  if (val >= 20) {
    return "20 or Over";
  }
  if (val >= 10) {
    return "10 or Over";
  }
  return "Less than 10";
}
console.log(testGreaterOrEqual(10)); // expected output: 10 or Over
console.log(testGreaterOrEqual(20)); // expected output: 20 or Over
console.log(testGreaterOrEqual(5)); // expected output: Less than 10

console.log(``);

// Comparison with the Less Than Operator

/**
 * The less than operator (<) compares the values of two numbers.
 * If the number to the left is less than the number to the right,
 * it returns true. Otherwise, it returns false.
 * Like the equality operator,
 * less than operator converts data types while comparing.
 *
 * 2   < 5  // true
 * '3' < 7  // true
 * 5   < 5  // false
 * 3   < 2  // false
 * '8' < 4  // false
 */

function testLessThan(val) {
  if (val < 25) {
    return "Under 25";
  }
  if (val < 55) {
    return "Under 55";
  }
  return "55 or Over";
}
console.log(testLessThan(10)); // expected output: "Under 25"
console.log(testLessThan(54)); // expected output: "Under 55"
console.log(testLessThan(55)); // expected output: "55 or Over"

console.log(``);

// Comparison with the Less Than Or Equal To Operator

/**
 * The less than or equal to operator (<=) compares the values of two numbers.
 * If the number to the left is less than or equal to the number to the right,
 * it returns true.
 * If the number on the left is greater than the number on the right,
 * it returns false.
 * Like the equality operator, less than or equal to converts data types.
 *
 * 4   <= 5  // true
 * '7' <= 7  // true
 * 5   <= 5  // true
 * 3   <= 2  // false
 * '8' <= 4  // false
 */

function testLessOrEqual(val) {
  if (val <= 12) {
    // Change this line
    return "Smaller Than or Equal to 12";
  }
  if (val <= 24) {
    // Change this line
    return "Smaller Than or Equal to 24";
  }
  return "More Than 24";
}
console.log(testLessOrEqual(10)); // expected output: "Smaller Than or Equal to 12"
console.log(testLessOrEqual(24)); // expected output: "Smaller Than or Equal to 24"
console.log(testLessOrEqual(25)); // expected output: "More Than 24"

console.log(``);

// Comparisons with the Logical And Operator

/**
 * Sometimes you will need to test more than one thing at a time.
 * The logical and operator (&&) returns true if
 * and only if the operands to the left and right of it are true.
 *
 * The same effect could be achieved by nesting an if statement inside another if:
 *
 *  if (num > 5) {
 *   if (num < 10) {
 *     return "Yes";
 *   }
 * }
 * return "No";
 *
 * will only return "Yes" if num is greater than 5 and less than 10.
 * The same logic can be written as:
 *
 * if (num > 5 && num < 10) {
 * return "Yes";
 * }
 * return "No";
 */

function testLogicalAnd(val) {
  if (val <= 50 && val >= 25) {
    return "Yes";
  }
  return "No";
}
console.log(testLogicalAnd(10)); // expected output: "No"
console.log(testLogicalAnd(26)); // expected output: "Yes"

console.log(``);

// Comparisons with the Logical Or Operator

/**
 * The logical or operator (||) returns true if either of the operands is true.
 * Otherwise, it returns false.
 *
 * The logical or operator is composed of two pipe symbols: (||).
 * This can typically be found between your Backspace and Enter keys.
 *
 * The pattern below should look familiar from prior waypoints:
 *
 * if (num > 10) {
 * return "No";
 * }
 * if (num < 5) {
 * return "No";
 * }
 * return "Yes";
 *
 * will return "Yes" only if num is between 5 and 10 (5 and 10 included).
 * The same logic can be written as:
 *
 * if (num > 10 || num < 5) {
 * return "No";
 * }
 * return "Yes";
 */

function testLogicalOr(val) {
  if (val > 20) {
    return "Outside";
  }
  if (val < 10) {
    return "Outside";
  }
  return "Inside";
}
console.log(testLogicalOr(15)); // expected output: "Inside"
console.log(testLogicalOr(21)); // expected output: "Outside"
console.log(testLogicalOr(9)); // expected output: "Outside"

function testLogicalOr2(val) {
  if (val > 20 || val < 10) {
    return "Outside";
  }
  return "Inside";
}
console.log(testLogicalOr2(15)); // expected output: "Inside"
console.log(testLogicalOr2(21)); // expected output: "Outside"
console.log(testLogicalOr2(9)); // expected output: "Outside"

console.log(``);

// Introducing Else Statements

/**
 * When a condition for an if statement is true, the block of code following it is executed. 
 * What about when that condition is false? Normally nothing would happen. 
 * With an else statement, an alternate block of code can be executed.
 * 
 * if (num > 10) {
 * return "Bigger than 10";
 * } else {
 * return "10 or Less";
}
 */

function testElse(val) {
  var result = "";
  if (val > 5) {
    result = "Bigger than 5";
  }
  if (val <= 5) {
    result = "5 or Smaller";
  }
  return result;
}

console.log(testElse(4)); // expected output: "5 or Smaller"
console.log(testElse(6)); // expected output: "Bigger than 5"

function testElse2(val) {
  var result = "";
  if (val > 5) {
    return (result = "Bigger than 5");
  } else {
    return (result = "5 or Smaller");
  }
}

console.log(testElse2(4)); // expected output: "5 or Smaller"
console.log(testElse2(6)); // expected output: "Bigger than 5"

console.log(``);

// Introducing Else If Statements

/**
 * If you have multiple conditions that need to be addressed,
 * you can chain if statements together with else if statements.
 *
 * if (num > 15) {
 * return "Bigger than 15";
 * } else if (num < 5) {
 * return "Smaller than 5";
 * } else {
 * return "Between 5 and 15";
 * }
 */

function testElseIf(val) {
  if (val > 10) {
    return "Greater than 10";
  } else if (val < 5) {
    return "Smaller than 5";
  } else {
    return "Between 5 and 10";
  }
}
console.log(testElseIf(11)); // expected output: "Greater than 10"
console.log(testElseIf(4)); // expected output: "Smaller than 5"
console.log(testElseIf(7)); // expected output: "Between 5 and 10"

console.log(``);

// Logical Order in If Else Statements

/**
 * Order is important in if, else if statements.
 *
 * The function is executed from top to bottom
 * so you will want to be careful of what statement comes first.
 *
 * Take these two functions as an example.
 *
 * Here's the first:
 *
 * function foo(x) {
 *   if (x < 1) {
 *     return "Less than one";
 *   } else if (x < 2) {
 *     return "Less than two";
 *   } else {
 *     return "Greater than or equal to two";
 *   }
 * }
 *
 * And the second just switches the order of the statements:
 *
 * function bar(x) {
 *  if (x < 2) {
 *    return "Less than two";
 *  } else if (x < 1) {
 *    return "Less than one";
 *  } else {
 *    return "Greater than or equal to two";
 *  }
 * }
 *
 * While these two functions look nearly identical
 *  if we pass a number to both we get different outputs.
 *
 * foo(0) // "Less than one"
 * bar(0) // "Less than two"
 */

function orderMyLogic(val) {
  if (val < 5) {
    return "Less than 5";
  } else if (val < 10) {
    return "Less than 10";
  } else {
    return "Greater than or equal to 10";
  }
}
console.log(orderMyLogic(7)); // expected output: "Less than 10"
console.log(orderMyLogic(4)); // expected output: "Less than 5"
console.log(orderMyLogic(10)); // expected output: "Greater than or equal to 10"

console.log(``);

// Chaining If Else Statements

/**
 * if/else statements can be chained together for complex logic.
 * Here is pseudocode of multiple chained if / else if statements:
 *
 * if (condition1) {
 *   statement1
 * } else if (condition2) {
 *   statement2
 * } else if (condition3) {
 *   statement3
 * . . .
 * } else {
 *   statementN
 * }
 */

function testSize(num) {
  if (num < 5) {
    return "Tiny";
  } else if (num < 10) {
    return "Small";
  } else if (num < 15) {
    return "Medium";
  } else if (num < 20) {
    return "Large";
  } else {
    return "Huge";
  }
}
console.log(testSize(7)); // expected output: "Small"
console.log(testSize(4)); // expected output: "Tiny"
console.log(testSize(11)); // expected output: "Medium"
console.log(testSize(19)); // expected output: "Large"
console.log(testSize(21)); // expected output: "Huge"

console.log(``);

// Golf Code

/**
 * Exercise
 *
 * https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/golf-code
 */

var names = [
  "Hole-in-one!",
  "Eagle",
  "Birdie",
  "Par",
  "Bogey",
  "Double Bogey",
  "Go Home!",
];
function golfScore(par, strokes) {
  if (strokes == 1) {
    return names[0];
  } else if (strokes <= par - 2) {
    return names[1];
  } else if (strokes == par - 1) {
    return names[2];
  } else if (strokes == par) {
    return names[3];
  } else if (strokes == par + 1) {
    return names[4];
  } else if (strokes == par + 2) {
    return names[5];
  } else return names[6];
}
console.log(golfScore(5, 1)); // expected output: "Hole-in-one!"
console.log(golfScore(5, 3)); // expected output: "Eagle"
console.log(golfScore(5, 4)); // expected output: "Birdie"
console.log(golfScore(5, 5)); // expected output: "Par"
console.log(golfScore(5, 6)); // expected output: "Bogey"
console.log(golfScore(5, 7)); // expected output: "Double Bogey"
console.log(golfScore(5, 8)); // expected output: "Go Home!"

console.log(``);

// Selecting from Many Options with Switch Statements

/**
 * If you have many options to choose from, use a switch statement.
 * A switch statement tests a value and can have many case statements which define various possible values.
 * Statements are executed from the first matched case value until a break is encountered.
 *
 * Here is an example of a switch statement:
 *
 * switch(lowercaseLetter) {
 *   case "a":
 *     console.log("A");
 *     break;
 *   case "b":
 *     console.log("B");
 *     break;
 * }
 *
 * case values are tested with strict equality (===).
 * The break tells JavaScript to stop executing statements.
 * If the break is omitted, the next statement will be executed.
 */

function caseInSwitch(val) {
  var answer = "";
  switch (val) {
    case 1:
      answer = "alpha";
      break;
    case 2:
      answer = "beta";
      break;
    case 3:
      answer = "gamma";
      break;
    case 4:
      answer = "delta";
      break;
  }
  return answer;
}
console.log(caseInSwitch(1)); // expected output: "alpha"
console.log(caseInSwitch(2)); // expected output: "beta"
console.log(caseInSwitch(3)); // expected output: "gamma"
console.log(caseInSwitch(4)); // expected output: "delta"

console.log(``);

// Adding a Default Option in Switch Statements

/**
 * In a switch statement you may not be able to specify all possible values as case statements. 
 * Instead, you can add the default statement which will be executed if no matching case statements are found. 
 * Think of it like the final else statement in an if/else chain.
 * 
 * A default statement should be the last case.
 * switch (num) {
 * case value1:
 *   statement1;
 *   break;
 * case value2:
 *   statement2;
 *   break;
 * ...
 * default:
 *   defaultStatement;
 *   break;
}
 */

function switchOfStuff(val) {
  var answer = "";
  switch (val) {
    case "a":
      console.log((answer = "apple"));
      break;
    case "b":
      console.log((answer = "bird"));
      break;
    case "c":
      console.log((answer = "cat"));
      break;
    default:
      console.log((answer = "stuff"));
      break;
  }
  return answer;
}
switchOfStuff("a"); // expected output: "apple"
switchOfStuff("b"); // expected output: "bird"
switchOfStuff("c"); // expected output: "cat"
switchOfStuff("d"); // expected output: "stuff"
switchOfStuff(1); // expected output: "stuff"

console.log(``);

// Multiple Identical Options in Switch Statements

/**
 * If the break statement is omitted from a switch statement's case,
 * the following case statement(s) are executed until a break is encountered.
 * If you have multiple inputs with the same output,
 * you can represent them in a switch statement like this:
 *
 * switch(val) {
 *  case 1:
 *  case 2:
 *  case 3:
 *    result = "1, 2, or 3";
 *    break;
 *  case 4:
 *    result = "4 alone";
 * }
 */

function sequentialSizes(val) {
  var answer = "";
  switch (val) {
    case 1:
    case 2:
    case 3:
      console.log((answer = "Low"));
      break;
    case 4:
    case 5:
    case 6:
      console.log((answer = "Mid"));
      break;
    case 7:
    case 8:
    case 9:
      console.log((answer = "High"));
  }
  return answer;
}
sequentialSizes(1); // expected output: "Low"
sequentialSizes(5); // expected output: "Mid"
sequentialSizes(9); // expected output: "High"

console.log(``);

// Replacing If Else Chains with Switch

/**
 * If you have many options to choose from,
 * a switch statement can be easier to write than many chained if/else if statements.
 * The following:
 *
 * if (val === 1) {
 *   answer = "a";
 * } else if (val === 2) {
 *   answer = "b";
 * } else {
 *   answer = "c";
 * }
 *
 * can be replaced with:
 *
 * switch(val) {
 *   case 1:
 *     answer = "a";
 *     break;
 *   case 2:
 *     answer = "b";
 *     break;
 *   default:
 *     answer = "c";
 * }
 */

function chainToSwitch(val) {
  var answer = "";
  switch (val) {
    case "bob":
      answer = "Marley";
      break;
    case 42:
      answer = "The Answer";
      break;
    case 1:
      answer = "There is no #1";
      break;
    case 99:
      answer = "Missed me by this much!";
      break;
    case 7:
      answer = "Ate Nine";
      break;
    default:
      answer = "";
  }
  return console.log(answer);
}
chainToSwitch("bob"); // expected output: "Marley"
chainToSwitch(42); // expected output: "The Answer"
chainToSwitch(1); // expected output: "There is no #1"
chainToSwitch(99); // expected output: "Missed me by this much!"
chainToSwitch("John"); // expected output: (empty)
chainToSwitch(156); // expected output: (empty)
chainToSwitch(7); // expected output: "Ate Nine"

console.log(``);

// Returning Boolean Values from Functions

/**
 * You may recall from Comparison with the Equality Operator
 * that all comparison operators return a boolean true or false value.
 *
 * Sometimes people use an if/else statement to do a comparison, like this:
 *
 * function isEqual(a,b) {
 *   if (a === b) {
 *     return true;
 *   } else {
 *     return false;
 *   }
 * }
 *
 * But there's a better way to do this. Since === returns true or false,
 * we can return the result of the comparison:
 *
 * function isEqual(a,b) {
 *   return a === b;
 * }
 */

function isLess(a, b) {
  if (a < b) {
    return true;
  } else {
    return false;
  }
}
console.log(isLess(10, 15)); // expected output: "true"
console.log(isLess(15, 10)); // expected output: "false"

function isLess(a, b) {
  return a < b;
}
console.log(isLess(10, 15)); // expected output: "true"
console.log(isLess(15, 10)); // expected output: "false"

console.log(``);

// Return Early Pattern for Functions

/**
 * When a return statement is reached, the execution of the current function stops
 *  and control returns to the calling location.
 *
 * Example
 *
 * function myFun() {
 *   console.log("Hello");
 *   return "World";
 *   console.log("byebye")
 * }
 * myFun();
 *
 * The above outputs "Hello" to the console, returns "World", but "byebye" is never output,
 * because the function exits at the return statement.
 */

function abTest(a, b) {
  // Only change code below this line
  if (a < 0 || b < 0) {
    return;
  }
  // Only change code above this line
  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}
console.log(abTest(2, 2));  // expected output: "8"
console.log(abTest(-1, 2)); // expected output: "undefined"

console.log(``);

// Counting Cards

/**
 * In the casino game Blackjack, a player can gain an advantage over the house
 * by keeping track of the relative number of high and low cards remaining in the deck.
 * This is called Card Counting.
 *
 * Having more high cards remaining in the deck favors the player.
 * Each card is assigned a value according to the table below.
 * When the count is positive, the player should bet high.
 * When the count is zero or negative, the player should bet low.
 *
 * Count Change |       Cards
 * -------------------------------------
 *     +1       |    2, 3, 4, 5, 6
 * -------------------------------------
 *      0       |       7, 8, 9
 * -------------------------------------
 *     -1       | 10, 'J', 'Q', 'K', 'A'
 *
 * You will write a card counting function. It will receive a card parameter,
 * which can be a number or a string,
 * and increment or decrement the global count variable according to the card's value (see table).
 * The function will then return a string with the current count and the string Bet if the count is positive,
 * or Hold if the count is zero or negative.
 * The current count and the player's decision (Bet or Hold) should be separated by a single space.
 *
 * Example Output
 * -3 Hold
 * 5 Bet
 *
 * Hint
 * Do NOT reset count to 0 when value is 7, 8, or 9.
 * Do NOT return an array.
 * Do NOT include quotes (single or double) in the output.
 */

var count = 0;
function cc(card) {
  var msg = "";
  switch (card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count += 1;
      break;
    case 7:
    case 8:
    case 9:
      count += 0;
      break;
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
      count -= 1;
      break;
  }
  if (count > 0) {
    msg = `${count} Bet`;
  } else if (count == 0) {
    msg = `${count} Hold`;
  } else {
    msg = `${count} Hold`;
  }
  return msg;
}
console.log(cc(2));   // expected output: "1 Bet"
console.log(count);   // expected output: "1"
console.log(cc(3));   // expected output: "2 Bet"
console.log(count);   // expected output: "2"
console.log(cc(7));   // expected output: "2 Bet"
console.log(count);   // expected output: "2"
console.log(cc("K")); // expected output: "1 Bet"
console.log(count);   // expected output: "1"
console.log(cc("A")); // expected output: "0 Hold"
console.log(count);   // expected output: "0"

console.log(``);

// Build JavaScript Objects

/**
 * You may have heard the term object before.
 *
 * Objects are similar to arrays, except that instead of using indexes to access
 * and modify their data, you access the data in objects through what are called properties.
 *
 * Objects are useful for storing data in a structured way,
 * and can represent real world objects, like a cat.
 *
 * Here's a sample cat object:
 *
 * var cat = {
 * "name": "Whiskers",
 * "legs": 4,
 * "tails": 1,
 * "enemies": ["Water", "Dogs"]
 * };
 * In this example, all the properties are stored as strings, such as - "name", "legs", and "tails".
 * However, you can also use numbers as properties.
 * You can even omit the quotes for single-word string properties, as follows:
 *
 * var anotherObject = {
 * make: "Ford",
 * 5: "five",
 * "model": "focus"
 * };
 *
 * However, if your object has any non-string properties,
 * JavaScript will automatically typecast them as strings.
 */

var myDog = {
  name: "Dog",
  legs: 4,
  tails: 1,
  friends: ["Ball", "Grass"],
};
console.log(myDog); // expected output: "{ name: 'Dog', legs: 4, tails: 1, friends: [ 'Ball', 'Grass' ] }"

console.log(``);

// Accessing Object Properties with Dot Notation

/**
 * There are two ways to access the properties of an object: dot notation (.) 
 * and bracket notation ([]), similar to an array.
 * 
 * Dot notation is what you use when you know the name
 * of the property you're trying to access ahead of time.
 * 
 * Here is a sample of using dot notation (.) to read an object's property:
 * 
 * var myObj = {
 *   prop1: "val1",
 *   prop2: "val2"
 * };
 * var prop1val = myObj.prop1; // val1
 * var prop2val = myObj.prop2; // val2
 * 
 */

var testObj = {
  "hat": "ballcap",
  "shirt": "jersey",
  "shoes": "cleats"
};
var hatValue = testObj.hat;
var shirtValue = testObj.shirt;
console.log(hatValue);   // expected output: "ballcap"
console.log(shirtValue); // expected output: "jersey"

console.log(``);

// Accessing Object Properties with Bracket Notation

/**
 * The second way to access the properties of an object is bracket notation ([]). 
 * If the property of the object you are trying to access has a space in its name, 
 * you will need to use bracket notation.
 * 
 * However, you can still use bracket notation on object properties without spaces.
 * 
 * Here is a sample of using bracket notation to read an object's property:
 * 
 * var myObj = {
 *   "Space Name": "Kirk",
 *   "More Space": "Spock",
 *   "NoSpace": "USS Enterprise"
 * };
 * myObj["Space Name"]; // Kirk
 * myObj['More Space']; // Spock
 * myObj["NoSpace"];    // USS Enterprise
 * 
 * Note that property names with spaces in them must be in quotes (single or double).
 */

var testObj = {
  "an entree": "hamburger",
  "my side": "veggies",
  "the drink": "water"
};
var entreeValue = testObj["an entree"];
var drinkValue = testObj["the drink"];
console.log(entreeValue); // expected output: "hamburger"
console.log(drinkValue);  // expected output: "water"

console.log(``);

// Accessing Object Properties with Variables

/**
 * Another use of bracket notation on objects is to access a property which is stored as the value of a variable. 
 * This can be very useful for iterating through an object's properties or when accessing a lookup table.
 * 
 * Here is an example of using a variable to access a property:
 * 
 * var dogs = {
 *   Fido: "Mutt",  Hunter: "Doberman",  Snoopie: "Beagle"
 * };
 * var myDog = "Hunter";
 * var myBreed = dogs[myDog];
 * console.log(myBreed); // "Doberman"
 * 
 * Another way you can use this concept is when the property's name 
 * is collected dynamically during the program execution, as follows:
 * 
 * var someObj = {
 *   propName: "John"
 * };
 * function propPrefix(str) {
 *   var s = "prop";
 *   return s + str;
 * }
 * var someProp = propPrefix("Name"); // someProp now holds the value 'propName'
 * console.log(someObj[someProp]); // "John"
 * 
 * Note that we do not use quotes around the variable name 
 * when using it to access the property because we are using the value of the variable, not the name.
 */

var testObj = {
  12: "Namath",
  16: "Montana",
  19: "Unitas"
};
var playerNumber = 16;
var player = testObj[playerNumber];
console.log(player); // expected output: Montana

console.log(``);

// Updating Object Properties

/**
 * After you've created a JavaScript object, 
 * you can update its properties at any time just like you would update any other variable. 
 * You can use either dot or bracket notation to update.
 * 
 * For example, let's look at ourDog:
 * 
 * var ourDog = {
 *   "name": "Camper",
 *   "legs": 4,
 *   "tails": 1,
 *   "friends": ["everything!"]
 * };
 * 
 * Since he's a particularly happy dog, let's change his name to "Happy Camper". 
 * Here's how we update his object's name property: ourDog.name = "Happy Camper"; 
 * or ourDog["name"] = "Happy Camper"; Now when we evaluate ourDog.name, 
 * instead of getting "Camper", we'll get his new name, "Happy Camper".
 */

var myDog = {
  "name": "Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};
console.log(myDog.name);    // expected output: "Coder"
myDog.name = "Happy Coder";
console.log(myDog.name);    // expected output: "Happy Coder"
myDog["name"] = "Coder"
console.log(myDog["name"]); // expected output: "Coder"

console.log(``);

// Add New Properties to a JavaScript Object

/**
 * You can add new properties to existing JavaScript objects the same way you would modify them.
 * 
 * Here's how we would add a "bark" property to ourDog:
 * 
 * ourDog.bark = "bow-wow";
 * 
 * or
 * 
 * ourDog["bark"] = "bow-wow";
 * 
 * Now when we evaluate ourDog.bark, we'll get his bark, "bow-wow".
 * 
 * Example:
 * 
 * var ourDog = {
 *   "name": "Camper",
 *   "legs": 4,
 *   "tails": 1,
 *   "friends": ["everything!"]
 * };
 * 
 * ourDog.bark = "bow-wow";
 */

var myDog2 = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};
console.log(myDog2);
// expected output:
// {
//   name: 'Happy Coder',
//   legs: 4,
//   tails: 1,
//   friends: [ 'freeCodeCamp Campers' ]
// }
myDog2.bark = "woof";
// or myDog2["bark"] = "woof";
console.log(myDog2);
// expected output:
// {
//   name: 'Happy Coder',
//   legs: 4,
//   tails: 1,
//   friends: [ 'freeCodeCamp Campers' ],
//   bark: 'woof'
// }

console.log(``);

// Delete Properties from a JavaScript Object

/**
 * We can also delete properties from objects like this:
 * 
 * delete ourDog.bark;
 * 
 * Example:
 * 
 * var ourDog = {
 *   "name": "Camper",
 *   "legs": 4,
 *   "tails": 1,
 *   "friends": ["everything!"],
 *   "bark": "bow-wow"
 * };
 * 
 * delete ourDog.bark;
 * 
 * After the last line shown above, ourDog looks like:
 * 
 * {
 *   "name": "Camper",
 *   "legs": 4,
 *   "tails": 1,
 *   "friends": ["everything!"]
 * }
 */

var myDog3 = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"],
  "bark": "woof"
};
console.log(myDog3);
// expected output:
// {
//   name: 'Happy Coder',
//   legs: 4,
//   tails: 1,
//   friends: [ 'freeCodeCamp Campers' ],
//   bark: 'woof'
// }
delete myDog3["tails"];
//or delete myDog3.tails;
console.log(myDog3);
// expected output:
// {
//   name: 'Happy Coder',
//   legs: 4,
//   friends: [ 'freeCodeCamp Campers' ],
//   bark: 'woof'
// }

console.log(``);

// Using Objects for Lookups

/**
 * Objects can be thought of as a key/value storage, like a dictionary. 
 * If you have tabular data, you can use an object to "lookup" values rather than
 *  a switch statement or an if/else chain. 
 * This is most useful when you know that your input data is limited to a certain range.
 * 
 * Here is an example of a simple reverse alphabet lookup:
 * 
 * var alpha = {
 *   1:"Z",
 *   2:"Y",
 *   3:"X",
 *   4:"W",
 *   ...
 *   24:"C",
 *   25:"B",
 *   26:"A"
 * };
 * alpha[2]; // "Y"
 * alpha[24]; // "C"
 * 
 * var value = 2;
 * alpha[value]; // "Y"
 */

function phoneticLookup(val) {
  var result = "";
  switch (val) {
    case "alpha":
      result = "Adams";
      break;
    case "bravo":
      result = "Boston";
      break;
    case "charlie":
      result = "Chicago";
      break;
    case "delta":
      result = "Denver";
      break;
    case "echo":
      result = "Easy";
      break;
    case "foxtrot":
      result = "Frank";
  }
  return result;
}
console.log(phoneticLookup("charlie")); // expected output: Chicago

function phoneticLookupObject(val) {
  var result = "";
  var lookup = {
    alpha: "Adams",
    bravo: "Boston",
    charlie: "Chicago",
    delta: "Denver",
    echo: "Easy",
    foxtrot: "Frank"
  };
  result = lookup[val];
  return result;
}
console.log(phoneticLookupObject("charlie")); // expected output: Chicago


console.log(``);

// Testing Objects for Properties

/*
 * Sometimes it is useful to check if the property of a given object exists or not. 
 * We can use the .hasOwnProperty(propname) method of objects to determine 
 * if that object has the given property name. .hasOwnProperty() returns true or false 
 * if the property is found or not.
 * 
 * Example
 * 
 * var myObj = {
 *   top: "hat",
 *   bottom: "pants"
 * };
 * myObj.hasOwnProperty("top");    // true
 * myObj.hasOwnProperty("middle"); // false
 */

function checkObj(obj, checkProp) {
  return obj.hasOwnProperty(checkProp) ? console.log(obj[checkProp]) : console.log("Not Found");
}
checkObj({ gift: "pony", pet: "kitten", bed: "sleigh" }, "gift");  // expected output: "pony"
checkObj({ gift: "pony", pet: "kitten", bed: "sleigh" }, "pet");   // expected output: "kitten"
checkObj({ gift: "pony", pet: "kitten", bed: "sleigh" }, "house"); // expected output: "Not Found"
checkObj({ city: "Seattle" }, "city");                             // expected output: "Seattle"
checkObj({ city: "Seattle" }, "district");                         // expected output: "Not Found"

// or

function checkObj2(obj, checkProp) {
  if (obj.hasOwnProperty(checkProp)) {
    return obj[checkProp];
  } else {
    return "Not Found";
  }
}
console.log(checkObj2({ gift: "pony", pet: "kitten", bed: "sleigh" }, "gift"));  // expected output: "pony"
console.log(checkObj2({ gift: "pony", pet: "kitten", bed: "sleigh" }, "pet"));   // expected output: "kitten"
console.log(checkObj2({ gift: "pony", pet: "kitten", bed: "sleigh" }, "house")); // expected output: "Not Found"
console.log(checkObj2({ city: "Seattle" }, "city"));                             // expected output: "Seattle"
console.log(checkObj2({ city: "Seattle" }, "district"));                         // expected output: "Not Found"

console.log(``);

// Manipulating Complex Objects

/**
 * Sometimes you may want to store data in a flexible Data Structure. 
 * A JavaScript object is one way to handle flexible data. 
 * They allow for arbitrary combinations of strings, numbers, booleans, arrays, functions, and objects.
 * 
 * Here's an example of a complex data structure:
 * 
 * var ourMusic = [
 *   {
 *     "artist": "Daft Punk",
 *     "title": "Homework",
 *     "release_year": 1997,
 *     "formats": [ 
 *       "CD", 
 *       "Cassette", 
 *       "LP"
 *     ],
 *     "gold": true
 *   }
 * ];
 * 
 * This is an array which contains one object inside. 
 * The object has various pieces of metadata about an album. 
 * It also has a nested "formats" array. If you want to add more album records, 
 * you can do this by adding records to the top level array. Objects hold data in a property, 
 * which has a key-value format. 
 * In the example above, "artist": "Daft Punk" is a property that has a key of "artist" and a value of "Daft Punk". 
 * JavaScript Object Notation or JSON (https://www.json.org/json-en.html) 
 * is a related data interchange format used to store data.
 * 
 * {
 *   "artist": "Daft Punk",
 *   "title": "Homework",
 *   "release_year": 1997,
 *   "formats": [ 
 *     "CD",
 *     "Cassette",
 *     "LP"
 *   ],
 *   "gold": true
 * }
 * 
 * Note
 * You will need to place a comma after every object in the array, unless it is the last object in the array.
 */

var myMusic = [
  {
    "artist": "Billy Joel",
    "title": "Piano Man",
    "release_year": 1973,
    "formats": [
      "CD",
      "8T",
      "LP"
    ],
    "gold": true
  },
  {
    "artist": "Korn",
    "title": "The Nothing",
    "release_year": 2019,
    "formats": [
      "CD",
      "LP"
    ]
  }
];
console.log(myMusic);
// expected output:
// [
//   {
//     artist: 'Billy Joel',
//     title: 'Piano Man',
//     release_year: 1973,
//     formats: [ 'CD', '8T', 'LP' ],
//     gold: true
//   },
//   {
//     artist: 'Korn',
//     title: 'The Nothing',
//     release_year: 2019,
//     formats: [ 'CD', 'LP' ]
//   }
// ]

console.log(``);

// Accessing Nested Objects

/**
 * The sub-properties of objects can be accessed by chaining together the dot or bracket notation.
 * 
 * Here is a nested object:
 * 
 * var ourStorage = {
 *   "desk": {
 *     "drawer": "stapler"
 *   },
 *   "cabinet": {
 *     "top drawer": { 
 *       "folder1": "a file",
 *       "folder2": "secrets"
 *     },
 *     "bottom drawer": "soda"
 *   }
 * };
 * ourStorage.cabinet["top drawer"].folder2;  // "secrets"
 * ourStorage.desk.drawer;                    // "stapler"
 */

var myStorage = {
  "car": {
    "inside": {
      "glove box": "maps",
      "passenger seat": "crumbs"
    },
    "outside": {
      "trunk": "jack"
    }
  }
};
var gloveBoxContents = myStorage.car.inside["glove box"];
console.log(gloveBoxContents); // expected output: "maps"

console.log(``);

// Accessing Nested Arrays

/**
 * As we have seen in earlier examples, objects can contain both nested objects and nested arrays. 
 * Similar to accessing nested objects, Array bracket notation can be chained to access nested arrays.
 * 
 * Here is an example of how to access a nested array:
 * 
 * var ourPets = [
 *   {
 *     animalType: "cat",
 *     names: [
 *       "Meowzer",
 *       "Fluffy",
 *       "Kit-Cat"
 *     ]
 *   },
 *   {
 *     animalType: "dog",
 *     names: [
 *       "Spot",
 *       "Bowser",
 *       "Frankie"
 *     ]
 *   }
 * ];
 * ourPets[0].names[1]; // "Fluffy"
 * ourPets[1].names[0]; // "Spot"
 */

var myPlants = [
  {
    type: "flowers",
    list: [
      "rose",
      "tulip",
      "dandelion"
    ]
  },
  {
    type: "trees",
    list: [
      "fir",
      "pine",
      "birch"
    ]
  }
];
var secondTree = myPlants[1].list[1];
console.log(secondTree); // expected output: "pine"

console.log(``);

// Record Collection

/**
 * You are given a JSON object representing a part of your musical album collection. 
 * Each album has several properties and a unique id number as its key. Not all albums have complete information.
 * 
 * Write a function which takes an album's id (like 2548), a property prop (like "artist" or "tracks"), 
 * and a value (like "Addicted to Love") to modify the data in this collection.
 * 
 * If prop isn't "tracks" and value isn't empty (""), update or set the value for that record album's property.
 * 
 * Your function must always return the entire collection object.
 * 
 * There are several rules for handling incomplete data:
 * 
 * If prop is "tracks" but the album doesn't have a "tracks" property, 
 * create an empty array before adding the new value to the album's corresponding property.
 * 
 * If prop is "tracks" and value isn't empty (""), push the value onto the end of the album's existing tracks array.
 * 
 * If value is empty (""), delete the given prop property from the album.
 * 
 * Hints
 * Use bracket notation when accessing object properties with variables.
 * 
 * Push is an array method you can read about on Mozilla Developer Network.
 * 
 * You may refer back to Manipulating Complex Objects Introducing JavaScript Object Notation (JSON) for a refresher.
 */

var collection = {
  2548: {
    album: "Slippery When Wet",
    artist: "Bon Jovi",
    tracks: [
      "Let It Rock",
      "You Give Love a Bad Name"
    ]
  },
  2468: {
    album: "1999",
    artist: "Prince",
    tracks: [
      "1999",
      "Little Red Corvette"
    ]
  },
  1245: {
    artist: "Robert Palmer",
    tracks: []
  },
  5439: {
    album: "ABBA Gold"
  }
};

function updateRecords(id, prop, value) {
  if (value === "") delete collection[id][prop];
  else if (prop === "tracks") {
    collection[id][prop] = collection[id][prop] || [];
    collection[id][prop].push(value);
  } else {
    collection[id][prop] = value;
  }
  return collection;
}
updateRecords(5439, "artist", "ABBA");
console.log(collection[5439]); // expected output: { album: 'ABBA Gold', artist: 'ABBA' }


console.log(``);

// Iterate with JavaScript While Loops

/**
 * You can run the same code multiple times by using a loop.
 * 
 * The first type of loop we will learn is called a while loop because it runs "while"
 * a specified condition is true and stops once that condition is no longer true.
 * 
 * var ourArray = [];
 * var i = 0;
 * while(i < 5) {
 *   ourArray.push(i);
 *   i++;
 * }
 * 
 * In the code example above, the while loop will execute 5 times 
 * and append the numbers 0 through 4 to ourArray.
 */

var myArray = [];
i = 5;
while (i >= 0) {
  myArray.push(i);
  i--;
}
console.log(myArray); // expected output: [ 5, 4, 3, 2, 1, 0 ]

console.log(``);

// Iterate with JavaScript For Loops

/**
 * You can run the same code multiple times by using a loop.
 * 
 * The most common type of JavaScript loop is called a for loop
 * because it runs "for" a specific number of times.
 * 
 * For loops are declared with three optional expressions separated by semicolons:
 * 
 * for ([initialization]; [condition]; [final-expression])
 * 
 * The initialization statement is executed one time only before the loop starts. 
 * It is typically used to define and setup your loop variable.
 * 
 * The condition statement is evaluated at the beginning of every loop iteration 
 * and will continue as long as it evaluates to true. 
 * When condition is false at the start of the iteration, 
 * the loop will stop executing. This means if condition starts as false, 
 * your loop will never execute.
 * 
 * The final-expression is executed at the end of each loop iteration, 
 * prior to the next condition check and is usually used to increment 
 * or decrement your loop counter.
 * 
 * In the following example we initialize with i = 0 
 * and iterate while our condition i < 5 is true. 
 * We'll increment i by 1 in each loop iteration with i++ as our final-expression.
 * 
 * var ourArray = [];
 * for (var i = 0; i < 5; i++) {
 *   ourArray.push(i);
 * 
 * ourArray will now contain [0,1,2,3,4].
}
 */

var myArray = [];
for (var i2 = 1; i2 < 6; i2++) {
  myArray.push(i2);
}
console.log(myArray); // expected output: [ 1, 2, 3, 4, 5 ]

console.log(``);

// Iterate Odd Numbers With a For Loop

/**
 * For loops don't have to iterate one at a time. 
 * By changing our final-expression, we can count by even numbers.
 * 
 * We'll start at i = 0 and loop while i < 10. We'll increment i by 2 each loop with i += 2.
 * 
 * var ourArray = [];
 * for (var i = 0; i < 10; i += 2) {
 *   ourArray.push(i);
 * 
 * ourArray will now contain [0,2,4,6,8]. 
 * Let's change our initialization so we can count by odd numbers.
}
 */

var myArray2 = [];
for (var i3 = 1; i3 < 10; i3 += 2) {
  myArray2.push(i3);
}
console.log(myArray2); // expected output: [ 1, 3, 5, 7, 9 ]

console.log(``);

// Count Backwards With a For Loop

/**
 * A for loop can also count backwards, 
 * so long as we can define the right conditions.
 * 
 * In order to count backwards by twos, we'll need to change 
 * our initialization, condition, and final-expression.
 * 
 * We'll start at i = 10 and loop while i > 0. 
 * We'll decrement i by 2 each loop with i -= 2.
 * 
 * var ourArray = [];
 * for (var i = 10; i > 0; i -= 2) {
 *   ourArray.push(i);
 * }
 * 
 * ourArray will now contain [10,8,6,4,2]. 
 * Let's change our initialization and final-expression 
 * so we can count backward by twos by odd numbers.
 */

var myArray3 = [];
for (var i4 = 9; i4 > 0; i4 -= 2) {
  myArray3.push(i4);
}
console.log(myArray3); // expected output: [ 9, 7, 5, 3, 1 ]

console.log(``);

// Iterate Through an Array with a For Loop

/**
 * A common task in JavaScript is to iterate through the contents of an array. 
 * One way to do that is with a for loop. 
 * This code will output each element of the array arr to the console:
 * 
 * var arr = [10, 9, 8, 7, 6];
 * for (var i = 0; i < arr.length; i++) {
 *    console.log(arr[i]);
 * }
 * 
 * Remember that arrays have zero-based indexing, 
 * which means the last index of the array is length - 1. 
 * Our condition for this loop is i < arr.length, 
 * which stops the loop when i is equal to length. 
 * In this case the last iteration is i === 4 i.e. 
 * when i becomes equal to arr.length and outputs 6 to the console.
 * 
 */

//        index =  0, 1, 2, 3, 4
      var myArr = [2, 3, 4, 5, 6];
// myArr.length =  1, 2, 3, 4, 5
// myArr.length =  5
var total = 0;
for (var i5 = 0; i5 < myArr.length; i5++) {
  total += myArr[i5];
  // total = total + myArr[i5]; 
  //     0 =     0 + 2          // index 0 = 2   // i5 = 0
  //     2 =     2 + 3          // index 1 = 3   // i5 = 1
  //     5 =     5 + 4          // index 2 = 4   // i5 = 2
  //     9 =     9 + 5          // index 3 = 5   // i5 = 3
  //    14 =    14 + 6          // index 4 = 6   // i5 = 4  // i5 = 4 < myArr.length = 5
  //    20
}
console.log(total); // expected output: 20

console.log(``);

// Nesting For Loops

/**
 * If you have a multi-dimensional array, 
 * you can use the same logic as the prior waypoint to loop through both the array 
 * and any sub-arrays. Here is an example:
 * 
 * var arr = [
 *   [1,2], [3,4], [5,6]
 * ];
 * for (var i=0; i < arr.length; i++) {
 *   for (var j=0; j < arr[i].length; j++) {
 *     console.log(arr[i][j]);
 *   }
 * }
 * 
 * This outputs each sub-element in arr one at a time. 
 * Note that for the inner loop, we are checking the .length of arr[i], 
 * since arr[i] is itself an array.
 */

console.log(`Nesting For Loops:`)
//  arr = [ array
//          [nesting array], 
//          [nesting array], 
//          [nesting array],
//         ]
var arr = [
// length =      1     ,       2     ,       3     = total = 3
// length =  1   ,   2 ,   1   ,   2 ,   1   ,   2 > total for each nesting arrays = 2
            [1   ,   2],  [3   ,   4],  [5   ,   6]
// index  =      0     ,       1     ,       2
// index  =  0   ,   1 ,   0   ,   1 ,   0   ,   1
// index  =  0 0 , 0 1 ,   1 0 , 1 1 ,   2 0 , 2 1
          ];

console.log(arr);
console.log(`Array length: ${arr.length}`); // expected output: 3
console.log(``);

for (var i6 = 0; i6 < arr.length; i6++) {
// 1st step: i6 = 0;  0 < 3

// 4th step: i6 = 1;  1 < 3

// 7th step: i6 = 2;  2 < 3

    for (var j6 = 0; j6 < arr[i6].length; j6++) {
// 2nd step: j6 = 0;  0 < 2 (arr[0].length = 2)
// 3rd step: j6 = 1;  1 < 2 (arr[0].length = 2)

// 5th step: j6 = 0;  0 < 2 (arr[1].length = 2)
// 6th step: j6 = 1;  1 < 2 (arr[1].length = 2)

// 8th step: j6 = 0;  0 < 2 (arr[2].length = 2)
// 9th step: j6 = 1;  1 < 2 (arr[2].length = 2)

    console.log(`i6: ${i6} / j6: ${j6} / array content ${arr[i6][j6]}`);

  }

}

console.log(``);

function multiplyAll(arr) {
  var product = 1;
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
      product = product * arr[i][j];
    }
  }
  return product;
}
console.log(multiplyAll([[1],[2],[3]]));                // expected output: 6
console.log(multiplyAll([[1,2],[3,4],[5,6,7]]));        // expected output: 5040
console.log(multiplyAll([[5,1],[0.2, 4, 0.5],[3, 9]])); // expected output: 54

console.log(``);

// Iterate with JavaScript Do...While Loops

/**
 * The next type of loop you will learn is called a do...while loop. 
 * It is called a do...while loop because it will first do one pass of the code inside the loop no matter what, 
 * and then continue to run the loop while the specified condition evaluates to true.
 * 
 * var ourArray = [];
 * var i = 0;
 * do {
 *   ourArray.push(i);
 *   i++;
 * } while (i < 5);
 * 
 * The example above behaves similar to other types of loops, 
 * and the resulting array will look like [0, 1, 2, 3, 4]. 
 * However, what makes the do...while different from other loops 
 * is how it behaves when the condition fails on the first check. 
 * Let's see this in action: Here is a regular while loop 
 * that will run the code in the loop as long as i < 5:
 * 
 * var ourArray = []; 
 * var i = 5;
 * while (i < 5) {
 *   ourArray.push(i);
 *   i++;
 * }
 * 
 * In this example, we initialize the value of ourArray to an empty array 
 * and the value of i to 5. When we execute the while loop, 
 * the condition evaluates to false because i is not less than 5, 
 * so we do not execute the code inside the loop. 
 * The result is that ourArray will end up with no values added to it, 
 * and it will still look like [] when all of the code in the example above has completed running. 
 * Now, take a look at a do...while loop:
 * 
 * var ourArray = []; 
 * var i = 5;
 * do {
 *   ourArray.push(i);
 *   i++;
 * } while (i < 5);
 * 
 * In this case, we initialize the value of i to 5, 
 * just like we did with the while loop. 
 * When we get to the next line, there is no condition to evaluate, 
 * so we go to the code inside the curly braces and execute it. 
 * We will add a single element to the array and then increment i before we get to the condition check. 
 * When we finally evaluate the condition i < 5 on the last line, 
 * we see that i is now 6, which fails the conditional check, 
 * so we exit the loop and are done. At the end of the above example, 
 * the value of ourArray is [5]. Essentially, a do...while loop ensures 
 * that the code inside the loop will run at least once. 
 * Let's try getting a do...while loop to work by pushing values to an array.
 */

var myArray2 = [];
var i7 = 10;
do {
  myArray2.push(i7);
  i7++;
} while (i7 < 5);
console.log(myArray2); // expected output: [ 10 ]
console.log(i7);       // expected output: 11

console.log(``);

// Replace Loops using Recursion

/**
 * Recursion is the concept that a function can be expressed in terms of itself. 
 * To help understand this, start by thinking about the following task: 
 * multiply the first n elements of an array to create the product of those elements. 
 * Using a for loop, you could do this:
 * 
 *   function multiply(arr, n) {
 *     var product = 1;
 *     for (var i = 0; i < n; i++) {
 *         product *= arr[i];
 *     }
 *     return product;
 *   }
 * 
 * However, notice that multiply(arr, n) == multiply(arr, n - 1) * arr[n - 1]. 
 * That means you can rewrite multiply in terms of itself and never need to use a loop.
 * 
 *   function multiply(arr, n) {
 *     if (n <= 0) {
 *       return 1;
 *     } else {
 *       return multiply(arr, n - 1) * arr[n - 1];
 *     }
 *   }
 * 
 * The recursive version of multiply breaks down like this. 
 * In the base case, where n <= 0, it returns 1. 
 * For larger values of n, it calls itself, but with n - 1. 
 * That function call is evaluated in the same way, calling multiply again until n <= 0. 
 * At this point, all the functions can return and the original multiply returns the answer.
 * 
 * Note: Recursive functions must have a base case 
 * when they return without calling the function again (in this example, when n <= 0), 
 * otherwise they can never finish executing.
 */

function multiply(arr, n) {
   var product = 1;
   for (var i = 0; i < n; i++) {
       product *= arr[i];
   }
   return product;
}
console.log(multiply([2, 4, 6, 8], 2)); // expected output: 8
console.log(multiply([2, 4, 6, 8], 4)); // expected output: 384
console.log(multiply([1, 2], 1));       // expected output: 1

console.log(``);

function multiply2(arr, n) {
// index:          0, 1, 2, 3, 4 
//              ([25, 4, 5, 8, 10], 4)

if (n <= 0) {
    return 1;

  } else {
// console.log(arr);
// console.log(n);

// index:                0, 1, 2, 3, 4 
//                    ([25, 4, 5, 8, 10], 4)
// function "multiply2(arr, n - 1)" * arr[n - 1]
     return  multiply2(arr, n - 1)  * arr[n - 1];
//                    (arr, 4)      * arr[4 - 1] => arr[3] = number  8 inside the Array
//                    (arr, 3)      * arr[3 - 1] => arr[2] = number  5 inside the Array * 8
//                    (arr, 2)      * arr[3 - 1] => arr[1] = number  4 inside the Array * 5 * 8
//                    (arr, 1)      * arr[3 - 1] => arr[0] = number 25 inside the Array * 4 * 5 * 8 = 4000
  }
}
console.log(multiply2([25, 4, 5, 8, 10], 4)); // expected output: 4000

console.log(``);

function sum2(arr, n) {
  if (n <= 0) {
    return 0;
  } else {
    return sum2(arr, n - 1) + arr[n - 1];
  }
}
console.log(sum2([1], 0));          // expected output: 0
console.log(sum2([2, 3, 4], 1));    // expected output: 2
console.log(sum2([2, 3, 4, 5], 3)); // expected output: 9

console.log(``);

// Profile Lookup

/**
 * We have an array of objects representing different people in our contacts lists.
 * 
 * A lookUpProfile function that takes name and a property (prop) 
 * as arguments has been pre-written for you.
 * 
 * The function should check if name is an actual contact's firstName 
 * and the given property (prop) is a property of that contact.
 * 
 * If both are true, then return the "value" of that property.
 * 
 * If name does not correspond to any contacts then return "No such contact".
 * 
 * If prop does not correspond to any valid properties 
 * of a contact found to match name then return "No such property".
 */

// Setup
var contacts = [
  {
      "firstName": "Akira",
      "lastName": "Laine",
      "number": "0543236543",
      "likes": ["Pizza", "Coding", "Brownie Points"]
  },
  {
      "firstName": "Harry",
      "lastName": "Potter",
      "number": "0994372684",
      "likes": ["Hogwarts", "Magic", "Hagrid"]
  },
  {
      "firstName": "Sherlock",
      "lastName": "Holmes",
      "number": "0487345643",
      "likes": ["Intriguing Cases", "Violin"]
  },
  {
      "firstName": "Kristian",
      "lastName": "Vos",
      "number": "unknown",
      "likes": ["JavaScript", "Gaming", "Foxes"]
  }
];

function lookUpProfile(name, prop) {
  for (let index = 0; index < contacts.length; index++) {
    if(contacts[index].firstName === name) {
      if (contacts[index][prop]) {
        return contacts[index][prop];
      } else {
        return "No such property";
      }
    }
  }
  return "No such contact";
}
console.log(lookUpProfile("Akira", "likes"));       // expected output: [ 'Pizza', 'Coding', 'Brownie Points' ]
console.log(lookUpProfile("Kristian", "lastName")); // expected output: Vos
console.log(lookUpProfile("Sherlock", "likes"));    // expected output: ["Intriguing Cases", "Violin"]
console.log(lookUpProfile("Harry", "likes"));       // expected output: ["Hogwarts", "Magic", "Hagrid"]
console.log(lookUpProfile("Bob", "number"));        // expected output: "No such contact"
console.log(lookUpProfile("Bob", "potato"));        // expected output: "No such contact"
console.log(lookUpProfile("Akira", "address"));     // expected output: "No such property"

console.log(``);

// Generate Random Fractions with JavaScript

/**
 * Random numbers are useful for creating random behavior.
 * 
 * JavaScript has a Math.random() function that generates 
 * a random decimal number between 0 (inclusive) and not quite up to 1 (exclusive). 
 * Thus Math.random() can return a 0 but never quite return a 1
 * 
 * Note
 * Like Storing Values with the Equal Operator, 
 * all function calls will be resolved before the return executes, 
 * so we can return the value of the Math.random() function.
 */

function randomFraction() {
  return Math.random();
}
console.log(randomFraction()); // return a random number

console.log(``);

// Generate Random Whole Numbers with JavaScript

/**
 * It's great that we can generate random decimal numbers, 
 * but it's even more useful if we use it to generate random whole numbers.
 * 
 * 1. Use Math.random() to generate a random decimal.
 * 2. Multiply that random decimal by 20.
 * 3. Use another function, 
 * Math.floor() to round the number down to its nearest whole number.
 * 
 * Remember that Math.random() can never quite return a 1 and, 
 * because we're rounding down, it's impossible to actually get 20.
 * This technique will give us a whole number between 0 and 19.
 * 
 * Putting everything together, this is what our code looks like:
 * 
 * Math.floor(Math.random() * 20);
 * 
 * We are calling Math.random(), multiplying the result by 20, 
 * then passing the value to Math.floor() function 
 * to round the value down to the nearest whole number.
 */

 function randomWholeNum() {
  return Math.floor(Math.random() * 10);
}
console.log(randomWholeNum()); // return a random whole number between 0 and 9.

console.log(``);

// Generate Random Whole Numbers within a Range

/**
 * Instead of generating a random whole number between zero 
 * and a given number like we did before, 
 * we can generate a random whole number that falls within a range of two specific numbers.
 * 
 * To do this, we'll define a minimum number min and a maximum number max.
 * 
 * Here's the formula we'll use. 
 * Take a moment to read it and try to understand what this code is doing:
 * 
 * Math.floor(Math.random() * (max - min + 1)) + min
 * 
 *  e.g.
 *  max = 5
 *  min = 1
 */
let mathRandom = Math.random(); 
console.log(mathRandom);                               // return a random number
console.log(Math.floor(mathRandom));                   // expected output: 0
console.log(mathRandom);                               // return a random number
console.log(Math.floor(mathRandom * (5 - 1 + 1)));     // return a random whole number between 0 and 5
console.log(mathRandom);                               // return a random number
console.log(Math.floor(mathRandom * (5 - 1 + 1)) + 1); // return a random whole number between 1 and 5

console.log(``);

function randomRange(myMin, myMax) {
  return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
}
console.log(randomRange(1, 5)); // return a random whole number between 1 and 5
console.log(randomRange(1, 5)); // return a random whole number between 1 and 5
console.log(randomRange(1, 5)); // return a random whole number between 1 and 5
console.log(randomRange(1, 5)); // return a random whole number between 1 and 5
console.log(randomRange(1, 5)); // return a random whole number between 1 and 5

console.log(``);

// Use the parseInt Function

/**
 * The parseInt() function parses a string and returns an integer. 
 * Here's an example:
 * 
 * var a = parseInt("007");
 * 
 * The above function converts the string "007" to an integer 7. 
 * If the first character in the string can't be converted into a number, 
 * then it returns NaN.
 */

console.log(``);

//

/**
 * 
 */

console.log(``);

//

/**
 * 
 */

console.log(``);

//

/**
 * 
 */

console.log(``);