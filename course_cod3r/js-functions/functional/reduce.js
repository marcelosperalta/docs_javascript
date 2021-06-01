const numbers = [1, 2, 3, 4, 5, 6]
const sum = (total, el) => total + el
const total = numbers.reduce((total, el) => total + el)
console.log(total)  // 21
const total2 = numbers.reduce(sum)
console.log(total2) // 21
const total3 = numbers.reduce(sum, 100)
console.log(total3) // 121

const average = (acc, el, i, array) => {
    if(i === array.length - 1) {
        return (acc + el) / array.length
    } else {
        return acc + el
    }
}
const result = numbers.reduce(average)
console.log(result)                  // 3.5
console.log(numbers.reduce(average)) // 3.5