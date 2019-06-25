import React from 'react'

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