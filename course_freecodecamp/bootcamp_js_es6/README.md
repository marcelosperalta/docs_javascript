# ES6

_source:_  
**freeCodeCamp**  
:link: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/#es6  

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

## Use Destructuring Assignment to Extract Values from Objects

**Destructuring assignment** is special syntax introduced in ES6, for neatly assigning values taken directly from an object.  

Consider the following ES5 code:  

```
const user = { name: 'John Doe', age: 34 };

const name = user.name;
const age = user.age;
```

**name** would have a value of the string **John Doe**, and **age** would have the number **34**.

Here's an equivalent assignment statement using the ES6 destructuring syntax:  

const { name, age } = user;  

Again, name would have a value of the string John Doe, and age would have the number 34.  

Here, the name and age variables will be created and assigned the values of their respective values from the user object. You can see how much cleaner this is.  

You can extract as many or few values from the object as you want.  

## Use Destructuring Assignment to Assign Variables from Objects

Destructuring allows you to assign a new variable name when extracting values. You can do this by putting the new name after a colon when assigning the value.  

Using the same object from the last example:  

```
const user = { name: 'John Doe', age: 34 };
```

Here's how you can give new variable names in the assignment: 

```
const { name: userName, age: userAge } = user;  
```

You may read it as "get the value of user.name and assign it to a new variable named userName" and so on. The value of userName would be the string John Doe, and the value of userAge would be the number 34.  

## Use Destructuring Assignment to Assign Variables from Nested Objects

You can use the same principles from the previous two lessons to destructure values from nested objects.  

Using an object similar to previous examples:  

```
const user = {
  johnDoe: { 
    age: 34,
    email: 'johnDoe@freeCodeCamp.com'
  }
};`
```

Here's how to extract the values of object properties and assign them to variables with the same name:  

```
const { johnDoe: { age, email }} = user;
```

And here's how you can assign an object properties' values to variables with different names:  

```
const { johnDoe: { age: userAge, email: userEmail }} = user;
```

## Use Destructuring Assignment to Assign Variables from Arrays

One key difference between the spread operator and array destructuring is that the spread operator unpacks all contents of an array into a comma-separated list. Consequently, you cannot pick or choose which elements you want to assign to variables.  

Destructuring an array lets us do exactly that:  

```
const [a, b] = [1, 2, 3, 4, 5, 6];
console.log(a, b);
```

The console will display the values of a and b as 1, 2.  

The variable a is assigned the first value of the array, and b is assigned the second value of the array. We can also access the value at any index in an array with destructuring by using commas to reach the desired index:  

```
const [a, b,,, c] = [1, 2, 3, 4, 5, 6];
console.log(a, b, c);
```

The console will display the values of a, b, and c as 1, 2, 5.  

## Use Destructuring Assignment with the Rest Parameter to Reassign Array Elements

In some situations involving array destructuring, we might want to collect the rest of the elements into a separate array.  

The result is similar to Array.prototype.slice(), as shown below:  

```
const [a, b, ...arr] = [1, 2, 3, 4, 5, 7];
console.log(a, b);
console.log(arr);
```

The console would display the values 1, 2 and [3, 4, 5, 7].  

Variables a and b take the first and second values from the array. After that, because of the rest parameter's presence, arr gets the rest of the values in the form of an array. The rest element only works correctly as the last variable in the list. As in, you cannot use the rest parameter to catch a subarray that leaves out the last element of the original array.  

## Use Destructuring Assignment to Pass an Object as a Function's Parameters

In some cases, you can destructure the object in a function argument itself.  

Consider the code below:  

```
const profileUpdate = (profileData) => {
  const { name, age, nationality, location } = profileData;
}
```

This effectively destructures the object sent into the function. This can also be done in-place:  

```
const profileUpdate = ({ name, age, nationality, location }) => {

}
```

When profileData is passed to the above function, the values are destructured from the function parameter for use within the function.  

## Create Strings using Template Literals

A new feature of ES6 is the **template literal**. This is a special type of string that makes creating complex strings easier.  

Template literals allow you to create multi-line strings and to use string interpolation features to create strings.  

Consider the code below:  

```
const person = {
  name: "Zodiac Hasbro",
  age: 56
};

