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

// destroyer([1, 2, 3, 1, 2, 3], 2, 3);             should return [ 1, 1 ]
// destroyer([3, 5, 1, 2, 2], 2, 3, 5)              should return [1]
// destroyer([2, 3, 2, 3], 2, 3)                    should return []
// destroyer(["tree", "hamburger", 53], "tree", 53) should return ["hamburger"]

function destroyer(arr) {
  let valsToRemove = Object.values(arguments).slice(1);

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < valsToRemove.length; j++) {
      if (arr[i] === valsToRemove[j]) {
        delete arr[i];
      }
    }
  }
  return console.log(arr.filter(item => item !== null));
}
destroyer([1, 2, 3, 1, 2, 3], 2, 3);              // [ 1, 1 ]
destroyer([3, 5, 1, 2, 2], 2, 3, 5);              // [1]
destroyer([2, 3, 2, 3], 2, 3);                    // []
destroyer(["tree", "hamburger", 53], "tree", 53); // ["hamburger"]

// or

function destroyer(arr) {
  var valsToRemove = Array.from(arguments).slice(1);
  return arr.filter(function(val) {
    return !valsToRemove.includes(val);
  });
}
console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));              // [ 1, 1 ]
console.log(destroyer([3, 5, 1, 2, 2], 2, 3, 5));              // [1]
console.log(destroyer([2, 3, 2, 3], 2, 3));                    // []
console.log(destroyer(["tree", "hamburger", 53], "tree", 53)); // ["hamburger"]

// or

function destroyer(arr) {
  var valsToRemove = Array.from(arguments).slice(1);
  return arr.filter(val => !valsToRemove.includes(val));
}
console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));              // [ 1, 1 ]
console.log(destroyer([3, 5, 1, 2, 2], 2, 3, 5));              // [1]
console.log(destroyer([2, 3, 2, 3], 2, 3));                    // []
console.log(destroyer(["tree", "hamburger", 53], "tree", 53)); // ["hamburger"]

// or

function destroyer(arr, ...valsToRemove) {
  return arr.filter(elem => !valsToRemove.includes(elem));
}
console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));              // [ 1, 1 ]
console.log(destroyer([3, 5, 1, 2, 2], 2, 3, 5));              // [1]
console.log(destroyer([2, 3, 2, 3], 2, 3));                    // []
console.log(destroyer(["tree", "hamburger", 53], "tree", 53)); // ["hamburger"]


// Wherefore art thou

// Make a function that looks through an array of objects (first argument) 
// and returns an array of all objects that have matching name and value pairs (second argument). 
// Each name and value pair of the source object has to be present in the object from 
// the collection if it is to be included in the returned array.

// For example, if the first argument is 
// [
//  { first: "Romeo", last: "Montague" }, 
//  { first: "Mercutio", last: null }, 
//  { first: "Tybalt", last: "Capulet" }
// ], 
// and the second argument is 
// { last: "Capulet" }, 
// then you must return the third object from the array (the first argument), 
// because it contains the name and its value, that was passed on as the second argument.

// whatIsInAName(
//   [
//     { "apple": 1, "bat": 2 }, 
//     { "apple": 1 }, 
//     { "apple": 1, "bat": 2, "cookie": 2 }, 
//     { "bat":2 }
//   ], 
//     { "apple": 1, "bat": 2 }) 
//// should return 
//   [
//     { "apple": 1, "bat": 2 }, 
//     { "apple": 1, "bat": 2, "cookie":2 }
//   ]

function whatIsInAName(collection, source) {
  // "What's in a name? that which we call a rose
  // By any other name would smell as sweet.”
  // -- by William Shakespeare, Romeo and Juliet
  var srcKeys = Object.keys(source);

  // filter the collection
  return collection.filter(function(obj) {
    for (var i = 0; i < srcKeys.length; i++) {
      if (
        !obj.hasOwnProperty(srcKeys[i]) ||
        obj[srcKeys[i]] !== source[srcKeys[i]]
      ) {
        return false;
      }
    }
    return true;
  });
}
console.log(
  whatIsInAName(
    [
      { first: "Romeo", last: "Montague" },
      { first: "Mercutio", last: null },
      { first: "Tybalt", last: "Capulet" }
    ],
    { last: "Capulet" }
  )
); // [ { first: 'Tybalt', last: 'Capulet' } ]

// or

function whatIsInAName(collection, source) {
  // "What's in a name? that which we call a rose
  // By any other name would smell as sweet.”
  // -- by William Shakespeare, Romeo and Juliet
  var srcKeys = Object.keys(source);

  return collection.filter(function(obj) {
    return srcKeys.every(function(key) {
      return obj.hasOwnProperty(key) && obj[key] === source[key];
    });
  });
}
console.log(
  whatIsInAName(
    [
      { first: "Romeo", last: "Montague" },
      { first: "Mercutio", last: null },
      { first: "Tybalt", last: "Capulet" }
    ],
    { last: "Capulet" }
  )
); // [ { first: 'Tybalt', last: 'Capulet' } ]

// or

function whatIsInAName(collection, source) {
  // "What's in a name? that which we call a rose
  // By any other name would smell as sweet.”
  // -- by William Shakespeare, Romeo and Juliet
  var srcKeys = Object.keys(source);

  // filter the collection
  return collection.filter(function(obj) {
    return srcKeys
      .map(function(key) {
        return obj.hasOwnProperty(key) && obj[key] === source[key];
      })
      .reduce(function(a, b) {
        return a && b;
      });
  });
}
console.log(
  whatIsInAName(
    [
      { first: "Romeo", last: "Montague" },
      { first: "Mercutio", last: null },
      { first: "Tybalt", last: "Capulet" }
    ],
    { last: "Capulet" }
  )
); // [ { first: 'Tybalt', last: 'Capulet' } ]


// Spinal Tap Case

// Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

// spinalCase("This Is Spinal Tap")     should return the string this-is-spinal-tap.
// spinalCase("thisIsSpinalTap")        should return the string this-is-spinal-tap.
// spinalCase("The_Andy_Griffith_Show") should return the string the-andy-griffith-show.
// spinalCase("Teletubbies say Eh-oh")  should return the string teletubbies-say-eh-oh.
// spinalCase("AllThe-small Things")    should return the string all-the-small-things.

function spinalCase(str) {

    // Create a variable for the white space and underscores.
    var regex = /\s+|_+/g;
  
     // Replace low-upper case to low-space-uppercase
    str = str.replace(/([a-z])([A-Z])/g, "$1 $2");
    // console.log(str);

    // Replace space and underscore with -
    return console.log(str.replace(regex, "-").toLowerCase());

}
spinalCase("This Is Spinal Tap")     // this-is-spinal-tap
spinalCase("thisIsSpinalTap")        // this-is-spinal-tap
spinalCase("The_Andy_Griffith_Show") // the-andy-griffith-show
spinalCase("Teletubbies say Eh-oh")  // teletubbies-say-eh-oh
spinalCase("AllThe-small Things")    // all-the-small-things

// or

