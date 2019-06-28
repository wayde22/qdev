import React from 'react'

const User = ({ userStats }) => {
  return (
    <div className='userStatsOD'>
      <div className='userStats'>
        <p>Player: {userStats.player}</p>
        <p>Exprience: {userStats.experience}</p>
        <p>Attack: {userStats.attack}</p>
        <p>Defense: {userStats.defense}</p>
        <p> Hitpoints: {userStats.hitpoints}</p>
      </div>
    </div>
  )
}

export default User;
