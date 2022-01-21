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