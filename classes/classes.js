class Human {
    constructor() {
        this.planet = 'Mars'
    }

    printPlanet() {
        console.log(this.planet);
    }
}

class Person extends Human {
    constructor() {
        super(); //calls the Human class constructor function
        this.name = 'abe'
    }

    printName(){
        console.log(this.name);
    }
}

const person = new Person('tav');
person.printName();
person.printPlanet();