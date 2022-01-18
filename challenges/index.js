// Create a new array with no repeating pairs

// noRepeatingPairs([[0, 1], [2, 3], [1, 0], [3, 2]]); // [ [ 0, 1 ], [ 2, 3 ] ]
// noRepeatingPairs([[4, 1], [2, 3], [1, 0], [4, 1]]); // [ [ 0, 1 ], [ 1, 4 ], [ 2, 3 ] ]

function noRepeatingPairs(array) {
    for (let i = 0; i < array.length; i++) {
        array[i].sort();
    }
    array.sort();
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (JSON.stringify(array[i]) !== JSON.stringify(array[i + 1])) {
            newArray.push(array[i]);
        }
    }
    return console.log(newArray);
}
noRepeatingPairs([[0, 1], [2, 3], [1, 0], [3, 2]]); 
// [ [ 0, 1 ], [ 2, 3 ] ]
noRepeatingPairs([[4, 1], [2, 3], [1, 0], [4, 1]]); 
// [ [ 0, 1 ], [ 1, 4 ], [ 2, 3 ] ]
noRepeatingPairs([["Ana", "Maria"], ["Frank", "Ted"], ["Ted", "Frank"], ["Maria", "Ana"]]);
// [ [ 'Ana', 'Maria' ], [ 'Frank', 'Ted' ] ]

// -----------------------------------------------------------------------------------------------

// Create an array of pairs of arrays

// Example
// let string = "Ana,Maria,Ana,Frank P,Ana,Ted,Ana,Priscila";

// Result
// [
//     [ 'Ana', 'Maria' ],
//     [ 'Ana', 'FrankP' ],
//     [ 'Ana', 'Ted' ],
//     [ 'Ana', 'Priscila' ]
// ]

let string = "Ana,Maria,Ana,Frank P,Ana,Ted,Ana,Priscila";

// Removing whitespaces
const regexToRemoveWhitespaces = /\s/g;
let newStringWithoutWhitespaces = string.replace(regexToRemoveWhitespaces, "");
// console.log(newStringWithoutWhitespaces); // Ana,Maria,Ana,FrankP,Ana,Ted,Ana,Priscila

// Removing commas
const regexToRemoveCommas = /[,]+/g;
let newStringWithoutCommas = newStringWithoutWhitespaces.replace(regexToRemoveCommas, " ");
// console.log(newStringWithoutCommas); // Ana Maria Ana FrankP Ana Ted Ana Priscila

// Creating an array
let newArray = newStringWithoutCommas.split(" ");
console.log(newArray);
// [
//   'Ana', 'Maria',
//   'Ana', 'FrankP',
//   'Ana', 'Ted',
//   'Ana', 'Priscila'
// ]

// Creating an array of pairs of arrays
let newArrayOfArrays = [];
for (let i = 0; i < newArray.length - 1; i = i + 2) {
    newArrayOfArrays.push([newArray[i], newArray[i + 1]]);
}
console.log(newArrayOfArrays);
// [
//     [ 'Ana', 'Maria' ],
//     [ 'Ana', 'FrankP' ],
//     [ 'Ana', 'Ted' ],
//     [ 'Ana', 'Priscila' ]
// ]