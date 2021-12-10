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
console.log(arr);      // [ 'Cat', 'Dog', 'Tiger', 'Zebra' ]

    // Use the "slice" method in the "sliceArray" function to return part 
    // of the "anim" array given the provided "beginSlice" and "endSlice" indices. 
    // The function should return an array.

    function sliceArray(anim, beginSlice, endSlice) {
        return anim.slice(beginSlice, endSlice);
    }
    
    const inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
    console.log(sliceArray(inputAnim, 1, 3)); // [ 'Dog', 'Tiger' ]
    console.log(sliceArray(inputAnim, 0, 1)); // [ 'Cat' ]
    console.log(sliceArray(inputAnim, 1, 4)); // [ 'Dog', 'Tiger', 'Zebra' ]


//  Remove Elements from an Array Using ``slice`` Instead of ``splice``

const cities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
console.log(cities.splice(3, 1)); // [ 'London' ]
console.log(cities);              // [ 'Chicago', 'Delhi', 'Islamabad', 'Berlin' ]

    // Rewrite the function nonMutatingSplice by using slice instead of splice. 
    // It should limit the provided cities array to a length of 3, 
    // and return a new array with only the first three items.

    // Do not mutate the original array provided to the function.

    // nonMutatingSplice(["Chicago", "Delhi", "Islamabad", "London", "Berlin"]) 
    // should return ["Chicago", "Delhi", "Islamabad"].

    function nonMutatingSplice(cities) {
    // Only change code below this line
    return cities.splice(3);
    // Only change code above this line
    }
    const inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
    console.log(nonMutatingSplice(inputCities)); // [ 'London', 'Berlin' ]
    console.log(inputCities); // [ 'Chicago', 'Delhi', 'Islamabad' ]

    // solution:
    function nonMutatingSplice(cities) {
        return cities.slice(0, 3);
    }
    const inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
    console.log(nonMutatingSplice(inputCities)); 
    // [ 'Chicago', 'Delhi', 'Islamabad' ]


// Combine Two Arrays Using the "concat" Method

let concatenation = [1, 2, 3].concat([4, 5, 6]);
console.log(concatenation); // [ 1, 2, 3, 4, 5, 6 ]

let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let concatenation = array1.concat(array2);
console.log(concatenation); // [ 1, 2, 3, 4, 5, 6 ]
console.log(array1);        // [ 1, 2, 3 ]
console.log(array2);        // [ 4, 5, 6 ]

    // Use the "concat" method in the "nonMutatingConcat" function to concatenate "attach" to 
    // the end of "original". The function should return the concatenated array.

    function nonMutatingConcat(original, attach) {
        return original.concat(attach);
    }
    const first = [1, 2, 3];
    const second = [4, 5];
    console.log(nonMutatingConcat(first, second)); // [ 1, 2, 3, 4, 5 ]
    console.log(first);                            // [ 1, 2, 3 ]
    console.log(second);                           // [ 4, 5 ]


// Add Elements to the End of an Array Using concat Instead of push

const arr = [1, 2, 3];
arr.push([4, 5, 6]);
console.log(arr); // [ 1, 2, 3, [ 4, 5, 6 ] ]

    // Change the nonMutatingPush function so it uses concat to add newItem 
    // to the end of original instead of push. The function should return an array.

    function nonMutatingPush(original, newItem) {
      // Only change code below this line
      return original.push(newItem);
      // Only change code above this line
    }
    const first = [1, 2, 3];
    const second = [4, 5];
    console.log(first);                          // [ 1, 2, 3 ]
    console.log(second);                         // [ 4, 5 ]
    nonMutatingPush(first, second);
    console.log(first);                          // [ 1, 2, 3, [ 4, 5 ] ] // Mutated!!!
    console.log(second);                         // [ 4, 5 ]

    // Solution:
    function nonMutatingPush(original, newItem) {
      return original.concat(newItem);
    }
    const first = [1, 2, 3];
    const second = [4, 5];
    console.log(first);                          // [ 1, 2, 3 ]
    console.log(second);                         // [ 4, 5 ]
    console.log(nonMutatingPush(first, second)); // [ 1, 2, 3, 4, 5 ]
    console.log(first);                          // [ 1, 2, 3 ]
    console.log(second);                         // [ 4, 5 ]


