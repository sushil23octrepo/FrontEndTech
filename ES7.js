/*
ES7 introduces a new mathematical operator called exponentiation operator. This operator is similar to using Math.pow() method.
 Exponentiation operator is represented by a double asterisk **. The operator can be used only with numeric values. 
 The syntax for using the exponentiation operator is given below −

 Syntax:
 base_value ** exponent_value
*/

console.log("Calculate exponent of number using pow and exponancial operator")
const base = 2
const exponent = 3
console.log(Math.pow(base, exponent));
console.log(base ** exponent);

console.log("==Array Includes==")
/*
The Array.includes() method introduced in ES7 helps to check if an element is available in an array
*/

let marks = [50,60,70,80]
console.log(marks.includes(70));
console.log(marks.includes(70,3)); //search from index 3. Here output will be false as index of 70 start before 3