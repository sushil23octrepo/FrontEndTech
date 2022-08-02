//Implicit Binding
const person = {
    name: "Sushil Kumar",
    greet: function () {
        console.log(`Hello ${this.name}`)
    }
}
person.greet();


//Explicit Binding
//In below function call keyword will the context for this under greetPerson method
function greetPerson() {
    console.log(`Hello ${this.name}`)
}
greetPerson.call(person);

//New binding
function greetPerson1(name) {
    this.name=name;
}

const p1=new greetPerson1("Testing");
console.log(p1.name)
