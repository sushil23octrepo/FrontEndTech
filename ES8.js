/*
Padding a String: ES8 introduces two string handling functions for padding a string. 
These functions can be used to add space or any desired set of characters to the beginning and end of a string value
*/

console.log('1699'.padStart(7,0)); //Output: 0001699
console.log('1699'.padStart(7)); //Output:    1699 (pad the String with blank spaces)
console.log('1699'.padEnd(7,'x')); //Output: 1699xxx
console.log('1699'.padEnd(7)); //Output: 1699    (pad the string with spaces)

const student ={
    firstName:'Kannan',
    lastName:'Sudhakaran'
 }
/*
Object.entries − The Object.entries() method can be used to access all the properties of an object.
*/
console.log(Object.entries(student));//Output: [ [ 'firstName', 'Kannan' ], [ 'lastName', 'Sudhakaran' ] ]

/*
Object.values() − The Object.values() method can be used to access values of all properties of an object.
*/
console.log(Object.values(student)) //[ 'Kannan', 'Sudhakaran' ]


