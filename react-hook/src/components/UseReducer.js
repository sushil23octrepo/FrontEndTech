/*
useReducer is hook that is used for the state management
it is an alternative of useState
syntax:
1. useReducer(reducer,initialState) -useReducer hook contains reducer method and initial state
2. useReducer return pair of values [newState,dispatch]
3. newState=reducer(currentState,action)


*/
import React, { useReducer } from 'react'
const initialState = 0;
const reducer = (state, action) => {
    switch (action) {
        case "increment":
            return state + 1;
        case "decrement":
            return state - 1;
        case "reset":
            return initialState;
    }
}


function UseReducer() {
    const [count, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
            <div>Count is {count}</div>
            <button onClick={() => dispatch("increment")}>Increment</button>
            <button onClick={() => dispatch("decrement")}>Decrement</button>
            <button onClick={() => dispatch("reset")}>Reset</button>
        </div>
    )
}

export default UseReducer