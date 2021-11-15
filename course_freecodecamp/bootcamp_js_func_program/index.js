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
    // Note that the getTea function has been modified so it now takes a function as the first argument.

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
    tea4BlackTeamFCC
    );