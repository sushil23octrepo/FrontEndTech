import React, { useState } from 'react'
import UseEffectWithCleanUp from './UseEffectWithCleanUp'


function MouseContainer() {
    const [display, setDisplay] = useState(true)
    return (
        <div>
            <button onClick={() => setDisplay(!display)}>Display Toggle</button>
            {
               display && <UseEffectWithCleanUp/> 
            }
        </div>
    )
}

export default MouseContainer