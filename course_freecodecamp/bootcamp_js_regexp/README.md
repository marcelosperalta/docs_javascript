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

## Find More Than the First Match

To search or extract a pattern more than once, you can use the ``g`` flag.  

```
let repeatRegex = /Repeat/g;
testStr.match(repeatRegex);
```

Note  
You can have multiple flags on your regex like ``/search/gi``  

## Match Anything with Wildcard Period

Sometimes you won't (or don't need to) know the exact characters in your patterns.  

The wildcard character ``.`` will match any one character. The wildcard is also called ``dot`` and ``period``. You can use the wildcard character just like any other character in the regex. For example, if you wanted to match ``hug``, ``huh``, ``hut``, and ``hum``, you can use the regex ``/hu./`` to match all four words.  

```
let humStr = "I'll hum a song";
let hugStr = "Bear hug";
let huRegex = /hu./;
huRegex.test(humStr);
huRegex.test(hugStr);
```

Both of these test calls would return true.  

## Match Single Character with Multiple Possibilities

You can search for a literal pattern with some flexibility with **character classes**.  

Character classes allow you to define a group of characters you wish to match by placing them inside square (``[`` and ``]``) brackets.  

You want to match ``bag``, ``big``, and ``bug`` but not ``bog``. You can create the regex ``/b[aiu]g/`` to do this. The ``[aiu]`` is the character class that will only match the characters ``a``, ``i``, or ``u``.  

```
let bigStr = "big";
let bagStr = "bag";
let bugStr = "bug";
let bogStr = "bog";
let bgRegex = /b[aiu]g/;
bigStr.match(bgRegex);
bagStr.match(bgRegex);
bugStr.match(bgRegex);
bogStr.match(bgRegex);
```
In order, the four ``match`` calls would return the values ``["big"]``, ``["bag"]``, ``["bug"]``, and ``null``.  

## Match Letters of the Alphabet

Inside a character set, you can define a range of characters to match using a hyphen character: ``-``.  

