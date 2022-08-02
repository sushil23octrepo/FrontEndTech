class Person {
    constructor(fname, lname) {
        this.firstName = fname;
        this.lastName = lname;
    }

    getFullName() {
        return `${this.firstName} ${this.lastName} is super hero`;
    }
}

class SuperHero extends Person {
    constructor(fname, lname) {
        super(fname, lname);
    }

    fightCrime() {
        console.log('Fighting crime');
    }
}

const batman = new SuperHero("Sushil", "Kumar");
console.log(batman.getFullName());
batman.fightCrime()