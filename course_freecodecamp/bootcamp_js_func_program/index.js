// Learn About Functional Programming

    // The members of freeCodeCamp happen to love tea.

    // In the code editor, the "prepareTea" and "getTea" functions are already defined for you. 
    // Call the "getTea" function to get 40 cups of tea for the team, 
    // and store them in the "tea4TeamFCC" variable.

    // Function that returns a string representing a cup of green tea
    const prepareTea = () => 'greenTea';

    /*
    Given a function (representing the tea type) and number of cups needed, 
    the following function returns an array of strings 
    (each representing a cup of a specific type of tea).
    */
    const getTea = (numOfCups) => {
        const teaCups = [];

        for(let cups = 1; cups <= numOfCups; cups += 1) {
            const teaCup = prepareTea();
            teaCups.push(teaCup);
        }
        return teaCups;
    };

    const tea4TeamFCC = getTea(40);
    console.log(tea4TeamFCC);


// Understand Functional Programming Terminology

    // Prepare 27 cups of green tea and 13 cups of black tea 
    // and store them in tea4GreenTeamFCC and tea4BlackTeamFCC variables, respectively. 
    // Note that the getTea function has been modified so it now takes a function 
    // as the first argument.

    // Note: The data (the number of cups of tea) is supplied as the last argument. 
    // We'll discuss this more in later lessons.

    // Function that returns a string representing a cup of green tea
    const prepareGreenTea = () => 'greenTea';

    // Function that returns a string representing a cup of black tea
    const prepareBlackTea = () => 'blackTea';

    /*
    Given a function (representing the tea type) and number of cups needed, the
    following function returns an array of strings (each representing a cup of
    a specific type of tea).
    */
    const getTea = (prepareTea, numOfCups) => {
    const teaCups = [];

    for(let cups = 1; cups <= numOfCups; cups += 1) {
        const teaCup = prepareTea();
        teaCups.push(teaCup);
    }
    return teaCups;
    };

    const tea4GreenTeamFCC = getTea(prepareGreenTea, 27);
    const tea4BlackTeamFCC = getTea(prepareBlackTea, 13);

    console.log(
    tea4GreenTeamFCC,
    tea4BlackTeamFCC);

// Understand the Hazards of Using Imperative Code

// Examine the code in the editor. It's using a method that has side effects in the program, 
// causing incorrect behaviour. The final list of open tabs, stored in "finalTabs.tabs", 
// should be "['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium', 'new tab', 'Netflix', 'YouTube', 
// 'Vine', 'GMail', 'Work mail', 'Docs', 'freeCodeCamp', 'new tab']" but 
// the list produced by the code is slightly different.

// Change "Window.prototype.tabClose" so that it removes the correct tab.

    // tabs is an array of titles of each site open within the window
    const Window = function(tabs) {
        this.tabs = tabs; // We keep a record of the array inside the object
    };
    
    // When you join two windows into one window
    Window.prototype.join = function(otherWindow) {
        this.tabs = this.tabs.concat(otherWindow.tabs);
        return this;
    };
    
    // When you open a new tab at the end
    Window.prototype.tabOpen = function(tab) {
        this.tabs.push('new tab'); // Let's open a new tab for now
        return this;
    };
    
    // When you close a tab
    Window.prototype.tabClose = function(index) {
    
        // Only change code below this line
    
        const tabsBeforeIndex = this.tabs.splice(0, index); // Get the tabs before the tab
        const tabsAfterIndex = this.tabs.splice(1);         // Get the tabs after the tab
    
        this.tabs = tabsBeforeIndex.concat(tabsAfterIndex); // Join them together
    
        // Only change code above this line
    
        return this;
    };
    
    // Let's create three browser windows

    const workWindow = new Window(['GMail', 'Inbox', 'Work mail', 'Docs', 'freeCodeCamp']); 
    // Your mailbox, drive, and other work sites
    
    const socialWindow = new Window(['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium']); 
    // Social sites
    
    const videoWindow = new Window(['Netflix', 'YouTube', 'Vimeo', 'Vine']); 
    // Entertainment sites
    
    // Now perform the tab opening, closing, and other operations
    const finalTabs = socialWindow
        .tabOpen() // Open a new tab for cat memes
        .join(videoWindow.tabClose(2)) // Close third tab in video window, and join
        .join(workWindow.tabClose(1).tabOpen());
    console.log(finalTabs.tabs);


