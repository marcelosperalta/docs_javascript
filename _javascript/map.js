// Nathan Sebhastian
// MARCH 31, 2021
// JavaScript Map – How to Use the JS .map() Function (Array Method)
// https://www.freecodecamp.org/news/javascript-map-how-to-use-the-js-map-function-array-method/

// for loop
let arr1 = [3, 4, 5, 6];
for (let i = 0; i < arr1.length; i++) {
    arr1[i] = arr1[i] * 3;
}
console.log(arr1);         // [9, 12, 15, 18]

// Array.map()
let arr2 = [3, 4, 5, 6];
let modifierArr = arr2.map(function(element) {
    return element * 3;
});
console.log(modifierArr);  // [9, 12, 15, 18]

// How to use map() over an array of objects
let users = [
    {firstName: "Susan", lastName: "Steward"},
    {firstName: "Daniel", lastName: "Longbottom"},
    {firstName: "Jacob", lastName: "Black"},
];
let userFullnames = users.map(function(element){
    return `${element.firstName} ${element.lastName}`
})
console.log(userFullnames); // ["Susan Steward", "Daniel Longbottom", "Jacob Black"]

// The complete map() method syntax
// arr.map(function(element, index, array){ }, this);
let arr3 = [2, 3, 5, 7]
arr3.map(function(element, index, array){
    console.log(this); // 80
}, 80);
let arr4 = [2, 3, 5, 7]
arr3.map(function(element, index, array){
    console.log(element);
    console.log(index);
    console.log(array);
    return element
}, 80);
