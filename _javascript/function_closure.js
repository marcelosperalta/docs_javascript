// Closures
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript#closures

// A closure is the combination of a function and the scope object in which it was created. 
// Closures let you save state — as such, they can often be used in place of objects.

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


// Other examples:

function mother(){
  var x = 1;
  function child(){
    console.log(x);
    x++;
  }
  return child;
}

var counter = mother();
counter(); // 1
counter(); // 2
counter(); // 3