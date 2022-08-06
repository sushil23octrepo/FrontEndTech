import React,{useState,useEffect} from 'react'
/*
useEffect hook lets us to perform side effects in functional component
it is a close replacement componentDidMount, componentDidUpdate and componentWillUnmount
*/
function UseEffectHook() {
    const [count, setCount] = useState(0)
    useEffect(()=>{
        document.title=`You clicked ${count} times` ;
    })
    
  return (
    <div>
        <button onClick={()=>setCount(count+1)}>Count {count} Times</button>
    </div>
  )
}

export default UseEffectHook