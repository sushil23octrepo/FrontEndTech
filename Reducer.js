/*
a)reduce method executes a reducer function(that you provide) on each element of the array.
and resulting in single output value.

b)reduce method flattern an array means convert 3d or 2d array into single dimension array.

the reducer function takes below 4 agruments
1. accumulator
2. current value
3. current index
4. source array
5. initial value: optional
*/

//Ex: multiply each number under numbers array by two and only take the number which greater than 10 and show the
//the sum of returned number.
const numbers = [1, 4, 9, 16, 25];

let sum = numbers.map((item) => {
    return item * 2
})
.filter(q => q > 10)
.reduce((preValue, curValue) => {
        return preValue += curValue
},30)

console.log(sum);
//Here 30 is the initial value for accumulator
//Output will be 130, as reduce always return single value


const arr=[
    ["Zone_1","Zone_2"],
    ["Zone_3","Zone_4"],
    ["Zone_5","Zone_6"],
    ["Zone_7",["Zone_8"]]
];

const concats= arr.reduce((prevValue,curValue)=>{
return prevValue.concat(curValue);
});

console.log(concats);

