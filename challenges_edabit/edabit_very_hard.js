// How to run: *********** //
// npm install -g nodemon  //
// nodemon <file-name>     //
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
    .replace(/\-[a-z]/g, x => "-" + x[1].toUpperCase())
    .replace(/And\b/g, "and")
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

console.log(`
or
`);

const exceptions = ['and', 'the', 'of', 'in'];
const capitalize = word => word[0].toUpperCase() + word.slice(1);
const correctTitleAlessandroManicone = str => {
    let words = str.toLowerCase().split(' ');
    return words
        .map(word => 
                 word
                     .split('-')
                     .map(subword => 
                             exceptions.includes(subword)? 
                             subword : capitalize(subword))
                     .join('-'))
        .join(' ');
}
console.log(correctTitleAlessandroManicone("jOn SnoW, kINg IN thE noRth."));                     // expected output: "Jon Snow, King in the North."
console.log(correctTitleAlessandroManicone("sansa stark, lady of winterfell."));                 // expected output: "Sansa Stark, Lady of Winterfell."
console.log(correctTitleAlessandroManicone("TYRION LANNISTER, HAND OF THE QUEEN."));             // expected output: "Tyrion Lannister, Hand of the Queen."
console.log(correctTitleAlessandroManicone("doran martell, prince of dorne, lord of sunspear.")) // expected output: "Doran Martell, Prince of Dorne, Lord of Sunspear."
console.log(correctTitleAlessandroManicone("MANCE RAYDER, KING-BEYOND-THE-WALL."))               // expected output: "Mance Rayder, King-Beyond-the-Wall."

console.log(`
or
`);

const lower = ['and', 'the', 'of', 'in'];
const capFirst = word => lower.includes(word) ? word : word.charAt(0).toUpperCase() + word.substring(1);
const capitalize2 = word => word.split('-').map(capFirst).join('-');
const correctTitleEuphonicSounds = str => str.toLowerCase().split(' ').map(capitalize2).join(' ');
console.log(correctTitleEuphonicSounds("jOn SnoW, kINg IN thE noRth."));                     // expected output: "Jon Snow, King in the North."
console.log(correctTitleEuphonicSounds("sansa stark, lady of winterfell."));                 // expected output: "Sansa Stark, Lady of Winterfell."
console.log(correctTitleEuphonicSounds("TYRION LANNISTER, HAND OF THE QUEEN."));             // expected output: "Tyrion Lannister, Hand of the Queen."
console.log(correctTitleEuphonicSounds("doran martell, prince of dorne, lord of sunspear.")) // expected output: "Doran Martell, Prince of Dorne, Lord of Sunspear."
console.log(correctTitleEuphonicSounds("MANCE RAYDER, KING-BEYOND-THE-WALL."))               // expected output: "Mance Rayder, King-Beyond-the-Wall."

console.log(`
or
`);

function correctTitleYKim(str) {
    let upper = str.toLowerCase().replace(/\b[a-z]\B/gi, c => c.toUpperCase());
    upper = upper.replace(/\b(and)\b/gi, 'and');
    upper = upper.replace(/\b(the)\b/gi, 'the');
    upper = upper.replace(/\b(of)\b/gi, 'of');
    upper = upper.replace(/\b(in)\b/gi, 'in');
    return upper;
}
console.log(correctTitleYKim("jOn SnoW, kINg IN thE noRth."));                     // expected output: "Jon Snow, King in the North."
console.log(correctTitleYKim("sansa stark, lady of winterfell."));                 // expected output: "Sansa Stark, Lady of Winterfell."
console.log(correctTitleYKim("TYRION LANNISTER, HAND OF THE QUEEN."));             // expected output: "Tyrion Lannister, Hand of the Queen."
console.log(correctTitleYKim("doran martell, prince of dorne, lord of sunspear.")) // expected output: "Doran Martell, Prince of Dorne, Lord of Sunspear."
console.log(correctTitleYKim("MANCE RAYDER, KING-BEYOND-THE-WALL."))               // expected output: "Mance Rayder, King-Beyond-the-Wall."

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