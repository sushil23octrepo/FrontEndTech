import { createSlice } from '@reduxjs/toolkit'
import { ordered as cakeOrdered } from '../cake/cakeSlice';


const initialState = {
    numOfIcecreams: 20
}

const icecreamSlice = createSlice({
    name: "icecreat",
    initialState,
    reducers: {
        ordered: (state) => {
            state.numOfIcecreams--
        },
        restocked: (state, action) => {
            state.numOfIcecreams += action.payload
        }
    },
    // extraReducers: { //whenever cake/ordered action perform it will decrease icecream too
    //     ['cake/ordered']: (state) => {
    //         state.numOfIcecreams--
    //     }
    // }
    extraReducers: (builder) => { //this is another way to write extrareducer function
        builder.addCase(cakeOrdered, state => {
            state.numOfIcecreams--
        })
    }
})

export default icecreamSlice.reducer
export const { ordered, restocked } = icecreamSlice.actions
