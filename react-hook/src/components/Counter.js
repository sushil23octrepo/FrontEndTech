import React, { useEffect, useState } from 'react'

function Counter() {
    const initialValue=0;
    const [count, setCount] = useState(initialValue)

    
    
    const handleIncrement = () => {
        for (let i = 1; i <= 5; i++) {
            setCount(prevValue => prevValue + 1)
        }

    }
    return (
        <div>
            <span>Count  {count}</span>
            <button onClick={() => setCount(initialValue)}>Reset</button>
            <button onClick={() => setCount(count + 1)}>Increament</button>
            <button onClick={() => setCount(count -1)}>Decreament</button>
            <button onClick={handleIncrement}>Increament 5</button>
        </div>
    )
}

export default Counter