// Use the ``reduce`` Method to Analyze Data

// See below for an example using "reduce" on the "users" array to return 
// the sum of all the users' ages. For simplicity, the example 
// only uses the first and second arguments.

const users = [
    { name: 'John', age: 34 },
    { name: 'Amy', age: 20 },
    { name: 'camperCat', age: 10 }
];
const sumOfAges = users.reduce((sum, user) => sum + user.age, 0);
console.log(sumOfAges); // 64

const users = [
    { name: 'John', age: 34 },
    { name: 'Amy', age: 20 },
    { name: 'camperCat', age: 10 }
];
const sumOfAges = users.reduce((sum, user) => sum + user.age, 2);
console.log(sumOfAges); // 66

// In another example, see how an object can be returned containing 
// the names of the users as properties with their ages as values.

const users = [
  { name: 'John', age: 34 },
  { name: 'Amy', age: 20 },
  { name: 'camperCat', age: 10 }
];

const usersObj = users.reduce((obj, user) => {
  obj[user.name] = user.age;
  return obj;
}, {});
console.log(usersObj);

    // The variable "watchList" holds an array of objects with information on several movies. 
    // Use "reduce" to find the average IMDB rating of the movies directed by "Christopher Nolan". 
    // Recall from prior challenges how to "filter" data and "map" over it to pull what you need. 
    // You may need to create other variables, and return the average rating from "getRating" function. 
    // Note that the rating values are saved as strings in the object 
    // and need to be converted into numbers before they are used in any mathematical operations.

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

    function getRating(watchList) {

        let christopherNolanMovies = watchList
        .filter(item => item.Director === "Christopher Nolan")
        .map(item => Number(item.imdbRating))
    
        let averageRating = christopherNolanMovies
        .reduce((previousValue, currentValue) => previousValue + currentValue) / christopherNolanMovies.length;
    
        return averageRating;
    }

    console.log(getRating(watchList)); // 8.675

    // or

    // the global variable
    var watchList = [
        {
        Title: "Inception",
        Year: "2010",
        Rated: "PG-13",
        Released: "16 Jul 2010",
        Runtime: "148 min",
        Genre: "Action, Adventure, Crime",
        Director: "Christopher Nolan",
        Writer: "Christopher Nolan",
        Actors: "Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page, Tom Hardy",
        Plot:
            "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
        Language: "English, Japanese, French",
        Country: "USA, UK",
        Awards: "Won 4 Oscars. Another 143 wins & 198 nominations.",
        Poster:
            "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
        Metascore: "74",
        imdbRating: "8.8",
        imdbVotes: "1,446,708",
        imdbID: "tt1375666",
        Type: "movie",
        Response: "True"
        },
        {
        Title: "Interstellar",
        Year: "2014",
        Rated: "PG-13",
        Released: "07 Nov 2014",
        Runtime: "169 min",
        Genre: "Adventure, Drama, Sci-Fi",
        Director: "Christopher Nolan",
        Writer: "Jonathan Nolan, Christopher Nolan",
        Actors: "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
        Plot:
            "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
        Language: "English",
        Country: "USA, UK",
        Awards: "Won 1 Oscar. Another 39 wins & 132 nominations.",
        Poster:
            "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
        Metascore: "74",
        imdbRating: "8.6",
        imdbVotes: "910,366",
        imdbID: "tt0816692",
        Type: "movie",
        Response: "True"
        },
        {
        Title: "The Dark Knight",
        Year: "2008",
        Rated: "PG-13",
        Released: "18 Jul 2008",
        Runtime: "152 min",
        Genre: "Action, Adventure, Crime",
        Director: "Christopher Nolan",
        Writer:
            "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
        Actors: "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
        Plot:
            "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
        Language: "English, Mandarin",
        Country: "USA, UK",
        Awards: "Won 2 Oscars. Another 146 wins & 142 nominations.",
        Poster:
            "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
        Metascore: "82",
        imdbRating: "9.0",
        imdbVotes: "1,652,832",
        imdbID: "tt0468569",
        Type: "movie",
        Response: "True"
        },
        {
        Title: "Batman Begins",
        Year: "2005",
        Rated: "PG-13",
        Released: "15 Jun 2005",
        Runtime: "140 min",
        Genre: "Action, Adventure",
        Director: "Christopher Nolan",
        Writer:
            "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
        Actors: "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
        Plot:
            "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
        Language: "English, Urdu, Mandarin",
        Country: "USA, UK",
        Awards: "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
        Poster:
            "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
        Metascore: "70",
        imdbRating: "8.3",
        imdbVotes: "972,584",
        imdbID: "tt0372784",
        Type: "movie",
        Response: "True"
        },
        {
        Title: "Avatar",
        Year: "2009",
        Rated: "PG-13",
        Released: "18 Dec 2009",
        Runtime: "162 min",
        Genre: "Action, Adventure, Fantasy",
        Director: "James Cameron",
        Writer: "James Cameron",
        Actors: "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
        Plot:
            "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
        Language: "English, Spanish",
        Country: "USA, UK",
        Awards: "Won 3 Oscars. Another 80 wins & 121 nominations.",
        Poster:
            "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
        Metascore: "83",
        imdbRating: "7.9",
        imdbVotes: "876,575",
        imdbID: "tt0499549",
        Type: "movie",
        Response: "True"
        }
    ];
    
    function getRating(watchList){
        // Add your code below this line
        var averageRating =
        watchList
        // Use filter to find films directed by Christopher Nolan
        .filter(film => film.Director === "Christopher Nolan")
        // Use map to convert their ratings from strings to numbers
        .map(film => Number(film.imdbRating))
        // Use reduce to add together their ratings
        .reduce((sumOfRatings, rating) => sumOfRatings + rating) /
        // Divide by the number of Nolan films to get the average rating
        watchList.filter(film => film.Director === "Christopher Nolan").length;
        // Add your code above this line
        return averageRating;
    }
    console.log(getRating(watchList));

    // or

    // the global variable
    var watchList = [
        {
        Title: "Inception",
        Year: "2010",
        Rated: "PG-13",
        Released: "16 Jul 2010",
        Runtime: "148 min",
        Genre: "Action, Adventure, Crime",
        Director: "Christopher Nolan",
        Writer: "Christopher Nolan",
        Actors: "Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page, Tom Hardy",
        Plot:
            "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
        Language: "English, Japanese, French",
        Country: "USA, UK",
        Awards: "Won 4 Oscars. Another 143 wins & 198 nominations.",
        Poster:
            "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
        Metascore: "74",
        imdbRating: "8.8",
        imdbVotes: "1,446,708",
        imdbID: "tt1375666",
        Type: "movie",
        Response: "True"
        },
        {
        Title: "Interstellar",
        Year: "2014",
        Rated: "PG-13",
        Released: "07 Nov 2014",
        Runtime: "169 min",
        Genre: "Adventure, Drama, Sci-Fi",
        Director: "Christopher Nolan",
        Writer: "Jonathan Nolan, Christopher Nolan",
        Actors: "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
        Plot:
            "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
        Language: "English",
        Country: "USA, UK",
        Awards: "Won 1 Oscar. Another 39 wins & 132 nominations.",
        Poster:
            "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
        Metascore: "74",
        imdbRating: "8.6",
        imdbVotes: "910,366",
        imdbID: "tt0816692",
        Type: "movie",
        Response: "True"
        },
        {
        Title: "The Dark Knight",
        Year: "2008",
        Rated: "PG-13",
        Released: "18 Jul 2008",
        Runtime: "152 min",
        Genre: "Action, Adventure, Crime",
        Director: "Christopher Nolan",
        Writer:
            "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
        Actors: "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
        Plot:
            "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
        Language: "English, Mandarin",
        Country: "USA, UK",
        Awards: "Won 2 Oscars. Another 146 wins & 142 nominations.",
        Poster:
            "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
        Metascore: "82",
        imdbRating: "9.0",
        imdbVotes: "1,652,832",
        imdbID: "tt0468569",
        Type: "movie",
        Response: "True"
        },
        {
        Title: "Batman Begins",
        Year: "2005",
        Rated: "PG-13",
        Released: "15 Jun 2005",
        Runtime: "140 min",
        Genre: "Action, Adventure",
        Director: "Christopher Nolan",
        Writer:
            "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
        Actors: "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
        Plot:
            "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
        Language: "English, Urdu, Mandarin",
        Country: "USA, UK",
        Awards: "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
        Poster:
            "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
        Metascore: "70",
        imdbRating: "8.3",
        imdbVotes: "972,584",
        imdbID: "tt0372784",
        Type: "movie",
        Response: "True"
        },
        {
        Title: "Avatar",
        Year: "2009",
        Rated: "PG-13",
        Released: "18 Dec 2009",
        Runtime: "162 min",
        Genre: "Action, Adventure, Fantasy",
        Director: "James Cameron",
        Writer: "James Cameron",
        Actors: "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
        Plot:
            "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
        Language: "English, Spanish",
        Country: "USA, UK",
        Awards: "Won 3 Oscars. Another 80 wins & 121 nominations.",
        Poster:
            "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
        Metascore: "83",
        imdbRating: "7.9",
        imdbVotes: "876,575",
        imdbID: "tt0499549",
        Type: "movie",
        Response: "True"
        }
    ];
    
    function getRating(watchList){
        // Add your code below this line
        var count = 0;
        var averageRating = watchList.reduce((sum,movie) =>  {
        if (movie.Director == "Christopher Nolan") {
            count+=1;
            return sum + parseFloat(movie.imdbRating);
        }
        return sum;
        }, 0) / count;
        // Add your code above this line
        return averageRating;
    }
    console.log(getRating(watchList));

    // or

    // the global variable
    var watchList = [
        {
        Title: "Inception",
        Year: "2010",
        Rated: "PG-13",
        Released: "16 Jul 2010",
        Runtime: "148 min",
        Genre: "Action, Adventure, Crime",
        Director: "Christopher Nolan",
        Writer: "Christopher Nolan",
        Actors: "Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page, Tom Hardy",
        Plot:
            "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
        Language: "English, Japanese, French",
        Country: "USA, UK",
        Awards: "Won 4 Oscars. Another 143 wins & 198 nominations.",
        Poster:
            "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
        Metascore: "74",
        imdbRating: "8.8",
        imdbVotes: "1,446,708",
        imdbID: "tt1375666",
        Type: "movie",
        Response: "True"
        },
        {
        Title: "Interstellar",
        Year: "2014",
        Rated: "PG-13",
        Released: "07 Nov 2014",
        Runtime: "169 min",
        Genre: "Adventure, Drama, Sci-Fi",
        Director: "Christopher Nolan",
        Writer: "Jonathan Nolan, Christopher Nolan",
        Actors: "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
        Plot:
            "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
        Language: "English",
        Country: "USA, UK",
        Awards: "Won 1 Oscar. Another 39 wins & 132 nominations.",
        Poster:
            "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
        Metascore: "74",
        imdbRating: "8.6",
        imdbVotes: "910,366",
        imdbID: "tt0816692",
        Type: "movie",
        Response: "True"
        },
        {
        Title: "The Dark Knight",
        Year: "2008",
        Rated: "PG-13",
        Released: "18 Jul 2008",
        Runtime: "152 min",
        Genre: "Action, Adventure, Crime",
        Director: "Christopher Nolan",
        Writer:
            "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
        Actors: "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
        Plot:
            "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
        Language: "English, Mandarin",
        Country: "USA, UK",
        Awards: "Won 2 Oscars. Another 146 wins & 142 nominations.",
        Poster:
            "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
        Metascore: "82",
        imdbRating: "9.0",
        imdbVotes: "1,652,832",
        imdbID: "tt0468569",
        Type: "movie",
        Response: "True"
        },
        {
        Title: "Batman Begins",
        Year: "2005",
        Rated: "PG-13",
        Released: "15 Jun 2005",
        Runtime: "140 min",
        Genre: "Action, Adventure",
        Director: "Christopher Nolan",
        Writer:
            "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
        Actors: "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
        Plot:
            "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
        Language: "English, Urdu, Mandarin",
        Country: "USA, UK",
        Awards: "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
        Poster:
            "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
        Metascore: "70",
        imdbRating: "8.3",
        imdbVotes: "972,584",
        imdbID: "tt0372784",
        Type: "movie",
        Response: "True"
        },
        {
        Title: "Avatar",
        Year: "2009",
        Rated: "PG-13",
        Released: "18 Dec 2009",
        Runtime: "162 min",
        Genre: "Action, Adventure, Fantasy",
        Director: "James Cameron",
        Writer: "James Cameron",
        Actors: "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
        Plot:
            "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
        Language: "English, Spanish",
        Country: "USA, UK",
        Awards: "Won 3 Oscars. Another 80 wins & 121 nominations.",
        Poster:
            "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
        Metascore: "83",
        imdbRating: "7.9",
        imdbVotes: "876,575",
        imdbID: "tt0499549",
        Type: "movie",
        Response: "True"
        }
    ];
    
    function getRating(watchList) {
        // Add your code below this line
        const averageRating = watchList.reduce(({ sum, count }, { Director: dir, imdbRating: rating },  idx, arr) => {
        if (dir === 'Christopher Nolan') {
            count++;
            sum += Number(rating);
        }
        return idx === arr.length - 1
            ? sum / count
            : { sum, count };
        }, { sum: 0, count: 0 });
        // Add your code above this line
        return averageRating;
    }
    console.log(getRating(watchList));


