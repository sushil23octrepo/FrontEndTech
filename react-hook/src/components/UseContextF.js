import React,{useContext} from 'react'
import { UserContext, ChannelContext } from '../App'

function UseContextF() {
    const userContext=useContext(UserContext);
    const channelContext=useContext(ChannelContext);
    return (
        <div>
            User context value is {userContext} and channel context is {channelContext}<
        </div>
    )
}

export default UseContextF