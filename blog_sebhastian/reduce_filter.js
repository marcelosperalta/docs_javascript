// JavaScript code recipe: sum an array of objects
// Learn how to sum a property in an array of objects using JavaScript reduce with example code.
// Posted on January 18, 2021
// https://sebhastian.com/javascript-sum-array-objects/

let cart1 = [
    {
        name: "JavaScrip book",
        price: 4,
    },
    {
        name: "UGG Women's Hazel Ankle Boot",
        price: 79,
    },
    {
        name: "OXO Good Grips 11-Inch Balloon Whisk",
        price: 9,
    },
];
let totalPrice1 = cart1.reduce(function(accumulator, item) {
    return accumulator + item.price;
}, 0);
console.log(totalPrice1); // 92

// Perform multiple operations before returning the data
let cart2 = [
    {
        name: "JavaScript book",
        quantity: 3,
        price: 4,
    },
    {
        name: "UGG Women's Hazel Ankle Boot",
        quantity: 2,
        price: 79,
    },
    {
        name: "OXO Good Grips 11-Inch Balloon Whisk",
        quantity: 5,
        price: 9,
    },
];
let totalPrice2 = cart2.reduce(function(accumulator, item){
    return accumulator + item.quantity * item.price;
}, 0);
console.log(totalPrice2); // 215

// Filter the array before reduce
let cart3 = [
    {
        name: "JavaScript book",
        quantity: 3,
        price: 4,
    },
    {
        name: "UGG Women's Hazel Ankle Boot",
        quantity: 2,
        price: 79,
    },
    {
        name: "OXO Good Grips 11-Inch Balloon Whisk",
        quantity: 5,
        price: 9,
    },
];
let totalPrice3 = cart3
    .filter(
        (item) =>
            item.name === "JavaScript book" ||
            item.name === "UGG Women's Hazel Ankle Boot"
    )
    .reduce((accumulator, item) => {
        return accumulator + item.quantity * item.price
    }, 0);
console.log(totalPrice3); // 170