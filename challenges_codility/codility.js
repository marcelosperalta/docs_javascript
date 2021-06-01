// How to run: *********** //
// npm install -g nodemon  //
// nodemon <file-name>     //
// *********************** //

// Codility
// https://app.codility.com/programmers/

// Challenges
// JavaScript

// Refactor yourself ------------------------------------------------------------------------ //
var yourself = {
    fibonacci : function(n) {
        if (n === 0) {
            return 0;
        } else if (n === 1) {
            return 1;
        } else {
            return this.fibonacci(n - 1) + this.fibonacci(n - 2);
        }
    }
};
console.log(yourself.fibonacci(0));
console.log(yourself.fibonacci(1));
console.log(yourself.fibonacci(2));
console.log(yourself.fibonacci(3));
console.log(yourself.fibonacci(15));

console.log(`
or
`);

var yourself2 = {
    fibonacci : function(n) {
        return n === 0 ? 0
             : n === 1 ? 1
             : this.fibonacci(n - 1) + this.fibonacci(n - 2);
    }
};
console.log(yourself2.fibonacci(0));
console.log(yourself2.fibonacci(1));
console.log(yourself2.fibonacci(2));
console.log(yourself2.fibonacci(3));
console.log(yourself2.fibonacci(15));

console.log(`
or
`);

function fibonacci(n) {
        return n === 0 ? 0
             : n === 1 ? 1
             : fibonacci(n - 1) + fibonacci(n - 2);
}
console.log(fibonacci(0));
console.log(fibonacci(1));
console.log(fibonacci(2));
console.log(fibonacci(3));
console.log(fibonacci(15));

console.log(`
or
`);

// Memoization
// https://medium.com/developers-writing/fibonacci-sequence-algorithm-in-javascript-b253dc7e320e
function fibonacci2(n, memo) {
    memo = memo || {};
    // if (memo[n]) return memo[n];
    if (n === 0) return 0;
    if (n === 1) return 1;
    return memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
}
console.log(fibonacci2(0));
console.log(fibonacci2(1));
console.log(fibonacci2(2));
console.log(fibonacci2(3));
console.log(fibonacci2(15));

console.log(`
or
`);

var yourself3 = {
    fibonacci : function(n, memo) {
    memo = memo || {};
    if (memo[n]) return memo[n];
    if (n === 0) return 0;
    if (n === 1) return 1;
    return memo[n] = this.fibonacci(n - 1, memo) + this.fibonacci(n - 2, memo);
    }
};
console.log(yourself3.fibonacci(0));
console.log(yourself3.fibonacci(1));
console.log(yourself3.fibonacci(2));
console.log(yourself3.fibonacci(3));
console.log(yourself3.fibonacci(15));
// ------------------------------------------------------------------------------------------ //