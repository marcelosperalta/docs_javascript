// freeCodeCamp.org
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/functional-programming/use-the-filter-method-to-extract-data-from-an-array

const users = [
    { name: 'John', age: 34 },
    { name: 'Amy', age: 20 },
    { name: 'camperCat', age: 10 }
];

const usersUnder30 = users.filter(user => user.age < 30);
console.log(usersUnder30); // [ { name: 'Amy', age: 20 }, { name: 'camperCat', age: 10 } ]

const usersAmy = users.filter(user => user.name === 'Amy');
console.log(usersAmy);     // [ { name: 'Amy', age: 20 } ]

    // The variable "watchList" holds an array of objects with information on several movies. 
    // Use a combination of "filter" and "map" on "watchList" to assign a new array of objects 
    // with only "title" and "rating" keys. The new array should only include objects where 
    // "imdbRating" is greater than or equal to 8.0. Note that the "rating" values are saved 
    // as strings in the object and you may need to convert them into numbers to perform 
    // mathematical operations on them.

    // The global variable
    const watchList = [
        { "Title": "Inception", "Year": "2010", "Rated": "PG-13", "imdbRating": "8.8", },
        { "Title": "Interstellar", "Year": "2014", "Rated": "PG-13", "imdbRating": "8.6" },
        { "Title": "The Dark Knight", "Year": "2008", "Rated": "PG-13", "imdbRating": "9.0" },
        { "Title": "Batman Begins", "Year": "2005", "Rated": "PG-13", "imdbRating": "8.3" },
        { "Title": "Avatar", "Year": "2009", "Rated": "PG-13", "imdbRating": "7.9" }
    ];

    var filteredList = watchList
        .map(movie => {
            return {
                title: movie.Title,         // or // title: movie["Title"],
                rating: movie.imdbRating    // or // title: movie["imdbRating"],
            };
        })
        .filter(movie => {
            // return true it will keep the item
            // return false it will reject the item
            return parseFloat(movie.rating) >= 8.0;
        });
    
    console.log(filteredList);
    // [
    //     { title: 'Inception', rating: '8.8' },
    //     { title: 'Interstellar', rating: '8.6' },
    //     { title: 'The Dark Knight', rating: '9.0' },
    //     { title: 'Batman Begins', rating: '8.3' }
    // ]
    
    // or
    
    const watchList = [
        { "Title": "Inception", "Year": "2010", "Rated": "PG-13", "imdbRating": "8.8", },
        { "Title": "Interstellar", "Year": "2014", "Rated": "PG-13", "imdbRating": "8.6" },
        { "Title": "The Dark Knight", "Year": "2008", "Rated": "PG-13", "imdbRating": "9.0" },
        { "Title": "Batman Begins", "Year": "2005", "Rated": "PG-13", "imdbRating": "8.3" },
        { "Title": "Avatar", "Year": "2009", "Rated": "PG-13", "imdbRating": "7.9" }
    ];

    var filteredList = watchList
        .map(function(e) {
            return { title: e["Title"], rating: e["imdbRating"] };
        })
        .filter(e => e.rating >= 8);
    
    console.log(filteredList);
    // [
    //     { title: 'Inception', rating: '8.8' },
    //     { title: 'Interstellar', rating: '8.6' },
    //     { title: 'The Dark Knight', rating: '9.0' },
    //     { title: 'Batman Begins', rating: '8.3' }
    // ]
    
    // or
    
    const watchList = [
        { "Title": "Inception", "Year": "2010", "Rated": "PG-13", "imdbRating": "8.8", },
        { "Title": "Interstellar", "Year": "2014", "Rated": "PG-13", "imdbRating": "8.6" },
        { "Title": "The Dark Knight", "Year": "2008", "Rated": "PG-13", "imdbRating": "9.0" },
        { "Title": "Batman Begins", "Year": "2005", "Rated": "PG-13", "imdbRating": "8.3" },
        { "Title": "Avatar", "Year": "2009", "Rated": "PG-13", "imdbRating": "7.9" }
    ];
    
    var filteredList = watchList
        .map(({ Title: title, imdbRating: rating }) => ({ title, rating }))
        .filter(({ rating }) => rating > 8);

    console.log(filteredList);
    // [
    //     { title: 'Inception', rating: '8.8' },
    //     { title: 'Interstellar', rating: '8.6' },
    //     { title: 'The Dark Knight', rating: '9.0' },
    //     { title: 'Batman Begins', rating: '8.3' }
    // ]


    // Write your own "Array.prototype.myFilter()", 
    // which should behave exactly like "Array.prototype.filter()". 
    // You should not use the built-in "filter" method. 
    // The "Array" instance can be accessed in the "myFilter" method using "this".

    // The global variable
    const s = [23, 65, 98, 5];
    
    Array.prototype.myFilter = function(callback){
        const newArray = [];
    
        this.map(function(x) {
          if (callback(x) == true) {
            newArray.push(x);
          }
        });
    
        return newArray;
    };
    
    const new_s = s.myFilter(function(item){
        return item % 2 === 1;
    });

    console.log(new_s); // [ 23, 65, 5 ]
    
    // or

    // The global variable
    const s = [23, 65, 98, 5];
    
    Array.prototype.myFilter = function(callback){
        const newArray = [];
    
        this.forEach(function(x) {
          if (callback(x) == true) {
            newArray.push(x);
          }
        });
    
        return newArray;
    };
    
    const new_s = s.myFilter(function(item){
        return item % 2 === 1;
    });
    console.log(new_s); // [ 23, 65, 5 ]
    
    // or
    
    const s = [23,65,98,5];
    
    Array.prototype.myFilter = function(callback) {
        const newArray = [];
    
        for (let i = 0; i < this.length; i++) {
            if (callback(this[i]) === true) {
            newArray.push(this[i]);
            }
        }
        
        return newArray;
    };
    
    const new_s = s.myFilter(function(item) {
        return item % 2 === 1;
    });
    console.log(new_s); // [ 23, 65, 5 ]