To match lowercase letters ``a`` through ``e`` you would use ``[a-e]``.`  

```
let catStr = "cat";
let batStr = "bat";
let matStr = "mat";
let bgRegex = /[a-e]at/;
catStr.match(bgRegex);
batStr.match(bgRegex);
matStr.match(bgRegex);
```
In order, the three ``match`` calls would return the values ``["cat"]``, ``["bat"]``, and ``null``.  

## Match Numbers and Letters of the Alphabet

Using the hyphen (``-``) to match a range of characters is not limited to letters. It also works to match a range of numbers.  

It is possible to combine a range of letters and numbers in a single character set.  

```
let jennyStr = "Jenny8675309";
let myRegex = /[a-z0-9]/ig;
jennyStr.match(myRegex);
```

## Match Single Characters Not Specified

You could also create a set of characters that you do not want to match. These types of character sets are called **negated character sets**.  

For example, ``/[^aeiou]/gi`` matches all characters that are not a vowel. Note that characters like ``.``, ``!``, ``[``,`` @``, ``/`` and white space are matched - the negated vowel character set only excludes the vowel characters.  

To create a negated character set, you place a caret character (``^``) after the opening bracket and before the characters you do not want to match.  

## Match Characters that Occur One or More Times

Sometimes, you need to match a character (or group of characters) that appears one or more times in a row. This means it occurs at least once, and may be repeated.  

You can use the ``+`` character to check if that is the case. Remember, the character or pattern has to be present consecutively. That is, the character has to repeat one after the other.  

For example, ``/a+/g`` would find one match in ``abc`` and return ``["a"]``. Because of the ``+``, it would also find a single match in ``aabc`` and return ``["aa"]``.  

If it were instead checking the string ``abab``, it would find two matches and return ``["a", "a"]`` because the ``a`` characters are not in a row - there is a ``b`` between them. Finally, since there is no ``a`` in the string ``bcd``, it wouldn't find a match.  

## Match Characters that Occur Zero or More Times

There's also an option that matches characters that occur zero or more times.  

The character to do this is the asterisk or star: ``*``.  

```
let soccerWord = "gooooooooal!";
let gPhrase = "gut feeling";
let oPhrase = "over the moon";
let goRegex = /go*/;
soccerWord.match(goRegex);
gPhrase.match(goRegex);
oPhrase.match(goRegex);
```
In order, the three ``match`` calls would return the values ``["goooooooo"]``, ``["g"]``, and ``null``.  

## Find Characters with Lazy Matching

In regular expressions, a ``greedy`` match finds the longest possible part of a string that fits the regex pattern and returns it as a match. The alternative is called a ``lazy`` match, which finds the smallest possible part of the string that satisfies the regex pattern.  

You can apply the regex ``/t[a-z]*i/`` to the string ``"titanic"``. This regex is basically a pattern that starts with ``t``, ends with ``i``, and has some letters in between.  

Regular expressions are by default greedy, so the match would return ``["titani"]``. It finds the largest sub-string possible to fit the pattern.  

However, you can use the ``?`` character to change it to lazy matching. ``"titanic"`` matched against the adjusted regex of ``/t[a-z]*?i/`` returns ``["ti"]``.  

Note: Parsing HTML with regular expressions should be avoided, but pattern matching an HTML string with regular expressions is completely fine.  

## Find One or More Criminals in a Hunt

Time to pause and test your new regex writing skills. A group of criminals escaped from jail and ran away, but you don't know how many. However, you do know that they stay close together when they are around other people. You are responsible for finding all of the criminals at once.  

Here's an example to review how to do this:  

The regex ``/z+/`` matches the letter ``z`` when it appears one or more times in a row. It would find matches in all of the following strings:  

```
"z"
"zzzzzz"
"ABCzzzz"
"zzzzABC"
"abczzzzzzzzzzzzzzzzzzzzzabc"
```

But it does not find matches in the following strings since there are no letter ``z`` characters:  

```
""
"ABC"
"abcabc"
```

## Match Beginning String Patterns

In an earlier challenge, you used the caret character (``^``) inside a character set to create a negated character set in the form ``[^thingsThatWillNotBeMatched]``. Outside of a character set, the caret is used to search for patterns at the beginning of strings.  

```
let firstString = "Ricky is first and can be found.";
let firstRegex = /^Ricky/;
firstRegex.test(firstString);
let notFirst = "You can't find Ricky now.";
firstRegex.test(notFirst);
```
The first ``test`` call would return ``true``, while the second would return ``false``.  

## Match Ending String Patterns

You can search the end of strings using the dollar sign character ``$`` at the end of the regex.  

```
let theEnding = "This is a never ending story";
let storyRegex = /story$/;
storyRegex.test(theEnding);
let noEnding = "Sometimes a story will have to end";
storyRegex.test(noEnding);
```
The first ``test`` call would return ``true``, while the second would return ``false``.  

## Match All Letters and Numbers

Using character classes, you were able to search for all letters of the alphabet with ``[a-z]``. This kind of character class is common enough that there is a shortcut for it, although it includes a few extra characters as well.  

The closest character class in JavaScript to match the alphabet is ``\w``. This shortcut is equal to ``[A-Za-z0-9_]``. This character class matches upper and lowercase letters plus numbers. Note, this character class also includes the underscore character (``_``).  

```
let longHand = /[A-Za-z0-9_]+/;
let shortHand = /\w+/;
let numbers = "42";
let varNames = "important_var";
longHand.test(numbers);
shortHand.test(numbers);
longHand.test(varNames);
shortHand.test(varNames);
```
All four of these ``test`` calls would return ``true``.  

These shortcut character classes are also known as **shorthand character classes**.  

## Match Everything But Letters and Numbers

You've learned that you can use a shortcut to match alphanumerics ``[A-Za-z0-9_]`` using ``\w``. A natural pattern you might want to search for is the opposite of alphanumerics.  

You can search for the opposite of the ``\w`` with ``\W``. Note, the opposite pattern uses a capital letter. This shortcut is the same as ``[^A-Za-z0-9_]``.  

```
let shortHand = /\W/;
let numbers = "42%";
let sentence = "Coding!";
numbers.match(shortHand);
sentence.match(shortHand);
```

The first ``match`` call would return the value ``["%"]`` and the second would return ``["!"]``.  

## Match All Numbers

The shortcut to look for digit characters is ``\d``, with a lowercase ``d``. This is equal to the character class ``[0-9]``, which looks for a single character of any number between zero and nine.  