import React, { useState, useEffect } from 'react'
/*
useEffect hook lets us to perform side effects in functional component
it is a close replacement componentDidMount, componentDidUpdate and componentWillUnmount
*/
function UseEffectHookCond() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('')
  useEffect(() => {
    console.log('Use effect hook')
    document.title = `You clicked ${count} times`;
  },[count]) //If we want useeffect to call once we can pass empty dependency array, right now we passing count

  return (
    <div>
      <input type='text' values={name} onChange={(e) => setName(e.target.value)}></input>
      <button onClick={() => setCount(count + 1)}>Count {count} Times</button>
    </div>
  )
}

export default UseEffectHookCond