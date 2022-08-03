/*
Generator function is used to make object iterables by using yield keyword and by providing * in function
*/

function* getNumbers() {
    for (let i = 0; i < 5; i++) {
        yield `Number ${i}`
    }
}

const numbers=getNumbers();

for(let number of numbers) {
    console.log(number);
}


