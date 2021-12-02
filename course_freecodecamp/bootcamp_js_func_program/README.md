# Functional Programming

_source:_  
**freeCodeCamp**  
:link: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/#functional-programming  

Functional Programming is another popular approach to software development. In Functional Programming, code is organized into smaller, basic functions that can be combined to build complex programs.  

In this course, you'll learn the core concepts of Functional Programming including pure functions, how to avoid mutations, and how to write cleaner code with methods like ``.map()`` and ``.filter()``.  

## Learn About Functional Programming

Functional programming is about:  

1. Isolated functions - there is no dependence on the state of the program, which includes global variables that are subject to change
2. Pure functions - the same input always gives the same output
3. Functions with limited side effects - any changes, or mutations, to the state of the program outside the function are carefully controlle

## Understand Functional Programming Terminology

Functional terminology:  

**Callbacks** are the functions that are slipped or passed into another function to decide the invocation of that function.  

Functions that can be assigned to a variable, passed into another function, or returned from another function just like any other normal value, are called **first class functions**. In JavaScript, all functions are first class functions.  

The functions that take a function as an argument, or return a function as a return value are called **higher order** functions.  

When functions are passed in to or returned from another function, then those functions which were passed in or returned can be called a **lambda**.  

## Understand the Hazards of Using Imperative Code

In English (and many other languages), the imperative tense is used to give commands. Similarly, an **imperative style in programming** is one that gives the computer a set of statements to perform a task.  

In contrast, **functional programming** is a form of declarative programming. You tell the computer what you want done by calling a method or function.  

Consider the scenario: you are browsing the web in your browser, and want to track the tabs you have opened. Let's try to model this using some simple object-oriented code.  

A Window object is made up of tabs, and you usually have more than one Window open. The titles of each open site in each Window object is held in an array. After working in the browser (opening new tabs, merging windows, and closing tabs), you want to print the tabs that are still open. Closed tabs are removed from the array and new tabs (for simplicity) get added to the end of it.  

The code editor shows an implementation of this functionality with functions for ``tabOpen()``, ``tabClose()``, and ``join()``. The array ``tabs`` is part of the Window object that stores the name of the open pages.  

## Avoid Mutations and Side Effects Using Functional Programming

If you haven't already figured it out, the issue in the previous challenge was with the ``splice`` call in the ``tabClose()`` function. Unfortunately, ``splice`` changes the original array it is called on, so the second call to it used a modified array, and gave unexpected results.  

**One of the core principles of functional programming is to not change things.**  
Changes lead to bugs. It's easier to prevent bugs knowing that your functions don't change anything, including the function arguments or any global variable.  

Recall that in **functional programming**, changing or altering things is called **mutation**, and the outcome is called a **side effect**. A function, ideally, should be a **pure function**, meaning that it does not cause any side effects.  

## Pass Arguments to Avoid External Dependence in a Function

Another principle of functional programming is to always declare your dependencies explicitly. This means if a function depends on a variable or object being present, then pass that variable or object directly into the function as an argument.  

There are several good consequences from this principle. The function is easier to test, you know exactly what input it takes, and it won't depend on anything else in your program.  

This can give you more confidence when you alter, remove, or add new code. You would know what you can or cannot change and you can see where the potential traps are.  

Finally, the function would always produce the same output for the same set of inputs, no matter what part of the code executes it.  

## Refactor Global Variables Out of Functions

So far, we have seen two distinct principles for functional programming:  

1. Don't alter a variable or object - create new variables and objects and return them if need be from a function. Hint: using something like const newArr = arrVar, where arrVar is an array will simply create a reference to the existing variable and not a copy. So changing a value in newArr would change the value in arrVar.

2. Declare function parameters - any computation inside a function depends only on the arguments passed to the function, and not on any global object or variable.

Adding one to a number is not very exciting, but we can apply these principles when working with arrays or more complex objects.  

## Use the ``map`` Method to Extract Data from an Array

 Functional programming is centered around a theory of functions.  

 Functions are considered _first class objects_ in JavaScript, which means they can be used like any other object. They can be saved in variables, stored in an object, or passed as function arguments.  

 The ``map`` method iterates over each item in an array and returns a new array containing the results of calling the callback function on each element. It does this without mutating the original array.  

 When the callback is used, it is passed three arguments. The first argument is the current element being processed. The second is the index of that element and the third is the array upon which the ``map`` method was called.  

 See below for an example using the ``map`` method on the ``users`` array to return a new array containing only the names of the users as elements. For simplicity, the example only uses the first argument of the callback.  

```
const users = [
  { name: 'John', age: 34 },
  { name: 'Amy', age: 20 },
  { name: 'camperCat', age: 10 }
];

const names = users.map(user => user.name);
console.log(names);
```

The console would display the value ``[ 'John', 'Amy', 'camperCat' ]``.  

## Implement ``map`` on a Prototype

As you have seen from applying ``Array.prototype.map()``, or simply ``map()`` earlier, the ``map`` method returns an array of the same length as the one it was called on. It also doesn't alter the original array, as long as its callback function doesn't.  

In other words, ``map`` is a pure function, and its output depends solely on its inputs. Plus, it takes another function as its argument.  

You might learn a lot about the ``map`` method if you implement your own version of it. It is recommended you use a ``for`` loop or ``Array.prototype.forEach()``.  

## Use the ``filter`` Method to Extract Data from an Array

Another useful array function is ``Array.prototype.filter()``, or simply ``filter()``.  

``filter`` calls a function on each element of an array and returns a new array containing only the elements for which that function returns ``true``. In other words, it filters the array, based on the function passed to it. Like ``map``, it does this without needing to modify the original array.  

## Implement the ``filter`` Method on a Prototype

You might learn a lot about the ``filter`` method if you implement your own version of it. It is recommended you use a ``for`` loop or ``Array.prototype.forEach()``.  

## Return Part of an Array Using the ``slice`` Method

The ``slice`` method returns a copy of certain elements of an array. It can take two arguments, the first gives the index of where to begin the slice, the second is the index for where to end the slice (and it's non-inclusive).  

**If the arguments are not provided, the default is to start at the beginning of the array through the end, which is an easy way to make a copy of the entire array**.  

The ``slice`` method does not mutate the original array, but returns a new one.  

## Remove Elements from an Array Using ``slice`` Instead of ``splice``

``splice`` method mutates the original array  

``slice`` method does not mutate the original array, but returns a new one which can be saved into a variable.  

 Using the ``slice`` method instead of ``splice`` <ins>helps to avoid any</ins> **array-mutating side effects**.  

## Combine Two Arrays Using the ``concat`` Method

``Concatenation`` means to join items end to end. JavaScript offers the ``concat`` method for both strings and arrays that work in the same way.  

For arrays, the method is called on one, then another array is provided as the argument to ``concat``, which is added to the end of the first array. It returns a new array and <ins>does not mutate either of the original arrays</ins>.  