// Convert Celsius to Fahrenheit

// 9/5 = 1.8

function convertToF(celsius) {
    let fahrenheit;
    return fahrenheit = (celsius * 9 / 5) + 32;
}
console.log(convertToF(30)); // 86

// or

function convertToF(celsius) {
    let fahrenheit;
    return fahrenheit = (celsius * 1.8) + 32;
}
console.log(convertToF(30)); // 86


// Reverse a String

function reverseString(str) {
    return str.split("").reverse().join("");
}
console.log(reverseString("hello")); // olleh


// Factorialize a Number

function factorialize(num) {
    for (var product = 1; num > 0; num--) {
      product *= num;
    }
    return product;
}
console.log(factorialize(5));

// or

// (using Recursion)
function factorialize(num) {
    if (num === 0) {
      return 1;
    }
    return num * factorialize(num - 1);
}
factorialize(5);


// Find the Longest Word in a StringPassed

function findLongestWordLength(str) {
    let array = str.split(" ");
    let maxLength = 0;

    for (let index = 0; index < array.length; index++) {
        if (maxLength < array[index].length) {
            maxLength = array[index].length
        }
    }

    return console.log(maxLength);
}
findLongestWordLength("The quick brown fox jumped over the lazy dog");


// Return Largest Numbers in Arrays

function largestOfFour(arr) {

  let results = [];

  for (let i = 0; i < arr.length; i++) {

    let largestNumber = arr[i][0];

    for (let j = 1; j < arr[i].length; j++) {

      if (arr[i][j] > largestNumber) {

        largestNumber = arr[i][j];
      }
    }

    results[i] = largestNumber;
  }

  return console.log(results);
}
largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
            // [ 5,               27,                       39,         1001 ]


// Confirm the Ending

function confirmEnding(str, target) {
  return str.slice(str.length - target.length) === target;
}
console.log(confirmEnding("Bastian", "n"));
console.log(confirmEnding("Congratulation", "on"));
console.log(confirmEnding("Congratulation", "son"));
console.log(confirmEnding("Connor", "n"));
console.log(confirmEnding("Open sesame", "sage"));

// or

function confirmEnding(str, target) {
  return str.slice(-target.length) === target
}
console.log(confirmEnding("Bastian", "n"));
console.log(confirmEnding("Open sesame", "sage"));

// (using Regular Expression)
function confirmEnding(str, target) {
  let re = new RegExp(target + "$", "i");
  return re.test(str);
}
console.log(confirmEnding("Bastian", "n"));
console.log(confirmEnding("Congratulation", "on"));
console.log(confirmEnding("Congratulation", "son"));
console.log(confirmEnding("Connor", "n"));
console.log(confirmEnding("Open sesame", "sage"));

// Repeat a String Repeat a String

function repeatStringNumTimes(str, num) {
  let arr = [];

  for (let i = 0; i < num; i++){
    if (num > 0) {
      arr.push(str);
    } else {
      arr;
    }
  }

  return arr.join("");
}
console.log(repeatStringNumTimes("abc", 3)); // abcabcabc
console.log(repeatStringNumTimes("abc", 0)); // ""

// or

function repeatStringNumTimes(str, num) {
  var accumulatedStr = "";

  while (num > 0) {
    accumulatedStr += str;
    num--;
  }

  return accumulatedStr;
}
console.log(repeatStringNumTimes("abc", 3)); // abcabcabc
console.log(repeatStringNumTimes("abc", 0)); // ""

// or (recursion)

function repeatStringNumTimes(str, num) {
  if (num < 1) {
    return "";
  } else {
    return str + repeatStringNumTimes(str, num - 1);
  }
}
console.log(repeatStringNumTimes("abc", 3)); // abcabcabc
console.log(repeatStringNumTimes("abc", 0)); // ""

// or (recursion)

function repeatStringNumTimes(str, num) {
  return num > 0 ? str + repeatStringNumTimes(str, num - 1) : '';
}
console.log(repeatStringNumTimes("abc", 3)); // abcabcabc
console.log(repeatStringNumTimes("abc", 0)); // ""


// Truncate a String

function truncateString(str, num) {
    return str.length > num ? str.slice(0, num).concat("...") : str;
}
console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));
// A-tisket...
console.log(truncateString("A-", 1));                                          
// A-
console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length));
// A-tisket a-tasket A green and yellow basket

