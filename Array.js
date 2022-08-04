//Array.prototype.indexOf(): return the first index of the element in array or -1 if found none
let arr=['Mango','Orage','Apple','Banana']
console.log(arr.indexOf("Banana"));
//Push: push method add one or more items at the end of array and return the new length of the array
console.log(arr.push("Guava"));
//unshift: it just opposite of push method add one or more items at the begining of array of array and return the new length of the array
arr.unshift("Watermelon")
console.log(arr);
//pop: it removes the last element from the array and return that element
arr.pop()
console.log(arr);
//shift: it removes the first element from the array and return that element
arr.shift()
console.log(arr);
//splice: Adds and/or removes elements from an arry.
const months=["Jan","march","April","June","July"]

//Ex1: Add dec at the end of month array
months.splice(5,0,"Dec") //This statement tells add Dec at index 5 and do not delete(0 indicate) anyting.
console.log(months)
//Ex2: Update march to March
months.splice(1,1,"March")
console.log(months)
//Ex3: Remove june from array
months.splice(3,1) //Here we will not pass third agrument as we are not replacing any value at deleted place
console.log(months)