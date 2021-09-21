<div align="end">
<img height="100" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png" alt="javascript"/>
</div>

# **[JavaScript](https://262.ecma-international.org/) study**

## :arrow_heading_down: Table of Contents

[Glossary](https://github.com/marcelosperalta/study_javascript#mag-glossary)  
[Commom Practices](https://github.com/marcelosperalta/study_javascript#1-common-practices)  
[Concepts](https://github.com/marcelosperalta/study_javascript#blue_book-concepts)  
[Security](https://github.com/marcelosperalta/study_javascript#lock-security)  
[Design Patterns](https://github.com/marcelosperalta/study_javascript#book-design-patterns)  
[Static Code Analysis](https://github.com/marcelosperalta/study_javascript#mag_right-static-code-analysis)  
[Quick Reference](https://github.com/marcelosperalta/study_javascript#dash-quick-reference)  
[Debug](https://github.com/marcelosperalta/study_javascript#flashlight-debug)  
[Tutorials](https://github.com/marcelosperalta/study_javascript#books-tutorials)  
[Courses](https://github.com/marcelosperalta/study_javascript#mortar_board-courses)  
[Challenges](https://github.com/marcelosperalta/study_javascript#question-challenges)  
[YouTube](https://github.com/marcelosperalta/study_javascript#tv-youtube)  
[Articles](https://github.com/marcelosperalta/study_javascript#newspaper-articles)  

<hr>

## :mag: Glossary:

**term** | definition
------------ | -------------
[Case or letter case](https://en.wikipedia.org/wiki/Letter_case) | Is the difference between uppercase letters and lowercase letters.
[``new`` Operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new) | The ``new`` operator lets developers create an instance of a user-defined object type or of one of the built-in object types that has a constructor function.
[Object Literals](https://betterprogramming.pub/object-literal-in-javascript-d3e0e7d58f3b) | An object literal is a comma-separated list of name-value pairs inside of curly braces.
[Regular Expressions](https://en.wikipedia.org/wiki/Regular_expression) | Are used in programming languages to match parts of strings. You create patterns to help you do that matching.
[Template Literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals) | Template literals are literals delimited with backticks (`` ` ``), allowing embedded expressions called substitutions.

<hr>

## :+1: Common Practices:

- **Immutable values and mutable values**

  A common practice when naming constants is to use all uppercase letters, with words separated by an underscore.  

  It is common for developers to use uppercase variable identifiers for immutable values and lowercase or camelCase for mutable values (objects and arrays).  

- **``Const``**

  Some developers prefer to assign all their variables using ``const`` by default, unless they know they will need to reassign the value. Only in that case, they use ``let``.  

  However, it is important to understand that objects (including arrays and functions) assigned to a variable using ``const`` are still mutable. Using the ``const`` declaration only prevents reassignment of the variable identifier.  

<hr>

## :blue_book: Concepts:

**[Closures](https://github.com/marcelosperalta/study_javascript/blob/master/course_freecodecamp/20200714_closures/closures.js)**  
**[Currying](https://javascript.info/currying-partials)**  
**[Destructuring assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)**  
**[Hoisting](https://developer.mozilla.org/en-US/docs/Glossary/Hoisting)**  
**[Recursion](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions#recursion)**  
**[Rest parameters (Rest arguments)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters)**  
**[Strict mode](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode)**  
**[String interpolation (Template literals / Template strings)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)**  
**[Temporal dead zone](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let#Temporal_dead_zone)**  

<hr>

## :lock: Security:

**[Cross-site scripting (XSS)](https://en.wikipedia.org/wiki/Cross-site_scripting)**  

<hr>

## :book: Design Patterns:

**[Learning JavaScript Design Patterns by Addy Osmani](https://addyosmani.com/resources/essentialjsdesignpatterns/book/index.html)**  

<hr>

## :mag_right: Static Code Analysis:

**[ESLint](https://eslint.org/)**  

<hr>

## :dash: **Quick Reference**

**_String Properties_** | description
------------ | -------------
[String length](https://github.com/marcelosperalta/study_javascript/blob/master/doc_mdn/mdn.js#L8) | The length property of a String object contains the length of the string, in UTF-16 code units. length is a read-only data property of string instances.

**_String Methods_** | description
------------ | -------------
[String.prototype[@@iterator]](https://github.com/marcelosperalta/study_javascript/blob/master/doc_mdn/string.js#L15)  | Returns a new iterator object that iterates over the code points of a String value, returning each code point as a String value.  
[String.prototype.charAt()](https://github.com/marcelosperalta/study_javascript/blob/master/doc_mdn/string.js#L28) | Returns a new string consisting of the single UTF-16 code unit located at the specified offset into the string.  
[String.prototype.charCodeAt()](https://github.com/marcelosperalta/study_javascript/blob/master/doc_mdn/string.js#L37) | Returns an integer between 0 and 65535 representing the UTF-16 code unit at the given index. 
[String.prototype.codePointAt()](https://github.com/marcelosperalta/study_javascript/blob/master/doc_mdn/string.js#L47) | Returns a non-negative integer that is<br/> the UTF-16 code point value.  
[String.prototype.concat()](https://github.com/marcelosperalta/study_javascript/blob/master/doc_mdn/string.js#L57) | Concatenates the string arguments to the calling string <br/>and returns a new string.  
[String.prototype.endsWith()](https://github.com/marcelosperalta/study_javascript/blob/master/doc_mdn/string.js#L68) | Determines whether a string ends with the characters of a specified string, returning true or false as appropriate.  
[String.fromCharCode()](https://github.com/marcelosperalta/study_javascript/blob/master/doc_mdn/string.js#L81) | Returns a string created from the specified sequence of UTF-16 code units.  
[String.fromCodePoint()](https://github.com/marcelosperalta/study_javascript/blob/master/doc_mdn/string.js#L95) | Returns a string created by using the specified sequence of code points.  
[String.prototype.includes()](https://github.com/marcelosperalta/study_javascript/blob/master/doc_mdn/string.js#L106) | Determines whether one string may be found within another string, returning true or false as appropriate.  
[String.prototype.indexOf()](https://github.com/marcelosperalta/study_javascript/blob/master/doc_mdn/string.js#L118) | Returns the index within the calling String object of the first occurrence of the specified value, starting the search at fromIndex. Returns -1 if the value is not found.  
[String.prototype.lastIndexOf()](https://github.com/marcelosperalta/study_javascript/blob/master/doc_mdn/string.js#L143) | Returns the index within the calling String object of the last occurrence of the specified value, searching backwards from fromIndex. Returns -1 if the value is not found.  
[String.prototype.localeCompare()](https://github.com/marcelosperalta/study_javascript/blob/master/doc_mdn/string.js#L151) | Returns a number indicating whether a reference string comes before, or after, or is the same as the given string in sort order.  
[String.prototype.match()](https://github.com/marcelosperalta/study_javascript/blob/master/doc_mdn/string.js#L171) | Retrieves the result of matching a string against a regular expression.  
[String.prototype.matchAll()](https://github.com/marcelosperalta/study_javascript/blob/master/doc_mdn/string.js#L185) | Returns an iterator of all results matching a string against a regular expression, including capturing groups.  
[String.prototype.normalize()](https://github.com/marcelosperalta/study_javascript/blob/master/doc_mdn/string.js#L195) | Returns the Unicode Normalization Form of the string.  
[String.prototype.padEnd()](https://github.com/marcelosperalta/study_javascript/blob/master/doc_mdn/string.js#L210) | Pads the current string with a given string (repeated, if needed) so that the resulting string reaches a given length. The padding is applied from the end of the current string.  
[String.prototype.padStart()](https://github.com/marcelosperalta/study_javascript/blob/master/doc_mdn/string.js#L227) | Pads the current string with another string (multiple times, if needed) until the resulting string reaches the given length. The padding is applied from the start of the current string.  
[String.raw()](https://github.com/marcelosperalta/study_javascript/blob/master/doc_mdn/string.js#L240) | Is a tag function of template literals. This is similar to the ``r`` prefix in Python, or the`` @`` prefix in C# for string literals. (But it is not identical; see explanations in this issue.) It's used to get the raw string form of template literals, that is, substitutions (e.g. ``${foo}``) are processed, but escapes (e.g. ``\n``) are not.  
[String.prototype.repeat()](https://github.com/marcelosperalta/study_javascript/blob/master/doc_mdn/string.js#L255) | Constructs and returns a new string which contains the specified number of copies of the string on which it was called, concatenated together.  
[String.prototype.replace()](https://github.com/marcelosperalta/study_javascript/blob/master/doc_mdn/string.js#L273) | Returns a new string with some or all matches of a pattern replaced by a replacement. The pattern can be a string or a RegExp, and the replacement can be a string or a function to be called for each match. If pattern is a string, only the first occurrence will be replaced. The original string is left unchanged.  
[String.prototype.replaceAll()](https://github.com/marcelosperalta/study_javascript/blob/master/doc_mdn/string.js#L318) | Returns a new string with all matches of a pattern replaced by a replacement. The pattern can be a string or a RegExp, and the replacement can be a string or a function to be called for each match. The original string is left unchanged.  
[String.prototype.search()](https://github.com/marcelosperalta/study_javascript/blob/master/doc_mdn/string.js#L332) | Executes a search for a match between a regular expression and this String object.  
[String.prototype.slice()](https://github.com/marcelosperalta/study_javascript/blob/master/doc_mdn/string.js#L348) | Extracts a section of a string and returns it as a new string, without modifying the original string.  
[String.prototype.split()](https://github.com/marcelosperalta/study_javascript/blob/master/doc_mdn/string.js#L371) | Divides a String into an ordered list of substrings, puts these substrings into an array, and returns the array.  The division is done by searching for a pattern; where the pattern is provided as the first parameter in the method's call.  
[String.prototype.startsWith()](https://github.com/marcelosperalta/study_javascript/blob/master/doc_mdn/string.js#L446) | Determines whether a string begins with the characters of a specified string, returning true or false as appropriate.  
[String.prototype.substring()](https://github.com/marcelosperalta/study_javascript/blob/master/doc_mdn/string.js#L464) | Returns the part of the string between the start and end indexes, or to the end of the string.  
[String.prototype.toLocaleLowerCase()](https://github.com/marcelosperalta/study_javascript/blob/master/doc_mdn/string.js#L534) | Returns the calling string value converted to lower case, according to any locale-specific case mappings.  
[String.prototype.toLocaleUpperCase()](https://github.com/marcelosperalta/study_javascript/blob/master/doc_mdn/string.js#L549) | Returns the calling string value converted to upper case, according to any locale-specific case mappings.  
[String.prototype.toLowerCase()](https://github.com/marcelosperalta/study_javascript/blob/master/doc_mdn/string.js#L564) | Returns the calling string value converted to lower case.  
[String.prototype.toString()](https://github.com/marcelosperalta/study_javascript/blob/master/doc_mdn/string.js#L574) | Returns a string representing the specified object.  
[String.prototype.toUpperCase()](https://github.com/marcelosperalta/study_javascript/blob/master/doc_mdn/string.js#L587) | Returns the calling string value converted to uppercase (the value will be converted to a string if it isn't one).  
[String.prototype.trim()](https://github.com/marcelosperalta/study_javascript/blob/master/doc_mdn/string.js#L607) | Removes whitespace from both ends of a string. Whitespace in this context is all the whitespace characters (space, tab, no-break space, etc.) and all the line terminator characters (LF, CR, etc.).  
[String.prototype.trimEnd()](https://github.com/marcelosperalta/study_javascript/blob/master/doc_mdn/string.js#L619) | Removes whitespace from the end of a string. trimRight() is an alias of this method.  
[String.prototype.trimStart()](https://github.com/marcelosperalta/study_javascript/blob/master/doc_mdn/string.js#L634) | Removes whitespace from the beginning of a string. trimLeft() is an alias of this method.  
[String.prototype.valueOf()](https://github.com/marcelosperalta/study_javascript/blob/master/doc_mdn/string.js#L649) | Returns the primitive value of a String object.  

### String methods that _change_ and _do not change_ the original object.

**Method** |  _Change_  | _Do Not Change_
---------- | ---------- | ----------
\[@@iterator]() | ---------- | returns a new iterator object
charAt() | ---------- | returns a new string
charCodeAt() | ---------- | returns an integer between 0 and 65535
codePointAt() | ---------- | returns a non-negative integer
concat() | ---------- | returns a new string
endsWith() | ---------- | returns true or false as appropriate
String.fromCharCode() | ---------- | returns a string created from the specified sequence of UTF-16 code units
String.fromCodePoint() | ---------- | returns a string created by using the specified sequence of code points
includes() | ---------- | returns true or false as appropriate
indexOf() | ---------- | returns -1 if the value is not found
lastIndexOf() | ---------- | returns -1 if the value is not found
localeCompare() | ---------- | returns a number indicating whether a reference string comes before, or after, or is the same as the given string in sort order
match() | ---------- | retrieves the result of matching a string against a regular expression
matchAll() | ---------- | returns an iterator of all results matching a string against a regular expression
normalize() | ---------- | returns the Unicode Normalization Form of the string
padEnd() | ---------- | pads the current string with a given string so that the resulting string reaches a given length
padStart() | ---------- | pads the current string with another string (multiple times, if needed) until the resulting string reaches the given length
String.raw() | ---------- | the raw string form of a given template literal
repeat() | ---------- |  constructs and returns a new string which contains the specified number of copies of the string on which it was called, concatenated together
replace() | ---------- | returns a new string with some or all matches of a pattern replaced by a replacement
replaceAll() | ---------- | returns a new string with all matches of a pattern replaced by a replacement
search() | ---------- | the index of the first match between the regular expression and the given string, or -1 if no match was found
slice() | ---------- | extracts a section of a string and returns it as a new string, without modifying the original string
split() | ---------- | returns an array of strings, split at each point where the separator occurs in the given string
startsWith() | ---------- | returns true or false as appropriate
substring() | ---------- | returns the part of the string between the start and end indexes, or to the end of the string
toLocaleLowerCase() | ---------- | returns a new string representing the calling string converted to lower case, according to any locale-specific case mappings
toLocaleUpperCase() | ---------- | returns a new string representing the calling string converted to upper case, according to any locale-specific case mappings
toLowerCase() | ---------- | returns a new string representing the calling string converted to lower case
toUpperCase() | ---------- | returns a new string representing the calling string converted to upper case
trim() | ---------- | returns a new string representing str stripped of whitespace from both its beginning and end
trimEnd() | ---------- | returns a new string representing str stripped of whitespace from its end (right side)
trimStart() | ---------- | returns a new string representing str stripped of whitespace from its beginning (left side).
valueOf() | ---------- | returns a string representing the primitive value of a given String object
toString() | The String object overrides the toString() method of the Object object | ----------

**_Function Properties_** | description
------------ | -------------
[Function.length](https://github.com/marcelosperalta/study_javascript/blob/master/doc_mdn/function.js#L8) | Indicates the number of parameters expected by the function.  
[Function.name](https://github.com/marcelosperalta/study_javascript/blob/master/doc_mdn/function.js#L) | A Function object's read-only ``name`` property indicates the function's name as specified when it was created, or it may be either ``anonymous`` or ``''`` (an empty string) for functions created anonymously.  

**_Function Methods_** | description
------------ | -------------
[Function.prototype.apply()](https://github.com/marcelosperalta/study_javascript/blob/master/doc_mdn/function.js#L) | Calls a function with a given this value, and arguments provided as an array (or an array-like object).  
[Function.prototype.bind()](https://github.com/marcelosperalta/study_javascript/blob/master/doc_mdn/function.js#L) | Creates a new function that, when called, has its this keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called.  
[Function.prototype.call()](https://github.com/marcelosperalta/study_javascript/blob/master/doc_mdn/function.js#L) | Calls a function with a given this value and arguments provided individually.  
[Function.prototype.toString()](https://github.com/marcelosperalta/study_javascript/blob/master/doc_mdn/function.js#L) | Returns a string representing the source code of the function.  

**_Object Properties_** | description
------------ | -------------
[Object.prototype.constructor](https://github.com/marcelosperalta/study_javascript/blob/master/doc_mdn/object.js#L) | Returns a reference to the Object constructor function that created the instance object. Note that the value of this property is a reference to _the function itself_, not a string containing the function's name.  

**_Object Methods_** | description
------------ | -------------
[Object.assign()](https://github.com/marcelosperalta/study_javascript/blob/master/doc_mdn/object.js#L) | Copies all enumerable own properties from one or more source objects to a target object. It returns the modified target object.  
[Object.create()](https://github.com/marcelosperalta/study_javascript/blob/master/doc_mdn/object.js#L) | Creates a new object, using an existing object as the prototype of the newly created object.  
[Object.defineProperties()](https://github.com/marcelosperalta/study_javascript/blob/master/doc_mdn/object.js#L) | Defines new or modifies existing properties directly on an object, returning the object.  
[Object.defineProperty()](https://github.com/marcelosperalta/study_javascript/blob/master/doc_mdn/object.js#L) | Defines a new property directly on an object, or modifies an existing property on an object, and returns the object.  
[Object.entries()](https://github.com/marcelosperalta/study_javascript/blob/master/doc_mdn/object.js#L) | Returns an array of a given object's own enumerable string-keyed property ``[key, value]`` pairs. This is the same as iterating with a ``for...in`` loop, except that a ``for...in`` loop enumerates properties in the prototype chain as well.  
[Object.freeze()](https://github.com/marcelosperalta/study_javascript/blob/master/doc_mdn/object.js#L) | Freezes an object. A frozen object can no longer be changed; freezing an object prevents new properties from being added to it, existing properties from being removed, prevents changing the enumerability, configurability, or writability of existing properties, and prevents the values of existing properties from being changed. In addition, freezing an object also prevents its prototype from being changed. ``freeze()`` returns the same object that was passed in.  
[Object.fromEntries()](https://github.com/marcelosperalta/study_javascript/blob/master/doc_mdn/object.js#L) | Transforms a list of key-value pairs into an object.  
[Object.getOwnPropertyDescriptor()](https://github.com/marcelosperalta/study_javascript/blob/master/doc_mdn/object.js#L) | Returns an object describing the configuration of a specific property on a given object (that is, one directly present on an object and not in the object's prototype chain). The object returned is mutable but mutating it has no effect on the original property's configuration.  
[Object.getOwnPropertyDescriptors()](https://github.com/marcelosperalta/study_javascript/blob/master/doc_mdn/object.js#L) | Returns all own property descriptors of a given  
[Object.getOwnPropertyNames()](https://github.com/marcelosperalta/study_javascript/blob/master/doc_mdn/object.js#L) | Returns an array of all properties (including non-enumerable properties except for those which use Symbol) found directly in a given object.  
[Object.getOwnPropertySymbols()](https://github.com/marcelosperalta/study_javascript/blob/master/doc_mdn/object.js#L) | Returns an array of all symbol properties found directly upon a given object.  
[Object.getPrototypeOf()](https://github.com/marcelosperalta/study_javascript/blob/master/doc_mdn/object.js#L) | Returns the prototype (i.e. the value of the internal ``[[Prototype]]`` property) of the specified object.  
[Object.prototype.hasOwnProperty()](https://github.com/marcelosperalta/study_javascript/blob/master/doc_mdn/object.js#L) | Returns a boolean indicating whether the object has the specified property as its own property (as opposed to inheriting it).  
[Object.is()](https://github.com/marcelosperalta/study_javascript/blob/master/doc_mdn/object.js#L) | Determines whether two values are the same value.  
[Object.isExtensible()](https://github.com/marcelosperalta/study_javascript/blob/master/doc_mdn/object.js#L) | Determines if an object is extensible (whether it can have new properties added to it).  
[Object.isFrozen()](https://github.com/marcelosperalta/study_javascript/blob/master/doc_mdn/object.js#L) | Determines if an object is frozen.  
[Object.prototype.isPrototypeOf()](https://github.com/marcelosperalta/study_javascript/blob/master/doc_mdn/object.js#L) | Checks if an object exists in another object's prototype chain.  
[Object.isSealed()](https://github.com/marcelosperalta/study_javascript/blob/master/doc_mdn/object.js#L) | 
Determines if an object is sealed.  
[Object.keys()](https://github.com/marcelosperalta/study_javascript/blob/master/doc_mdn/object.js#L) | Returns an array of a given object's own enumerable property names, iterated in the same order that a normal loop would.  
[Object.preventExtensions()](https://github.com/marcelosperalta/study_javascript/blob/master/doc_mdn/object.js#L) | Prevents new properties from ever being added to an object (i.e. prevents future extensions to the object).  
[Object.prototype.propertyIsEnumerable()](https://github.com/marcelosperalta/study_javascript/blob/master/doc_mdn/object.js#L) | Returns a Boolean indicating whether the specified property is enumerable and is the object's own property.  
[Object.seal()](https://github.com/marcelosperalta/study_javascript/blob/master/doc_mdn/object.js#L) | Seals an object, preventing new properties from being added to it and marking all existing properties as non-configurable. Values of present properties can still be changed as long as they are writable.  
[Object.setPrototypeOf()](https://github.com/marcelosperalta/study_javascript/blob/master/doc_mdn/object.js#L) | Sets the prototype (i.e., the internal ``[[Prototype]]`` property) of a specified object to another object or ``null``.  
[Object.prototype.toLocaleString()](https://github.com/marcelosperalta/study_javascript/blob/master/doc_mdn/object.js#L) | Returns a string representing the object. This method is meant to be overridden by derived objects for locale-specific purposes.  
[Object.prototype.toString()](https://github.com/marcelosperalta/study_javascript/blob/master/doc_mdn/object.js#L) | Returns a string representing the object.  
[Object.prototype.valueOf()](https://github.com/marcelosperalta/study_javascript/blob/master/doc_mdn/object.js#L) | Returns the primitive value of the specified object.  
[Object.values()](https://github.com/marcelosperalta/study_javascript/blob/master/doc_mdn/object.js#L) | Returns an array of a given object's own enumerable property values, in the same order as that provided by a ``for...in`` loop. (The only difference is that a ``for...in`` loop enumerates properties in the prototype chain as well.)  

<hr>

## :flashlight: Debug (_Debugging_)

[Chrome DevTools](https://developer.chrome.com/docs/devtools/javascript/)  

Item | Type | Description
----- | ----- | -----
console.log() | method | outputs a message to the web console
typeof | operator | returns a string indicating the type of the unevaluated operand

<hr>

## :books: Tutorials:

**_Regular expressions_**  

[MDN Regular expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)  
[RegExr by Grant Skinner and the gskinner team](https://regexr.com/)  

**_Recursion_**  

[A  Quick Intro to Recursion in Javascript](https://www.freecodecamp.org/news/quick-intro-to-recursion/)  
[Recursion in Functional JavaScript](https://www.sitepoint.com/recursion-functional-javascript/)  
[Program for length of a string using recursion](https://www.geeksforgeeks.org/program-for-length-of-a-string-using-recursion/)  

### :book: **[MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript)**  

[JavaScript reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference)  
[JavaScript reference > Standard built-in objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects)  
[JavaScript reference > Standard built-in objects > String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)  

<hr>

## :mortar_board: Courses:  

<div>
  <img 
    src="./.github/usa.png"
    width="16px">
    <b>english:</b>
  </img>
</div>

### :school: **[FreeCodeCamp](https://www.freecodecamp.org/)**  

_[**JavaScript Algorithms and Data Structures Certification (300 hours)**](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/)_  
**_index:_**  
[var](https://github.com/marcelosperalta/javascript/blob/master/course_freecodecamp/freecodecamp.js#L32)  
[assignment operator ("=")](https://github.com/marcelosperalta/javascript/blob/master/course_freecodecamp/freecodecamp.js#L58)  
[NaN](https://github.com/marcelosperalta/javascript/blob/master/course_freecodecamp/freecodecamp.js#L88)  
[Case Sensitivity](https://github.com/marcelosperalta/javascript/blob/master/course_freecodecamp/freecodecamp.js#L96)  
[Arithmetic operators ("+", "-", "\*", "/")](https://github.com/marcelosperalta/javascript/blob/master/course_freecodecamp/freecodecamp.js#L149)  
[Increment ("++")](https://github.com/marcelosperalta/javascript/blob/master/course_freecodecamp/freecodecamp.js#L218)  
[Decrement ("--")](https://github.com/marcelosperalta/javascript/blob/master/course_freecodecamp/freecodecamp.js#L239)  
[Unary negation (-"1" = -1)](https://github.com/marcelosperalta/javascript/blob/master/course_freecodecamp/freecodecamp.js#L260)  
[Unary plus (+"1" = 1)](https://github.com/marcelosperalta/javascript/blob/master/course_freecodecamp/freecodecamp.js#L269)  
[Floats (0.1)](https://github.com/marcelosperalta/javascript/blob/master/course_freecodecamp/freecodecamp.js#L294)  
[Remainder (%)](https://github.com/marcelosperalta/javascript/blob/master/course_freecodecamp/freecodecamp.js#L319)  
[Compound Assignment ("+=", "-=", "\*=", "/=")](https://github.com/marcelosperalta/javascript/blob/master/course_freecodecamp/freecodecamp.js#L337)  
[**String** ("string", 'string', \`string`)](https://github.com/marcelosperalta/javascript/blob/master/course_freecodecamp/freecodecamp.js#L377)  
[String - Escaping Literal Quotes ("...\"...\"")](https://github.com/marcelosperalta/javascript/blob/master/course_freecodecamp/freecodecamp.js#L388)  
[String - Quoting ('this is a "string"')](https://github.com/marcelosperalta/javascript/blob/master/course_freecodecamp/freecodecamp.js#L400)  
[String - Escaping ("\\'", "\\"", ...)](https://github.com/marcelosperalta/javascript/blob/master/course_freecodecamp/freecodecamp.js#L414)  
[String - Concatenating ("+", "+=")](https://github.com/marcelosperalta/javascript/blob/master/course_freecodecamp/freecodecamp.js#L449)  
[String - with Variables ("..." + myVariable + "...")](https://github.com/marcelosperalta/javascript/blob/master/course_freecodecamp/freecodecamp.js#L469)  
[String - Appending Variables (myString1 += myString2)](https://github.com/marcelosperalta/javascript/blob/master/course_freecodecamp/freecodecamp.js#L477)  
[String - Length ("string".length)](https://github.com/marcelosperalta/javascript/blob/master/course_freecodecamp/freecodecamp.js#L486)  
[String - Bracket Notation (myString[0], myString[1], ...)](https://github.com/marcelosperalta/javascript/blob/master/course_freecodecamp/freecodecamp.js#L497)  
[String - Immutability](https://github.com/marcelosperalta/javascript/blob/master/course_freecodecamp/freecodecamp.js#L520)  
[String - Nth Character (myString[1], ...)](https://github.com/marcelosperalta/javascript/blob/master/course_freecodecamp/freecodecamp.js#L537)  
[String - Last Character (myString[myString.length - 1])](https://github.com/marcelosperalta/javascript/blob/master/course_freecodecamp/freecodecamp.js#L553)  
[String - Nth-to-Last Character (myString[myString.length - 3])](https://github.com/marcelosperalta/javascript/blob/master/course_freecodecamp/freecodecamp.js#L566)  
[**_Array_** (myArray = ["Marcelo", 39])](https://github.com/marcelosperalta/javascript/blob/master/course_freecodecamp/course_freecodecamp/freecodecamp.js#L616)  
[Array - Nested Arrays (myArray = \[ ["the universe", 42], [ ["everything", 101010] ])](https://github.com/marcelosperalta/javascript/blob/master/course_freecodecamp/freecodecamp.js#L630)  
[Array - Index - Access (myArray[0], myArray[1], ...)](https://github.com/marcelosperalta/javascript/blob/master/course_freecodecamp/freecodecamp.js#L646)  
[Array - Index - Modify (myArray[0] = 1)](https://github.com/marcelosperalta/javascript/blob/master/course_freecodecamp/freecodecamp.js#L663)  
[Array - Multi-Dimensional - Access (myArray[3][0][0]))](https://github.com/marcelosperalta/javascript/blob/master/course_freecodecamp/freecodecamp.js#L676)  
[Array - push() (myArray.push(["dog", 3]))](https://github.com/marcelosperalta/javascript/blob/master/course_freecodecamp/freecodecamp.js#L711)  
[Array - pop() (myArray.pop())](https://github.com/marcelosperalta/javascript/blob/master/course_freecodecamp/freecodecamp.js#L732)  
[Array - shift() (myArray.shift())](https://github.com/marcelosperalta/javascript/blob/master/course_freecodecamp/freecodecamp.js#L745)  
[Array - unshift() (myArray.unshift())](https://github.com/marcelosperalta/javascript/blob/master/course_freecodecamp/freecodecamp.js#L758)  
[**_Function_** (function functionName() {})](https://github.com/marcelosperalta/javascript/blob/master/course_freecodecamp/freecodecamp.js#L804)  
[Function - Arguments (function functionName(a, b) {})](https://github.com/marcelosperalta/javascript/blob/master/course_freecodecamp/freecodecamp.js#L820)  
[Function - Global Scope](https://github.com/marcelosperalta/javascript/blob/master/course_freecodecamp/freecodecamp.js#L836)  
[Function - Local Scope](https://github.com/marcelosperalta/javascript/blob/master/course_freecodecamp/freecodecamp.js#L871)  
[Function - Return](https://github.com/marcelosperalta/javascript/blob/master/course_freecodecamp/freecodecamp.js#L914)  
[Function - Undefined](https://github.com/marcelosperalta/javascript/blob/master/course_freecodecamp/freecodecamp.js#L929)  
[Stand in Line (queue)](https://github.com/marcelosperalta/javascript/blob/master/course_freecodecamp/freecodecamp.js#L964)  
[Boolean (true, false)](https://github.com/marcelosperalta/javascript/blob/master/course_freecodecamp/freecodecamp.js#L981)  
[_if_ statements](https://github.com/marcelosperalta/javascript/blob/master/course_freecodecamp/freecodecamp.js#L1002)  
[_Equality_ operator ("==")](https://github.com/marcelosperalta/javascript/blob/master/course_freecodecamp/freecodecamp.js#L1023)  
[_Strict Equality_ operator ("===")](https://github.com/marcelosperalta/javascript/blob/master/course_freecodecamp/freecodecamp.js#L1055)  
[_Inequality_ operator ("!=")](https://github.com/marcelosperalta/javascript/blob/master/course_freecodecamp/freecodecamp.js#L1117)  
[_Strict Inequality_ operator ("!==")](https://github.com/marcelosperalta/javascript/blob/master/course_freecodecamp/freecodecamp.js#L1143)  
[_Greater Than_ operator (">")](https://github.com/marcelosperalta/javascript/blob/master/course_freecodecamp/freecodecamp.js#L1166)  
[_Greater Than Or Equal To_ operator (">=")](https://github.com/marcelosperalta/javascript/blob/master/course_freecodecamp/freecodecamp.js#L1197)  
[_Less Than_ operator ("<")](https://github.com/marcelosperalta/javascript/blob/master/course_freecodecamp/freecodecamp.js#L1228)  
[_Less Than Or Equal To_ operator ("<=")](https://github.com/marcelosperalta/javascript/blob/master/course_freecodecamp/freecodecamp.js#L1259)  
[_Logical And_ operator ("&&")](https://github.com/marcelosperalta/javascript/blob/master/course_freecodecamp/freecodecamp.js#L1293)  
[_Logical Or_ operator ("||")](https://github.com/marcelosperalta/javascript/blob/master/course_freecodecamp/freecodecamp.js#L1329)  
[_else_ statements](https://github.com/marcelosperalta/javascript/blob/master/course_freecodecamp/freecodecamp.js#L1382)  
[_else if_ statements](https://github.com/marcelosperalta/javascript/blob/master/course_freecodecamp/freecodecamp.js#L1424)  
[_switch_ statements](https://github.com/marcelosperalta/javascript/blob/master/course_freecodecamp/freecodecamp.js#L1591)  
[_switch_ statements - Default Option](https://github.com/marcelosperalta/javascript/blob/master/course_freecodecamp/freecodecamp.js#L1639)  
[_switch_ statements - Multiple Identical Options](https://github.com/marcelosperalta/javascript/blob/master/course_freecodecamp/freecodecamp.js#L1687)  
[**Exercise** "Counting Cards"](https://github.com/marcelosperalta/javascript/blob/master/course_freecodecamp/freecodecamp.js#L1868)  
[**_Objects_** (var cat = { "name": "Whiskers", "legs": 4};)](https://github.com/marcelosperalta/javascript/blob/master/course_freecodecamp/freecodecamp.js#L1951)  
[Objects - Accessing Object Properties with Dot Notation](https://github.com/marcelosperalta/javascript/blob/master/course_freecodecamp/freecodecamp.js#L1994)  
[Objects - Accessing Object Properties with Bracket Notation](https://github.com/marcelosperalta/javascript/blob/master/course_freecodecamp/freecodecamp.js#L2026)  
[Objects - Accessing Object Properties with Variables](https://github.com/marcelosperalta/javascript/blob/master/course_freecodecamp/freecodecamp.js#L2061)  
[Objects - Updating Object Properties](https://github.com/marcelosperalta/javascript/blob/master/course_freecodecamp/freecodecamp.js#L2104)  
[Objects - Add New Properties](https://github.com/marcelosperalta/javascript/blob/master/course_freecodecamp/freecodecamp.js#L2140)  
[Objects - Delete Properties](https://github.com/marcelosperalta/javascript/blob/master/course_freecodecamp/freecodecamp.js#L2195)  
[Objects - Using Objects for Lookups](https://github.com/marcelosperalta/javascript/blob/master/course_freecodecamp/freecodecamp.js#L2253)  
[Objects - Testing Objects for Properties (.hasOwnProperty())](https://github.com/marcelosperalta/javascript/blob/master/course_freecodecamp/freecodecamp.js#L2323)  
[Objects - Manipulating Complex Objects](https://github.com/marcelosperalta/javascript/blob/master/course_freecodecamp/freecodecamp.js#L2367)  
[Objects - Accessing Nested Objects](https://github.com/marcelosperalta/javascript/blob/master/course_freecodecamp/freecodecamp.js#L2457)  
[Objects - Accessing Nested Arrays](https://github.com/marcelosperalta/javascript/blob/master/course_freecodecamp/freecodecamp.js#L2496)  
[**Exercise** "Record Collection"](https://github.com/marcelosperalta/javascript/blob/master/course_freecodecamp/freecodecamp.js#L2549)  
[Iterate with JavaScript While Loops](https://github.com/marcelosperalta/javascript/blob/master/course_freecodecamp/freecodecamp.js#L2621)  
[Iterate with JavaScript For Loops](https://github.com/marcelosperalta/javascript/blob/master/course_freecodecamp/freecodecamp.js#L2650)  
[Iterate Odd Numbers With a For Loop](https://github.com/marcelosperalta/javascript/blob/master/course_freecodecamp/freecodecamp.js#L2695)  
[Iterate Through an Array with a For Loop](https://github.com/marcelosperalta/javascript/blob/master/course_freecodecamp/freecodecamp.js#L2750)  
[Nesting For Loops](https://github.com/marcelosperalta/javascript/blob/master/course_freecodecamp/freecodecamp.js#L2790)  
[Iterate with JavaScript Do...While Loops](https://github.com/marcelosperalta/javascript/blob/master/course_freecodecamp/freecodecamp.js#L2870)  
[Replace Loops using Recursion](https://github.com/marcelosperalta/javascript/blob/master/course_freecodecamp/freecodecamp.js#L2937)  
[**Exercise** "Profile Lookup"](https://github.com/marcelosperalta/javascript/blob/master/course_freecodecamp/freecodecamp.js#L3026)  
[Generate Random Fractions with JavaScript (Math.random())](https://github.com/marcelosperalta/javascript/blob/master/course_freecodecamp/freecodecamp.js#L3095)  
[Generate Random Whole Numbers with JavaScript (Math.floor())](https://github.com/marcelosperalta/javascript/blob/master/course_freecodecamp/freecodecamp.js#L3117)  
[Generate Random Whole Numbers within a Range](https://github.com/marcelosperalta/javascript/blob/master/course_freecodecamp/freecodecamp.js#L3148)  
[Use the parseInt Function(parseInt())](https://github.com/marcelosperalta/javascript/blob/master/course_freecodecamp/freecodecamp.js#L3187)  
[Use the parseInt Function with a Radix](https://github.com/marcelosperalta/javascript/blob/master/course_freecodecamp/freecodecamp.js#L3208)  
[Use the Conditional (Ternary) Operator](https://github.com/marcelosperalta/javascript/blob/master/course_freecodecamp/freecodecamp.js#L3260)  
[Use Multiple Conditional (Ternary) Operators](https://github.com/marcelosperalta/javascript/blob/master/course_freecodecamp/freecodecamp.js#L3296)  
[Use Recursion to Create a Countdown](https://github.com/marcelosperalta/javascript/blob/master/course_freecodecamp/freecodecamp.js#L3346)  
[Use Recursion to Create a Range of Numbers](https://github.com/marcelosperalta/javascript/blob/master/course_freecodecamp/freecodecamp.js#L3448)  

<div>
  <img 
    src="./.github/brazil.png"
    width="16px">
     <b>portuguese:</b>
  </img>
</div>

### :school: **[Cod3r Cursos](https://www.cod3r.com.br/)**  

[O ESSENCIAL de JavaScript Funcional em DUAS HORAS](https://www.youtube.com/watch?v=W3f6hiTLipc)  

### :school: **[Rocketseat Discover](https://rocketseat.com.br/discover)**  

[O Guia Estelar de JavaScript](https://app.rocketseat.com.br/node/o-guia-estelar-de-java-script)  

<hr>

## :question: Challenges:

### [Edabit](https://edabit.com/challenges)

**_very easy:_**  
[_How Edabit Works_](https://github.com/marcelosperalta/study_javascript/blob/master/challenges_edabit/edabit_very_easy.js#L20)  
[Alphabet Soup](https://github.com/marcelosperalta/study_javascript/blob/master/challenges_edabit/edabit_very_easy.js#L640)  
[Are the Numbers Equal?](https://github.com/marcelosperalta/study_javascript/blob/master/challenges_edabit/edabit_very_easy.js#L118)  
[Area of a Triangle](https://github.com/marcelosperalta/study_javascript/blob/master/challenges_edabit/edabit_very_easy.js#L136)  
[Buggy Code (Part 1)](https://github.com/marcelosperalta/study_javascript/blob/master/challenges_edabit/edabit_very_easy.js#L596)  
[Check if an Integer is Divisible By Five](https://github.com/marcelosperalta/study_javascript/blob/master/challenges_edabit/edabit_very_easy.js#L451)  
[Compare Strings by Count of Characters](https://github.com/marcelosperalta/study_javascript/blob/master/challenges_edabit/edabit_very_easy.js#L259)  
[Convert Age to Days](https://github.com/marcelosperalta/study_javascript/blob/master/challenges_edabit/edabit_very_easy.js#L582)  
[Convert Hours and Minutes into Seconds](https://github.com/marcelosperalta/study_javascript/blob/master/challenges_edabit/edabit_very_easy.js#L291)  
[Convert Hours into Seconds](https://github.com/marcelosperalta/study_javascript/blob/master/challenges_edabit/edabit_very_easy.js#L305)  
[Convert Minutes into Seconds](https://github.com/marcelosperalta/study_javascript/blob/master/challenges_edabit/edabit_very_easy.js#L150)  
[Correct the Mistakes](https://github.com/marcelosperalta/study_javascript/blob/master/challenges_edabit/edabit_very_easy.js#L74)  
[Divides Evenly](https://github.com/marcelosperalta/study_javascript/blob/master/challenges_edabit/edabit_very_easy.js#L371)  
[Drinks Allowed?](https://github.com/marcelosperalta/study_javascript/blob/master/challenges_edabit/edabit_very_easy.js#L568)  
[Equality Check](https://github.com/marcelosperalta/study_javascript/blob/master/challenges_edabit/edabit_very_easy.js#L199)  
[Evaluate an Equation](https://github.com/marcelosperalta/study_javascript/blob/master/challenges_edabit/edabit_very_easy.js#L388)  
[Find the Perimeter of a Rectangle](https://github.com/marcelosperalta/study_javascript/blob/master/challenges_edabit/edabit_very_easy.js#L217)  
[Football Points](https://github.com/marcelosperalta/study_javascript/blob/master/challenges_edabit/edabit_very_easy.js#L104)  
[Is the Number Less than or Equal to Zero?](https://github.com/marcelosperalta/study_javascript/blob/master/challenges_edabit/edabit_very_easy.js#L181)  
[Is the String Empty?](https://github.com/marcelosperalta/study_javascript/blob/master/challenges_edabit/edabit_very_easy.js#L419)  
[Less Than 100?](https://github.com/marcelosperalta/study_javascript/blob/master/challenges_edabit/edabit_very_easy.js#L164)  
[Letters Only](https://github.com/marcelosperalta/study_javascript/blob/master/challenges_edabit/edabit_very_easy.js#L656)  
[Maximum Edge of a Triangle](https://github.com/marcelosperalta/study_javascript/blob/master/challenges_edabit/edabit_very_easy.js#L277)  
[Movie Theatre Admittance](https://github.com/marcelosperalta/study_javascript/blob/master/challenges_edabit/edabit_very_easy.js#L348)  
[Recursion: Length of a String](https://github.com/marcelosperalta/study_javascript/blob/master/challenges_edabit/edabit_very_easy.js#L333)  
[Return a String as an Integer](https://github.com/marcelosperalta/study_javascript/blob/master/challenges_edabit/edabit_very_easy.js#L319)  
[Return Something to Me!](https://github.com/marcelosperalta/study_javascript/blob/master/challenges_edabit/edabit_very_easy.js#L245)  
[Return the First Element in an Array](https://github.com/marcelosperalta/study_javascript/blob/master/challenges_edabit/edabit_very_easy.js#L231)  
[Return the Next Number from the Integer Passed](https://github.com/marcelosperalta/study_javascript/blob/master/challenges_edabit/edabit_very_easy.js#L44)  
[Return the Remainder from Two Numbers](https://github.com/marcelosperalta/study_javascript/blob/master/challenges_edabit/edabit_very_easy.js#L88)  
[Return the Sum of Two Numbers](https://github.com/marcelosperalta/study_javascript/blob/master/challenges_edabit/edabit_very_easy.js#L32)  
[Solve the Equation](https://github.com/marcelosperalta/study_javascript/blob/master/challenges_edabit/edabit_very_easy.js#L405)  
[The Farm Problem](https://github.com/marcelosperalta/study_javascript/blob/master/challenges_edabit/edabit_very_easy.js#L437)  
[Using the "&&" Operator](https://github.com/marcelosperalta/study_javascript/blob/master/challenges_edabit/edabit_very_easy.js#L57)  
[Word without First Character](https://github.com/marcelosperalta/study_javascript/blob/master/challenges_edabit/edabit_very_easy.js#L627)  

**_easy:_**  
[Sort Numbers in Descending Order](https://github.com/marcelosperalta/study_javascript/blob/master/challenges_edabit/edabit_easy.js#L20)  
[Reverse the Case](https://github.com/marcelosperalta/study_javascript/blob/master/challenges_edabit/edabit_easy.js#L38)  
[Hiding the Card Number](https://github.com/marcelosperalta/study_javascript/blob/master/challenges_edabit/edabit_easy.js#L73)  

**_medium:_**  
[Finding Nemo](https://github.com/marcelosperalta/study_javascript/blob/master/challenges_edabit/edabit_medium.js#L20)  
[Return the Middle Character(s) of a String](https://github.com/marcelosperalta/study_javascript/blob/master/challenges_edabit/edabit_medium.js#L79)  

**_hard:_**  
[Reverse the Odd Length Words](https://github.com/marcelosperalta/study_javascript/blob/master/challenges_edabit/edabit_hard.js#L20)  

**_very hard:_**  
[Game of Thrones: Character Titles](https://github.com/marcelosperalta/study_javascript/blob/master/challenges_edabit/edabit_very_hard.js#L20)  


### [Codility](https://app.codility.com/programmers/)

[Refactor yourself](https://github.com/marcelosperalta/study_javascript/blob/master/challenges_codility/codility.js#L12)  

### [Coderbyte](https://coderbyte.com/)

**_easy:_**  
[Codeland Username Validation](https://github.com/marcelosperalta/study_javascript/blob/master/challenges_coderbyte/coderbyte_easy.js#L14)  

<hr>

## :tv: YouTube:

<div>
  <img 
    src="./.github/usa.png"
    width="16px">
    <b>english:</b>
  </img>
</div>

### :link: [freeCodeCamp](https://www.youtube.com/c/Freecodecamp/)

### :link: [Programming with Mosh](https://www.youtube.com/c/programmingwithmosh/)

<div>
  <img 
    src="./.github/brazil.png"
    width="16px">
     <b>portuguese:</b>
  </img>
</div>

### :link: [Código Fonte TV](https://github.com/marcelosperalta/study_javascript/tree/master/youtube_codigo_fonte_tv)

### :link: [RocketSeat](https://www.youtube.com/c/RocketSeat/)

<hr>

## :newspaper: Articles:

\#object  
**[What is a JavaScript Object? Key Value Pairs and Dot Notation Explained](https://github.com/marcelosperalta/study_javascript/tree/master/articles_freecodecamp)**  

\#this  
**[Understanding JavaScript Function Invocation and "this"](https://github.com/marcelosperalta/study_javascript/tree/master/articles_yehuda_katz_this)**  
