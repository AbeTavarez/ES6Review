// ES5
const addES5 = function(num1, num2) {
    return num1 + num2;
}

// ES6
const addES6 = (num1, num2) => num1 + num2;


const makeUppercase = str => str.toUppercase();

const sayHello = () => 'Hello there!';

const number = [1, 2, 3];
const result = number.map(number => number * 2);

console.log(result);


const teamES5 = {
    team: 'ES5',
    learners : ['Mike', 'Rob', 'Maria', 'Alicia'],
    printTeamName: function() {
        return this.learners.map(function(learner) { // function
            return `${learner} is on our team ${this.team}`
        });
    }
};

console.log(teamES5.printTeamName());

const teamES6 = {
    team: 'ES6',
    learners : ['Mike', 'Rob', 'Maria', 'Alicia'],
    printTeamName: function() {
        return this.learners.map((learner) => { // function
            return `${learner} is on our team ${this.team}`
        });
    }
};

console.log(teamES6.printTeamName());