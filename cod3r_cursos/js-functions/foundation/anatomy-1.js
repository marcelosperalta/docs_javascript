// Function  declaration

function sayHello() {
    console.log("Hello!");
}
sayHello(); // Hello

function sayHelloTo1(name) {
    console.log("Hello " + name + "!");
}
sayHelloTo1("Marcelo"); // Hello Marcelo

function sayHelloTo2(name) {
    console.log(`Hello ${name}!`);
}
sayHelloTo2("Marcelo"); // Hello Marcelo!

function returnHi() {
    return "Hi!";
}
let greeting = returnHi();
console.log(greeting);   // Hi!
console.log(returnHi()); // Hi!

function returnHiTo(name) {
    return `Hi ${name}!`;
}
console.log(returnHiTo("Marcelo"));