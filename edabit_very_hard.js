// How to run: *********** //
// npm install -g nodemon  //
// nodemon edabit.js       //
// *********************** //

// Edabit
// https://edabit.com/

// Challenges
// JavaScript

// Very Hard:

console.log(`
Challenges 
JavaScript 
Very Hard
`);

// Game of Thrones: Character Titles
// https://edabit.com/challenge/QudLBG2RvfePRMzDn

// Write a function that takes a string 
// and returns a string with the correct case 
// for character titles in the Game of Thrones series.
// 
// The words "and", "the", "of" and "in" should be lowercase.
// All other words should have the first character as uppercase and the rest lowercase.
// 
// Examples:
// 
// correctTitle("jOn SnoW, kINg IN thE noRth.")
// ➞ "Jon Snow, King in the North."
// 
// correctTitle("sansa stark, lady of winterfell.")
// ➞ "Sansa Stark, Lady of Winterfell."
// 
// correctTitle("TYRION LANNISTER, HAND OF THE QUEEN.")
// ➞ "Tyrion Lannister, Hand of the Queen."
// 
// Notes:
// Punctuation and spaces must remain in their original positions.
// Hyphenated words are considered separate words.
// Be careful with words that contain "and", "the", "of" or "in".
// 
// Resource:
// https://dev.to/frugencefidel/10-javascript-string-methods-you-should-know-4l76

function correctTitle(str) {
    let array = str.toLowerCase().split(" ");
    let newArray = [];
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        newArray = newArray + " " + element[0].toUpperCase() + element.slice(1, element.length);
    }
    return newArray
    .replace(/And/g, "and")
    .replace(/The/g, "the")
    .replace(/Of/g, "of")
    .replace(/In/g, "in")
    .toString()
    .trim();
}
console.log(correctTitle("jOn SnoW, kINg IN thE noRth."));                     // expected output: "Jon Snow, King in the North."
console.log(correctTitle("sansa stark, lady of winterfell."));                 // expected output: "Sansa Stark, Lady of Winterfell."
console.log(correctTitle("TYRION LANNISTER, HAND OF THE QUEEN."));             // expected output: "Tyrion Lannister, Hand of the Queen."
console.log(correctTitle("doran martell, prince of dorne, lord of sunspear.")) // expected output: "Doran Martell, Prince of Dorne, Lord of Sunspear."
console.log(correctTitle("MANCE RAYDER, KING-BEYOND-THE-WALL."))               // expected output: "Mance Rayder, King-Beyond-the-Wall."

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