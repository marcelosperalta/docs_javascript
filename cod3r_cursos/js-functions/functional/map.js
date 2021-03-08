const numbers1 = [1, 2, 3, 4, 5, 6]
const numbers2 = numbers1.map(function (elem) {
    return elem * 2
})
console.log(numbers2);           // [ 2, 4, 6, 8, 10, 12 ]
console.log(numbers1, numbers2); // [1, 2, 3, 4, 5, 6] [ 2, 4, 6, 8, 10, 12 ]

const numbers3 = [1, 2, 3, 4, 5, 6]
const numbers4 = numbers3.map(function (el) {
    return (el * 2) + 1000
})
console.log(numbers4); // [ 1002, 1004, 1006, 1008, 1010, 1012 ]

const numbers5 = [1, 2, 3, 4, 5, 6]
const numbers6 = numbers5.map( (el) => {
    return el * 2
})
console.log(numbers6); // [ 2, 4, 6, 8, 10, 12 ]

const numbers7 = [1, 2, 3, 4, 5, 6]
const numbers8 = numbers7.map(el => {
    return el * 2
})
console.log(numbers8); // [ 2, 4, 6, 8, 10, 12 ]

const numbers9 = [1, 2, 3, 4, 5, 6]
const numbers10 = numbers9.map(el => el * 2)
console.log(numbers10); // [ 2, 4, 6, 8, 10, 12 ]

const numbersV2 = []
for(let n of numbers1) {
    numbersV2.push(n * 2)
}
console.log(numbersV2); // [ 2, 4, 6, 8, 10, 12 ]

const students = [
    { name: "Jake", score: 6.4 },
    { name: "Susan", score: 8.4 },
    { name: "Emma", score: 9.4 },
    { name: "Peter", score: 9.1 },
]
const getScore = el => el.score
console.log(students.map(getScore));                 // [ 6.4, 8.4, 9.4, 9.1 ]
console.log(students.map(getScore).map(Math.ceil));  // [ 7, 9, 10, 10 ]
console.log(students.map(getScore).map(Math.floor)); // [ 6, 8, 9, 9 ]