function spinalCase(str) {

  // Replace low-upper case to low-space-uppercase
  str = str.replace(/([a-z])([A-Z])/g, "$1 $2");

  // Split on whitespace and underscores and join with dash
  return console.log(
    str
    .toLowerCase()
    .split(/(?:_| )+/)
    .join("-")
  );

}
spinalCase("This Is Spinal Tap")     // this-is-spinal-tap
spinalCase("thisIsSpinalTap")        // this-is-spinal-tap
spinalCase("The_Andy_Griffith_Show") // the-andy-griffith-show
spinalCase("Teletubbies say Eh-oh")  // teletubbies-say-eh-oh
spinalCase("AllThe-small Things")    // all-the-small-things

// or

function spinalCase(str) {

  return console.log(
    str
    .split(/\s|_|(?=[A-Z])/)
    .join("-")
    .toLowerCase()
  );

}
spinalCase("This Is Spinal Tap")     // this-is-spinal-tap
spinalCase("thisIsSpinalTap")        // this-is-spinal-tap
spinalCase("The_Andy_Griffith_Show") // the-andy-griffith-show
spinalCase("Teletubbies say Eh-oh")  // teletubbies-say-eh-oh
spinalCase("AllThe-small Things")    // all-the-small-things


// Pig Latin

// Pig Latin is a way of altering English Words. The rules are as follows:
// - If a word begins with a consonant, take the first consonant or consonant cluster, 
// move it to the end of the word, and add "ay" to it.
// - If a word begins with a vowel, just add "way" at the end.

// Translate the provided string to Pig Latin. 
// Input strings are guaranteed to be English words in all lowercase.

// translatePigLatin("california") should return the string aliforniacay.
// translatePigLatin("paragraphs") should return the string aragraphspay.
// translatePigLatin("glove")      should return the string oveglay.
// translatePigLatin("algorithm")  should return the string algorithmway.
// translatePigLatin("eight")      should return the string eightway.
// translatePigLatin("schwartz")   should return the string artzschway.
// translatePigLatin("rhythm")     should return the string rhythmay.

function translatePigLatin(str) {
  //https://regexr.com/
  //                    ^          = beggining
  //                     [^     ]  = negated set 
  //                       aeiou   = matchany character that is not in the set
  //                             + = quantifier -  match 1 or more of the preceding token
  let consonantRegex = /^[^aeiou]+/;

  let myConsonants = str.match(consonantRegex);
  
  return console.log(
    myConsonants 
    !== null
      ? str
          .replace(consonantRegex, "")
          .concat(myConsonants)
          .concat("ay")
      : str.concat("way")
  );
}
translatePigLatin("consonant"); // onsonantcay
translatePigLatin("california") // aliforniacay
translatePigLatin("paragraphs") // aragraphspay
translatePigLatin("glove")      // oveglay
translatePigLatin("algorithm")  // algorithmway
translatePigLatin("eight")      // eightway
translatePigLatin("schwartz")   // artzschway
translatePigLatin("rhythm")     // rhythmay

// or

function translatePigLatin(str) {
  return console.log(
    str
    .replace(/^[aeiou]\w*/, "$&way")
    .replace(/(^[^aeiou]+)(\w*)/, "$2$1ay")
  );
}
translatePigLatin("consonant"); // onsonantcay
translatePigLatin("california") // aliforniacay
translatePigLatin("paragraphs") // aragraphspay
translatePigLatin("glove")      // oveglay
translatePigLatin("algorithm")  // algorithmway
translatePigLatin("eight")      // eightway
translatePigLatin("schwartz")   // artzschway
translatePigLatin("rhythm")     // rhythmay

// or

function translatePigLatin(str, charPos = 0) {
  return ['a', 'e', 'i', 'o', 'u'].includes(str[0])
    ? str + (charPos === 0 ? 'way' : 'ay')
    : charPos === str.length
      ? str + 'ay'
      : translatePigLatin(str.slice(1) + str[0], charPos + 1);
}
console.log(translatePigLatin("consonant"));  // onsonantcay
console.log(translatePigLatin("california")); // aliforniacay
console.log(translatePigLatin("paragraphs")); // aragraphspay
console.log(translatePigLatin("glove"));      // oveglay
console.log(translatePigLatin("algorithm"));  // algorithmway
console.log(translatePigLatin("eight"));      // eightway
console.log(translatePigLatin("schwartz"));   // artzschway
console.log(translatePigLatin("rhythm"));     // rhythmay


// Search and Replace

// Perform a search and replace on the sentence using the arguments provided and return the new sentence.

// First argument is the sentence to perform the search and replace on.

// Second argument is the word that you will be replacing (before).

// Third argument is what you will be replacing the second argument with (after).

// Note: Preserve the case of the first character in the original word when you are replacing it. 
// For example if you mean to replace the word "Book" with the word "dog", it should be replaced as "Dog"

myReplace("Let us go to the store", "store", "mall")                // Let us go to the mall.
myReplace("He is Sleeping on the couch", "Sleeping", "sitting")     // He is Sitting on the couch.
myReplace("I think we should look up there", "up", "Down")          // I think we should look down there.
myReplace("This has a spellngi error", "spellngi", "spelling")      // This has a spelling error.
myReplace("His name is Tom", "Tom", "john")                         // His name is John.
myReplace("Let us get back to more Coding", "Coding", "algorithms") // Let us get back to more Algorithms.

function myReplace(str, before, after) {

  // Find index where before is on string
  var index = str.indexOf(before);

  // Check to see if the first letter is uppercase or not
  if (str[index] === str[index].toUpperCase()) {
    // Change the after word to be capitalized before we use it.
    after = after.charAt(0).toUpperCase() + after.slice(1);
  } else {
    // Change the after word to be uncapitalized before we use it.
    after = after.charAt(0).toLowerCase() + after.slice(1);
  }

  // Now replace the original str with the edited one.
  str = str.replace(before, after);

  return console.log(str);
}
myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
// A quick brown fox leaped over the lazy dog
myReplace("Let us go to the store", "store", "mall")                // Let us go to the mall.
myReplace("He is Sleeping on the couch", "Sleeping", "sitting")     // He is Sitting on the couch.
myReplace("I think we should look up there", "up", "Down")          // I think we should look down there.
myReplace("This has a spellngi error", "spellngi", "spelling")      // This has a spelling error.
myReplace("His name is Tom", "Tom", "john")                         // His name is John.
myReplace("Let us get back to more Coding", "Coding", "algorithms") // Let us get back to more Algorithms.


// DNA Pairing

// The DNA strand is missing the pairing element. Take each character, get its pair, 
// and return the results as a 2d array.

// Base pairs are a pair of AT and CG. Match the missing element to the provided character.

// Return the provided character as the first element in each array.

// For example, for the input GCG, return "[["G", "C"]", "["C","G"]", "["G", "C"]]"

// The character and its pair are paired up in an array, 
// and all the arrays are grouped into one encapsulating array.

// pairElement("GCG")   // [["G", "C"], ["C","G"], ["G", "C"]]
// pairElement("ATCGA") // [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]]
// pairElement("TTGAG") // [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]]
// pairElement("CTCTA") // [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]]

