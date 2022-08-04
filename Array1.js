/*map: array.map(function(currentValue, index, arr), thisValue:optional)
it returns new array after executing something
*/

//Return the number greater than 9
const numbers = [1, 4, 9, 16, 25];
// const newNumber = numbers.map((currentElm, index, arr) => {
//     return currentElm > 9;
// })

// const newNumber1 = numbers.map((currentElm, index, arr) => {
//     return `value at index ${index} is ${currentElm} which belongs to array ${arr}`;
// })

// console.log(newNumber);
// console.log(newNumber1);

var sqrts = numbers.map((item, index) => {
    return Math.sqrt(item);
})
console.log(sqrts);

const calculatedNums = numbers.map((item, index) => {
    return item * 2
}).filter(q => q > 10);

console.log(calculatedNums);