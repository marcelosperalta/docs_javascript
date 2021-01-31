// How to run: *********** //
// npm install -g nodemon  //
// nodemon edabit.js       //
// *********************** //

// Edabit
// https://edabit.com/

// Challenges
// JavaScript

// Medium:

console.log(`
Challenges 
JavaScript 
Medium
`);

// Finding Nemo
// https://edabit.com/challenge/c23dFfNiKbnguSQtq

function findNemo(sentence) {
    // console.log(sentence.split(" "));
    if (sentence.split(" ").includes("Nemo") === true) {
        let order = sentence.split(" ").indexOf("Nemo");
        return `I found Nemo at ${order + 1}!`;
    } else {
        return "I can't find Nemo :(";
    } 
}
console.log(findNemo("I am finding Nemo !"));                      // expected output: "I found Nemo at 4!"
console.log(findNemo("Nemo is me"));                               // expected output: "I found Nemo at 1!"
console.log(findNemo("I Nemo am"));                                // expected output: "I found Nemo at 2!"
console.log(findNemo("Is it Nemos, Nemona, Nemoor or Garfield?")); // expected output: "I can't find Nemo :("

console.log(`
or
`)

const findNemo2 = sentence => 
sentence.split(" ").includes("Nemo") === true  
? `I found Nemo at ${sentence.split(" ").indexOf("Nemo") + 1}`
: "I can't find Nemo :(";
console.log(findNemo2("I am finding Nemo !"));                      // expected output: "I found Nemo at 4!"
console.log(findNemo2("Nemo is me"));                               // expected output: "I found Nemo at 1!"
console.log(findNemo2("I Nemo am"));                                // expected output: "I found Nemo at 2!"
console.log(findNemo2("Is it Nemos, Nemona, Nemoor or Garfield?")); // expected output: "I can't find Nemo :("

console.log(`
or
`)

const findNemoYanEcomp = sentence => {
    const index = sentence.split(' ').findIndex(e => e === 'Nemo')
    return index >= 0 ? `I found Nemo at ${index+1}!` : "I can't find Nemo :("
}
console.log(findNemoYanEcomp("I am finding Nemo !"));                      // expected output: "I found Nemo at 4!"
console.log(findNemoYanEcomp("Nemo is me"));                               // expected output: "I found Nemo at 1!"
console.log(findNemoYanEcomp("I Nemo am"));                                // expected output: "I found Nemo at 2!"
console.log(findNemoYanEcomp("Is it Nemos, Nemona, Nemoor or Garfield?")); // expected output: "I can't find Nemo :("

console.log(`
or
`)

const findNemoFnogcps  = a => {
    b = a.split(" ").indexOf("Nemo") + 1
    return b ? `I found Nemo at ${b}!` : "I can't find Nemo :("
}
console.log(findNemoFnogcps("I am finding Nemo !"));                      // expected output: "I found Nemo at 4!"
console.log(findNemoFnogcps("Nemo is me"));                               // expected output: "I found Nemo at 1!"
console.log(findNemoFnogcps("I Nemo am"));                                // expected output: "I found Nemo at 2!"
console.log(findNemoFnogcps("Is it Nemos, Nemona, Nemoor or Garfield?")); // expected output: "I can't find Nemo :("

console.log(`--------------------------------------------`);


// Return the Middle Character(s) of a String
// https://edabit.com/challenge/R3649PDvoFf6wGxyg

function getMiddle(str) {
    if (str.length % 2 === 0) {
        return str.slice(str.length / 2 - 1, str.length / 2 + 1);
    } else {
        return str.slice(str.length / 2, str.length / 2 + 1);
    }
}
console.log(getMiddle("test"));    // expected output: "es"
console.log(getMiddle("testing")); // expected output: "t"
console.log(getMiddle("middle"));  // expected output: "dd"
console.log(getMiddle("A"));       // expected output: "A"

console.log(`
or
`)

function getMiddleAsdf(str) {
    var start = Math.ceil(str.length / 2) - 1;
    var end = Math.floor(str.length / 2) + 1;
    return str.substring(start, end);
  }
  console.log(getMiddleAsdf("test"));    // expected output: "es"
  console.log(getMiddleAsdf("testing")); // expected output: "t"
  console.log(getMiddleAsdf("middle"));  // expected output: "dd"
  console.log(getMiddleAsdf("A"));       // expected output: "A"

console.log(`--------------------------------------------`);


// 
// 

console.log(`--------------------------------------------`);


// 
// 