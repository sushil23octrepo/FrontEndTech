function person(fname,lname) {
    this.firstName=fname;
    this.lastName=lname;
}

const person1=new person("Sushil","Kumar");
const person2=new person("Shiv","Malhotra");

/*
person1.getFullName=function() {
    return `${this.firstName} ${this.lastName}`;
}

console.log(person1.getFullName()) //This will print sushil kumar as output
console.log(person2.getFullName()) //This will throw exception at runtime as getfullname is not defined with person2
*/

//To attach getFullName method with every instances of person, we have to use prototype.
person.prototype.getFullName=function() {
    return `${this.firstName} ${this.lastName}`;
}
console.log(person1.getFullName()) //This will print sushil kumar as output
console.log(person2.getFullName()) //This will print Shiv Malhotra as output

