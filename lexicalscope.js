let a=10;

function outer()
{
    let b=20;
    function inner()
    {
        let c=30;
        console.log(a,b,c);
    }
    inner();
}

//How variable scope resolved: let us examine how variable scope handled by javascript engine.
//in console.log statement it will check variable c in inner function as it found so value will be prinited
//for "b" it will first check inner since not found it will go to outer function as it found so value will be prinited
//for "c" it will first check inner since not found it will go to outer function as  not found it will try to find out
// in gloabal scope and print value accordingly. this concept is also known as lexical scoping.

outer();