// Anonymous function

(function (a, b, c) {
    return a + b + c;
})


// Function expresion

const sum = function (a, b) {
    return a + b;
}
const result = sum(7, 59);
console.log(result);     // 66
console.log(sum(7, 59)); // 66

const anotherSum = sum;
console.log(anotherSum(5, 9));  // 14

let x = 3;
console.log(x); // 3
x = sum;
console.log(x(11, 16)); // 27
