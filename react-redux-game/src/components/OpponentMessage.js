import React from 'react'

const OpponentMessage = ({ oppStats }) => {
  return (
    <div className='opponentMessage'>
    <p>{oppStats.message}</p>
    </div>
  )
}

export default OpponentMessage;