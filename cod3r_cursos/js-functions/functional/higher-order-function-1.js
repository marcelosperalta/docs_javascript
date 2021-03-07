// Higher-order functions
// Functions that operate on other functions, either by taking them as arguments 
// or by returning them, are called higher-order functions.
// https://eloquentjavascript.net/05_higher_order.html

function run(fn) {
    fn()
}
function sayHello() {
    console.log("Hello!") // Hello!
}
run(sayHello)
run(function(){
    console.log("run!")  // run!
})

function run2(fn) {
    return `Result ${fn()}`
}
function sayHello2() {
    console.log("Hello!") // Hello!
}
run2(sayHello2)
run2(function(){
    console.log("run!")  // run!
})
const result = run2(Math.random)
console.log(result)      // Result 0.xxxxxxxx