// Avoid Mutations and Side Effects Using Functional Programming

    // Fill in the code for the function incrementer so it returns the value 
    // of the global variable fixedValue increased by one.
    // The global variable
    let fixedValue = 4;

    function incrementer() {
    // Only change code below this line
        let newValue = fixedValue + 1;
        return newValue;
    // Only change code above this line
    }
    console.log(incrementer()); // 5


// Pass Arguments to Avoid External Dependence in a Function

    // Let's update the "incrementer" function to clearly declare its dependencies.

    // Write the "incrementer" function so it takes an argument, 
    // and then returns a result after increasing the value by one.

    // The global variable
    let fixedValue = 4;

    // Only change code below this line
    function incrementer(fixedValue) {
        return fixedValue + 1;
    // Only change code above this line
    }


// Refactor Global Variables Out of Functions
    
    // * Reminder *
    // https://codeburst.io/javascript-passing-by-value-vs-reference-explained-in-plain-english-8d00fd06a47c
    // changing a primitive value
    let a = 1;
    let b = a;
    console.log(a); // 1
    console.log(b); // 1
    a = 2;
    console.log(a); // 2
    console.log(b); // 1
    // changing a object
    const arrVar = { a: 0, b: 1, c: 2 };
    const newArr = arrVar;
    newArr.c = 3;
    console.log(newArr); // { a: 0, b: 1, c: 3 }
    console.log(arrVar); // { a: 0, b: 1, c: 3 }
    arrVar.c = 2; 
    console.log(newArr); // { a: 0, b: 1, c: 2 }
    console.log(arrVar); // { a: 0, b: 1, c: 3 }

    // changing a value in "newArr" would change the value in "arrVar"
    const arrVar = [0, 1, 2];
    const newArr = arrVar;
    newArr.push(3);
    console.log(newArr); // [ 0, 1, 2, 3 ]
    console.log(arrVar); // [ 0, 1, 2, 3 ]
    arrVar.push(4);
    console.log(newArr); // [ 0, 1, 2, 3, 4 ]
    console.log(arrVar); // [ 0, 1, 2, 3, 4 ]

    const arrVar = [0, 1, 2];
    function newArray(array) {
        let newArr = [];
        return newArr.concat(arrVar, array);
    }
    console.log(newArray([3])); // [ 0, 1, 2, 3 ]
    console.log(arrVar);        // [ 0, 1, 2 ]

    // Rewrite the code so the global array bookList is not changed inside either function. 
    // The add function should add the given bookName to the end of the array passed to it 
    // and return a new array (list). The remove function should remove the given bookName 
    // from the array passed to it.

    // Note: Both functions should return an array, and any new parameters should be added 
    // before the bookName parameter.
    // The global variable
    const bookList = [
                        "The Hound of the Baskervilles", 
                        "On The Electrodynamics of Moving Bodies", 
                        "Philosophiæ Naturalis Principia Mathematica", 
                        "Disquisitiones Arithmeticae"
                     ];

                     // Change code below this line
    // function add (bookName) {

    //     bookList.push(bookName);
    //     return bookList;
        
    //     // Change code above this line
    // }
    /* This function should add a book to the list and return the list */
    // New parameters should come before bookName
    function add (arr, bookName) {
        let newArr = [...arr]; // Copy the bookList array to a new array.
        newArr.push(bookName); // Add bookName parameter to the end of the new array.
        return newArr;         // Return the new array.
    }

    // Change code below this line
    // function remove (bookName) {
    //     let newBookName = []
    //     newBookName.push[bookName];
    //     const book_index = bookList.indexOf(newBookName);
    //     if (book_index >= 0) {

    //         bookList.splice(book_index, 1);
    //         return bookList;

    //         // Change code above this line
    //         }
    // }
    /* This function should remove a book from the list and return the list */
    // New parameters should come before the bookName one
    function remove(arr, bookName) {
        let newArr = [...arr]; // Copy the bookList array to a new array.
        
        if (newArr.indexOf(bookName) >= 0) {

          // Check whether the bookName parameter is in new array.
          newArr.splice(newArr.indexOf(bookName), 1); // Remove the given paramater 
                                                      // from the new array.

          return newArr;                              // Return the new array.

        }
    }

    const newBookList    = add        (bookList, 'A Brief History of Time');
    const newerBookList  = remove     (bookList, 'On The Electrodynamics of Moving Bodies');
    const newestBookList = remove (add(
                                        bookList, 'A Brief History of Time'
                                       ),'On The Electrodynamics of Moving Bodies'
                                  );

    console.log(bookList);