function pairElement(str) {
  // Return each strand as an array of two elements, the original and the pair.
  var paired = [];

  // Function to check with strand to pair.
  var search = function(char) {
    switch (char) {
      case "A":
        paired.push(["A", "T"]);
        break;
      case "T":
        paired.push(["T", "A"]);
        break;
      case "C":
        paired.push(["C", "G"]);
        break;
      case "G":
        paired.push(["G", "C"]);
        break;
    }
  };

  // Loops through the input and pair.
  for (var i = 0; i < str.length; i++) {
    search(str[i]);
  }

  return console.log(paired);
}
pairElement("GCG");  // [ [ 'G', 'C' ], [ 'C', 'G' ], [ 'G', 'C' ] ]
pairElement("ATCGA") // [
                     //   [ 'A', 'T' ],
                     //   [ 'T', 'A' ],
                     //   [ 'C', 'G' ],
                     //   [ 'G', 'C' ],
                     //   [ 'A', 'T' ]
                     // ]
pairElement("TTGAG") // [
                     //   [ 'T', 'A' ],
                     //   [ 'T', 'A' ],
                     //   [ 'G', 'C' ],
                     //   [ 'A', 'T' ],
                     //   [ 'G', 'C' ]
                     // ]
pairElement("CTCTA") // [
                     //   [ 'C', 'G' ],
                     //   [ 'T', 'A' ],
                     //   [ 'C', 'G' ],
                     //   [ 'T', 'A' ],
                     //   [ 'A', 'T' ]
                     // ]

// or

function pairElement(str) {
  //create object for pair lookup
  var pairs = {
    A: "T",
    T: "A",
    C: "G",
    G: "C"
  };
  //split string into array of characters
  var arr = str.split("");
  //map character to array of character and matching pair
  return console.log(arr.map(x => [x, pairs[x]]));
}
pairElement("GCG");  // [ [ 'G', 'C' ], [ 'C', 'G' ], [ 'G', 'C' ] ]
pairElement("ATCGA") // [
                     //   [ 'A', 'T' ],
                     //   [ 'T', 'A' ],
                     //   [ 'C', 'G' ],
                     //   [ 'G', 'C' ],
                     //   [ 'A', 'T' ]
                     // ]
pairElement("TTGAG") // [
                     //   [ 'T', 'A' ],
                     //   [ 'T', 'A' ],
                     //   [ 'G', 'C' ],
                     //   [ 'A', 'T' ],
                     //   [ 'G', 'C' ]
                     // ]
pairElement("CTCTA") // [
                     //   [ 'C', 'G' ],
                     //   [ 'T', 'A' ],
                     //   [ 'C', 'G' ],
                     //   [ 'T', 'A' ],
                     //   [ 'A', 'T' ]
                     // ]


// Missing letters

// Find the missing letter in the passed letter range and return it.

// If all letters are present in the range, return undefined.

// fearNotLetter("abce")                       // d
// fearNotLetter("abcdefghjklmno")             // i
// fearNotLetter("stvwx")                      // u
// fearNotLetter("bcdf")                       // e
// fearNotLetter("abcdefghijklmnopqrstuvwxyz") // undefined

function fearNotLetter(str) {
  for (var i = 0; i < str.length; i++) {
    /* code of current character */
    var code = str.charCodeAt(i);

    /* if code of current character is not equal to first character + no of iteration
        hence character has been escaped */
    if (code !== str.charCodeAt(0) + i) {
      /* if current character has escaped one character find previous char and return */
      return String.fromCharCode(code - 1);
    }
  }
  return undefined;
}
console.log(fearNotLetter("abce"));                       // d
console.log(fearNotLetter("abcdefghjklmno"));             // i
console.log(fearNotLetter("stvwx"));                      // u
console.log(fearNotLetter("bcdf"));                       // e
console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz")); // undefined

// or

function fearNotLetter(str) {
  let currCharCode = str.charCodeAt(0);
  let missing = undefined;

  str
    .split("")
    .forEach(letter => {
      if (letter.charCodeAt(0) === currCharCode) {
        currCharCode++;
      } else {
        missing = String.fromCharCode(currCharCode);
      }
    });

  return missing;
}
console.log(fearNotLetter("abce"));                       // d
console.log(fearNotLetter("abcdefghjklmno"));             // i
console.log(fearNotLetter("stvwx"));                      // u
console.log(fearNotLetter("bcdf"));                       // e
console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz")); // undefined

// or

function fearNotLetter(str) {
  for (let i = 1; i < str.length; ++i) {
    if (str.charCodeAt(i) - str.charCodeAt(i - 1) > 1) {
      return String.fromCharCode(str.charCodeAt(i - 1) + 1);
    }
  }
}
console.log(fearNotLetter("abce"));                       // d
console.log(fearNotLetter("abcdefghjklmno"));             // i
console.log(fearNotLetter("stvwx"));                      // u
console.log(fearNotLetter("bcdf"));                       // e
console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz")); // undefined


// Sorted Union

// Write a function that takes two or more arrays and returns a new array of 
// unique values in the order of the original provided arrays.

// In other words, all values present from all arrays should be included in their original order, 
// but with no duplicates in the final array.

// The unique numbers should be sorted by their original order, 
// but the final array should not be sorted in numerical order.

// Check the assertion tests for examples.

// uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1])            // [1, 3, 2, 5, 4]
// uniteUnique([1, 2, 3], [5, 2, 1])                       // [1, 2, 3, 5]
// uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]) // [1, 2, 3, 5, 4, 6, 7, 8]

function uniteUnique(arr1, arr2, arr3) {
  // Creates an empty array to store our final result.
  var finalArray = [];

  // Loop through the arguments object to truly make the program work with two or more arrays
  // instead of 3.
  for (var i = 0; i < arguments.length; i++) {
    var arrayArguments = arguments[i];

    // Loops through the array at hand
    for (var j = 0; j < arrayArguments.length; j++) {
      var indexValue = arrayArguments[j];

      // Checks if the value is already on the final array.
      if (finalArray.indexOf(indexValue) < 0) {
        finalArray.push(indexValue);
      }
    }
  }

  return console.log(finalArray);
}
uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1])            // [1, 3, 2, 5, 4]
uniteUnique([1, 2, 3], [5, 2, 1])                       // [1, 2, 3, 5]
uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]) // [1, 2, 3, 5, 4, 6, 7, 8]

// or

function uniteUnique(...arr) {
  return [...new Set(arr.flat())]
}
console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));            // [1, 3, 2, 5, 4]
console.log(uniteUnique([1, 2, 3], [5, 2, 1]));                       // [1, 2, 3, 5]
console.log(uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8])); // [1, 2, 3, 5, 4, 6, 7, 8]


// Convert HTML Entities

// Convert the characters &, <, >, " (double quote), and ' (apostrophe),
// in a string to their corresponding HTML entities.

