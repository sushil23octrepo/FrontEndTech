import React,{useContext} from 'react'
import {CountContext} from '../App'

function ReducerCompA() {
    const countContext=useContext(CountContext);
  return (
    <div>
         <div>Companant A</div>
            <button onClick={() => countContext.dispatch("increment")}>Increment</button>
            <button onClick={() => countContext.dispatch("decrement")}>Decrement</button>
            <button onClick={() => countContext.dispatch("reset")}>Reset</button>
    </div>
  )
}

export default ReducerCompA