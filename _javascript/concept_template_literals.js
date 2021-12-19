// string interpolation 
// or variable interpolation, variable substitution, 
// or variable expansion

// Template literals are enclosed by the backtick (` `) (grave accent) 
// character instead of double or single quotes.
// Template literals can contain placeholders ${ }.
// These are indicated by the dollar sign and curly braces (${expression}). 
// The expressions in the placeholders 
// and the text between the backticks (` `) get passed to a function.

/*
    `string text`

    `string text line 1
     string text line 2`

    `string text ${expression} string text`

    tag `string text ${expression} string text`
*/

// To escape a backtick in a template literal, put a backslash (\) before the backtick.
// `\`` === '`' // --> true

// Multi-line strings
console.log('string text line 1\n' +
'string text line 2');
// "string text line 1
// string text line 2"
console.log(`string text line 1
string text line 2`);
// "string text line 1
// string text line 2"

// Expression interpolation
let a = 5;
let b = 10;
console.log('Fifteen is ' + (a + b) + ' and\nnot ' + (2 * a + b) + '.');
// "Fifteen is 15 and
// not 20."
let c = 5;
let d = 10;
console.log(`Fifteen is ${a + b} and
not ${2 * a + b}.`);
// "Fifteen is 15 and
// not 20."

// Nesting templates
// In ES5
/*
    let classes = 'header';
    classes += (isLargeScreen() ? '' : item.isCollapsed ? ' icon-expander' : ' icon-collapser');
*/
// In ES2015 with template literals and without nesting:
/*
    const classes = `header ${ islargeScreen() ? '' :
    (item.isCollapsed ? 'icon-expander' : 'icon-collapser') }`;
*/
// In ES2015 with nested template literals:
/*
    const classes = `header ${ isLargeScreen() ? '' :
    `icon-${item.isCollapsed ? 'expander' : 'collapser'}` }`;
*/

// Tagged templates
let person = "Mike";
let age = 28;

function myTag(strings, personExp, ageExp) {
    let str0 = strings[0]; // "That "
    let str1 = strings[1]; // "is a "
    let str2 = strings[2]; // "."

    let ageStr;
    if (ageExp > 99){
        ageStr = 'centenarian';
    } else {
        ageStr = 'youngster'
    }

    // We can even return a string built using a template literal
    return `${str0}${personExp}${str1}${ageStr}${str2}`
}

let output = myTag `That ${ person } is a ${ age }.`;

console.log(output); // That Mike is a youngster

    // Tag functions don't even need to return a string!
function template(strings, ...keys) {
    return (function(...values) {
      let dict = values[values.length - 1] || {};
      let result = [strings[0]];
      keys.forEach(function(key, i) {
        let value = Number.isInteger(key) ? values[key] : dict[key];
        result.push(value, strings[i + 1]);
      });
      return result.join('');
    });
  }
  
  let t1Closure = template`${0}${1}${0}!`;
  //let t1Closure = template(["","","","!"],0,1,0);
  t1Closure('Y', 'A');                      // "YAY!"
  
  let t2Closure = template`${0} ${'foo'}!`;
  //let t2Closure = template([""," ","!"],0,"foo");
  t2Closure('Hello', {foo: 'World'}); // "Hello World!"
  
  let t3Closure = template`I'm ${'name'}. I'm almost ${'age'} years old.`;
  //let t3Closure = template(["I'm ", ". I'm almost ", " years old."], "name", "age");
  t3Closure('foo', {name: 'MDN', age: 30}); //"I'm MDN. I'm almost 30 years old."
  t3Closure({name: 'MDN', age: 30}); //"I'm MDN. I'm almost 30 years old."

//   Raw strings

function tag(strings) {
    console.log(strings.raw[0]);
}
tag`string text line 1 \n string text line 2`;
// logs "string text line 1 \n string text line 2" ,
// including the two characters '\' and 'n'

    // String.raw()

    let str = String.raw`Hi\n${2+3}!`;
    console.log(str);                       // Hi\n5!
    console.log(str.length);                // 6
    console.log(Array.from(str).join(',')); // H,i,\,n,5,!