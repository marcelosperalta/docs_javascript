// Create a range function
// range(5) -> [ 1, 2, 3, 4, 5 ]
// range(6, 11) -> [ 6, 7, 8, 9, 10, 11 ]
// range(10, 19, 2) -> [ 10, 12, 14, 16, 18 ]
// range(6, 2) -> [ 6, 5, 4, 3, 2 ]
// range(8, -3, 4) -> [ 8, 4, 0 ]

console.log("range1");
function range1(a, b, step) {
    const nums = []
    for (let i = 1; i <= a; i++) {
        nums.push(i)
    }
    return nums
}
console.log(range1(5)); // [ 1, 2, 3, 4, 5 ]

console.log("range2");
function range2(a, b, step) {
    const n1 = b === undefined ? 1 : a
    const n2 = b === undefined ? a : b

    const nums = []
    for (let i = n1; i <= n2; i++) {
        nums.push(i)
    }
    return nums
}
console.log(range2(5));     // [ 1, 2, 3, 4, 5 ]
console.log(range2(6, 11)); // [ 6, 7, 8, 9, 10, 11 ]

console.log("range3");
function range3(a, b, step = 1) {
    const n1 = b === undefined ? 1 : a
    const n2 = b === undefined ? a : b

    const nums = []
    for (let i = n1; i <= n2; i += step) {
        nums.push(i)
    }
    return nums
}
console.log(range3(5));         // [ 1, 3, 3, 4, 5 ]
console.log(range3(6, 11));     // [ 6, 7, 8, 9, 10, 11 ]
console.log(range3(10, 19, 2)); // [ 10, 12, 14, 16, 18 ]

console.log("range4");
function range4(a, b, s = 1) {
    const n1 = b === undefined ? 1 : a
    const n2 = b === undefined ? a : b
    const step = n1 <= n2 ? Math.abs(s) : -Math.abs(s)

    const nums = []
    for (let i = n1; n1 <= n2 ? i <= n2 : i >= n2; i += step) {
        nums.push(i)
    }
    return nums
}
console.log(range4(5));         // [ 1, 3, 3, 4, 5 ]
console.log(range4(6, 11));     // [ 6, 7, 8, 9, 10, 11 ]
console.log(range4(10, 19, 2)); // [ 10, 12, 14, 16, 18 ]
console.log(range4(6, 2));      // [ 6, 5, 4, 3, 2 ]
console.log(range4(8, -3, 4))   // [ 8, 4, 0 ]