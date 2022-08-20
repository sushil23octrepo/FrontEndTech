import {configureStore} from '@reduxjs/toolkit'
//import reduxLogger from 'redux-logger'
import cakeReducer from '../features/cake/cakeSlice'
import icecreamReducer from '../features/icecream/icecreamSlice'
import userReducer from '../features/user/userSlice'

//const logger = reduxLogger.createLogger()

const store = configureStore({
    reducer: {
        cake: cakeReducer,
        icecream: icecreamReducer,
        user:userReducer
    },
    //uncomment this logic to show log in console
 //   middleware: (getdefaultMiddleware) => getdefaultMiddleware().concat(logger)
})

export default store

