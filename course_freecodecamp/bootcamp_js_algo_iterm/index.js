// Sum All Numbers in a Range

// We'll pass you an array of two numbers. Return the sum of those two numbers plus 
// the sum of all the numbers between them. The lowest number will not always come first.

// For example, "sumAll([4,1])" should return "10" because sum of 
// all the numbers between 1 and 4 (both inclusive) is "10".

// sumAll([1, 4])  should return 10.
// sumAll([4, 1])  should return 10.
// sumAll([5, 10]) should return 45.
// sumAll([10, 5]) should return 45.

function sumAll(arr) {
    // used "slice()" to avoid the mutation of "arr"
    let newArray = arr.slice().sort(function (a, b) {
        return a - b;
    });
    // or
//  let newArray = arr.slice().sort((a, b) => a - b);

    let result = parseInt(newArray.slice(0, 1));

    for(let i = result; i <= newArray[newArray.length - 1]; i++){
        result += i;
    }

    console.log(arr);

    return console.log(result - newArray[0]);
}
sumAll([1, 4]);  // 10
sumAll([4, 1]);  // 10
sumAll([5, 10]); // 45
sumAll([10, 5]); // 45

// or

function sumAll(arr) {
  let max = Math.max(arr[0], arr[1]);
  let min = Math.min(arr[0], arr[1]);
  let sumBetween = 0;
  for (let i = min; i <= max; i++) {
    sumBetween += i;
  }
  return sumBetween;
}
console.log(sumAll([1, 4])); // 10
console.log(sumAll([4, 1])); // 10

// or

const sumAll = arr => {
  // Buckle up everything to one!
  const startNum = arr[0];
  const endNum = arr[1];

  // Get the count of numbers between the two numbers by subtracting 
  // them and add 1 to the absolute value.
  // ex. There are |1-4| + 1 = 4, (1, 2, 3, 4), 4 numbers between 1 and 4.
  const numCount = Math.abs(startNum - endNum) + 1;

  // Using Arithmetic Progression summing formula
  const sum = ((startNum + endNum) * numCount) / 2;
  return sum;
};
console.log(sumAll([1, 4])); // 10
console.log(sumAll([4, 1])); // 10

// or 

function sumAll(arr) {
  let sumBetween = 0;
  for (let i = Math.min(...arr); i <= Math.max(...arr); i++) {
    sumBetween += i;
  }
  return sumBetween;
}
console.log(sumAll([1, 4])); // 10
console.log(sumAll([4, 1])); // 10

// or

function sumAll(arr) {
  const [first, last] = [...arr].sort((a, b) => a - b);
  return first !== last
    ? first + sumAll([first + 1, last])
    : first;
}
console.log(sumAll([1, 4])); // 10
console.log(sumAll([4, 1])); // 10


// Diff Two Arrays

// Compare two arrays and return a new array with any items only found in one of the two given arrays, 
// but not both. In other words, return the symmetric difference of the two arrays.

// Note: You can return the array with its elements in any order.

// ["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], 
// ["diorite", "andesite", "grass", "dirt", "dead shrub"] 
// should return 
// ["pink wool"]

// ["andesite", "grass", "dirt", "dead shrub"], 
// ["andesite", "grass", "dirt", "dead shrub"] 
// should return 
// []

// [1, 2, 3, 5], 
// [1, 2, 3, 4, 5] 
// should return 
// [4]

// [1, "calf", 3, "piglet"], 
// [1, "calf", 3, 4] 
// should return 
// ["piglet", 4]

function diffArray(arr1, arr2) {
  const newArr = 
  arr1
  .concat(arr2)
  .filter(item => !arr1.includes(item) || !arr2.includes(item));

  return console.log(newArr);
}
diffArray(
[1, 2, 3, 5], 
[1, 2, 3, 4, 5]
); // [ 4 ]
diffArray(
["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], 
["diorite", "andesite", "grass", "dirt", "dead shrub"]
); // [ 'pink wool' ]
diffArray(
["andesite", "grass", "dirt", "dead shrub"],
["andesite", "grass", "dirt", "dead shrub"]
); // []

// or (Imperative Solution)
function diffArray(arr1, arr2) {
  const newArr = [];

  function onlyInFirst(first, second) {
    // Looping through an array to find elements that don't exist in another array
    for (var i = 0; i < first.length; i++) {
      if (second.indexOf(first[i]) === -1) {
        // Pushing the elements unique to first to newArr
        newArr.push(first[i]);
      }
    }
  }

  onlyInFirst(arr1, arr2);
  onlyInFirst(arr2, arr1);

  return console.log(newArr);
}
diffArray(
[1, 2, 3, 5], 
[1, 2, 3, 4, 5]
); // [ 4 ]
diffArray(
["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], 
["diorite", "andesite", "grass", "dirt", "dead shrub"]
); // [ 'pink wool' ]
diffArray(
["andesite", "grass", "dirt", "dead shrub"],
["andesite", "grass", "dirt", "dead shrub"]
); // []

// or (Declarative Solution)

function diffArray(arr1, arr2) {
  return console.log(
            arr1
            .concat(arr2)
            .filter(item => !arr1.includes(item) || !arr2.includes(item))
          
         );
}
diffArray(
[1, 2, 3, 5], 
[1, 2, 3, 4, 5]
); // [ 4 ]
diffArray(
["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], 
["diorite", "andesite", "grass", "dirt", "dead shrub"]
); // [ 'pink wool' ]
diffArray(
["andesite", "grass", "dirt", "dead shrub"],
["andesite", "grass", "dirt", "dead shrub"]
); // []

// or (Declarative Solution)

function diffArray(arr1, arr2) {
  return console.log(
    [...diff(arr1, arr2), ...diff(arr2, arr1)]
  );

  function diff(a, b) {
    return a.filter(item => b.indexOf(item) === -1);
  }
}
diffArray(
[1, 2, 3, 5], 
[1, 2, 3, 4, 5]
); // [ 4 ]
diffArray(
["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], 
["diorite", "andesite", "grass", "dirt", "dead shrub"]
); // [ 'pink wool' ]
diffArray(
["andesite", "grass", "dirt", "dead shrub"],
["andesite", "grass", "dirt", "dead shrub"]
); // []


// Seek and Destroy

// You will be provided with an initial array (the first argument in the "destroyer" function),
// followed by one or more arguments. Remove all elements from the initial array that
// are of the same value as these arguments.

// Note: You have to use the "arguments" object.

// destroyer([3, 5, 1, 2, 2], 2, 3, 5)              should return [1].
// destroyer([2, 3, 2, 3], 2, 3)                    should return [].
// destroyer(["tree", "hamburger", 53], "tree", 53) should return ["hamburger"].

function destroyer(arr) {
  return arr
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);