import React, { useState, useEffect } from 'react'

function UseEffectWithCleanUp() {
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    const logMouseMoveEventData = (e) => {
        //As this component is using as child event in mousecontainer component where we have toggle logic
        //but this method still call unless we cleanup event listner.
        console.log("Mouse event");
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(() => {
        window.addEventListener("mousemove", logMouseMoveEventData)

        //Cleanup logic when component unmount
        return ()=>{
            console.log("Remove event listner on unmount");
            window.removeEventListener("mousemove",logMouseMoveEventData);
        }
    })


    return (
        <div>Hooks X-{x} Y-{y}</div>
    )
}

export default UseEffectWithCleanUp