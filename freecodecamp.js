
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

myVariable = 5;     // This assigns the Number value 5 to myVariable.

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

myVar = 5 + 10;  // assigned 15


    // Subtract One Number from Another with JavaScript

myVar = 12 - 6;  // assigned 6


    // Multiply Two Numbers with JavaScript

myVar = 13 * 13; // assigned 169


    // Divide One Number by Another with JavaScript

myVar = 16 / 2;  // assigned 8


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
console.log(i);    // expect output: 1
i++; // i = i + 1;
console.log(i);    // expect output: 2

console.log(``);

// Arithmetic operators

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Increment_()

console.log(2 + 3 - 1);             // expected output: 4
console.log(4 * 3 / 2);   // 12 / 2 // expected output: 6
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
console.log(x);    // 3
y = x++;           // y = 3, x = 4
console.log(y);    // 3
console.log(x);    // 4

console.log(``);

// Prefix
var a = 2;
console.log(a);    // 2
b = ++a;           // a = 3, b = 3
console.log(b);    // 3
console.log(a);    // 3

console.log(``);

 /* 
 * ----- Decrement (--)
*/
// Postfix 
var x = 3;
console.log(x)    // 3
y = x--;          // y = 3, x = 2
console.log(y)    // 3
console.log(x)    // 2

console.log(``);

// Prefix
var a = 2;
console.log(a)     // 2
b = --a;           // a = 1, b = 1
console.log(b);    // 1
console.log(a);    // 1

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
var myName2 = 'this is a string literal (using single quotes)';
console.log(myName2); // expected output: this is a string literal (using single quotes)
var myName3 = `this is a string literal (using backquote/backtick)`;
console.log(myName3); // expected output: this is a string literal (using backquote/backtick)

console.log(``);


    // Escaping Literal Quotes in Strings
    
/**
 * In JavaScript, you can escape a quote from considering it
 * as an end of string quote by placing a backslash (\) in front of the quote.
 */

var sampleStr = "Alan said, \"Peter is learning JavaScript\".";
console.log(sampleStr); // expected output: Alan said, "Peter is learning JavaScript".

console.log(``);


    // Quoting Strings with Single Quotes
    
/**
 * Single and double quotes work the same in JavaScript.
 */

doubleQuoteStr = "This is a string"; 
singleQuoteStr = 'This is also a string';
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

var singleQuote    = 'single quote    (\')';
console.log(singleQuote);     // expected output: single quote    (')
var doubleQuote    = "double quote    (\")";
console.log(doubleQuote);     // expected output: double quote    (")
var backslash      = 'backslash       (\\)';
console.log(backslash);       // expected output: backslash       (\)
var newline        = '\nnew line        (\\n)\n';
console.log(newline);         // expected output:                     
                              //                  new line        (\n)
var carriageReturn = 'carriage return (\\r) \r  ';
console.log(carriageReturn);  // expected output:   rriage return (\r)
var tab            = '\ttab     (\\t)';
console.log(tab);             // expected output:         tab     (\t)
var wordBoundary   = 'word \bboundary    (\\b)';
console.log(wordBoundary);    // expected output: wordboundary    (\b)
var formFeed       = '\fform feed\f       (\\f)';
console.log(formFeed);        // expected output: form feed           
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
    
console.log("Alan Peter".length);   // expected output: 10

var firstNameLength = 0;
var firstName = "Ada";
firstNameLength = firstName.length;
console.log(firstNameLength);       // expected output: 3

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
console.log(firstName[0]);  // expected output: "M"
console.log(firstName[1]);  // expected output: "a"
console.log(firstName[2]);  // expected output: "r"
console.log(firstName[3]);  // expected output: "c"
console.log(firstName[4]);  // expected output: "e"
console.log(firstName[5]);  // expected output: "l"
console.log(firstName[6]);  // expected output: "o"
console.log(firstName[7]);  // expected output: undefined
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
var lastLetterOfFirstName = firstName[firstName.length - 1]
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

var sentence = "It was really " + "hot" + ", and we " + "laughed" + " ourselves " + "silly" + ".";
console.log(sentence); // expected output: It was really hot, and we laughed ourselves silly.

var myNoun = "dog";
var myAdjective = "big";
var myVerb = "ran";
var myAdverb = "quickly";
var wordBlanks = "My " + myNoun + " saw a " + myAdjective + " ball and " + myVerb + " " + myAdverb + ".";
console.log(wordBlanks); // expected output: My dog saw a big ball and ran quickly.

console.log(``);


    // Store Multiple Values in one Variable using JavaScript Arrays
    
/**
 * With JavaScript array variables, we can store several pieces of data in one place.
 */

var sandwich = ["peanut butter", "jelly", "bread"]
console.log(sandwich); // expected output: [ 'peanut butter', 'jelly', 'bread' ]

var myArray = ["Marcelo", 39];
console.log(myArray);  // expected output: [ 'Marcelo', 39 ]

console.log(``);


    // Nest one Array within Another Array
    
/**
 * You can also nest arrays within other arrays, like this:
 * [["Bulls", 23], ["White Sox", 45]].
 * This is also called a multi-dimensional array.
 */

var ourArray = [["the universe", 42], ["everything", 101010]];
console.log(ourArray);  // expected output: [ [ 'the universe', 42 ], [ 'everything', 101010 ] ]

console.log(``);


    // Access Array Data with Indexes
    
/**
 * Like strings, arrays use zero-based indexing,
 * so the first element in an array has an index of 0.
 * There shouldn't be any spaces between the array name
 * and the square brackets.
 */

