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


