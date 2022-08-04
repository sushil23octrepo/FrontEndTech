/*
Object destructuring is similar to array destructing except that instead of values being pulled out of an 
array, the properties and their corresponding can be pulled out from an object.
*/

const num = {x: 100, y: 200};  
const {x, y} = num;  
console.log("====Ex1=======")  
console.log(x); // 100  
console.log(y); // 200  

let {c, d, ...args} = {a: 100, b: 200, c: 300, d: 400, e: 500}  
console.log("====Ex2=======")  
console.log(c);   
console.log(d);   
console.log(args);  