//          [ 0, 1, 2]
var array = [50,60,70];
console.log(array[0]);  // expected output: 50
var data = array[1];
console.log(data);      // expected output: 60

console.log(``);


    // Modify Array Data With Indexes
    
/**
 * Unlike strings, the entries of arrays are mutable
 * and can be changed freely.
 */

var ourArray = [50,40,30];
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
            [ 1, 2, 3],
//            0, 0, 0
//            0, 1, 2
            [ 4, 5, 6],
//            1, 1, 1
//            0, 1, 2
            [ 7, 8, 9],
//            2, 2, 2
//            0, 1, 2
           [[10,11,12], 13, 14]
//            3, 3, 3 ,  3,  3
//            0, 0, 0 ,  1,  2
//            0, 1, 2
          ];
console.log(arr[3]);       // expected output: [[10,11,12], 13, 14]
console.log(arr[3][0]);    // expected output: [10,11,12]
console.log(arr[3][0][0]); // expected output: 10
console.log(arr[3][0][1]); // expected output: 11
console.log(arr[3][0][2]); // expected output: 12
console.log(arr[3][1]);    // expected output: 13
console.log(arr[1][2]);    // expected output: 6
console.log(arr[0][2]);    // expected output: 3

console.log(``);


    // Manipulate Arrays With push()
    
/**
 * An easy way to append data to the end of an array is via the push() function.
 * 
 * .push() takes one or more parameters and "pushes" them onto the end of the array.
 */

var arr = [1,2,3];
arr.push(4);
console.log(arr);     // expected output: [ 1, 2, 3, 4 ]

var myArray = [["John", 23], ["cat", 2]];
myArray.push(["dog", 3]);
console.log(myArray); // expected output: [ [ 'John', 23 ], [ 'cat', 2 ], [ 'dog', 3 ] ]

console.log(``);


    // Manipulate Arrays With pop()
    
/**
 * .pop() removes the last element from an array and returns that element.
 */

var threeArr = [1, 4, 6];
var oneDown = threeArr.pop();
console.log(oneDown);  // expected output: Returns 6
console.log(threeArr); // expected output: Returns [1, 4]

console.log(``);


    // Manipulate Arrays With shift()
    
/**
 * .shift() removes the first element instead of the last.
 */

var ourArray = ["Stimpson", "J", ["cat"]];
var removedFromOurArray = ourArray.shift();
console.log(removedFromOurArray); // expected output: Stimpson
console.log(ourArray);            // expected output: [ 'J', [ 'cat' ] ]

console.log(``);


    // Manipulate Arrays With unshift()
    
/**
 * .unshift() works exactly like .push(), but instead of adding the element
 * at the end of the array, unshift() adds the element at the beginning of the array.
 */

var ourArray = ["Stimpson", "J", "cat"];
console.log(ourArray.shift()); // expected output: Stimpson
console.log(ourArray);         // expected output: [ 'J', 'cat' ] 
ourArray.unshift("Happy");
console.log(ourArray);         // expected output: ["Happy", "J", "cat"]

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
                ["Coffee", 1]
             ];
console.log(myList);         // expected output: [
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

function functionWithArgs (a, b) {
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
myTest();            // expected output: "foo"
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
myFun();              // expected output: "Head"
console.log(myFun()); // expected output: "Head"

console.log(someVar)  // expected output: "Hat"

function myFun2() {
    return someVar;
  }
myFun2()               // expected output: "Hat"
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
addSum(3);              // sum will be modified but returned value is undefined
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
console.log(nextInLine([1,2],3)); // expected output: 1

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
console.log(welcomeToBooleans());  // expected output: true

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

function test (myCondition) {
  if (myCondition) {
     return "It was true";
  }
  return "It was false";
}
console.log(test(true));  // expected output: "It was true"
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
console.log(testStrict(7));  // expected output: "Equal"

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
console.log(testGreaterThan(10));  // expected output: 10 or Under
console.log(testGreaterThan(11));  // expected output: Over 10
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
console.log(testGreaterOrEqual(5));  // expected output: Less than 10

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
    if (val <= 12) {  // Change this line
      return "Smaller Than or Equal to 12";
    }
    if (val <= 24) {  // Change this line
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
console.log(testLogicalOr(9));  // expected output: "Outside"

function testLogicalOr2(val) {
  if (val > 20 || val < 10) {
    return "Outside";
  }
  return "Inside";
}
console.log(testLogicalOr2(15)); // expected output: "Inside"
console.log(testLogicalOr2(21)); // expected output: "Outside"
console.log(testLogicalOr2(9));  // expected output: "Outside"


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
    return result = "Bigger than 5";
  } else {
    return result = "5 or Smaller";
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
console.log(testElseIf(4));  // expected output: "Smaller than 5"
console.log(testElseIf(7));  // expected output: "Between 5 and 10"

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
console.log(orderMyLogic(7));  // expected output: "Less than 10"
console.log(orderMyLogic(4));  // expected output: "Less than 5"
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
console.log(testSize(7));  // expected output: "Small"
console.log(testSize(4));  // expected output: "Tiny"
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

var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];
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
  } else
  return names[6];
}
console.log(golfScore(5, 1)); // expected output: "Hole-in-one!"
console.log(golfScore(5, 3)); // expected output: "Eagle"
console.log(golfScore(5, 4)); // expected output: "Birdie"
console.log(golfScore(5, 5)); // expected output: "Par"
console.log(golfScore(5, 6)); // expected output: "Bogey"
console.log(golfScore(5, 7)); // expected output: "Double Bogey"
console.log(golfScore(5, 8)); // expected output: "Go Home!"

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