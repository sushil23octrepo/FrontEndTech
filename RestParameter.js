/*
The rest parameter is introduced in ECMAScript 2015 or ES6, which improves the ability to handle parameters.
 The rest parameter allows us to represent an indefinite number of arguments as an array. By using the rest parameter, 
 a function can be called with any number of arguments.

 The rest parameter is prefixed with three dots (...). Although the syntax of the rest parameter is similar to the 
 spread operator, it is entirely opposite from the spread operator. The rest parameter has to be the last argument because
  it is used to collect all of the remaining elements into an array.

  Syntax:
  function fun(a, b, ...theArgs) {  
  // statements  
   }  
*/

function calculateSum(...args) {  
    let sum = 0;  
    for (let i of args) {  
        sum += i;  
    }  
    console.log("Sum = "+sum);  
  }  

  calculateSum(10,20,60);