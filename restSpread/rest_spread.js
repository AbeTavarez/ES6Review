//* Spread Op
const oldArray = [1, 2, 3];
// this action does't mutate the oldArray.
const newArray = [...oldArray, 4, 5, 6]; // try removing the spread op.

console.log(newArray);
console.log(oldArray);

const person = {
    name: 'abe'
};

const newPerson = {
    ...person,
    age: 28
}

console.log(newPerson);

//* Rest Op

const sortNums = (...values) => values.sort(); // we can use array method sort;

console.log(sortNums(8,3,5,6,7,2,1,4,0));
