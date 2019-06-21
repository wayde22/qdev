import React from 'react'

const Opponent = ({oppStats}) => {
  return (
    <div className='opponentStats'>
    <p>Opponent: {oppStats.character}</p>
      <p>Exprience: {oppStats.experience}</p>
      <p>Attack: {oppStats.attack}</p>
      <p>Defense: {oppStats.defense}</p>
      <p> Hitpoints: {oppStats.hitpoints}</p>
    </div>
  )
}

export default Opponent;