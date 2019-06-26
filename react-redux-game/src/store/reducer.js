import {CHANGE_USER_STATS, ON_PLAYER_SHOT, ON_OPPONENT_SHOT, ON_PLAYER_NAME, ON_NAME_ENTERED } from './action'

const initialUserStats = {
  player: '',
  experience: 3,
  attack: 4,
  defense: 3,
  hitpoints: 1
  }

const listOpponentStats = [
  {character: 'rat', experience: 3, attack: 2, defense: 1, hitpoints: 2},
  {character: 'goblin', experience: 2, attack: 2, defense: 2, hitpoints: 2},
  {character: 'gremlin', experience: 3, attack: 3, defense: 3, hitpoints: 3},
  {character: 'troll', experience: 4, attack: 4, defense: 4, hitpoints: 4},
  {character: 'Dragon', experience: 5, attack: 5, defense: 5, hitpoints: 5}, 
]

const intialState = {
  userStats: initialUserStats,
  oppStats: listOpponentStats[0],
  currentOpponentIndex: 0,
  displayInputName: true,
  playerWins: false,
  opponentWins: false,
}

// const messages = [
//   { id: 1, message:  }
// ]

const updateOpponent = (oppStats, newOpponentHitPoints) => {
  return {
    ...oppStats, 
    hitpoints: newOpponentHitPoints
  };
}

const pickOpponent = (listOpponentStats, oppIndex) => {
  return listOpponentStats[oppIndex]
}

const isDead  = (newOpponentHitPoints) => {
  return newOpponentHitPoints <= 0;
}

const calculateDamage = (attack, def) => {
  let damage = null;
  return damage = Math.round(attack * attack / (attack + def))
}

const randomFire = (attack) => {
  return Math.floor(Math.random() * (attack + 1))
}

const levelUp = (stats, hitpoints) => {
  console.log(`stats: ${stats} hitpoints: ${hitpoints}`)
  return {
    ...stats,
    hitpoints: hitpoints + 5
  }
}


const experienceFactor = (experience, attack) => {
  let accuracyHitpoints;
  switch(experience) {
    case 1:
      accuracyHitpoints = Math.ceil(randomFire(attack) * .6)
      return accuracyHitpoints
    case 2:
      accuracyHitpoints = Math.ceil(randomFire(attack) * .7)
      return accuracyHitpoints
    case 3:
      accuracyHitpoints = Math.ceil(randomFire(attack) * .8)
      return accuracyHitpoints
    case 4:
      accuracyHitpoints = Math.ceil(randomFire(attack) * .9)
      return accuracyHitpoints
    case 5:
      accuracyHitpoints = Math.ceil(randomFire(attack) * 1)
      return accuracyHitpoints
    default:
      accuracyHitpoints = Math.ceil(randomFire(attack) * .2)
      return accuracyHitpoints  
  } 
}


export const reducer = (state = intialState, action) => {

  switch(action.type) {
    case CHANGE_USER_STATS:
      return {...state}

    case ON_PLAYER_SHOT:
      const { oppStats, userStats } = state
      const newOpponentHitPoints = oppStats.hitpoints - calculateDamage( experienceFactor(oppStats.experience, userStats.attack), oppStats.defense ) 
      const opponentIndex = isDead(newOpponentHitPoints) ? state.currentOpponentIndex + 1 : state.currentOpponentIndex
      const nextOpponent = isDead(newOpponentHitPoints) ? pickOpponent(listOpponentStats, opponentIndex) : updateOpponent(oppStats, newOpponentHitPoints)
      const userLevelUpPoints = isDead(newOpponentHitPoints) ? levelUp(userStats, userStats.hitpoints) : userStats
      
      return {
        ...state,
        oppStats: nextOpponent,
        currentOpponentIndex: opponentIndex,
        userStats: userLevelUpPoints,
      }

    case ON_OPPONENT_SHOT:
      const newUserHitPoints = state.userStats.hitpoints - calculateDamage( experienceFactor(state.userStats.experience, state.oppStats.attack), state.userStats.defense )
      const opponentLevelUpPoints = isDead(newUserHitPoints) ? levelUp(state.oppStats, state.oppStats.hitpoints) : state.oppStats
      // const userWinOrLose = isDead(newUserHitPoints) ? console.log('You Lose') : console.log('You win)

      return {
        ...state,
        userStats: updateOpponent(state.userStats, newUserHitPoints),
        oppStats: opponentLevelUpPoints,
      }
    
    case ON_PLAYER_NAME:
      return {
        ...state,
        userStats: {...state.userStats, player: action.payload }
      }

    case ON_NAME_ENTERED:
      return {
        ...state,
        displayInputName: false
      }
     
    default:
    return state;
  }
}