const createSlice = require('@reduxjs/toolkit').createSlice;
const cakeActions = require('../cake/cakeSlice').cakeActions;


const initialState = {
    numOfIcecreams: 10
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
        builder.addCase(cakeActions.ordered, state => {
            state.numOfIcecreams--
        })
    }
})

module.exports = icecreamSlice.reducer
module.exports.icecreamActions = icecreamSlice.actions