// convertHTML("Dolce & Gabbana")            // Dolce &amp; Gabbana
// convertHTML("Hamburgers < Pizza < Tacos") // Hamburgers &lt; Pizza &lt; Tacos
// convertHTML("Sixty > twelve")             // Sixty &gt; twelve
// convertHTML('Stuff in "quotation marks"') // Stuff in &quot;quotation marks&quot;
// convertHTML("Schindler's List")           // Schindler&apos;s List
// convertHTML("<>")                         // &lt;&gt;
// convertHTML("abc")                        // abc

function convertHTML(str) {
  // Split by character to avoid problems.
  var temp = str.split("");

  // Since we are only checking for a few HTML elements, use a switch
  for (var i = 0; i < temp.length; i++) {
    switch (temp[i]) {
      case "<":
        temp[i] = "&lt;";
        break;
      case "&":
        temp[i] = "&amp;";
        break;
      case ">":
        temp[i] = "&gt;";
        break;
      case '"':
        temp[i] = "&quot;";
        break;
      case "'":
        temp[i] = "&apos;";
        break;
    }
  }

  temp = temp.join("");
  return console.log(temp);
}
convertHTML("Dolce & Gabbana")            // Dolce &amp; Gabbana
convertHTML("Hamburgers < Pizza < Tacos") // Hamburgers &lt; Pizza &lt; Tacos
convertHTML("Sixty > twelve")             // Sixty &gt; twelve
convertHTML('Stuff in "quotation marks"') // Stuff in &quot;quotation marks&quot;
convertHTML("Schindler's List")           // Schindler&apos;s List
convertHTML("<>")                         // &lt;&gt;
convertHTML("abc")                        // abc

// or

function convertHTML(str) {
  // Use Object Lookup to declare as many HTML entities as needed.
  const htmlEntities = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;"
  };
  // Using a regex, replace characters with it's corresponding html entity
  return console.log(str.replace(/([&<>\"'])/g, match => htmlEntities[match]));
}
convertHTML("Dolce & Gabbana")            // Dolce &amp; Gabbana
convertHTML("Hamburgers < Pizza < Tacos") // Hamburgers &lt; Pizza &lt; Tacos
convertHTML("Sixty > twelve")             // Sixty &gt; twelve
convertHTML('Stuff in "quotation marks"') // Stuff in &quot;quotation marks&quot;
convertHTML("Schindler's List")           // Schindler&apos;s List
convertHTML("<>")                         // &lt;&gt;
convertHTML("abc")                        // abc


// Sum All Odd Fibonacci Numbers

// Given a positive integer "num", return the sum of all odd Fibonacci numbers 
// that are less than or equal to "num".

// The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number 
// in the sequence is the sum of the two previous numbers. The first six numbers 
// of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

// For example, "sumFibs(10)" should return "10" because all odd Fibonacci numbers 
// less than or equal to "10" are 1, 1, 3, and 5.

// sumFibs(1)       // a number
// sumFibs(1000)    // 1785
// sumFibs(4000000) // 4613732
// sumFibs(4)       // 5
// sumFibs(75024)   // 60696
// sumFibs(75025)   // 135721

                                                     // first execution
                                                        // secund execution
                                                           // third execution
function sumFibs(num) {                              // 1
                                                        // 1
                                                           // 1
  let previousNumber = 0;                            // 0
                                                        // 1
                                                           // 1
  let currentNumber = 1;                             // 1
                                                        // 1
                                                           // 2
  let result = 0;                                    // 0
                                                        // 1
                                                           // 2
  while (currentNumber <= num) {                     // true (1 <= 1)
                                                        // true (1 <= 1)
                                                           // false (2 <= 1) ---> return result
    if (currentNumber % 2 !== 0) {                   // true
                                                        // true
   // result += currentNumber; // or
      result = result + currentNumber;               // 0 + 1 = 1
                                                        // 1 + 1 = 2   <---------- 
    }
 // currentNumber += previousNumber; // or
    currentNumber = currentNumber + previousNumber;  // 1 + 0 = 1
                                                        // 1 + 1 = 2
    previousNumber = currentNumber - previousNumber; // 1 - 0 = 1
                                                        // 2 - 1 = 1
  }
  return console.log(result); // 2
}
sumFibs(1);      // 2
sumFibs(1000)    // 1785
sumFibs(4000000) // 4613732
sumFibs(4)       // 5
sumFibs(75024)   // 60696
sumFibs(75025)   // 135721

// or

function sumFibs(num) {
  // Perform checks for the validity of the input
  if (num <= 0) return 0;

  // Create an array of fib numbers till num
  const arrFib = [1, 1];
  let nextFib = 0;

  // We put the new Fibonacci numbers to the front so we
  // don't need to calculate the length of the array on each
  // iteration
  while ((nextFib = arrFib[0] + arrFib[1]) <= num) {
    arrFib.unshift(nextFib);
  }

  // We filter the array to get the odd numbers and reduce them to get their sum.
  return console.log(arrFib.filter(x => x % 2 != 0).reduce((a, b) => a + b));
}
sumFibs(1);      // 2
sumFibs(1000)    // 1785
sumFibs(4000000) // 4613732
sumFibs(4)       // 5
sumFibs(75024)   // 60696
sumFibs(75025)   // 135721


// Sum All Primes

// A "prime number" is a whole number greater than 1 with exactly two divisors: 
// 1 and itself. For example, 2 is a prime number because it is only divisible by 1 and 2. 
// In contrast, 4 is not prime since it is divisible by 1, 2 and 4.

// Rewrite "sumPrimes" so it returns the sum of all prime numbers 
// that are less than or equal to num.

// sumPrimes(10)  should return 17.
// sumPrimes(977) should return 73156.

function sumPrimes(num) {

  // Primality test
  // https://en.wikipedia.org/wiki/Primality_test#:~:text=The%20simplest%20primality%20test%20is,Otherwise%2C%20it%20is%20prime.
  // Helper function to check primality
  function isPrime(num) {
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i == 0)
        return false;
    }
    return true;
  }

  // Check all numbers for primality
  let sum = 0;
  for (let i = 2; i <= num; i++) {
    if (isPrime(i))
      sum += i;
  }

  return sum;
}
console.log(sumPrimes(10));  // 17
console.log(sumPrimes(977)); // 73156

// or 

function sumPrimes(num) {
  // Check all numbers for primality
  let primes = [];
  for (let i = 2; i <= num; i++) {
    if (primes.every((prime) => i % prime !== 0))
      primes.push(i);
  }
  return primes.reduce((sum, prime) => sum + prime, 0);
}
console.log(sumPrimes(10));  // 17
console.log(sumPrimes(977)); // 73156

// or

function sumPrimes(num) {
  // Prime number sieve
  let isPrime = Array(num + 1).fill(true);
  // 0 and 1 are not prime
  isPrime[0] = false;
  isPrime[1] = false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (isPrime[i]) {
      // i has not been marked false -- it is prime
      for (let j = i * i; j <= num; j += i)
        isPrime[j] = false;
    }
  }

  // Sum all values still marked prime
  return isPrime.reduce(
    (sum, prime, index) => prime ? sum + index : sum, 0
  );
}
console.log(sumPrimes(10));  // 17
console.log(sumPrimes(977)); // 73156


// Smallest Common Multiple

