const numbers = [1, 2, 3, 4, 5, 6]

const greaterThanZero = el => el > 0
const greaterThanTen = el => el > 10
const even = el => el % 2 === 0

console.log(numbers.filter(el => el > 0))    // [ 1, 2, 3, 4, 5, 6 ]
console.log(numbers.filter(greaterThanZero)) // [ 1, 2, 3, 4, 5, 6 ]
console.log(numbers.filter(greaterThanTen))  // []
console.log(numbers.filter(even))            // [ 2, 4, 6 ]

const students = [
    { name: "Jake", score: 6.4 },
    { name: "Susan", score: 8.4 },
    { name: "Emma", score: 9.4 },
    { name: "Peter", score: 9.1 },
]

const greatStudent = student => student.score >= 9

console.log(students.filter(greatStudent)) // [ { name: 'Emma', score: 9.4 }, { name: 'Peter', score: 9.1 } ]
console.log(students)                      // [
                                           //   { name: 'Jake', score: 6.4 },
                                           //   { name: 'Susan', score: 8.4 },
                                           //   { name: 'Emma', score: 9.4 },
                                           //   { name: 'Peter', score: 9.1 }
                                           // ]