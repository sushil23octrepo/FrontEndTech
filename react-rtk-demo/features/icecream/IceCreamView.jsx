import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { ordered, restocked } from './icecreamSlice'

export const IceCreamView = () => {
    const dispatch=useDispatch();
    const numOfIceCreams = useSelector(state => state.icecream.numOfIcecreams)
    return (
        <div>
            <h2>Number of Icecreams - {numOfIceCreams}</h2>
            <button onClick={()=>dispatch(ordered())}>Order Icecream</button>
            <button onClick={()=>dispatch(restocked(5))}>Restock Icecreams</button>
        </div>
    )
}
