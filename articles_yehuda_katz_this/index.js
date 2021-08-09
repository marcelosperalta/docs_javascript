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

var person = {
  name: "Brendan Eich",
  hello: function(thing) {
    console.log(this.name + " says hello " + thing);
  }
}
// this:
person.hello("world")               // Brendan Eich says hello world
// desugars to this:
person.hello.call(person, "world"); // Brendan Eich says hello world

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