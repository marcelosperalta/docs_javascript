// Use an Array to Store a Collection of Data

let simpleArray = ['one', 2, 'three', true, false, undefined, null];
console.log(simpleArray.length); // 7

let complexArray = [
    [
      {
        one: 1,
        two: 2
      },
      {
        three: 3,
        four: 4
      }
    ],
    [
      {
        a: "a",
        b: "b"
      },
      {
        c: "c",
        d: "d"
      }
    ]
  ];
console.log(complexArray.length); // 2

let yourArray = [1, 2, 3, "four", true];
console.log(yourArray.length); // 5


// Access an Array's Contents Using Bracket Notation

let ourArray = ["a", "b", "c"];
let ourVariable = ourArray[0]; 
console.log(ourVariable);      // a
ourArray[1] = "not b anymore"; 
console.log(ourArray);         // ["a", "not b anymore", "c"];

let myArray = ["a", "b", "c", "d"];
myArray[1] = "2"
console.log(myArray);


// Add Items to an Array with push() and unshift()

let twentyThree = 'XXIII';
let romanNumerals = ['XXI', 'XXII'];
romanNumerals.unshift('XIX', 'XX');
console.log(romanNumerals); // [ 'XIX', 'XX', 'XXI', 'XXII' ]
romanNumerals.push(twentyThree);
console.log(romanNumerals); // [ 'XIX', 'XX', 'XXI', 'XXII', 'XXIII' ]

function mixedNumbers(arr) {
  arr.unshift('I', 2, 'three');
  arr.push(7, 'VIII', 9);
  return arr;
}
console.log(mixedNumbers(['IV', 5, 'six'])); // [
                                             //   'I',     2,
                                             //   'three', 'IV',
                                             //   5,       'six',
                                             //   7,       'VIII',
                                             //   9
                                             // ]


// Remove Items from an Array with pop() and shift()

let greetings = ['whats up?', 'hello', 'see ya!'];
greetings.pop();
console.log(greetings);       // [ 'whats up?', 'hello' ]
greetings.shift();
console.log(greetings);       // [ 'hello' ]
let popped = greetings.pop();
console.log(popped);          // hello

function popShift(arr) {
  let popped = arr.pop();
  let shifted = arr.shift();
  return [shifted, popped];
}
console.log(popShift(['challenge', 'is', 'not', 'complete'])); // [ 'challenge', 'complete' ]


// Remove Items Using splice()

let array = ['today', 'was', 'not', 'so', 'great'];
array.splice(2, 2);
console.log(array);    // [ 'today', 'was', 'great' ]

let array = ['I', 'am', 'feeling', 'really', 'happy'];
let newArray = array.splice(3, 2);
console.log(newArray); // [ 'really', 'happy' ]

const arr = [2, 4, 5, 1, 7, 5, 2, 1];
arr.splice(1, 4);
console.log(arr);      // [ 2, 5, 2, 1 ]


// Add Items Using splice()

const numbers = [10, 11, 12, 12, 15];
const startIndex = 3;
const amountToDelete = 1;
numbers.splice(startIndex, amountToDelete, 13, 14);
console.log(numbers);  // [ 10, 11, 12, 13, 14, 15 ]

function htmlColorNames(arr) {
  arr.splice(0, 2, 'DarkSalmon', 'BlanchedAlmond')
    return arr;
  }
  console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']));
  // [
  //   'DarkSalmon',
  //   'BlanchedAlmond',
  //   'LavenderBlush',
  //   'PaleTurquoise',
  //   'FireBrick'
  // ]


// Copy Array Items Using slice()

//                            0,      1,       2,      3,       4
let weatherConditions = ['rain', 'snow', 'sleet', 'hail', 'clear'];
let todaysWeather = weatherConditions.slice(1, 3);
console.log(todaysWeather); // [ 'snow', 'sleet' ]

function forecast(arr) {
  let newArray = arr.slice(2, 4);
  return newArray;
}
console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms'])); 
// [ 'warm', 'sunny' ]


// Copy an Array with the Spread Operator

let thisArray = [true, true, undefined, false, null];
let thatArray = [...thisArray];
console.log(thatArray); // [ true, true, undefined, false, null ]


// Combine Arrays with the Spread Operator

function copyMachine(arr, num) {
  let newArr = [];
  while (num >= 1) {
    newArr.push([...arr]);
    num--;
  }
  return newArr;
}
console.log(copyMachine([true, false, true], 2)); 
// [ [ true, false, true ], [ true, false, true ] ]

