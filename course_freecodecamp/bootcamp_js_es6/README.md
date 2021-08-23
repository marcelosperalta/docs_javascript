# ES6

ECMAScript, or ES, is a standardized version of JavaScript. Because all major browsers follow this specification, the terms ECMAScript and JavaScript are interchangeable.  

ES6, released in 2015, added many powerful new features to the language. In this course, you'll learn these new features, including ``let`` and ``const``, **arrow functions**, **classes**, **promises**, and **modules**.  

## Explore Differences Between the var and let Keywords

## Compare Scopes of the var and let Keywords

When you declare a variable with the var keyword, it is declared globally, or locally if declared inside a function.  

The let keyword behaves similarly, but with some extra features. When you declare a variable with the let keyword inside a block, statement, or expression, its scope is limited to that block, statement, or expression.  

Block  
A **block statement** (or compound statement in other languages) is used to group zero or more statements. The block is delimited by a pair of braces ("curly brackets") and may optionally be labelled:  

```
if (true) {
  var x = 2;
  let y = 2;
}
```

Statement  
In a computer programming language, a **statement** is a line of code commanding a task. Every program consists of a sequence of statements.  

Expression  
Any unit of code that can be evaluated to a value is an **expression**.  

##  Declare a Read-Only Variable with the const Keyword

A common practice when naming constants is to use all uppercase letters, with words separated by an underscore.  

Note: It is common for developers to use uppercase variable identifiers for immutable values and lowercase or camelCase for mutable values (objects and arrays). In a later challenge you will see an example of a lowercase variable identifier being used for an array.  

## Mutate an Array Declared with const

```
const s = [5, 6, 7];
s = [1, 2, 3];
s[2] = 45;
console.log(s);
```

s = [1, 2, 3] will result in an error. The console.log will display the value [5, 6, 45  

As you can see, you can mutate the object [5, 6, 7] itself and the variable s will still point to the altered array [5, 6, 45]. Like all arrays, the array elements in s are mutable, but because const was used, you cannot use the variable identifier s to point to a different array using the assignment operator.  

## Prevent Object Mutation

``const`` declaration alone doesn't really protect your data from mutation. To ensure your data doesn't change, JavaScript provides a function ``Object.freeze`` to prevent data mutation.  

## Use Arrow Functions to Write Concise Anonymous Functions

## Write Arrow Functions with Parameters

Just like a regular function, you can pass arguments into an arrow function.  

```
const doubler = (item) => item * 2;
doubler(4);
```

If an arrow function has a single parameter, the parentheses enclosing the parameter may be omitted.  

```
const doubler = item => item * 2;
```

It is possible to pass more than one argument into an arrow function.  

```
const multiplier = (item, multi) => item * multi;
multiplier(4, 2);
```

## Set Default Parameters for Your Functions

In order to help us create more flexible functions, ES6 introduces **default parameters** for functions.  

Check out this code:  

```
const greeting = (name = "Anonymous") => "Hello " + name;

console.log(greeting("John"));
console.log(greeting());
```

The console will display the strings Hello John and Hello Anonymous.  

The default parameter kicks in when the argument is not specified (it is undefined). As you can see in the example above, the parameter name will receive its default value Anonymous when you do not provide a value for the parameter. You can add default values for as many parameters as you want.  

## Use the Rest Parameter with Function Parameters

ES6 introduces the **rest parameter** for function parameters.  

With the rest parameter, you can create functions that take a variable number of arguments. These arguments are stored in an array that can be accessed later from inside the function.  

```
function howMany(...args) {
  return "You have passed " + args.length + " arguments.";
}
console.log(howMany(0, 1, 2));
console.log(howMany("string", null, [1, 2, 3], { }));
```

The rest parameter eliminates the need to check the args array and allows us to apply ``map()``, ``filter()`` and ``reduce()`` on the parameters array.  

## Use the Spread Operator to Evaluate Arrays In-Place

ES5 code  

```
var arr = [6, 89, 3, 45];
var maximus = Math.max.apply(null, arr);
```

ES6 introduces the **spread operator**

```
const arr = [6, 89, 3, 45];
const maximus = Math.max(...arr);
```

``...arr`` returns an unpacked array. In other words, it spreads the array. However, the spread operator only works in-place, like in an argument to a function or in an array literal.  