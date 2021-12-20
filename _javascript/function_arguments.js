// The arguments object
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments

// "arguments" is an Array-like object accessible inside functions 
// that contains the values of the arguments passed to that function.

// “Array-like” means that arguments has a length property and properties indexed from zero

// The arguments object is a local variable available within all non-arrow functions.

// The arguments object is not an Array. It is similar, 
// but lacks all Array properties except length.

function func1(a, b, c) {
    console.log(arguments[0]); // 1
    console.log(arguments[1]); // 2
    // Each argument can also be set or reassigned:
    arguments[2] = '4';
    console.log(arguments[2]); // 4
}
func1(1, 2, 3);

// The "arguments" object is useful for functions called with more arguments 
// than they are formally declared to accept. This technique is useful for 
// functions that can be passed a variable number of arguments, such as" Math.min()". 
// This example function accepts any number of string arguments 
// and returns the longest one:

function longestString() {
  var longest = '';
  for (var i = 0; i < arguments.length; i++) {
    if (arguments[i].length > longest.length) {
      longest = arguments[i];
    }
  }
  return console.log(longest);
}
longestString("This", "example", "function");         // function
longestString("accepts", "any");                      // accepts
longestString("number", "of", "string", "arguments"); // arguments

// The typeof operator returns 'object' when used with arguments

console.log(typeof arguments); // object

// The type of individual arguments can be determined by indexing arguments:

function func1(a, b) {
    console.log(arguments[0]);        // 1
    console.log(arguments[1]);        // hello
    console.log(typeof arguments[0]); // number
    console.log(typeof arguments[1]); // string
}
func1(1, "hello");

// Defining a function that concatenates several strings

function myConcat(separator) {
  let args = Array.prototype.slice.call(arguments, 1);
  return console.log(args.join(separator));
}
myConcat(', ', 'red', 'orange', 'blue');                         // "red, orange, blue"
myConcat('; ', 'elephant', 'giraffe', 'lion', 'cheetah');        // "elephant; giraffe; lion; cheetah"
myConcat('. ', 'sage', 'basil', 'oregano', 'pepper', 'parsley'); // "sage. basil. oregano. pepper. parsley"

// Defining a function that creates HTML lists

// This example defines a function that creates a string containing HTML for a list. 
// The only formal argument for the function is a string that is "u" 
// if the list is to be unordered (bulleted), or "o" if the list is to be ordered (numbered).
// The function is defined as follows:

function list(type) {
  var html = '<' + type + 'l><li>';
  var args = Array.prototype.slice.call(arguments, 1);
  html += args.join('</li><li>');
  html += '</li></' + type + 'l>'; // end list
  return console.log(html);
}
let listHTML = list('u', 'One', 'Two', 'Three');
// "<ul><li>One</li><li>Two</li><li>Three</li></ul>"