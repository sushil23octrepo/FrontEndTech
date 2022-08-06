import React,{useContext} from 'react'
import {CountContext} from '../App'

function ReducerCompF() {
    const countContext=useContext(CountContext);
  return (
    <div>
         <div>Companant F</div>
            <button onClick={() => countContext.dispatch("increment")}>Increment</button>
            <button onClick={() => countContext.dispatch("decrement")}>Decrement</button>
            <button onClick={() => countContext.dispatch("reset")}>Reset</button>
    </div>
  )
}

export default ReducerCompF