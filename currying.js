/*
Function Currying: Currying is a process in functional programming in which we transform a function with multiple
arguments into a sequence of nesting functions that take one argument at a time.
e.g. function f(a,b,c) is transformed to f(a)(b)(c)
*/

function sum(a, b, c) {
    return a + b + c;
}
//console.log(sum(5,3,2)); //Out put should be 10

//Currying implementation for above function sum(5)(3)(2)
function curry(fn) {
    return function (a) {
        return function (b) {
            return function (c) {
                return fn(a, b, c)
            }
        }
    }
}

const curriedSum = curry(sum)
console.log(curriedSum(5)(3)(2));
console.log(curriedSum(5)(3));




