import React, { useReducer, useEffect } from 'react'
import axios from 'axios'

const initialState = {
    isLoading: true,
    error: '',
    data: {}
}

const reducer = (state, action) => {
    if (action === "getbyid") {
        axios.get("https://jsonplaceholder.typicode.com/posts/1")
            .then(response => {
                console.log("Displatch called",response.data.title)
                state.data = response.data
                state.isLoading = false
                state.error = ''
            })
            .catch(err => {
                state.data = {}
                state.isLoading = false
                state.error = 'Something went wrogn'
            })

        return state
    }

}

function UseReducerFetchData() {
    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        dispatch("getbyid");
    }, [])

    return (
        <div>
            {state.isLoading ? "Loading" : "Loaded"}
            {state.error ? state.error : null}
            {state.data.title}
        </div>
    )
}

export default UseReducerFetchData