const greeting = `Hello, my name is ${person.name}!
I am ${person.age} years old.`;

console.log(greeting);
```

The console will display the strings Hello, my name is Zodiac Hasbro! and I am 56 years old..  

A lot of things happened there. Firstly, the example uses backticks (`` ` ``), not quotes (``' or "``), to wrap the string. Secondly, notice that the string is multi-line, both in the code and the output. This saves inserting ``\n`` within strings. The ``${variable}`` syntax used above is a placeholder. Basically, you won't have to use concatenation with the + operator anymore. To add variables to strings, you just drop the variable in a template string and wrap it with ``${ and }``. Similarly, you can include other expressions in your string literal, for example`` ${a + b}``. This new way of creating strings gives you more flexibility to create robust strings.  

## Write Concise Object Literal Declarations Using Object Property Shorthand

ES6 adds some nice support for easily defining object literals.  

Consider the following code:  

```
const getMousePosition = (x, y) => ({
  x: x,
  y: y
});
```

``getMousePosition`` is a simple function that returns an object containing two properties. ES6 provides the syntactic sugar to eliminate the redundancy of having to write ``x: x``. You can simply write ``x`` once, and it will be converted to ``x: x`` (or something equivalent) under the hood. Here is the same function from above rewritten to use this new syntax:  

```
const getMousePosition = (x, y) => ({ x, y });
```

## Write Concise Declarative Functions with ES6

When defining functions within objects in ES5, we have to use the keyword function as follows:  

```
const person = {
  name: "Taylor",
  sayHello: function() {
    return `Hello! My name is ${this.name}.`;
  }
};
```

With ES6, you can remove the function keyword and colon altogether when defining functions in objects. Here's an example of this syntax:  

```
const person = {
  name: "Taylor",
  sayHello() {
    return `Hello! My name is ${this.name}.`;
  }
};
```

## Use class Syntax to Define a Constructor Function

ES6 provides a new syntax to create objects, using the class keyword.  

It should be noted that the class syntax is just syntax, and not a full-fledged class-based implementation of an object-oriented paradigm, unlike in languages such as Java, Python, Ruby, etc.  

In ES5, we usually define a constructor function and use the new keyword to instantiate an object.  

```
var SpaceShuttle = function(targetPlanet){
  this.targetPlanet = targetPlanet;
}
var zeus = new SpaceShuttle('Jupiter');
```

The class syntax simply replaces the constructor function creation:  

```
class SpaceShuttle {
  constructor(targetPlanet) {
    this.targetPlanet = targetPlanet;
  }
}
const zeus = new SpaceShuttle('Jupiter');
```

It should be noted that the class keyword declares a new function, to which a constructor is added. This constructor is invoked when new is called to create a new object.  

Note: UpperCamelCase should be used by convention for ES6 class names, as in SpaceShuttle used above.  

The constructor method is a special method for creating and initializing an object created with a class. You will learn more about it in the Object Oriented Programming section of the JavaScript Algorithms And Data Structures Certification.  

## Use getters and setters to Control Access to an Object

You can obtain values from an object and set the value of a property within an object.  

These are classically called **getters** and **setters**.  

Getter functions are meant to simply return (get) the value of an object's private variable to the user without the user directly accessing the private variable.  

Setter functions are meant to modify (set) the value of an object's private variable based on the value passed into the setter function. This change could involve calculations, or even overwriting the previous value completely.  

```
class Book {
  constructor(author) {
    this._author = author;
  }
  // getter
  get writer() {
    return this._author;
  }
  // setter
  set writer(updatedAuthor) {
    this._author = updatedAuthor;
  }
}
const novel = new Book('anonymous');
console.log(novel.writer);
novel.writer = 'newAuthor';
console.log(novel.writer);
```

The console would display the strings anonymous and newAuthor.  

Notice the syntax used to invoke the getter and setter. They do not even look like functions. Getters and setters are important because they hide internal implementation details.  

Note: It is convention to precede the name of a private variable with an underscore (_). However, the practice itself does not make a variable private.  