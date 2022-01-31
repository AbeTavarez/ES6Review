class Human {
    planet = 'Mars'

    printPlanet = () => {
        console.log(this.planet);
    }
}

class Person extends Human {
        name = 'abe'

    printName = () => {
        console.log(this.name);
    }
}

const person = new Person();
person.printName();
person.printPlanet();