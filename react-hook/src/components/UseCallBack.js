import React, { useState, useCallback } from 'react'
import Button from './Button';
import Count from './Count';
import Title from './Title';

/*
useCallback is a hook which return memoized version of the callback function that only changes 
if one of the dependency has changed.
*/

function UseCallBack() {
    const [age, setAge] = useState(25)
    const [salary, setSalary] = useState(5000)

    const incrementAge = useCallback(() => {
        setAge(age + 1)
    }, age);

    const incrementSalary = useCallback(() => {
        setSalary(salary + 1)
    }, salary);

    return (
        <div>
            <Title />
            <Count text="Age" count={age} />
            <Button handleClick={incrementAge}>Increment Age</Button>

            <Count text="Salary" count={salary} />
            <Button handleClick={incrementSalary}>Increment Salary</Button>
        </div>
    )
}

export default UseCallBack