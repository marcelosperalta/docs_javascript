
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
 * The remainder operator returns the remainder left over when one operand is divided by a second operand.
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
console.log(myName1);                      // expected output: this is a string literal
var myName2 = 'this is a string literal (using single quotes)';
console.log(myName2);                      // expected output: this is a string literal
var myName3 = `this is a string literal (using backquote/backtick)`;
console.log(myName3);                      // expected output: this is a string literal

console.log(``);


    // Escaping Literal Quotes in Strings
    
/**
 * In JavaScript, you can escape a quote from considering it
 * as an end of string quote by placing a backslash (\) in front of the quote.
 */

var sampleStr = "Alan said, \"Peter is learning JavaScript\".";
console.log(sampleStr);

console.log(``);


    // Quoting Strings with Single Quotes
    
/**
 * Single and double quotes work the same in JavaScript.
 */

doubleQuoteStr = "This is a string"; 
singleQuoteStr = 'This is also a string';
conversation = 'Finn exclaims to Jake, "Algebraic!"';
goodStr = 'Jake asks Finn, "Hey, let\'s go on an adventure?"';
console.log(goodStr);

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
console.log(singleQuote);
var doubleQuote    = "double quote    (\")";
console.log(doubleQuote);
var backslash      = 'backslash       (\\)';
console.log(backslash);
var newline        = '\nnew line        (\\n)\n';
console.log(newline);
var carriageReturn = 'carriage return (\\r) \r  ';
console.log(carriageReturn);
var tab            = '\ttab     (\\t)';
console.log(tab);
var wordBoundary   = 'word \bboundary    (\\b)';
console.log(wordBoundary);
var formFeed       = '\fform feed\f       (\\f)';
console.log(formFeed);

console.log(``);


    // Concatenating Strings with Plus Operator
    
/**
 * When the + operator is used with a String value, it is called the concatenation operator
 * 
 */

var ourStr = "I come first. " + "I come second.";
console.log(ourStr);

console.log(``);

    // Concatenating Strings with the Plus Equals Operator
    
var ourStr = "I come first. ";
ourStr += "I come second.";
console.log(ourStr);

console.log(``);


    // Constructing Strings with Variables

var ourName = "freeCodeCamp";
var ourStr = "Hello, our name is " + ourName + ", how are you?";
console.log(ourStr);

console.log(``);

 
    // Appending Variables to Strings

var anAdjective = "awesome!";
var ourStr = "freeCodeCamp is ";
ourStr += anAdjective;
console.log(ourStr);

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
          [1,2,3],
//           0
//         0,1,2
          [4,5,6],
//           1
//         0,1,2
          [7,8,9],
//           2
//         0,1,2
          [[10,11,12], 13, 14]
//                 3
//              0    ,  1,  2
//           0, 1, 2 ,  0,  0
          ];
console.log(arr[3]);       // expected output: [[10,11,12], 13, 14]
console.log(arr[3][0]);    // expected output: [10,11,12]
console.log(arr[3][0][0]); // expected output: 10
console.log(arr[3][0][1]); // expected output: 11
console.log(arr[3][0][2]); // expected output: 12
console.log(arr[1][2]);    // expected output: 6

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
    console.log(a + b); // expected output: 4
  }
functionWithArgs(2, 2);

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
 * Variables which are declared within a function, as well as the function parameters have local scope. That means, they are only visible within that function.
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