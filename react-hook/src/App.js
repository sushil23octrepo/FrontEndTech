import './App.css';
import UseStateHook from './components/UseStateHook'
import Counter from './components/Counter'
import UseStateWithObj from './components/UseStateWithObj'
import UseStateWithArray from './components/UseStateWithArray'
import UseEffectHook from './components/UseEffectHook'
import UseEffectHookCond from './components/UseEffectHookCond'
import MouseContainer from './components/MouseContainer'
import ContextC from './components/ContextC'
import UseContextC from './components/UseContextC'
import UseReducer from './components/UseReducer'
import UseReducer1 from './components/UseReducer1'
import ReducerCompA from './components/ReducerCompA'
import ReducerCompB from './components/ReducerCompB'
import ReducerCompC from './components/ReducerCompC'
import UseReducerFetchData from './components/UseReducerFetchData'

import React, { useReducer } from 'react';
import UseCallBack from './components/UseCallBack';
import UseMemo from './components/UseMemo';
import UseRef from './components/UseRef';
import UseRef1 from './components/UseRef1';


export const UserContext = React.createContext()
export const ChannelContext = React.createContext()
export const CountContext=React.createContext()

const initialState = 0
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
}
function App() {
  const [count, dispatch] = useReducer(reducer, initialState)
  return (
    <div className="App">
      {/* Count is {count} */}
      {/* <UseStateHook/> */}
      {/* <Counter/> */}
      {/* <UseStateWithObj/> */}
      {/* <UseStateWithArray/> */}
      {/* <UseEffectHook/> */}
      {/* <UseEffectHookCond/> */}
      {/* <MouseContainer/> */}
      {/* <UserContext.Provider value="Sushil Kumar">
        <ChannelContext.Provider value="React Excercise">
        <ContextC/>
        </ChannelContext.Provider>
      </UserContext.Provider> */}

      {/* <UserContext.Provider value="Sushil Kumar">
        <ChannelContext.Provider value="React Excercise">
          <UseContextC />
        </ChannelContext.Provider>
      </UserContext.Provider> */}

      {/* <UseReducer/> */}
      {/* <UseReducer1/> */}
      {/* <CountContext.Provider value={{count,dispatch}}>
      <ReducerCompA />
      <ReducerCompB />
      <ReducerCompC />
      </CountContext.Provider> */}
      {/* <UseReducerFetchData/> */}
      {/* <UseCallBack/> */}
      {/* <UseMemo/> */}
      {/* <UseRef/> */}
      <UseRef1/>
    </div>
  );
}

export default App;
