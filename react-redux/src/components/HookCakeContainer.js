import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { buyCake } from '../redux'

//useSelector hook is equivalent to mapStateToProps method
//useDispatch hook is used to dispatch the action same as method mapDispatchToProps

function HookCakeContainer() {
    const numOfCakes = useSelector(state => state.numberOfCakes);
    const dispatch = useDispatch();
    return (
        <div>
            <h2>Number of cakes -{numOfCakes}</h2>
            <button onClick={()=>dispatch(buyCake())}>Buy Cakes</button>
        </div>
    )
}



export default HookCakeContainer