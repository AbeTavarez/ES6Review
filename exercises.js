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





//* ==================== Classes ================================>

// TODO: 1. Create a class called Human. 
// TODO: 2. Inside the constructor function create a property called *planet* and give it a value. ex: this.planet = 'Jupiter';
// TODO: 3. Now, outside the constructor, add a new method called *printPlanet* that console logs the planet of origin. ex: printPlanet(){...}

// TODO: 4. Create a new class called Person, that inherits the properties from the Human class. *hint: use the keyword: extends*
// TODO: 5. Add a new property called *name* in the constructor and give it a value. ex: this.name = 'Abe';
// TODO: 6. Add a new method to the Person class called *printName* that logs the Person's name.
// TODO: 7. Create a new instance of Person *hint: use the new keyword*, now make sure you can execute the Person and Human methods.


//* ======================== Promises ======================================>

// TODO: 1. Create index.html file, an app.js file and link them.
// TODO: 2. Using fetch make a request to `'https://jsonplaceholder.typicode.com/posts'` and log the data to the console.
// TODO: 3. Try using *async await*
// ToDo: 4. Practice using array methods like map to loop over the array.