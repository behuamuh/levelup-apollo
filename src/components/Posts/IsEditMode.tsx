import React from 'react';
import {ApolloConsumer} from 'react-apollo'

interface IProps {
    isEditMode: boolean
}

export default ({isEditMode}:IProps) => {
    return <ApolloConsumer>
        { client => (
            <button className='button' onClick={()=> client.writeData({
                data: {
                    isEditMode: !isEditMode
                }
            })}>Toggle edit mode</button>
        )}
    </ApolloConsumer>
}