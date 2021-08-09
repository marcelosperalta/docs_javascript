// Understanding JavaScript Function Invocation and "this"
// https://yehudakatz.com/2011/08/11/understanding-javascript-function-invocation-and-this/

// The Core Primitive

function hello(thing) {
    console.log(this + " says hello " + thing);
  }
hello.call("Yehuda", "world") // Yehuda says hello world

// Simple Function Invocation

function hello(thing) {
  console.log("Hello " + thing);
}

// this:
hello("world") // Hello world
// desugars to:
hello.call(window, "world");

// to "desugar" is to take a convenient syntax and describe it in terms of a more basic core primitive

// This behavior has changed in ECMAScript 5 only when using strict mode

// this:
hello("world")
// desugars to:
hello.call(undefined, "world");

// Member Functions

var person = {
  name: "Brendan Eich",
  hello: function(thing) {
    console.log(this + " says hello " + thing);
  }
}
// this:
person.hello("world")               // [object Object] says hello world
// desugars to this:
person.hello.call(person, "world"); // [object Object] says hello world

// Note that it doesn't matter how the hello method becomes attached 
// to the object in this form. Remember that we previously defined hello 
// as a standalone function. 
// Let's see what happens if we attach is to the object dynamically:

function hello(thing) {
  console.log(this + " says hello " + thing);
}
person = { name: "Brendan Eich" }
person.hello = hello;

person.hello("world") // still desugars to person.hello.call(person, "world")
hello("world")        // "[object DOMWindow]world"

// Using Function.prototype.bind

var person = {
  name: "Brendan Eich",
  hello: function(thing) {
    console.log(this.name + " says hello " + thing);
  }
}
var boundHello = function(thing) { return person.hello.call(person, thing); }
boundHello("world"); // Brendan Eich says hello world

// Even though our boundHello call still desugars to boundHello.call(window, "world"), 
// we turn right around and use our primitive call method 
// to change the this value back to what we want it to be.

// We can make this trick general-purpose with a few tweaks:

var bind = function(func, thisValue) {
    return function() {
      return func.apply(thisValue, arguments);
    }
}
var boundHello = bind(person.hello, person);
boundHello("world") // "Brendan Eich says hello world"