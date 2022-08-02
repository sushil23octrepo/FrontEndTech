//Normal outer and inner function invocation
function outer() {
    let counter=0;

    function inner()
    {
        counter++
        console.log(counter)
    }
    inner();
}

outer();
outer();

//Out put of above function will be 1 and 1

/*Closre: In javascript when we return a function from another function, we are effectively returning a combination function 
definition along with function scope. This would let function definition have an associated persistent which could hold on
live data between executions. that combination of function scope chain is what is called a closure in java script.
*/
function closerOuter() {
    let counter=0;

    function closerInner()
    {
        counter++
        console.log(counter)
    }
    return closerInner;
}

const fn= closerOuter();
console.log("=====Closure=========>")
fn()
fn()
//This time output will be 1 and 2