// Find the smallest common multiple of the provided parameters that can be evenly divided by both, 
// as well as by all sequential numbers in the range between these parameters.

// The range will be an array of two numbers that will not necessarily be in numerical order.

// For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 
// that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6.

// smallestCommons([1, 5])   // 60
// smallestCommons([5, 1])   // 60
// smallestCommons([2, 10])  // 2520
// smallestCommons([1, 13])  // 360360
// smallestCommons([23, 18]) // 6056820

// lopping approach
function smallestCommons(arr) {
  // Setup
  const [min, max] = arr.sort((a, b) => a - b);
  const numberDivisors = max - min + 1;
  // Largest possible value for SCM
  let upperBound = 1;
  for (let i = min; i <= max; i++) {
    upperBound *= i;
  }
  // Test all multiples of 'max'
  for (let multiple = max; multiple <= upperBound; multiple += max) {
    // Check if every value in range divides 'multiple'
    let divisorCount = 0;
    for (let i = min; i <= max; i++) {
      // Count divisors
      if (multiple % i === 0) {
        divisorCount += 1;
      }
    }
    if (divisorCount === numberDivisors) {
      return multiple;
    }
  }
}
console.log(smallestCommons([1, 5]));   // 60
console.log(smallestCommons([5, 1]));   // 60
console.log(smallestCommons([2, 10]));  // 2520
console.log(smallestCommons([1, 13]));  // 360360
console.log(smallestCommons([23, 18])); // 6056820

// or
// ES6 looping
function smallestCommons(arr) {
  // Setup
  const [min, max] = arr.sort((a, b) => a - b);
  const range = Array(max - min + 1)
    .fill(0)
    .map((_, i) => i + min);
  // Largest possible value for SCM
  const upperBound = range.reduce((prod, curr) => prod * curr);
  // Test all multiples of 'max'
  for (let multiple = max; multiple <= upperBound; multiple += max) {
    // Check if every value in range divides 'multiple'
    const divisible = range.every((value) => multiple % value === 0);
    if (divisible) {
      return multiple;
    }
  }
}
console.log(smallestCommons([1, 5]));   // 60
console.log(smallestCommons([5, 1]));   // 60
console.log(smallestCommons([2, 10]));  // 2520
console.log(smallestCommons([1, 13]));  // 360360
console.log(smallestCommons([23, 18])); // 6056820

// or
// GCD and LCM
function smallestCommons(arr) {
  // Setup
  const [min, max] = arr.sort((a, b) => a - b);
  const range = Array(max - min + 1)
    .fill(0)
    .map((_, i) => i + min);
  // GCD of two numbers
  // https://en.wikipedia.org/wiki/Greatest_common_divisor#Euclid's_algorithm
  const gcd = (a, b) => (b === 0) ? a : gcd(b, a % b);
  // LCM of two numbers
  // https://en.wikipedia.org/wiki/Least_common_multiple#Using_the_greatest_common_divisor
  const lcm = (a, b) => a * b / gcd(a, b);
  // LCM of multiple numbers
  // https://en.wikipedia.org/wiki/Least_common_multiple#Other
  return range.reduce((multiple, curr) => lcm(multiple, curr));
}
console.log(smallestCommons([1, 5]));   // 60
console.log(smallestCommons([5, 1]));   // 60
console.log(smallestCommons([2, 10]));  // 2520
console.log(smallestCommons([1, 13]));  // 360360
console.log(smallestCommons([23, 18])); // 6056820


// or
// Prime factorization
// Find the SCM of a range of numbers
function smallestCommons(arr) {
  let primeFactors = {};
  const [min, max] = arr.sort((a, b) => a - b);
  for (let i = min; i <= max; i++) {
    // Factorize number in range
    let primes = getPrimeFactors(i);
    for (let j in primes) {
      // Add factor to set or update number of occurrences
      if (!primeFactors[j] || primes[j] > primeFactors[j]) {
        primeFactors[j] = primes[j]
      }
    }
  }
  // Build SCM from factorization
  let multiple = 1;
  for (let i in primeFactors) {
    multiple *= i ** primeFactors[i]
  }
  return multiple;
}

// Compute prime factors of a number
function getPrimeFactors(num) {
  const factors = {};
  for (let prime = 2; prime <= num; prime++) {
    // Count occurances of factor
    // Note that composite values will not divide num
    while ((num % prime) === 0) {
      factors[prime] = (factors[prime]) ? factors[prime] + 1 : 1;
      num /= prime;
    }
  }
  return factors;
}
console.log(smallestCommons([1, 5]));   // 60
console.log(smallestCommons([5, 1]));   // 60
console.log(smallestCommons([2, 10]));  // 2520
console.log(smallestCommons([1, 13]));  // 360360
console.log(smallestCommons([23, 18])); // 6056820


// Drop it

// Given the array "arr", iterate through and remove each element starting from 
// the first element (the 0 index) until the function "func" returns "true" 
// when the iterated element is passed through it.

// Then return the rest of the array once the condition is satisfied, otherwise, 
// "arr" should be returned as an empty array.

// dropElements([1, 2, 3], function(n) {return n < 3; })      // [ 1, 2, 3 ]
// dropElements([1, 2, 3, 4], function(n) {return n >= 3;})   // [3, 4]
// dropElements([0, 1, 0, 1], function(n) {return n === 1;})  // [1, 0, 1]
// dropElements([1, 2, 3], function(n) {return n > 0;})       // [1, 2, 3]
// dropElements([1, 2, 3, 4], function(n) {return n > 5;})    // []
// dropElements([1, 2, 3, 7, 4], function(n) {return n > 3;}) // [7, 4]
// dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;}) // [3, 9, 2]

function dropElements(arr, func) {
  while (arr.length > 0 && !func(arr[0])) {
    arr.shift();
  }
  return arr;
}
console.log(dropElements([1, 2, 3], function(n) {return n < 3; }));      // [ 1, 2, 3 ]
console.log(dropElements([1, 2, 3, 4], function(n) {return n >= 3;}));   // [3, 4]
console.log(dropElements([0, 1, 0, 1], function(n) {return n === 1;}));  // [1, 0, 1]
console.log(dropElements([1, 2, 3], function(n) {return n > 0;}));       // [1, 2, 3]
console.log(dropElements([1, 2, 3, 4], function(n) {return n > 5;}));    // []
console.log(dropElements([1, 2, 3, 7, 4], function(n) {return n > 3;})); // [7, 4]
console.log(dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;})); // [3, 9, 2]

// or

function dropElements(arr, func) {
  let sliceIndex = arr.findIndex(func);
  return arr.slice(sliceIndex >= 0 ? sliceIndex : arr.length);
}
console.log(dropElements([1, 2, 3], function(n) {return n < 3; }));      // [ 1, 2, 3 ]
console.log(dropElements([1, 2, 3, 4], function(n) {return n >= 3;}));   // [3, 4]
console.log(dropElements([0, 1, 0, 1], function(n) {return n === 1;}));  // [1, 0, 1]
console.log(dropElements([1, 2, 3], function(n) {return n > 0;}));       // [1, 2, 3]
console.log(dropElements([1, 2, 3, 4], function(n) {return n > 5;}));    // []
console.log(dropElements([1, 2, 3, 7, 4], function(n) {return n > 3;})); // [7, 4]
console.log(dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;})); // [3, 9, 2]