// Use Higher-Order Functions map, filter, or reduce to Solve a Complex Problem

    // Complete the code for the "squareList" function using any combination of 
    // "map()", "filter()", and "reduce()". The function should return a new array 
    // containing the squares of only the positive integers (decimal numbers are not integers) 
    // when an array of real numbers is passed to it. An example of an array of real numbers is 
    // "[-3, 4.8, 5, 3, -3.2]".

    // Note: Your function should not use any kind of "for" or "while" loops or
    // the "forEach()" function.

    // Output:
    // squareList([-3.7, -5, 3, 10, 12.5, 7, -4.5, -17, 0.3]) should return [9, 100, 49].
    // squareList([4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2]) should return [16, 1764, 36].

    const squareList = arr => {
      // Only change code below this line
      return arr;
      // Only change code above this line
    };
    
    const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
    console.log(squaredIntegers);

    // solution: 

    const squareList = arr => {
        let newArr = 
        arr
        .filter(number => Number.isInteger(number) === true && number >= 0)
        .map(number => number * number);

        return newArr;
    };

    const squaredIntegers1 = squareList([-3, 4.8, 5, 3, -3.2]);
    console.log(squaredIntegers1); // [ 25, 9 ]
    
    const squaredIntegers2 = squareList([-3.7, -5, 3, 10, 12.5, 7, -4.5, -17, 0.3]);
    console.log(squaredIntegers2); // [ 9, 100, 49 ]

    const squaredIntegers3 = squareList([4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2]);
    console.log(squaredIntegers3); // [ 16, 1764, 36 ]

    // or 

    const squareList = (arr) => {
      return arr
              .filter(num => num > 0 && num % parseInt(num) === 0)
              .map(num => Math.pow(num, 2));
    };
    
    const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
    console.log(squaredIntegers);

    // or

    const squareList = arr => {
      return arr.reduce((sqrIntegers, num) => {
        return Number.isInteger(num) && num > 0
          ? sqrIntegers.concat(num * num)
          : sqrIntegers;
      }, []);
    };


