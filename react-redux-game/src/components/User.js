import React from 'react'

const User = ({ userStats }) => {
  return (
    <div className='userStats'>
      <p>Exprience: {userStats.experience}</p>
      <p>Attack: {userStats.attack}</p>
      <p>Defense: {userStats.defense}</p>
      <p> Hitpoints: {userStats.hitpoints}</p>
    </div>
  )
}

export default User;
