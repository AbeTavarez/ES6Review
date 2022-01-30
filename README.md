# ES6 Review

## Intro

ECMAScript is the standard and JavaScript is the implementation.
ES6 or ECMAScript 6 is a version of JavaScript which is also known as ES2015.

ES6 Code it's usually transpiled into ES5 by Babel. Babel is a transpiler that 
converts our ES6 code to ES5 code that is supported by all browsers. Even if we continue progressing with ES6 or any newer version of JavaScript, we can continue to use Babel to transpile our code to a version of JavaScript that is safe to run across all browsers. 

## Const and Let variables

- Const variables are used to assign values that we don't expect to change. Some of those values can be a function, object, array, or others.

`const myFunction = () => {};`
`const myObject = {};`
`const myArray = [];`

- Let variables are used to assign values that we expect to change overtime. Some of those values can be a string, number, or others.

`let userInput = '';`
`let randomNumber = Math.floor(Math.random() * 5);`

## Template Strings || Template Literals

- Template Strings give us a nicer way to join string and variables.
- We can also use any JavaScript expressions inside template strings.

`const getMessage = () => {
    const year = new Date().getFullYear();
    const date = new Date().getDate();
    const month = new Date().getMonth() + 1;

    return `Today's date is: ${month}/${date}/${year}`;
};`


## Arrow Functions

- Arrow Functions are also known as fat arrow functions.

- When we write arrow functions we don't need to use the keyword `function`. We use an `=>` arrow; using an equal sign and a greater than sign.

-ES5
`const add = function(num1, num2) {
    return num1 + num2;
}`

-ES6
`const add = (num1, num2) => num1 + num2`

- If the arrow function has a single expression, we can remove the curly braces and the return keyword. Arrow functions have an implicit return.

- If we're expecting a single parameter in our function, we can remove the parenthesis.
    `const makeUppercase = str => str.toUppercase()`

- If we're expecting no parameters in our function, we have to use parenthesis.
    `const sayHello = () => 'Hello there!'`

- Arrow functions are perfect to use within methods.
    `const number = [1, 2, 3];`
    `number.map(number => number * 2)`

- Arrow functions handle the `this` keyword differently. They use the `lexical this`, the `lexical this` acts as we would expect the `this` keyword to be.
Arrow functions bind the value of `this` to the surrounding context.
