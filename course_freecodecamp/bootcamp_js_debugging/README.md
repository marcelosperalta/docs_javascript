# Debugging

_source:_  
**freeCodeCamp**  
:link: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures#debugging  

Debugging is the process of going through your code, finding any issues, and fixing them.  

Issues in code generally come in three forms:
- syntax errors that prevent your program from running, 
- runtime errors where your code has unexpected behavior, 
- or logical errors where your code doesn't do what you intended.  

In this course, you'll learn how to use the JavaScript console to debug programs and prevent common issues before they happen.  

## Use the JavaScript Console to Check the Value of a Variable

The ``console.log()`` method, which "prints" the output of what's within its parentheses to the console, will likely be the most helpful debugging tool.  

Placing it at strategic points in your code can show you the intermediate values of variables.  

It's good practice to have an idea of what the output should be before looking at what it is. Having check points to see the status of your calculations throughout your code will help narrow down where the problem is.  

## Understanding the Differences between the freeCodeCamp and Browser Console

There are many methods to use with ``console`` to output messages. ``log``, ``warn``, and ``clear`` to name a few. The freeCodeCamp console will only output ``log`` messages, while the browser console will output all messages. When you make changes to your code, it will automatically run and show the logs. The freeCodeCamp console is then cleared each time your code runs.  

## Use typeof to Check the Type of a Variable

You can use ``typeof`` to check the data structure, or type, of a variable.  

JavaScript recognizes six primitive (immutable) data types: ``Boolean``, ``Null``, ``Undefined``, ``Number``, ``String``, and ``Symbol`` (new with ES6) and one type for mutable items: ``Object``. Note that in JavaScript, arrays are technically a type of object.  

## Catch Misspelled Variable and Function Names

## Catch Unclosed Parentheses, Brackets, Braces and Quotes

Another syntax error to be aware of is that all opening parentheses, brackets, curly braces, and quotes have a closing pair.  

## Catch Mixed Usage of Single and Double Quotes

JavaScript allows the use of both single (``'``) and double (``"``) quotes to declare a string.  

_incorrect_
```
const uhOhGroucho = 'I've had a perfectly wonderful evening, but this wasn't it.';
```

_correct_
```
const allSameQuotes = 'I\'ve had a perfectly wonderful evening, but this wasn\'t it.';
const allSameQuotes = "I've had a perfectly wonderful evening, but this wasn't it.";
```

##  Catch Use of Assignment Operator Instead of Equality Operator

The assignment operator (``=``) in JavaScript assigns a value to a variable name. And the ``==`` and ``===`` operators check for equality (the triple ``===`` tests for strict equality, meaning both value and type are the same).  

Almost every value on its own in JavaScript evaluates to ``true``, except what are known as the "falsy" values: ``false``, ``0``, ``""`` (an empty string), ``NaN``, ``undefined``, and ``null``.  

## Catch Missing Open and Closing Parenthesis After a Function Call

## Catch Arguments Passed in the Wrong Order When Calling a Function

## Catch Off By One Errors When Using Indexing

``Off by one errors`` (sometimes called OBOE) crop up when you're trying to target a specific index of a string or array (to slice or access a segment), or when looping over the indices of them. JavaScript indexing starts at zero, not one, which means the last index is always one less than the length of the item. If you try to access an index equal to the length, the program may throw an "index out of range" reference error or print ``undefined``.  

## Use Caution When Reinitializing Variables Inside a Loop

## Prevent Infinite Loops with a Valid Terminal Condition

Loops are great tools when you need your program to run a code block a certain number of times or until a condition is met, but they need a terminal condition that ends the looping. Infinite loops are likely to freeze or crash the browser, and cause general program execution mayhem, which no one wants.  