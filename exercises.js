//* ============== Const and Let ======================>

//* Imagine that you are building an application to manage a user's Facebook profile

//* A profile might have a 'name', 'age', and 'datOfBirth'.

// TODO: Declare three variables 'name', 'age', and 'dateOfBirth'. Decide to use const or let whether you expect the value to change.





//* =============== Template String || Template Literals ================>

// TODO Refactor the functions to use template strings and ES6 syntax.

function fullName(firstName, lastName) {
    return firstName + lastName;
}


function doubleTheNumber(number) {
    return "Your number doubled is " + (2 * number);
}




// *============= Arrow || Fat Arrow Functions ========================>

// TODO Refactor the code below to use an arrow function.

const fibonacci = function(n) {
    if (n < 3) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
}


// TODO: Create a new method called getName(), that returns the name of the user.

const userProfile = {
    name: 'Juan'
};


// TODO: Create a new method called getUserFavFoods().
// TODO: The method should loops through the array and return the following array:
// TODO:  [ 'Rose loves pizza', 'Rose loves hotdogs', 'Rose loves ice-cream' ]

const user1Profile = {
    name: 'Rose',
    favoriteFoods: ['pizza', 'hotdogs', 'ice-cream'],

}