import React from 'react'
import Message from './Message'

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