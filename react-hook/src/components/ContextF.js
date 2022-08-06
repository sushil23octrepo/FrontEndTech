import React from 'react'
import { UserContext, ChannelContext } from '../App'

function ContextF() {
    return (
        <div>
            <UserContext.Consumer>
                {
                    user => {
                        return <ChannelContext.Consumer>
                            {
                                channel => {
                                    return <div>User context value is {user} and channel context is {channel}</div>
                                }
                            }
                        </ChannelContext.Consumer>

                    }
                }
            </UserContext.Consumer>
        </div>
    )
}

export default ContextF