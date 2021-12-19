var contacts = [
    // index = 0
    {
        // index      01234
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
console.log(contacts.firstName);       // expected output: undefined
// console.log(contacts.firstName[0]); // expected output: TypeError
console.log(contacts[0]["firstName"]); // expected output: Akira
console.log(contacts[0].firstName);    // expected output: Akira
console.log(contacts[0].firstName[0]); // expected output: A
console.log(contacts[0].firstName[4]); // expected output: a
console.log(contacts[1].firstName);    // expected output: Harry
// console.log(contacts[2].firstName); // expected output: TypeError
console.log(contacts[0].lastName);     // expected output: Laine
console.log(contacts[0].number);       // expected output: 0543236543
console.log(contacts[0].likes);        // expected output: [ 'Pizza', 'Coding', 'Brownie Points' ]
console.log(contacts[0].likes[0]);     // expected output: Pizza
console.log(contacts[1].likes[2]);     // expected output: Hagrid
console.log(contacts[1].likes[3]);     // expected output: undefined
// console.log(contacts);              // expected output: [
//                                                           {
//                                                             firstName: 'Akira',
//                                                             lastName: 'Laine',
//                                                             number: '0543236543',
//                                                             likes: [ 'Pizza', 'Coding', 'Brownie Points' ]
//                                                           },
//                                                           {
//                                                             firstName: 'Harry',
//                                                             lastName: 'Potter',
//                                                             number: '0994372684',
//                                                             likes: [ 'Hogwarts', 'Magic', 'Hagrid' ]
//                                                           }
//                                                         ]