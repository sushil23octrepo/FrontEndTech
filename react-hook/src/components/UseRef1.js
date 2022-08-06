import React, { useRef, useEffect,useState } from 'react'

function UseRef1() {
    const intervalRef = useRef();
    const [timer, setTimer] = useState(0)

    useEffect(() => {
        intervalRef.current= setInterval(()=>{
            setTimer(prevTimer=>prevTimer+1)
        },1000)

        return ()=> {
            clearInterval(intervalRef.current);
        };

    }, [])

    return (
        <div>
            Hook Timeer -{timer}
            <button onClick={()=>clearInterval(intervalRef.current)}>Clear Interval</button>
        </div>
    )
}

export default UseRef1