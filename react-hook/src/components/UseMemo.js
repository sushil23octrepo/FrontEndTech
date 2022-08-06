import React, { useState, useMemo } from 'react'

function UseMemo() {
    const [firstCounter, setFirstCounter] = useState(0)
    const [secondCounter, setSecondCounter] = useState(0)

    const incementFirstCounter = () => {
        setFirstCounter(firstCounter + 1)
    }

    const incrementSecondCounter = () => {
        setSecondCounter(secondCounter + 1);
    }

    /*Whenever we click on first counter count button or second counter count button below function will execute always
    and will take some time to load data even if second counter is completyly independent and should not take time.
    to resolve this we have to use useMemo hook which actually cached the previous value hence isven will not execute all the time
    if no change on dependency
    */
    // const isEven = () => {
    //     let i = 0;
    //     while (i < 2000000000) i++;
    //     return firstCounter % 2 == 0
    // }

    const isEven = useMemo(() => {
        let i = 0;
        while (i < 2000000000) i++;
        return firstCounter % 2 == 0
    },[firstCounter])

    return (
        <div>
            <div onClick={incementFirstCounter}><button>First Counter count {firstCounter}</button></div>
            <div onClick={incrementSecondCounter}><button>Second Counter count {secondCounter}</button></div>
            <span>{isEven ? "Even" : "Odd"}</span>
        </div>
    )
}

export default UseMemo