// Sort an Array Alphabetically using the ``sort`` Method

function ascendingOrder(arr) {
  return arr.sort(function(a, b) {
    return a - b;
  });
}
console.log(ascendingOrder([1, 5, 2, 3, 4]));         // [ 1, 2, 3, 4, 5 ]

function reverseAlpha(arr) {
  return arr.sort(function(a, b) {
    return a === b ? 0 : a < b ? 1 : -1;
  });
}
console.log(reverseAlpha(['l', 'h', 'z', 'b', 's'])); // [ 'z', 's', 'l', 'h', 'b' ]

    // Use the "sort" method in the "alphabeticalOrder" function to sort the elements 
    // of "arr" in alphabetical order. The function should return the sorted array.

    // Output:
    // alphabeticalOrder(["a", "d", "c", "a", "z", "g"]) should return ["a", "a", "c", "d", "g", "z"].
    // alphabeticalOrder(["x", "h", "a", "m", "n", "m"]) should return ["a", "h", "m", "m", "n", "x"].
    // alphabeticalOrder(["a", "a", "a", "a", "x", "t"]) should return ["a", "a", "a", "a", "t", "x"].

    function alphabeticalOrder(arr) {
      // Only change code below this line
    
      return arr
      // Only change code above this line
    }
    
    alphabeticalOrder(["a", "d", "c", "a", "z", "g"]);

    // solution:

    function alphabeticalOrder(arr) {
        
        return arr.sort(function(a, b){
            return a === b ? 0 : a > b ? 1 : -1;
        })
    }
    console.log(alphabeticalOrder(["a", "d", "c", "a", "z", "g"])); 
    // [ 'a', 'a', 'c', 'd', 'g', 'z' ]

    // or 

    function alphabeticalOrder(arr) {
        
        return arr.sort(function(a, b){
            return a === b ? 0 : a < b ? -1 : 1;
        })
    }
    console.log(alphabeticalOrder(["a", "d", "c", "a", "z", "g"])); 
    // [ 'a', 'a', 'c', 'd', 'g', 'z' ]