// or

function dropElements(arr, func) {
  // drop them elements.
  let originalLen = arr.length;
  for (let i = 0; i < originalLen; i++) {
    if (func(arr[0])) {
      break;
    } else {
      arr.shift();
    }
  }
  return arr;
}
console.log(dropElements([1, 2, 3], function(n) {return n < 3; }));      // [ 1, 2, 3 ]
console.log(dropElements([1, 2, 3, 4], function(n) {return n >= 3;}));   // [3, 4]
console.log(dropElements([0, 1, 0, 1], function(n) {return n === 1;}));  // [1, 0, 1]
console.log(dropElements([1, 2, 3], function(n) {return n > 0;}));       // [1, 2, 3]
console.log(dropElements([1, 2, 3, 4], function(n) {return n > 5;}));    // []
console.log(dropElements([1, 2, 3, 7, 4], function(n) {return n > 3;})); // [7, 4]
console.log(dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;})); // [3, 9, 2]

// or

function dropElements(arr, func, i = 0) {
  return i < arr.length && !func(arr[i])
    ? (dropElements(arr.slice(i + 1), func, i))
    : arr;
}
console.log(dropElements([1, 2, 3], function(n) {return n < 3; }));      // [ 1, 2, 3 ]
console.log(dropElements([1, 2, 3, 4], function(n) {return n >= 3;}));   // [3, 4]
console.log(dropElements([0, 1, 0, 1], function(n) {return n === 1;}));  // [1, 0, 1]
console.log(dropElements([1, 2, 3], function(n) {return n > 0;}));       // [1, 2, 3]
console.log(dropElements([1, 2, 3, 4], function(n) {return n > 5;}));    // []
console.log(dropElements([1, 2, 3, 7, 4], function(n) {return n > 3;})); // [7, 4]
console.log(dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;})); // [3, 9, 2]


// Steamroller

// Flatten a nested array. You must account for varying levels of nesting.

// Your solution should not use the 
// Array.prototype.flat() or Array.prototype.flatMap() methods.

// steamrollArray([[["a"]], [["b"]]])   // ["a", "b"]
// steamrollArray([1, [2], [3, [[4]]]]) // [1, 2, 3, 4]
// steamrollArray([1, [], [3, [[4]]]])  // [1, 3, 4]
// steamrollArray([1, {}, [3, [[4]]]])  // [1, {}, 3, 4]

function steamrollArray(arr) {
  const flattenedArray = [];

  // Loop over array contents
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      // Recursively flatten entries that are arrays
      // and push into the flattenedArray
      flattenedArray.push(...steamrollArray(arr[i]));
    } else {
      // Copy contents that are not arrays
      flattenedArray.push(arr[i]);
    }
  }

  return flattenedArray;
};
console.log(steamrollArray([[["a"]], [["b"]]]));   // ["a", "b"]
console.log(steamrollArray([1, [2], [3, [[4]]]])); // [1, 2, 3, 4]
console.log(steamrollArray([1, [], [3, [[4]]]]));  // [1, 3, 4]
console.log(steamrollArray([1, {}, [3, [[4]]]]));  // [1, {}, 3, 4]

// or

function steamrollArray(arr) {
  const flat = [].concat(...arr);
  return flat.some(Array.isArray) ? steamrollArray(flat) : flat;
}
console.log(steamrollArray([[["a"]], [["b"]]]));   // ["a", "b"]
console.log(steamrollArray([1, [2], [3, [[4]]]])); // [1, 2, 3, 4]
console.log(steamrollArray([1, [], [3, [[4]]]]));  // [1, 3, 4]
console.log(steamrollArray([1, {}, [3, [[4]]]]));  // [1, {}, 3, 4]

// or

function steamrollArray(arr) {
  return arr
    .toString()
    .replace(",,", ",") // "1,2,,3" => "1,2,3"
    .split(",") // ['1','2','3']
    .map(function(v) {
      if (v == "[object Object]") {
        // bring back empty objects
        return {};
      } else if (isNaN(v)) {
        // if not a number (string)
        return v;
      } else {
        return parseInt(v); // if a number in a string, convert it
      }
    });
}
console.log(steamrollArray([[["a"]], [["b"]]]));   // ["a", "b"]
console.log(steamrollArray([1, [2], [3, [[4]]]])); // [1, 2, 3, 4]
console.log(steamrollArray([1, [], [3, [[4]]]]));  // [1, 3, 4]
console.log(steamrollArray([1, {}, [3, [[4]]]]));  // [1, {}, 3, 4]

// or

function steamrollArray(val,flatArr=[]) {
  val.forEach(item => {
    if (Array.isArray(item)) steamrollArray(item, flatArr);
    else flatArr.push(item);
  });
  return flatArr;
}
console.log(steamrollArray([[["a"]], [["b"]]]));   // ["a", "b"]
console.log(steamrollArray([1, [2], [3, [[4]]]])); // [1, 2, 3, 4]
console.log(steamrollArray([1, [], [3, [[4]]]]));  // [1, 3, 4]
console.log(steamrollArray([1, {}, [3, [[4]]]]));  // [1, {}, 3, 4]


// Binary Agents

// Return an English translated sentence of the passed binary string.

// The binary string will be space separated.

// binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111") // Aren't bonfires fun!?
// binaryAgent("01001001 00100000 01101100 01101111 01110110 01100101 00100000 01000110 01110010 01100101 01100101 01000011 01101111 01100100 01100101 01000011 01100001 01101101 01110000 00100001") // I love FreeCodeCamp!

