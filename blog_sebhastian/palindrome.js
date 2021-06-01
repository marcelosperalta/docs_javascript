// How to check for a palindrome in JavaScript
// Here are two best ways you can find palindrome strings in JavaScript
// Posted on March 30, 2021
// https://sebhastian.com/palindrome-javascript/

// Palindrome is a string that’s spelled the same when read forward and backward. 

// Some palindrome strings are as follows:
// “civic” spelled backwards is also “civic”, so it’s a palindrome
// “kayak” spelled backwards is also “kayak”, so it’s a palindrome

// “nope” spelled backwards is “epon”,        so it’s not a palindrome
// “even” spelled backwards is “neve”,        so it’s not a palindrome


// Find a palindrome using Array methods:
// split(), reverse(), and join()
// (1)
let str1 = "civic";
let strReverse1 = str1.split("").reverse().join("");
if (str1 === strReverse1) {
    console.log("(1) The string is a palindrome"); // <<<<<
} else {
    console.log("(1) NOT a palindrome");
}
// (2)
let str2 = "nope";
let strReverse2 = str2.split("").reverse().join("");
if (str2 === strReverse2) {
    console.log("(2) The string is a palindrome");
} else {
    console.log("(2) NOT a palindrome");           // <<<<<
}

console.log("-------------------------------------");

// Finding palindrome using for loop
// for loop
// (3)
function checkPalindrome1(str3) {
    // fund the length of the string
    const len = str3.length;
    // loop through half of the string
    for (let i = 0; i < len / 2; i++) {
        // check each position
        // between the first and the last character
        if (str3[i] !== str3[len - 1 - i]) {
            result = "(3) NOT a palindrome";
        } else {
            result = "(3) The string is a palindrome";
        }
    }
    return console.log(result);
}
checkPalindrome1("civic") // The string is a palindrome
checkPalindrome1("nope")  // NOT a palindrome

console.log("-------------------------------------");

// Finding palindrome using for loop
// for loop + .tolowercase()
// (4)
function checkPalindrome2(str4) {
    let str5 = str4.toLowerCase();
    // find the length of the string
    const len = str5.length;
    // loop through half of the string
    for (let i = 0; i < len / 2; i++) {
        // check each position
        // between the first and the last character
        if (str5[i] !== str5[len - 1 - i]) {
            result = "(4) NOT a palindrome";
        } else {
            result = "(4) The string is a palindrome";
        }
    }
    return console.log(result);;
}
checkPalindrome2("CivIc"); // The string is a palindrome
checkPalindrome2("nope");  // NOT a palindrome