// Return a Sorted Array Without Changing the Original Array

    // Use the "sort" method in the "nonMutatingSort" function to sort the elements of 
    // an array in ascending order. The function should return a new array, 
    // and not mutate the "globalArray" variable.

    const globalArray = [5, 6, 3, 2, 9];

    function nonMutatingSort(arr) {
        let newArray = arr.slice();

        return newArray.sort(function(a, b) {
            return a - b;
          });
        }

    console.log(nonMutatingSort(globalArray)); // [ 2, 3, 5, 6, 9 ]
    console.log(globalArray);                  // [ 5, 6, 3, 2, 9 ]

    // or 

    const globalArray = [5, 6, 3, 2, 9];

    function nonMutatingSort(arr) {
        let newArray = arr.slice();

        return newArray.sort((a, b) => a - b);
    }

    console.log(nonMutatingSort(globalArray)); // [ 2, 3, 5, 6, 9 ]
    console.log(globalArray);                  // [ 5, 6, 3, 2, 9 ]


// Split a String into an Array Using the ``split`` Method

const str = "Hello World";
const bySpace = str.split(" ");
console.log(bySpace); // [ 'Hello', 'World' ]
console.log(str);     // "Hello World"

const otherString = "How9are7you2today";
const byDigits = otherString.split(/\d/);
console.log(byDigits);    // [ 'How', 'are', 'you', 'today' ]
console.log(otherString); // "How9are7you2today"

    // Use the "split" method inside the "splitify" function to split "str" into an array of words.
    // The function should return the array. Note that the words are not always 
    // separated by spaces, and the array should not contain punctuation.

    // splitify("Hello World,I-am code") should return ["Hello", "World", "I", "am", "code"].
    // splitify("Earth-is-our home")     should return ["Earth", "is", "our", "home"].
    // splitify("This.is.a-sentence")    should return ["This", "is", "a", "sentence"].

    function splitify(str) {
        return str.split(/\W/);
    }
    console.log(splitify("Hello World,I-am code")); // [ 'Hello', 'World', 'I', 'am', 'code' ]

    // /\W/ Matches any non-word character. This includes spaces and punctuation, 
    // but not underscores. It’s equivalent to /[^A-Za-z0-9_]/. 
    // For more information about Regular Expressions, see the official MDN Documentation
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions


