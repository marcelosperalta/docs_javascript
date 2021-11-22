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