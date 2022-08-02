function Person(fname, lname) {
    this.firstName = fname;
    this.lastName = lname;
}

Person.prototype.getFullName = function () {
    return `${this.firstName} ${this.lastName} ${this.isSuperHero} super hero`;
}

function SuperHero(fname, lname) {
    //this={}  --whenever we used this keyword behind the scene it create this as empty object and then add property into it
    this.isSuperHero = true;
    Person.call(this, fname, lname)
    
}

SuperHero.prototype.fightCrime = function () {
    console.log('Fighting crime');
}

//Apply Prototype inheritance to call getFullName method of person
//It will create prototype chain and access all method of person
SuperHero.prototype = Object.create(Person.prototype)
SuperHero.prototype.constructor=SuperHero

const batman = new SuperHero("Sushil", "Kumar");
console.log(batman.getFullName());