// Combine an Array into a String Using the ``join`` Method

const arr = ["Hello", "World"];
const str = arr.join(" ");
console.log(str); // Hello World

    // Use the "join" method (among others) inside the "sentensify" function 
    // to make a sentence from the words in the string "str". The function 
    // should return a string. For example, "I-like-Star-Wars" would be converted 
    // to "I like Star Wars". For this challenge, do not use the "replace" method.

    // sentensify("May-the-force-be-with-you") should return a string.
    // sentensify("May-the-force-be-with-you") should return the string May the force be with you.
    // sentensify("The.force.is.strong.with.this.one") should return the string The force is strong with this one.
    // sentensify("There,has,been,an,awakening") should return the string There has been an awakening.

    function sentensify(str) {
        return str.split(/\W/).join(" ");
    }
    console.log(sentensify("May-the-force-be-with-you"));         // May the force be with you
    console.log(sentensify("The.force.is.strong.with.this.one")); // The force is strong with this one
    console.log(sentensify("There,has,been,an,awakening"));       // There has been an awakening


// Apply Functional Programming to Convert Strings to URL Slugs

    // Fill in the "urlSlug" function so it converts a string "title" 
    // and returns the hyphenated version for the URL. You can use 
    // any of the methods covered in this section, and don't use "replace". 
    // Here are the requirements:

    // The input is a string with spaces and title-cased words
    // The output is a string with the spaces between words replaced by a hyphen ("-")
    // The output should be all lower-cased letters
    // The output should not have any spaces

    // urlSlug("Winter Is Coming") should return the string winter-is-coming.
    // urlSlug(" Winter Is  Coming") should return the string winter-is-coming.
    // urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone") should return the string 
    // a-mind-needs-books-like-a-sword-needs-a-whetstone.
    // urlSlug("Hold The Door") should return the string hold-the-door.

    function urlSlug(title) {
        return title
        .toLowerCase()
        .trim()
        .split(/\s+/)
        .join("-");
    }
    console.log(urlSlug("Winter Is Coming"));
    console.log(urlSlug(" Winter Is  Coming"));

    // JavaScript RegExp Reference
    // https://www.w3schools.com/jsref/jsref_obj_regexp.asp

    // or

    function urlSlug(title) {
      return title
        .split(" ")
        .filter(substr => substr !== "")
        .join("-")
        .toLowerCase();
    }
    console.log(urlSlug("Winter Is Coming"));
    console.log(urlSlug(" Winter Is  Coming"));