function truncateString(str, num) {
  // Clear out that junk in your trunk
  if (str.length > num) {
    return str.slice(0, num) + "...";
  } else {
    return str;
  }
}


// Finders Keepers

function findElement(arr, func) {
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i])) {
      return arr[i];
    }
  }
}
console.log(findElement([1, 2, 3, 4], num => num % 2 === 0));
console.log(findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; }));
console.log(findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; }));

// or

function findElement(arr, func) {
  let num = 0;

  for (let i = 0; i < arr.length; i++) {
    num = arr[i];
    if (func(num)) {
      return num;
    }
  }

  return undefined;
}
console.log(findElement([1, 2, 3, 4], num => num % 2 === 0));
console.log(findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; }));
console.log(findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; }));

// or

function findElement(arr, func) {
  return arr.find(func);
}
console.log(findElement([1, 2, 3, 4], num => num % 2 === 0));
console.log(findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; }));
console.log(findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; }));

// or

function findElement(arr, func) {
  return arr[arr.map(func).indexOf(true)];
}
console.log(findElement([1, 2, 3, 4], num => num % 2 === 0));
console.log(findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; }));
console.log(findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; }));

// or (Recursive Solution)

function findElement(arr, func) {
  return arr.length && !func(arr[0]) 
    ? findElement(arr.slice(1), func)
    : arr[0];
}
console.log(findElement([1, 2, 3, 4], num => num % 2 === 0));
console.log(findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; }));
console.log(findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; }));


// Boo who

function booWho(bool) {
  return bool === true || bool === false ? true : false;
}
console.log(booWho(true));      // true
console.log(booWho(false));     // true
console.log(booWho(null));      // false
console.log(booWho([1, 2, 3])); // false

// or

function booWho(bool) {
  return typeof bool === "boolean";
}
console.log(booWho(true));      // true
console.log(booWho(false));     // true
console.log(booWho(null));      // false
console.log(booWho([1, 2, 3])); // false


// Title Case a Sentence

function titleCase(str) {
  let array = str.split(" ");
  let result = []

  for (let i = 0; i < array.length; i++) {
      let string = array[i].split("").join("");
      let newString = string[0].toUpperCase() + string.slice(1).toLowerCase();
      result.push(newString);
  }

  return result.join(" ");
}
console.log(titleCase("I'm a little tea pot"));
console.log(titleCase("sHoRt AnD sToUt"));
console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"));

// or

String.prototype.replaceAt = function(index, character) {
  return (
    this.substr(0, index) + character + this.substr(index + character.length)
  );
};

function titleCase(str) {
  var newTitle = str.split(" ");
  var updatedTitle = [];
  for (var st in newTitle) {
    updatedTitle[st] = newTitle[st]
      .toLowerCase()
      .replaceAt(0, newTitle[st].charAt(0).toUpperCase());
  }
  return updatedTitle.join(" ");
}
console.log(titleCase("I'm a little tea pot"));
console.log(titleCase("sHoRt AnD sToUt"));
console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"));

// or 

function titleCase(str) {
  var convertToArray = str.toLowerCase().split(" ");
  var result = convertToArray.map(function(val) {
    return val.replace(val.charAt(0), val.charAt(0).toUpperCase());
  });
  return result.join(" ");
}
console.log(titleCase("I'm a little tea pot"));
console.log(titleCase("sHoRt AnD sToUt"));
console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"));

// or

function titleCase(str) {
  return str.toLowerCase().replace(/(^|\s)\S/g, L => L.toUpperCase());
}
console.log(titleCase("I'm a little tea pot"));
console.log(titleCase("sHoRt AnD sToUt"));
console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"));


// Slice and Splice

function frankenSplice(arr1, arr2, n) {

  let localArray = arr2.slice();

  for (let i = 0; i < arr1.length; i++) {
    localArray.splice(n, 0, arr1[i]);
    n++;
  }

  return localArray;

}
console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));
console.log(frankenSplice([1, 2], ["a", "b"], 1));
console.log(frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2));
console.log(frankenSplice([1, 2, 3, 4], [], 0));

// or (using spread syntax "...")

function frankenSplice(arr1, arr2, n) {
  let localArr = arr2.slice();
  localArr.splice(n, 0, ...arr1);
  return localArr;
}
console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));
console.log(frankenSplice([1, 2], ["a", "b"], 1));
console.log(frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2));
console.log(frankenSplice([1, 2, 3, 4], [], 0));