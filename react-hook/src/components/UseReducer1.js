/*
useReducer is hook that is used for the state management
it is an alternative of useState
syntax:
1. useReducer(reducer,initialState) -useReducer hook contains reducer method and initial state
2. useReducer return pair of values [newState,dispatch]
3. newState=reducer(currentState,action)


*/
import React, { useReducer } from 'react'
const initialState = {
    firstCounter: 0,
    secondCounter: 10
};
const reducer = (state, action) => {
    switch (action.type) {
        case "increment":
            return { ...state, firstCounter: state.firstCounter + action.value };
        case "decrement":
            return { ...state, firstCounter: state.firstCounter - action.value };
        case "increment2":
            return { ...state, secondCounter: state.secondCounter + 1 };
        case "decrement2":
            return { ...state, secondCounter: state.secondCounter - 1 };
        case "reset":
            return initialState;
    }
}


function UseReducer1() {
    const [count, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
            <div>First counter value is {count.firstCounter}</div>
            <div>Second counter value is {count.secondCounter}</div>
            <button onClick={() => dispatch({ type: 'increment', value: 1 })}>
                Increment 1
            </button>
            <button onClick={() => dispatch({ type: "decrement", value: 1 })}>Decrement 1</button>

            <button onClick={() => dispatch({ type: "increment", value: 5 })}>Increment 5</button>
            <button onClick={() => dispatch({ type: "decrement", value: 5 })}>Decrement 5</button>

            <button onClick={() => dispatch({ type: "increment2"})}>Increment Counter 2</button>
            <button onClick={() => dispatch({ type: "decrement2" })}>Decrement Counter 2</button>

            <button onClick={() => dispatch({type:"reset"})}>Reset</button>
        </div >
    )
}

export default UseReducer1