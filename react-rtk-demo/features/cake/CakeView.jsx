import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import  { ordered, restocked } from './cakeSlice'

export const CakeView = () => {
    const dispatch=useDispatch();
    const numberOfCacks = useSelector((state) => state.cake.numOfCakes);
    return (
        <div>
            <h2>Number of cakes - {numberOfCacks}</h2>
            <button onClick={()=>dispatch(ordered())}>Order Cake</button>
            <button onClick={()=>dispatch(restocked(5))}>Restock Cakes</button>
        </div>
    )
}
