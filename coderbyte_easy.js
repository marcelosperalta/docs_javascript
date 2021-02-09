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
    if (str.length < 4 
     || str.length > 25 
     || str[0].match(/[A-Z]/gi) === null 
     || str[str.length - 1].match(/_/g)) {
        return false;
    } else if (str.match(/\w/g)){
        return true;
    } else {
        return false;
    }
}
console.log(CodelandUsernameValidation("aa_"));               // expected output: "false"
console.log(CodelandUsernameValidation("aaaaaaaaa_"));        // expected output: "false"
console.log(CodelandUsernameValidation("_aa"));               // expected output: "false"
console.log(CodelandUsernameValidation("u__hello_world123")); // expected output: "true"
console.log(CodelandUsernameValidation("_u__hello_world12")); // expected output: "false"

console.log(`
or
`);

function CodelandUsernameValidationSlaloggia(str) { 
    const valid_reg = /^[A-Za-z]\w+[A-Za-z0-9]$/;
    const valid_length = (str) => str.length >= 4 && str.length <= 25;
    return valid_reg.test(str) && valid_length(str);
}
console.log(CodelandUsernameValidationSlaloggia("aa_"));               // expected output: "false"
console.log(CodelandUsernameValidationSlaloggia("aaaaaaaaa_"));        // expected output: "false"
console.log(CodelandUsernameValidationSlaloggia("_aa"));               // expected output: "false"
console.log(CodelandUsernameValidationSlaloggia("u__hello_world123")); // expected output: "true"
console.log(CodelandUsernameValidationSlaloggia("_u__hello_world12")); // expected output: "false"

console.log(`
or
`);

function CodelandUsernameValidationRobStallion(str) {
    const regex = /^[a-zA-Z][a-zA-Z0-9_]*[^_]$/g
    return str.length >= 4 && str.length <= 25 && regex.test(str)
  }
console.log(CodelandUsernameValidationRobStallion("aa_"));               // expected output: "false"
console.log(CodelandUsernameValidationRobStallion("aaaaaaaaa_"));        // expected output: "false"
console.log(CodelandUsernameValidationRobStallion("_aa"));               // expected output: "false"
console.log(CodelandUsernameValidationRobStallion("u__hello_world123")); // expected output: "true"
console.log(CodelandUsernameValidationRobStallion("_u__hello_world12")); // expected output: "false"
// -------------------- --------------------------------------------------------------------- //