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


// More examples from freeCodeCamp.org

// 1

const users = [
    { name: 'John', age: 34 },
    { name: 'Amy', age: 20 },
    { name: 'camperCat', age: 10 }
  ];
const names = users.map(user => user.name);
console.log(names);                         // [ 'John', 'Amy', 'camperCat' ]
const ages = users.map(user => user.age);
console.log(ages);                          // [ 34, 20, 10 ]

// 2

const watchList = [
    { "Title": "Inception", "Year": "2010", "imdbRating": "8.8" },
    { "Title": "Interstellar", "Year": "2014", "imdbRating": "8.6" },
    { "Title": "The Dark Knight", "Year": "2008","imdbRating": "9.0" },
    { "Title": "Batman Begins", "Year": "2005", "imdbRating": "8.3" },
    { "Title": "Avatar", "Year": "2009", "imdbRating": "7.9" }
];
const ratings = watchList.map(item => ({
    title: item["Title"],
    rating: item["imdbRating"]
}));
// or
// const ratings = watchList.map(({ Title: title, imdbRating: rating }) => ({title, rating}));

console.log(JSON.stringify(ratings));
// [
//  {"title":"Inception","rating":"8.8"},
//  {"title":"Interstellar","rating":"8.6"},
//  {"title":"The Dark Knight","rating":"9.0"},
//  {"title":"Batman Begins","rating":"8.3"},
//  {"title":"Avatar","rating":"7.9"}
// ]