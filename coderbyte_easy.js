// How to run: *********** //
// npm install -g nodemon  //
// nodemon <file-name>     //
// *********************** //

// Coderbyte
// https://coderbyte.com/

// Challenges
// JavaScript

// Easy:

// Codeland Username Validation ------------------------------------------------------------- //
// https://coderbyte.com/editor/Codeland%20Username%20Validation:JavaScript
function CodelandUsernameValidation(str) {
    console.log(str[0]);
    if (str.length < 4 || str.length > 25 || str[0] !== new RegExp('\/[A-B]', 'gi')) {
        return console.log(false);
    } else {
        return console.log(str);
    }
}
CodelandUsernameValidation("aa_")
CodelandUsernameValidation("_u__hello_world12")
//console.log(CodelandUsernameValidation("aa_"));
// console.log(CodelandUsernameValidation("u__hello_world123"));
// console.log(CodelandUsernameValidation("_aa"));
//console.log(CodelandUsernameValidation("_u__hello_world12"));
// -------------------- --------------------------------------------------------------------- //