let thisArray = ['sage', 'rosemary', 'parsley', 'thyme'];
let thatArray = ['basil', 'cilantro', ...thisArray, 'coriander'];
console.log(thatArray); 
// [
//   'basil',
//   'cilantro',
//   'sage',
//   'rosemary',
//   'parsley',
//   'thyme',
//   'coriander'
// ]

function spreadOut() {
  let fragment = ['to', 'code'];
  let sentence = ['learning', ...fragment, 'is', 'fun'];
  return sentence;
}
console.log(spreadOut()); // [ 'learning', 'to', 'code', 'is', 'fun' ]


// Check For The Presence of an Element With indexOf()

//                   0,       1,         2,         3,       4
let fruits = ['apples', 'pears', 'oranges', 'peaches', 'pears'];
console.log(fruits.indexOf('dates'));   // -1
console.log(fruits.indexOf('oranges')); // 2
console.log(fruits.indexOf('pears'));   // 1

function quickCheck(arr, elem) {
  return arr.indexOf(elem) != -1 ? true : false;
}
console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms')); // false


// Iterate Through All an Array's Items Using For Loops

function greaterThanTen(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 10) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
console.log(greaterThanTen([2, 12, 8, 14, 80, 0, 1])); // [ 12, 14, 80 ]

function filteredArray(arr, elem) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].indexOf(elem) == -1) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));
// []
console.log(filteredArray([[10, 8, 3], [14, 6, 23], [3, 18, 6]], 18));
// [ [ 10, 8, 3 ], [ 14, 6, 23 ] ]


// Create complex multi-dimensional arrays

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
console.log(nestedArray[2][1][0][0][0]); // deepest-est?
nestedArray[2][1][0][0][0] = 'deeper still';
console.log(nestedArray[2][1][0][0][0]); // deeper still

// We have defined a variable, myNestedArray, set equal to an array. 
// Modify myNestedArray, using any combination of strings, numbers, and booleans 
// for data elements, so that it has exactly five levels of depth 
// (remember, the outer-most array is level 1). 
// Somewhere on the third level, include the string "deep", 
// on the fourth level, include the string "deeper", and on the fifth level, 
// include the string "deepest".

let myNestedArray = [                                                                      // level 1
                      [2,                                                                  // level 2
                        [3, "deep",                                                        // level 3
                          [4, "deeper",                                                    // level 4
                            [5,"deepest", 'unshift', false, 1, 2, 3, 'complex', 'nested'], // level 5
                            ['loop', 'shift', 6, 7, 1000, 'method'],
                            ['concat', false, true, 'spread', 'array'],
                            ['mutate', 1327.98, 'splice', 'slice', 'push'],
                            ['iterate', 1.3849, 7, '8.4876', 'arbitrary', 'depth']
                          ]
                        ]
                      ]
];
console.log(myNestedArray);                // [ [ 2, [ 3, 'deep', [Array] ] ] ]
console.log(myNestedArray[0][1][2][2][0]); // 5
console.log(myNestedArray[0][1][2][2][1]); // deepest


// Add Key-Value Pairs to JavaScript Objects

const tekkenCharacter = {
  player: 'Hwoarang',
  fightingStyle: 'Tae Kwon Doe',
  human: true
};
console.log(tekkenCharacter); // { player: 'Hwoarang', fightingStyle: 'Tae Kwon Doe', human: true }
tekkenCharacter.origin = 'South Korea';
console.log(tekkenCharacter); // {
                              //   player: 'Hwoarang',
                              //   fightingStyle: 'Tae Kwon Doe',
                              //   human: true,
                              //   origin: 'South Korea'
                              // }
tekkenCharacter['hair color'] = 'dyed orange';
console.log(tekkenCharacter); // {
                              //   player: 'Hwoarang',
                              //   fightingStyle: 'Tae Kwon Doe',
                              //   human: true,
                              //   origin: 'South Korea',
                              //   'hair color': 'dyed orange'
                              // }
const eyes = 'eye color';
tekkenCharacter[eyes] = 'brown';
console.log(tekkenCharacter); // {
                              //   player: 'Hwoarang',
                              //   fightingStyle: 'Tae Kwon Doe',
                              //   human: true,
                              //   origin: 'South Korea',
                              //   'hair color': 'dyed orange',
                              //   'eye color': 'brown'
                              // }

