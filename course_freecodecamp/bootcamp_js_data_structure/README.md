# Basic Data Structures

_source:_  
**freeCodeCamp**  
:link: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/  

Data can be stored and accessed in many ways. You already know some common JavaScript data structures — arrays and objects.  

In this Basic Data Structures course, you'll learn more about the differences between arrays and objects, and which to use in different situations. You'll also learn how to use helpful JS methods like ``splice()`` and ``Object.keys()`` to access and manipulate data.  `

## Use an Array to Store a Collection of Data

**Array.length** - length property.  

**one-dimensional array** - meaning it only has one level, or that it does not have any other arrays nested within it.  

**multi-dimensional array** - an array that contains other arrays.  

## Access an Array's Contents Using Bracket Notation

**index** - JavaScript arrays are zero-indexed, meaning that the first element of an array is actually at the zeroth position.  

**bracket notation** - In order to retrieve an element from an array we can enclose an index in brackets and append it to the end of an array, or more commonly, to a variable which references an array object.  

## Add Items to an Array with push() and unshift()

arrays are **mutable**  

``push()`` method adds elements to the end of an array.  

``unshift()`` adds elements to the beginning.  

## Remove Items from an Array with pop() and shift()

``pop()`` removes an element from the end of an array - no parameters - only allows an array to be modified by a single element at a time.  

``shift()`` removes an element from the beginning - no parameters - only allows an array to be modified by a single element at a time.  

## Remove Items Using splice()

remove any number of consecutive elements from anywhere in an array  

_can take up to 3 parameters:_  

- first parameter represents the index on the array from which to begin removing elements,

- while the second parameter indicates the number of elements to delete,

## Add Items Using splice()

- the third parameter, comprised of one or more element(s), to add to the array.  

## Copy Array Items Using slice()

copies or _extracts_ a given number of elements to a new array, **leaving the array it is called upon untouched**.  

_takes only 2 parameters:_

- the first is the index at which to begin extraction,
- the second is the index at which to stop extraction (extraction will occur up to, but not including the element at this index)

## Copy an Array with the Spread Operator

 ES6's **spread operator** allows us to easily copy all of an array's elements, in order, with a simple and highly readable syntax.  

 The spread syntax simply looks like this: ``...``  

```
let thisArray = [true, true, undefined, false, null];
let thatArray = [...thisArray];
```

## Combine Arrays with the Spread Operator

```
let thisArray = ['sage', 'rosemary', 'parsley', 'thyme'];
let thatArray = ['basil', 'cilantro', ...thisArray, 'coriander'];
```

## Check For The Presence of an Element With indexOf()

allows us to quickly and easily check for the presence of an element on an array  

returns ``-1`` if the element does not exist  

## Iterate Through All an Array's Items Using For Loops

Sometimes when working with arrays, it is very handy to be able to iterate through each item to find one or more elements that we might need, or to manipulate an array based on which data items meet a certain set of criteria.  

JavaScript offers several built in methods that each iterate over arrays in slightly different ways to achieve different results (such as ``every()``, ``forEach()``, ``map()``, etc.), however the technique which is most flexible and offers us the greatest amount of control is a simple for loop.  


Consider the following:  

```
function greaterThanTen(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 10) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

greaterThanTen([2, 12, 8, 14, 80, 0, 1]);
```
Using a ``for`` loop, this function iterates through and accesses each element of the array, and subjects it to a simple test that we have created. In this way, we have easily and programmatically determined which data items are greater than ``10``, and returned a new array, ``[12, 14, 80]``, containing those items.

## Create complex multi-dimensional arrays

One of the most powerful features when thinking of arrays as data structures, is that arrays can contain, or even be completely made up of other arrays. We have seen arrays that contain arrays in previous challenges, but fairly simple ones. However, arrays can contain an infinite depth of arrays that can contain other arrays, each with their own arbitrary levels of depth, and so on. In this way, an array can very quickly become very complex data structure, known as a **multi-dimensional**, or nested array. Consider the following example:  

```
let nestedArray = [
  ['deep'],
  [
    ['deeper'], ['deeper'] 
  ],
  [
    [
      ['deepest'], ['deepest']
    ],
    [
      [
        ['deepest-est?']
      ]
    ]
  ]
];
```
The ``deep`` array is nested 2 levels deep. The ``deeper`` arrays are 3 levels deep. The ``deepest`` arrays are 4 levels, and the ``deepest-est``? is 5.  

While this example may seem convoluted, this level of complexity is not unheard of, or even unusual, when dealing with large amounts of data. However, we can still very easily access the deepest levels of an array this complex with bracket notation:  

```
console.log(nestedArray[2][1][0][0][0]);
```

This logs the string ``deepest-est?``. And now that we know where that piece of data is, we can reset it if we need to:  

```
nestedArray[2][1][0][0][0] = 'deeper still';

console.log(nestedArray[2][1][0][0][0]);
```
Now it logs ``deeper still``.  

## Add Key-Value Pairs to JavaScript Objects

At their most basic, _objects are just collections_ of **key-value pairs**.  

In other words, they are pieces of data (values) mapped to unique identifiers called properties (keys).  

Take a look at an example:  

```
const tekkenCharacter = {
  player: 'Hwoarang',
  fightingStyle: 'Tae Kwon Doe',
  human: true
};
```

The above code defines a Tekken video game character object called ``tekkenCharacter``. It has three properties, each of which map to a specific value. If you want to add an additional property, such as "origin", it can be done by assigning ``origin`` to the object:  

```
tekkenCharacter.origin = 'South Korea';
```

This uses dot notation. If you were to observe the ``tekkenCharacter`` object, it will now include the ``origin`` property. Hwoarang also had distinct orange hair. You can add this property with bracket notation by doing:  

```
tekkenCharacter['hair color'] = 'dyed orange';
```

Bracket notation is required if your property has a space in it or if you want to use a variable to name the property. In the above case, the property is enclosed in quotes to denote it as a string and will be added exactly as shown. Without quotes, it will be evaluated as a variable and the name of the property will be whatever value the variable is. Here's an example with a variable:  

```
const eyes = 'eye color';

tekkenCharacter[eyes] = 'brown';
```

## Modify an Object Nested Within an Object

Now let's take a look at a slightly more complex object. Object properties can be nested to an arbitrary depth, and their values can be any type of data supported by JavaScript, including arrays and even other objects. Consider the following:  

```
let nestedObject = {
  id: 28802695164,
  date: 'December 31, 2016',
  data: {
    totalUsers: 99,
    online: 80,
    onlineStatus: {
      active: 67,
      away: 13,
      busy: 8
    }
  }
};
```

``nestedObject`` has three properties: ``id`` (value is a number), ``date`` (value is a string), and ``data`` (value is an object with its nested structure). While structures can quickly become complex, we can still use the same notations to access the information we need. To assign the value ``10`` to the ``busy`` property of the nested ``onlineStatus`` object, we use dot notation to reference the property:  

```
nestedObject.data.onlineStatus.busy = 10;
```

## Access Property Names with Bracket Notation



## Use the delete Keyword to Remove Object Properties



## Check if an Object has a Property



## Iterate Through the Keys of an Object with a for...in Statement



## Generate an Array of All Object Keys with Object.keys()



## Modify an Array Stored in an Object