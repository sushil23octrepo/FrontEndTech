import React,{useContext} from 'react'
import {CountContext} from '../App'

function ReducerCompD() {
    const countContext=useContext(CountContext);
  return (
    <div>
         <div>Companant D</div>
            <button onClick={() => countContext.dispatch("increment")}>Increment</button>
            <button onClick={() => countContext.dispatch("decrement")}>Decrement</button>
            <button onClick={() => countContext.dispatch("reset")}>Reset</button>
    </div>
  )
}

export default ReducerCompD