let foods = {
  apples: 25,
  oranges: 32,
  plums: 28
};
foods.bananas = 13;
foods.grapes = 35;
foods.strawberries = 27;
console.log(foods); // {
                    //   apples: 25,
                    //   oranges: 32,
                    //   plums: 28,
                    //   bananas: 13,
                    //   grapes: 35,
                    //   strawberries: 27
                    // }


// Modify an Object Nested Within an Object

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
nestedObject.data.onlineStatus.busy = 10;
console.log(nestedObject); // {
                           //   id: 28802695164,
                           //   date: 'December 31, 2016',
                           //   data: {
                           //     totalUsers: 99,
                           //     online: 80,
                           //     onlineStatus: { active: 67, away: 13, busy: 10 }
                           //   }
                           // }

let userActivity = {
  id: 23894201352,
  date: 'January 1, 2017',
  data: {
    totalUsers: 51,
    online: 42
  }
};
userActivity.data.online = 45;
console.log(userActivity); // {
                           //   id: 23894201352,
                           //   date: 'January 1, 2017',
                           //   data: { totalUsers: 51, online: 45 }
                           // }


// Access Property Names with Bracket Notation

let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27
};
function checkInventory(scannedItem) {
  return foods[scannedItem];
}
console.log(checkInventory("apples")); // 25


// Use the delete Keyword to Remove Object Properties

let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27
};
delete foods.apples;
console.log(foods); // { oranges: 32, plums: 28, bananas: 13, grapes: 35, strawberries: 27 }

let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27
};
delete foods.oranges;
delete foods.plums;
delete foods.strawberries;
console.log(foods); // { apples: 25, bananas: 13, grapes: 35 }


// Check if an Object has a Property

let users = {
  Alan: {
    age: 27,
    online: true
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: true
  },
  Ryan: {
    age: 19,
    online: true
  }
};
console.log(users.hasOwnProperty('Alan')); // true
console.log('Alan' in users);              // true

let users = {
  Alan: {
    age: 27,
    online: true
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: true
  },
  Ryan: {
    age: 19,
    online: true
  }
};
function isEveryoneHere(userObj) {
  if (
        userObj.hasOwnProperty('Alan') &&
        userObj.hasOwnProperty('Jeff') &&
        userObj.hasOwnProperty('Sarah') &&
        userObj.hasOwnProperty('Ryan')
      ) {
    return true;
      }
  return false
}
console.log(isEveryoneHere(users));
// or
let users = {
  Alan: {
    age: 27,
    online: true
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: true
  },
  Ryan: {
    age: 19,
    online: true
  }
};
function isEveryoneHere(userObj) {
  return ["Alan", "Jeff", "Sarah", "Ryan"].every(name =>
    userObj.hasOwnProperty(name)
  );
}
console.log(isEveryoneHere(users));


// Iterate Through the Keys of an Object with a for...in Statement

let users = {
  Alan: {
    age: 27,
    online: true
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: true
  },
  Ryan: {
    age: 19,
    online: true
  }
};
for (let user in users) {
  console.log(user); // Alan
                     // Jeff
                     // Sarah
                     // Ryan
}

let users = {
  Alan: {
    online: false
  },
  Jeff: {
    online: true
  },
  Sarah: {
    online: false
  }
}
function countOnline(usersObj) {
  let result = 0;
  for (let user in usersObj) {
    if (usersObj[user].online === true) {
      result++;
    }
  }
  return result;
}
console.log(countOnline(users));


// Generate an Array of All Object Keys with Object.keys()

let users = {
  Alan: {
    age: 27,
    online: false
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: false
  },
  Ryan: {
    age: 19,
    online: true
  }
};
function getArrayOfUsers(obj) {
  return Object.keys(obj)
}
console.log(getArrayOfUsers(users)); // [ 'Alan', 'Jeff', 'Sarah', 'Ryan' ]


// Modify an Array Stored in an Object

let user = {
  name: 'Kenneth',
  age: 28,
  data: {
    username: 'kennethCodesAllDay',
    joinDate: 'March 26, 2016',
    organization: 'freeCodeCamp',
    friends: [
      'Sam',
      'Kira',
      'Tomo'
    ],
    location: {
      city: 'San Francisco',
      state: 'CA',
      country: 'USA'
    }
  }
};
function addFriend(userObj, friend) {
  userObj.data.friends.push(friend);
  return userObj.data.friends;
}
console.log(addFriend(user, 'Pete')); // [ 'Sam', 'Kira', 'Tomo', 'Pete' ]