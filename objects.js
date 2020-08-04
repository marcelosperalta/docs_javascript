var contacts = [
    // index = 0
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        // index =      0,        1,                2
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    // index = 1
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        // index =         0,       1,        2
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
  ];

console.log(contacts[0].firstName);    // expected output: Akira
console.log(contacts[1].firstName);    // expected output: Harry
// console.log(contacts[2].firstName); // expected output: TypeError
console.log(contacts[0].lastName);     // expected output: Laine
console.log(contacts[0].number);       // expected output: 0543236543
console.log(contacts[0].likes);        // expected output: [ 'Pizza', 'Coding', 'Brownie Points' ]
console.log(contacts[0].likes[0]);     // expected output: Pizza