// Use the map Method to Extract Data from an Array

    // The "watchList" array holds objects with information on several movies. 
    // Use "map" on "watchList" to assign a new array of objects to the "ratings" variable. 
    // Each movie in the new array should have only a "title" key with the name of the film, 
    // and a "rating" key with the IMDB rating. The code in the editor currently uses 
    // a "for" loop to do this, so you should replace the loop functionality 
    // with your "map" expression.

    // ratings should equal 
    // [
    //  {"title": "Inception", "rating": "8.8"}, 
    //  {"title": "Interstellar", "rating": "8.6"}, 
    //  {"title": "The Dark Knight", "rating": "9.0"},
    //  {"title": "Batman Begins", "rating": "8.3"}, 
    //  {"title": "Avatar", "rating": "7.9"}
    // ]

    // The global variable
    const watchList = [
        {
        "Title": "Inception",
        "Year": "2010",
        "Rated": "PG-13",
        "Released": "16 Jul 2010",
        "Runtime": "148 min",
        "Genre": "Action, Adventure, Crime",
        "Director": "Christopher Nolan",
        "Writer": "Christopher Nolan",
        "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
        "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
        "Language": "English, Japanese, French",
        "Country": "USA, UK",
        "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
        "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
        "Metascore": "74",
        "imdbRating": "8.8",
        "imdbVotes": "1,446,708",
        "imdbID": "tt1375666",
        "Type": "movie",
        "Response": "True"
        },
        {
        "Title": "Interstellar",
        "Year": "2014",
        "Rated": "PG-13",
        "Released": "07 Nov 2014",
        "Runtime": "169 min",
        "Genre": "Adventure, Drama, Sci-Fi",
        "Director": "Christopher Nolan",
        "Writer": "Jonathan Nolan, Christopher Nolan",
        "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
        "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
        "Language": "English",
        "Country": "USA, UK",
        "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
        "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
        "Metascore": "74",
        "imdbRating": "8.6",
        "imdbVotes": "910,366",
        "imdbID": "tt0816692",
        "Type": "movie",
        "Response": "True"
        },
        {
        "Title": "The Dark Knight",
        "Year": "2008",
        "Rated": "PG-13",
        "Released": "18 Jul 2008",
        "Runtime": "152 min",
        "Genre": "Action, Adventure, Crime",
        "Director": "Christopher Nolan",
        "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
        "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
        "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
        "Language": "English, Mandarin",
        "Country": "USA, UK",
        "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
        "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
        "Metascore": "82",
        "imdbRating": "9.0",
        "imdbVotes": "1,652,832",
        "imdbID": "tt0468569",
        "Type": "movie",
        "Response": "True"
        },
        {
        "Title": "Batman Begins",
        "Year": "2005",
        "Rated": "PG-13",
        "Released": "15 Jun 2005",
        "Runtime": "140 min",
        "Genre": "Action, Adventure",
        "Director": "Christopher Nolan",
        "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
        "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
        "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
        "Language": "English, Urdu, Mandarin",
        "Country": "USA, UK",
        "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
        "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
        "Metascore": "70",
        "imdbRating": "8.3",
        "imdbVotes": "972,584",
        "imdbID": "tt0372784",
        "Type": "movie",
        "Response": "True"
        },
        {
        "Title": "Avatar",
        "Year": "2009",
        "Rated": "PG-13",
        "Released": "18 Dec 2009",
        "Runtime": "162 min",
        "Genre": "Action, Adventure, Fantasy",
        "Director": "James Cameron",
        "Writer": "James Cameron",
        "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
        "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
        "Language": "English, Spanish",
        "Country": "USA, UK",
        "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
        "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
        "Metascore": "83",
        "imdbRating": "7.9",
        "imdbVotes": "876,575",
        "imdbID": "tt0499549",
        "Type": "movie",
        "Response": "True"
        }
    ];
        
    // Only change code below this line
        
    // using "for" loop
    // const ratings = [];
    // for (let i = 0; i < watchList.length; i++) {
    //     ratings.push({title: watchList[i]["Title"], rating: watchList[i]["imdbRating"]});
    // }
        
    // using "map" expression
    const ratings = watchList.map(item => ({
        title: item["Title"],
        rating: item["imdbRating"]
    }));

    // or

    // const ratings = watchList.map(({ Title: title, imdbRating: rating }) => ({title, rating}));

    // Only change code above this line
    
    console.log(JSON.stringify(ratings));
    // [
    //  {"title":"Inception","rating":"8.8"},
    //  {"title":"Interstellar","rating":"8.6"},
    //  {"title":"The Dark Knight","rating":"9.0"},
    //  {"title":"Batman Begins","rating":"8.3"},
    //  {"title":"Avatar","rating":"7.9"}
    // ]


