
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


