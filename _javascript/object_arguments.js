// The arguments object
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments

// "arguments" is an Array-like object accessible inside functions 
// that contains the values of the arguments passed to that function.

//  “Array-like” means that arguments has a length property and properties indexed from zero

function func1(a, b, c) {
    console.log(arguments[0]); // 1
    console.log(arguments[1]); // 2
    console.log(arguments[2]); // 3
}
func1(1, 2, 3);