// Implement map on a Prototype

    // Write your own "Array.prototype.myMap()", which should behave exactly like "Array.prototype.map()".
    // You should not use the built-in "map" method. The "Array" instance can be accessed 
    // in the "myMap" method using "this".

    // The global variable
    const s = [23, 65, 98, 5];

    Array.prototype.myMap = function(callback) {
      const newArray = [];

      // Only change code below this line
      for (let i = 0; i < this.length; i++) { // In the global execution context (outside of any function), 
                                              // "this" refers to the global object whether 
                                              // in strict mode or not
        newArray.push(callback(this[i]));

      }
      // Only change code above this line

      return newArray;
    };

    const new_s = s.myMap(function(item) {
      return item * 2;
    });
    console.log(new_s); // [ 46, 130, 196, 10 ]


// Use the filter Method to Extract Data from an Array

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
        {
        "Title": "Inception",
        "Year": "2010",
        "Rated": "PG-13",
        "Released": "16 Jul 2010",
        "Runtime": "148 min",
        "Genre": "Action, Adventure, Crime",
        "Director": "Christopher Nolan",
        "Writer": "Christopher Nolan",
        "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
        "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
        "Language": "English, Japanese, French",
        "Country": "USA, UK",
        "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
        "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
        "Metascore": "74",
        "imdbRating": "8.8",
        "imdbVotes": "1,446,708",
        "imdbID": "tt1375666",
        "Type": "movie",
        "Response": "True"
        },
        {
        "Title": "Interstellar",
        "Year": "2014",
        "Rated": "PG-13",
        "Released": "07 Nov 2014",
        "Runtime": "169 min",
        "Genre": "Adventure, Drama, Sci-Fi",
        "Director": "Christopher Nolan",
        "Writer": "Jonathan Nolan, Christopher Nolan",
        "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
        "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
        "Language": "English",
        "Country": "USA, UK",
        "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
        "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
        "Metascore": "74",
        "imdbRating": "8.6",
        "imdbVotes": "910,366",
        "imdbID": "tt0816692",
        "Type": "movie",
        "Response": "True"
        },
        {
        "Title": "The Dark Knight",
        "Year": "2008",
        "Rated": "PG-13",
        "Released": "18 Jul 2008",
        "Runtime": "152 min",
        "Genre": "Action, Adventure, Crime",
        "Director": "Christopher Nolan",
        "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
        "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
        "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
        "Language": "English, Mandarin",
        "Country": "USA, UK",
        "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
        "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
        "Metascore": "82",
        "imdbRating": "9.0",
        "imdbVotes": "1,652,832",
        "imdbID": "tt0468569",
        "Type": "movie",
        "Response": "True"
        },
        {
        "Title": "Batman Begins",
        "Year": "2005",
        "Rated": "PG-13",
        "Released": "15 Jun 2005",
        "Runtime": "140 min",
        "Genre": "Action, Adventure",
        "Director": "Christopher Nolan",
        "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
        "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
        "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
        "Language": "English, Urdu, Mandarin",
        "Country": "USA, UK",
        "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
        "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
        "Metascore": "70",
        "imdbRating": "8.3",
        "imdbVotes": "972,584",
        "imdbID": "tt0372784",
        "Type": "movie",
        "Response": "True"
        },
        {
        "Title": "Avatar",
        "Year": "2009",
        "Rated": "PG-13",
        "Released": "18 Dec 2009",
        "Runtime": "162 min",
        "Genre": "Action, Adventure, Fantasy",
        "Director": "James Cameron",
        "Writer": "James Cameron",
        "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
        "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
        "Language": "English, Spanish",
        "Country": "USA, UK",
        "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
        "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
        "Metascore": "83",
        "imdbRating": "7.9",
        "imdbVotes": "876,575",
        "imdbID": "tt0499549",
        "Type": "movie",
        "Response": "True"
        }
    ];
    
    // Only change code below this line
    
    const filteredList = watchList
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
    
    // Only change code above this line
    
    console.log(filteredList);
    // [
    //     { title: 'Inception', rating: '8.8' },
    //     { title: 'Interstellar', rating: '8.6' },
    //     { title: 'The Dark Knight', rating: '9.0' },
    //     { title: 'Batman Begins', rating: '8.3' }
    // ]


// Return Part of an Array Using the "slice" Method

const arr = ["Cat", "Dog", "Tiger", "Zebra"];
const newArray = arr.slice(1, 3);
console.log(newArray); // [ 'Dog', 'Tiger' ]