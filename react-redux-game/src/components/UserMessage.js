import React from 'react'

const UserMessage = ({ userStats }) => {
  return (
    <div className='userMessage'>
    <p>{userStats.message}</p>
    </div>
  )
}

export default UserMessage;