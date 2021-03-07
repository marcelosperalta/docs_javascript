// First-class Function
// A programming language is said to have First-class functions 
// when functions in that language are treated like any other variable.
// https://developer.mozilla.org/en-US/docs/Glossary/First-class_Function

const add = function(a, b) {
    return a + b
}
const subtract = function(a, b) {
    return a - b
}
const multiply = (a, b) => a * b
const divide = (a, b) => a / b
console.log(add(10, 20))      // 30
console.log(subtract(10, 20)) // -10
console.log(multiply(10, 20)) // 200
console.log(divide(10, 20))   // 0.5