# Basic Algorithm Scripting

_source:_  
**freeCodeCamp**  
:link: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures#basic-algorithm-scripting  

An algorithm is a series of step-by-step instructions that describe how to do something.  

To write an effective algorithm, it helps to break a problem down into smaller parts and think carefully about how to solve each part with code.  

In this course, you'll learn the fundamentals of algorithmic thinking by writing algorithms that do everything from converting temperatures to handling complex 2D arrays.  

## Convert Celsius to Fahrenheit

The algorithm to convert from Celsius to Fahrenheit is the temperature in Celsius times ``9/5``, plus ``32``.  

You are given a variable ``celsius`` representing a temperature in Celsius. Use the variable ``fahrenheit`` already defined and assign it the Fahrenheit temperature equivalent to the given Celsius temperature. Use the algorithm mentioned above to help convert the Celsius temperature to Fahrenheit.  

## Reverse a String

Reverse the provided string.  

You may need to turn the string into an array before you can reverse it.  

Your result must be a string.  

## Factorialize a Number

Return the factorial of the provided integer.  

If the integer is represented with the letter ``n``, a factorial is the product of all positive integers less than or equal to ``n``.  

Factorials are often represented with the shorthand notation ``n!``  

For example: ``5! = 1 * 2 * 3 * 4 * 5 = 120``  

Only integers greater than or equal to zero will be supplied to the function.  

## Find the Longest Word in a String

Return the length of the longest word in the provided sentence.  

Your response should be a number.  

## Return Largest Numbers in Arrays

Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.  

Remember, you can iterate through an array with a simple for loop, and access each member with array syntax ``arr[i]``.  

## Confirm the Ending

Check if a string (first argument, ``str``) ends with the given target string (second argument, ``target``).  

This challenge can be solved with the ``.endsWith()`` method, which was introduced in ES2015. But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.  

## Repeat a String Repeat a String

Repeat a given string ``str`` (first argument) for ``num`` times (second argument). Return an empty string if ``num`` is not a positive number. For the purpose of this challenge, do not use the built-in ``.repeat()`` method.  

## Truncate a String

Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ``...`` ending.  

## Finders Keepers

Create a function that looks through an array ``arr`` and returns the first element in it that passes a 'truth test'. This means that given an element ``x``, the 'truth test' is passed if ``func(x)`` is ``true``. If no element passes the test, return ``undefined``.  

## Boo who

Check if a value is classified as a boolean primitive. Return ``true`` or ``false``.  

Boolean primitives are ``true`` and ``false``.  

## Title Case a Sentence

Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.  

For the purpose of this exercise, you should also capitalize connecting words like ``the`` and ``of``.  