function finalPrice(tax, price) {
    return price * (1 + tax)
}
console.log(finalPrice(0.0875, 25.1));  // 27.29625
console.log(finalPrice(0.0875, 21.7));  // 23.59875
console.log(finalPrice(0.0875, 107.9)); // 117.34125

function finalPrice2(tax) {
    return function(price) {
        return price * (1 + tax)
    }
}
console.log(finalPrice2(0.0875, 25.1));  // [Function (anonymous)]
console.log(finalPrice2(0.0875)(25.1));  // 27.29625
console.log(finalPrice2(0.0875)(21.7));  // 23.59875
console.log(finalPrice2(0.0875)(107.9)); // 117.34125

// Currying
// https://javascript.info/currying-partials
function finalPrice3(tax) {
    return function(price) {
        return price * (1 + tax)
    }
}
const nycFinalPrice = finalPrice3(0.0875)
console.log(nycFinalPrice(25.1));  // 27.29625
console.log(nycFinalPrice(21.7));  // 23.59875
console.log(nycFinalPrice(107.9)); // 117.34125