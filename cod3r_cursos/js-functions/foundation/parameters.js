function logParams(a, b, c) {
    console.log(a, b, c)
}
logParams(1, 2, 3)       // 1 2 3
logParams(1, 2, 3, 4, 5) // 1 2 3
logParams(1, 2)          // 1 2 undefined
logParams(1)             // 1 undefined undefined
logParams()              // undefined undefined undefined

let x = logParams(1, 2)  // 1 2 undefined
console.log(x);          // undefined
x = logParams(1, 2, 3)   // 1 2 3
console.log(x);          // undefined


function defaultParams(a = 1, b = 2, c = 3) {
    console.log(a, b, c);
}
defaultParams(7, 8, 9)  // 7 8 9
defaultParams(7, 8)     // 7 8 0
defaultParams(7)        // 7 2 3
defaultParams()         // 1 2 3

console.log(1);                             // 1
console.log(1, 2, 3, 4, 5, 6, 7, 8, 9, 10); // 1, 2, 3, 4, 5, 6, 7, 8, 9, 10

function logNums1(nums) {
    for(let n of nums) {
       console.log(n) 
    }
}
logNums1([1, 2, 3]) // 1
                    // 2
                    // 3

// spread/rest
function logNums2(...nums) {
    console.log(Array.isArray(nums)); // true
    for(let n of nums) {
       console.log(n) 
    }
}
logNums2(1, 2, 3) // 1
                  // 2
                  // 3

function logNums3(...nums) {
       console.log(nums)
}
logNums3(1, 2, 3) // [ 1, 2, 3 ]

function sumAll(...nums) {
    let total = 0
    for(let n of nums) {
        total += n
    }
    return total
}
console.log(sumAll(1, 2, 3)) // 6