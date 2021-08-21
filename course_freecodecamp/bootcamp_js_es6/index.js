// ----- Explore Differences Between the var and let Keywords

var camper = 'James';
var camper = 'David';
console.log(camper); // David

let camper = 'James';
let camper = 'David';
console.log(camper); // Identifier 'camper' has already been declared

// Note the "use strict". This enables Strict Mode, 
// which catches common coding mistakes and "unsafe" actions. 
// For instance:  

"use strict";
x = 3.14;            // x is not defined

// Test

let catName;
let quote;
function catTalk() {
  "use strict";

  catName = "Oliver";
  quote = catName + " says Meow!";

}
catTalk();

// ----- Compare Scopes of the var and let Keywords



// ----- 



// ----- 



// ----- 