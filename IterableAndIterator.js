/*
With 2015 two new protocol iterables and iterators are introduced
which help in iteration. Some of the data structure by default implements iterable proctocol
example is string, arrays,map,sets these are known as built in iterables.
"for of" loop is introduced to iterate over iterable
====Impmentation======
1. for an object to be iterable it must implement a method at the key [Symbol.iterator]
2. That method should not accept any argument and should return an object which confirms to the iterator protocol
3. The iterator protocol decides whether the object is an iterator or not.
4. the object must have a next() method and return an object with two property
    a) value: gives the current element
    b) done: boolean value indicate where or not there any more elements that could be iterated upon
*/

const obj = {
    [Symbol.iterator]: function () {
        let step = 0;
        const iterator = {
            next: function () {
                step++;
                if (step == 1)
                    return { value: "Hello", done: false }
                else if (step == 2)
                    return { value: "World", done: false }
                else
                    return { value: undefined, done: true }
            }
        }
        return iterator;
    }
}

for (const item of obj) {
    console.log(item)
}