function binaryAgent(str) {
  var biString = str.split(" ");
  var uniString = [];

  /*using the radix (or base) parameter in parseInt, we can convert the binary
      number to a decimal number while simultaneously converting to a char*/

  for (var i = 0; i < biString.length; i++) {
    uniString.push(String.fromCharCode(parseInt(biString[i], 2)));
  }

  // we then simply join the string
  return uniString.join("");
}
console.log(binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111")); // Aren't bonfires fun!?
console.log(binaryAgent("01001001 00100000 01101100 01101111 01110110 01100101 00100000 01000110 01110010 01100101 01100101 01000011 01101111 01100100 01100101 01000011 01100001 01101101 01110000 00100001"));          // I love FreeCodeCamp!

// or

function binaryAgent(str) {
  // Separate the binary code by space.
  str = str.split(" ");
  var power;
  var decValue = 0;
  var sentence = "";

  // Check each binary number from the array.
  for (var s = 0; s < str.length; s++) {
    // Check each bit from binary number
    for (var t = 0; t < str[s].length; t++) {
      // This only takes into consideration the active ones.
      if (str[s][t] == 1) {
        // This is quivalent to 2 ** position
        power = Math.pow(2, +str[s].length - t - 1);
        decValue += power;

        // Record the decimal value by adding the number to the previous one.
      }
    }

    // After the binary number is converted to decimal, convert it to string and store
    sentence += String.fromCharCode(decValue);

    // Reset decimal value for next binary number.
    decValue = 0;
  }

  return sentence;
}
console.log(binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111")); // Aren't bonfires fun!?
console.log(binaryAgent("01001001 00100000 01101100 01101111 01110110 01100101 00100000 01000110 01110010 01100101 01100101 01000011 01101111 01100100 01100101 01000011 01100001 01101101 01110000 00100001"));          // I love FreeCodeCamp!

// or

function binaryAgent(str) {
  return String.fromCharCode(
    ...str.split(" ").map(function(char) {
      return parseInt(char, 2);
    })
  );
}
console.log(binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111")); // Aren't bonfires fun!?
console.log(binaryAgent("01001001 00100000 01101100 01101111 01110110 01100101 00100000 01000110 01110010 01100101 01100101 01000011 01101111 01100100 01100101 01000011 01100001 01101101 01110000 00100001"));          // I love FreeCodeCamp!


// Everything Be True

// Check if the predicate (second argument) is "truthy" 
// on all elements of a collection (first argument).

// In other words, you are given an array collection of objects. 
// The predicate "pre" will be an object property 
// and you need to return "true" if its value is "truthy". Otherwise, return "false".

// In JavaScript, "truthy" values are values that translate to "true" 
// when evaluated in a Boolean context.

// Remember, you can access object properties through either dot notation
//  or "[]" notation.

// truthCheck(
//   [
//     {"user": "Tinky-Winky", "sex": "male"}, 
//     {"user": "Dipsy", "sex": "male"}, 
//     {"user": "Laa-Laa", "sex": "female"}, 
//     {"user": "Po", "sex": "female"}
//   ], 
//   "sex"
// ) // true
// truthCheck(
//   [
//     {"user": "Tinky-Winky", "sex": "male"}, 
//     {"user": "Dipsy"}, 
//     {"user": "Laa-Laa", "sex": "female"}, 
//     {"user": "Po", "sex": "female"}
//   ], 
//   "sex"
// ) // false
// truthCheck(
//   [
//     {"user": "Tinky-Winky", "sex": "male", "age": 0}, 
//     {"user": "Dipsy", "sex": "male", "age": 3}, 
//     {"user": "Laa-Laa", "sex": "female", "age": 5}, 
//     {"user": "Po", "sex": "female", "age": 4}
//   ], 
//   "age"
// ) // false
// truthCheck(
//   [
//     {"name": "Pete", "onBoat": true}, 
//     {"name": "Repeat", "onBoat": true}, 
//     {"name": "FastForward", "onBoat": null}
//   ], 
//     "onBoat"
//   ) // false
// truthCheck(
//   [
//     {"name": "Pete", "onBoat": true}, 
//     {"name": "Repeat", "onBoat": true, "alias": "Repete"}, 
//     {"name": "FastForward", "onBoat": true}
//   ], 
//   "onBoat"
// ) // true
// truthCheck([{"single": "yes"}], "single")                           // true
// truthCheck([{"single": ""}, {"single": "double"}], "single")        // false
// truthCheck([{"single": "double"}, {"single": undefined}], "single") // false
// truthCheck([{"single": "double"}, {"single": NaN}], "single")       // false

function truthCheck(collection, pre) {
  // Create a counter to check how many are true.
  var counter = 0;
  // Check for each object
  for (var c in collection) {
    // If it is has property and value is truthy
    if (collection[c].hasOwnProperty(pre) && Boolean(collection[c][pre])) {
      counter++;
    }
  }
  // Outside the loop, check to see if we got true for all of them and return true or false
  return counter == collection.length;
}
console.log(truthCheck(
                        [
                          {"user": "Tinky-Winky", "sex": "male"}, 
                          {"user": "Dipsy", "sex": "male"}, 
                          {"user": "Laa-Laa", "sex": "female"}, 
                          {"user": "Po", "sex": "female"}
                        ], 
                        "sex"
                      )); // true
console.log(truthCheck(
                        [
                          {"user": "Tinky-Winky", "sex": "male"}, 
                          {"user": "Dipsy"}, 
                          {"user": "Laa-Laa", "sex": "female"}, 
                          {"user": "Po", "sex": "female"}
                        ], 
                        "sex"
                      )); // false
console.log(truthCheck(
                        [
                          {"user": "Tinky-Winky", "sex": "male", "age": 0}, 
                          {"user": "Dipsy", "sex": "male", "age": 3}, 
                          {"user": "Laa-Laa", "sex": "female", "age": 5}, 
                          {"user": "Po", "sex": "female", "age": 4}
                        ], 
                        "age"
                      )); // false
console.log(truthCheck(
                        [
                          {"name": "Pete", "onBoat": true}, 
                          {"name": "Repeat", "onBoat": true}, 
                          {"name": "FastForward", "onBoat": null}
                        ], 
                          "onBoat"
                        )); // false
console.log(truthCheck(
                        [
                          {"name": "Pete", "onBoat": true}, 
                          {"name": "Repeat", "onBoat": true, "alias": "Repete"}, 
                          {"name": "FastForward", "onBoat": true}
                        ], 
                        "onBoat"
                      )); // true
console.log(truthCheck([{"single": "yes"}], "single"));                           // true
console.log(truthCheck([{"single": ""}, {"single": "double"}], "single"));        // false
console.log(truthCheck([{"single": "double"}, {"single": undefined}], "single")); // false
console.log(truthCheck([{"single": "double"}, {"single": NaN}], "single"));       // false

// or 

function truthCheck(collection, pre) {
  return collection.every(function(element) {
    return element.hasOwnProperty(pre) && Boolean(element[pre]);
  });
}
console.log(truthCheck(
  [
    {"user": "Tinky-Winky", "sex": "male"}, 
    {"user": "Dipsy", "sex": "male"}, 
    {"user": "Laa-Laa", "sex": "female"}, 
    {"user": "Po", "sex": "female"}
  ], 
  "sex"
)); // true
console.log(truthCheck(
  [
    {"user": "Tinky-Winky", "sex": "male"}, 
    {"user": "Dipsy"}, 
    {"user": "Laa-Laa", "sex": "female"}, 
    {"user": "Po", "sex": "female"}
  ], 
  "sex"
)); // false
console.log(truthCheck(
  [
    {"user": "Tinky-Winky", "sex": "male", "age": 0}, 
    {"user": "Dipsy", "sex": "male", "age": 3}, 
    {"user": "Laa-Laa", "sex": "female", "age": 5}, 
    {"user": "Po", "sex": "female", "age": 4}
  ], 
  "age"
)); // false
console.log(truthCheck(
  [
    {"name": "Pete", "onBoat": true}, 
    {"name": "Repeat", "onBoat": true}, 
    {"name": "FastForward", "onBoat": null}
  ], 
    "onBoat"
  )); // false
console.log(truthCheck(
  [
    {"name": "Pete", "onBoat": true}, 
    {"name": "Repeat", "onBoat": true, "alias": "Repete"}, 
    {"name": "FastForward", "onBoat": true}
  ], 
  "onBoat"
)); // true
console.log(truthCheck([{"single": "yes"}], "single"));                           // true
console.log(truthCheck([{"single": ""}, {"single": "double"}], "single"));        // false
console.log(truthCheck([{"single": "double"}, {"single": undefined}], "single")); // false
console.log(truthCheck([{"single": "double"}, {"single": NaN}], "single"));       // false

// or

function truthCheck(collection, pre) {
  // Is everyone being true?
  return collection.every(obj => obj[pre]);
}
console.log(truthCheck(
  [
    {"user": "Tinky-Winky", "sex": "male"}, 
    {"user": "Dipsy", "sex": "male"}, 
    {"user": "Laa-Laa", "sex": "female"}, 
    {"user": "Po", "sex": "female"}
  ], 
  "sex"
)); // true
console.log(truthCheck(
  [
    {"user": "Tinky-Winky", "sex": "male"}, 
    {"user": "Dipsy"}, 
    {"user": "Laa-Laa", "sex": "female"}, 
    {"user": "Po", "sex": "female"}
  ], 
  "sex"
)); // false
console.log(truthCheck(
  [
    {"user": "Tinky-Winky", "sex": "male", "age": 0}, 
    {"user": "Dipsy", "sex": "male", "age": 3}, 
    {"user": "Laa-Laa", "sex": "female", "age": 5}, 
    {"user": "Po", "sex": "female", "age": 4}
  ], 
  "age"
)); // false
console.log(truthCheck(
  [
    {"name": "Pete", "onBoat": true}, 
    {"name": "Repeat", "onBoat": true}, 
    {"name": "FastForward", "onBoat": null}
  ], 
    "onBoat"
  )); // false
console.log(truthCheck(
  [
    {"name": "Pete", "onBoat": true}, 
    {"name": "Repeat", "onBoat": true, "alias": "Repete"}, 
    {"name": "FastForward", "onBoat": true}
  ], 
  "onBoat"
)); // true
console.log(truthCheck([{"single": "yes"}], "single"));                           // true
console.log(truthCheck([{"single": ""}, {"single": "double"}], "single"));        // false
console.log(truthCheck([{"single": "double"}, {"single": undefined}], "single")); // false
console.log(truthCheck([{"single": "double"}, {"single": NaN}], "single"));       // false


// Arguments Optional

// Create a function that sums two arguments together. If only one argument is provided,
// then return a function that expects one argument and returns the sum.

// For example, "addTogether(2, 3)" should return "5", and "addTogether(2)" should return a function.

// Calling this returned function with a single argument will then return the sum:

// var sumTwoAnd = addTogether(2);

// "sumTwoAnd(3)" returns "5".

// If either argument isn't a valid number, return undefined.

// addTogether(2, 3)                                          // 5
// addTogether(23, 30)                                        // 53
// addTogether(5)(7)                                          // 12
// addTogether("https://www.youtube.com/watch?v=dQw4w9WgXcQ") // undefined
// addTogether(2, "3")                                        // undefined
// addTogether(2)([3])                                        // undefined

function addTogether() {
  const [first, second] = arguments;
  if (typeof(first) !== "number")
    return undefined;
  if (second === undefined)
    return (second) => addTogether(first, second);
  if (typeof(second) !== "number")
    return undefined;
  return first + second;
}
console.log(addTogether(2, 3));                                          // 5
console.log(addTogether(23, 30));                                        // 53
console.log(addTogether(5)(7));                                          // 12
console.log(addTogether("https://www.youtube.com/watch?v=dQw4w9WgXcQ")); // undefined
console.log(addTogether(2, "3"));                                        // undefined
console.log(addTogether(2)([3]));                                        // undefined

// or

function addTogether() {
  const [first, second] = arguments;
  // First argument is not a number
  if (typeof(first) !== "number") {
    return undefined;
  }
  // First argument is a number
  //  and second argument is not defined
  else if (second === undefined) {
    function addSecond(second) {
      // New argument is not a number
      if (typeof(second) !== "number") {
        return undefined;
      }
      // New argument is a number
      else {
        return first + second;
      }
    }
    // Note: returning a *function*
    return addSecond;
  }
  // First argument is a number
  //  and second argument is not a number
  else if (typeof(second) !== "number") {
    return undefined;
  }
  // First argument is a number
  //  and second argument is a number
  else {
    return first + second;
  }
}
console.log(addTogether(2, 3));                                          // 5
console.log(addTogether(23, 30));                                        // 53
console.log(addTogether(5)(7));                                          // 12
console.log(addTogether("https://www.youtube.com/watch?v=dQw4w9WgXcQ")); // undefined
console.log(addTogether(2, "3"));                                        // undefined
console.log(addTogether(2)([3]));                                        // undefined


// Make a Person

// Fill in the object constructor with the following methods below:

// getFirstName()
// getLastName()
// getFullName()
// setFirstName(first)
// setLastName(last)
// setFullName(firstAndLast)

// Run the tests to see the expected output for each method. The methods that take
// an argument must accept only one argument and it has to be a string. These methods 
// must be the only available means of interacting with the object.

// No properties should be added. Object.keys(bob).length should always return 6.
// bob instanceof Person should return true.

// bob.firstName                    // undefined
// bob.lastName                     // undefined
// bob.getFirstName()               // Bob
// bob.getLastName()                // Ross
// bob.getFullName()                // Bob Ross
// bob.setFirstName("Haskell")
// bob.getFullName()                // Haskell Ross 
// bob.setLastName("Curry")
// bob.getFullName()                // Haskell Curry
// bob.setFullName("Haskell Curry")
// bob.getFullName()                // Haskell Curry
// bob.setFullName("Haskell Curry")
// bob.getFirstName()               // Haskell
// bob.setFullName("Haskell Curry")
// bob.getLastName()                // Curry

const Person = function(firstAndLast) {

  let fullName = firstAndLast;

  this.getFirstName = function() {
    return fullName.split(" ")[0];
  };

  this.getLastName = function() {
    return fullName.split(" ")[1];
  };

  this.getFullName = function() {
    return fullName;
  };

  this.setFirstName = function(name) {
    fullName = name + " " + fullName.split(" ")[1];
  };

  this.setLastName = function(name) {
    fullName = fullName.split(" ")[0] + " " + name;
  };

  this.setFullName = function(name) {
    fullName = name;
  };
};
const bob = new Person('Bob Ross');

console.log(bob.firstName);                    // undefined
console.log(bob.lastName);                     // undefined
console.log(bob.getFirstName());               // Bob
console.log(bob.getLastName());                // Ross
console.log(bob.getFullName());                // Bob Ross
bob.setFirstName("Haskell")
console.log(bob.getFullName());                // Haskell Ross 
bob.setLastName("Curry")
console.log(bob.getFullName());                // Haskell Curry
bob.setFullName("Haskell Curry")
console.log(bob.getFullName());                // Haskell Curry
bob.setFullName("Haskell Curry")
console.log(bob.getFirstName());               // Haskell
bob.setFullName("Haskell Curry")
console.log(bob.getLastName());                // Curry