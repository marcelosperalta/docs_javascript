# Regular Expressions

_source:_  
**freeCodeCamp**  
:link: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/#regular-expressions  

Regular expressions, often shortened to **"regex"** or **"regexp"**, are patterns that help programmers match, search, and replace text. Regular expressions are very powerful, but can be hard to read because they use special characters to make more complex, flexible matches.  

In this course, you'll learn how to use special characters, capture groups, positive and negative lookaheads, and other techniques to match any text you want.  

## Using the Test Method

Regular expressions are used in programming languages to match parts of strings. You create patterns to help you do that matching.  

If you want to find the word ``the`` in the string ``The dog chased the cat``, you could use the following regular expression: ``/the/``. Notice that quote marks are not required within the regular expression.  

JavaScript has multiple ways to use regexes. One way to test a regex is using the ``.test()`` method. The ``.test()`` method takes the regex, applies it to a string (which is placed inside the parentheses), and returns true or false if your pattern finds something or not.  

```
let testStr = "freeCodeCamp";
let testRegex = /Code/;
testRegex.test(testStr);
```

The ``test`` method here returns ``true``.  

## Match Literal Strings

## Match a Literal String with Different Possibilities

You can search for multiple patterns using the ``alternation`` or ``OR`` operator: ``|``.  

This operator matches patterns either before or after it. For example, if you wanted to match the strings ``yes`` or ``no``, the regex you want is ``/yes|no/``.  

You can also search for more than just two patterns. You can do this by adding more patterns with more ``OR`` operators separating them, like ``/yes|no|maybe/``.  

## Ignore Case While Matching

Sometimes, you might want to also match case differences.  

Case (or sometimes letter case) is the difference between uppercase letters and lowercase letters. Examples of uppercase are ``A``, ``B``, and ``C``. Examples of lowercase are ``a``, ``b``, and ``c``.  

You can match both cases using what is called a flag. There are other flags but here you'll focus on the flag that ignores case - the ``i`` flag. You can use it by appending it to the regex. An example of using this flag is ``/ignorecase/i``. This regex can match the strings ``ignorecase``, ``igNoreCase``, and ``IgnoreCase``.  

## Extract Matches

You can also extract the actual matches you found with the ``.match()`` method.  

To use the ``.match()`` method, apply the method on a string and pass in the regex inside the parentheses.  

```
"Hello, World!".match(/Hello/);
let ourStr = "Regular expressions";
let ourRegex = /expressions/;
ourStr.match(ourRegex);
```

Here the first match would return ``["Hello"]`` and the second would return ``["expressions"]``.  

Note that the ``.match`` syntax is the "opposite" of the ``.test`` method you have been using thus far:  

```
'string'.match(/regex/);
/regex/.test('string');
```