// Not being used at this time....
import React from 'react'
import Message from './Messages'

 const Messages = ({ messages }) => {
    return (
      <div >
        {
          messages.map( (message) => {
            return (
              <div>
                <Message message={message} />
              </div>
            )
          })
        }
      </div>
    )
 }  

export default Messages