// Use the every Method to Check that Every Element in an Array Meets a Criteria

const numbers = [1, 5, 8, 0, 10, 11];
console.log(numbers.every(function(currentValue) {
  return currentValue < 10; 
})); // false

    // Use the "every" method inside the "checkPositive" function to check 
    // if every element in "arr" is positive. The function should return a Boolean value.

    // checkPositive([1, 2, 3, -4, 5])  should return false.
    // checkPositive([1, 2, 3, 4, 5])   should return true.
    // checkPositive([1, -2, 3, -4, 5]) should return false.

    function checkPositive(arr) {
        return arr.every(function(currentValue) {
             return currentValue > 0;
        })
    }
    console.log(checkPositive([1, 2, 3, -4, 5])); // false

    // or

    function checkPositive(arr) {
      return arr.every(val => val > 0);
    }
    checkPositive([1, 2, 3, -4, 5]);


// Use the some Method to Check that Any Elements in an Array Meet a Criteria

// Te following code would check if any element in the numbers array is less than 10:
const numbers = [10, 50, 8, 220, 110, 11];
console.log(numbers.some(function(currentValue) {
                return currentValue < 10;
            })); // true

    // Use the "some" method inside the "checkPositive" function to check if 
    // any element in "arr" is positive. The function should return a Boolean value.

    // checkPositive([1, 2, 3, -4, 5])     should return true.
    // checkPositive([1, 2, 3, 4, 5])      should return true.
    // checkPositive([-1, -2, -3, -4, -5]) should return false.

    function checkPositive(arr) {
        return arr.some(function(currentValue){
            return currentValue > 0;
        })
    }
    console.log(checkPositive([1, 2, 3, -4, 5]));     // true
    console.log(checkPositive([1, 2, 3, 4, 5]));      // true
    console.log(checkPositive([-1, -2, -3, -4, -5])); // false


// Introduction to Currying and Partial Application

function unCurried(x, y) {
  return x + y;
}

// ES5
function curried(x) {
  return function(y) {
    return x + y;
  }
}
console.log(curried(1)(2)); // 3

// ES6
const curried = x => y => x + y
console.log(curried(1)(2)); // 3

// This is useful in your program if you can't supply all the arguments to a function at one time.
// You can save each function call into a variable, which will hold the returned function reference 
// that takes the next argument when it's available.
// Here's an example using the curried function in the example above:
const curried = x => y => x + y
const funcForY = curried(1);
console.log(funcForY(2)); // 3

// Similarly, partial application can be described as applying a few arguments
// to a function at a time and returning another function that is applied 
// to more arguments.
// Here's an example:
function impartial(x, y, z) {
  return x + y + z;
}
const partialFn = impartial.bind(this, 1, 2);
console.log(partialFn(10)); // 13

    // Fill in the body of the "add" function so it uses currying to add parameters "x", "y", and "z".

    // add(10)(20)(30) should return 60.
    // add(1)(2)(3)    should return 6.
    // add(11)(22)(33) should return 66.

    function add(x) {
        return function(y){
            return function(z){
                return x + y + z;
            }
        }
    }
    console.log(add(10)(20)(30)); // 60

    // or

    function add(x) {
      return y => z => x + y + z;
    }
    add(10)(20)(30);