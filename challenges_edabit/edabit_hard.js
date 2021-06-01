// How to run: *********** //
// npm install -g nodemon  //
// nodemon <file-name>     //
// *********************** //

// Edabit
// https://edabit.com/

// Challenges
// JavaScript

// Hard:

console.log(`
Challenges 
JavaScript 
Hard
`);

// Reverse the Odd Length Words
// https://edabit.com/challenge/yYfQoo6rkMezauG77

function reverseOdd(str) {
    let array = str.split(" ");
    let result = [];
    let newArray = [];
    for (let index = 0; index < array.length; index++) {
        if (array[index].length % 2 !== 0) {
            newArray.push(array[index].toString().split("").reverse().join(""));
            result.push(newArray[0]);
            // newArray.pop(0);
        } else {
            result.push(array[index]);
        }
    }
    return result.join(" ").toString();
}
console.log(reverseOdd("Bananas"));                                        // expected output: "sananaB"
console.log(reverseOdd("One two three four"));                             // expected output: "enO owt eerht four"
console.log(reverseOdd("Make sure uoy only esrever sdrow of ddo length")); // expected output: "Make sure you only reverse words of odd length"

console.log(`
or
`)

function reverseOddJonIngram(str) {
    const arr = str.split(" ")
    const results = [];
    for(i=0; i<arr.length; i++){
      if(arr[i].length % 2 !== 0){
        const reversed = arr[i].split("").reverse().join("")
        results.push(reversed)
      } else {
        results.push(arr[i])
      }
    }
    return results.join(" ");
}
console.log(reverseOddManda("Bananas"));                                        // expected output: "sananaB"
console.log(reverseOddManda("One two three four"));                             // expected output: "enO owt eerht four"
console.log(reverseOddManda("Make sure uoy only esrever sdrow of ddo length")); // expected output: "Make sure you only reverse words of odd length"


console.log(`
or
`)

function reverseOddManda(str) {
    return str.split(" ").map(w => w.length%2 ? [...w].reverse().join("") : w).join(" ");
}
console.log(reverseOddJonIngram("Bananas"));                                        // expected output: "sananaB"
console.log(reverseOddJonIngram("One two three four"));                             // expected output: "enO owt eerht four"
console.log(reverseOddJonIngram("Make sure uoy only esrever sdrow of ddo length")); // expected output: "Make sure you only reverse words of odd length"

console.log(`--------------------------------------------`);


// 
// 

console.log(`--------------------------------------------`);


// 
// 

console.log(`--------------------------------------------`);


// 
// 

console.log(`--------------------------------------------`);