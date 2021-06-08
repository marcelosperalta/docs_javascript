// How to Use Closures in JavaScript – A Beginner's Guide
// https://www.freecodecamp.org/news/closures-in-javascript/

const value = 2
function doSomething() {
    let data = [1,2,3,4,5,6,7,8,9,10,11]
    return data.filter(item => item % value === 0)
}
console.log(doSomething()); //  [ 2, 4, 6, 8, 10 ]

// function(item){
//     return item % value === 0
// }

let count = 1
function counter() {
    console.log(count)
}
counter() // print 1
count = 2
counter() // print 2

console.log('----- closure: -----');

// CLOSURE
// a function that uses a value that was declared outside its context: a closure.
function wonderfulFunction1() {
    let count = 1
    function counter() {
        console.log(count);
    }
    counter() // print 1
}

function wonderfulFunction2() {
    let count = 1
    function counter() {
        count++
        console.log(count);
    }
    setInterval(counter, 2000)
}
wonderfulFunction2() // 2
                     // 3
                     // 4

// What can I do with closures in JavaScript?

    // "module" design pattern
    // Immediately-invoked Function Expression (IIFE)
    //      (function(arg1, arg2){
    //          ...
    //          ...
    //      })(arg1, arg2)

    // Function Factor design pattern

    // Currying design pattern

    // Event Listeners