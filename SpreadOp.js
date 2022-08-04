/*
Spread operator introduced a new operator referred to as a spread operator,
 which consists of three dots (...). It allows an iterable to expand in places where more than zero arguments are expected.
 It gives us the privilege to obtain the parameters from an array.
*/

/*
Constructing array literal
When we construct an array using the literal form, the spread operator allows us to insert another array 
within an initialized array.
*/
console.log("=======Concatenating arrays========")
let colors=["Red","Yello"]
let newColors=[...colors,"Violet","Orange","Green"];
console.log(newColors);

console.log("=======Copying arrays========")
/*
If we copy the array elements without using the spread operator, 
then inserting a new element to the copied array will affect the original array.
But if we are copying the array by using the spread operator, 
then inserting an element in the copied array will not affect the original array
*/
let colors1=["Red","Yello"];
let newColors1=[...colors1];
console.log(newColors1);