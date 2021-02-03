
// Refactor yourself
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

function yourself3(n) {
    return n === 0 ? 0
         : n === 1 ? 1
         : n = yourself3(n - 1) + yourself3(n - 2);
}
console.log(yourself3(0));
console.log(yourself3(1));
console.log(yourself3(2));
console.log(yourself3(3));
console.log(yourself3(15));