// Closures
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript#closures

// This leads us to one of the most powerful abstractions that JavaScript has to offer.

// The name of the makeAdder() function should give it away: it creates new 'adder' functions, 
// each of which, when called with one argument, adds it to the argument that it was created with.

function makeAdder(a) {
  return function(b) {
    return console.log(a + b);
  };
}
var add5 = makeAdder(5);
var add20 = makeAdder(20);
add5(6);  // 11
add20(7); // 27

// A closure is...
// https://stackoverflow.com/questions/111102/how-do-javascript-closures-work