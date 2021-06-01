// Function expression

const increment1 = function(n) {
    return n + 1;
}

// Arrow function is always anonymous

const increment2 = (n) => {
    return n + 1;
}

const increment3 = n => {
    return n + 1;
}

const increment4 = n => n + 1;

console.log(increment1(1));   // 2
console.log(increment2(5));   // 6
console.log(increment3(24));  // 25
console.log(increment4(199)); // 200

const OneParameter = a => a
console.log(OneParameter(3)); // 3
const sum = (a, b) => a + b
console.log(sum(3, 8));       // 11