//Array Destructuring
var nameArr=["Sushil","Kumar"]
const [firstName,lastName]=nameArr;
console.log(firstName,lastName);

var colors = ["Violet", "Indigo", "Blue", "Green", "Yellow", "Orange", "Red"];  
const [color1,color2,color3]=colors;
console.log(color1,color2,color3);

var[color1_1, ,color3_1, ,color5_1] = colors; //Leave space for unpick elements 
console.log(color1_1,color3_1,color5_1);

//Array destructuring and Rest operator
console.log('====With rest=====')
const [c1,c2,...restColors]=colors;
console.log(c1,c2)
console.log(restColors)

