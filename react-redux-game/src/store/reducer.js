import {CHANGE_USER_STATS, ON_PLAYER_SHOT, ON_OPPONENT_SHOT, ON_PLAYER_NAME, ON_NAME_ENTERED } from './action'
import rat from './../images/Rat.jpeg'
import goblin from './../images/goblin.jpeg'
import gremlin from './../images/gremlin.jpeg'
import troll from './../images/troll.jpeg'
import dragon from './../images/dragon.jpeg'
import stickman from './../images/stickman.png'

const initialUserStats = {
  player: '',
  experience: 3,
  attack: 4,
  defense: 3,
  hitpoints: 1,
  message: '',
  image: stickman,
  }

const listOpponentStats = [
  {character: 'Rat', experience: 3, attack: 2, defense: 1, hitpoints: 2, message: '', image: rat },
  {character: 'Goblin', experience: 2, attack: 2, defense: 2, hitpoints: 2, message: '', image: goblin },
  {character: 'Gremlin', experience: 3, attack: 3, defense: 3, hitpoints: 3, message: '', image: gremlin },
  {character: 'Troll', experience: 4, attack: 4, defense: 4, hitpoints: 4, message: '', image: troll },
  {character: 'Dragon', experience: 5, attack: 5, defense: 5, hitpoints: 5, message: '', image: dragon }, 
]

const intialState = {
  userStats: initialUserStats,
  oppStats: listOpponentStats[0],
  currentOpponentIndex: 0,
  displayInputName: true,
}


const updateOpponent = (oppStats, newOpponentHitPoints, message) => {
  return {
    ...oppStats, 
    hitpoints: newOpponentHitPoints,
    message
  };
}

const pickOpponent = (listOpponentStats, oppIndex) => {
  return listOpponentStats[oppIndex]
}

const isDead  = (newOpponentHitPoints) => {
  return newOpponentHitPoints <= 0;
}

const calculateDamage = (attack, def) => {
  return Math.round(attack * attack / (attack + def))
}

const randomFire = (attack) => {
  return Math.floor(Math.random() * (attack + 1))
}

const levelUp = (stats, hitpoints, experience) => {
  return {
    ...stats,
    hitpoints: hitpoints + 5,
    experience: experience + 1,
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
      accuracyHitpoints = Math.ceil(randomFire(attack) * 1)
      return accuracyHitpoints  
  } 
}

const statusMessages = (status, character) => {
  console.log('status', status)
  switch(status) {
    case 0:
      status = character + ' lost...'
      return status
    case 1:
      status = character + ' Wins!!'
      return status
    case 2:
      status = character + ' took a hit!'
      return status
    default:
      return 'Huh?... Something went wrong!'
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
      const userLevelUpPoints = isDead(newOpponentHitPoints) ? levelUp(userStats, userStats.hitpoints, userStats.experience) : userStats
      const opponentStatusMessage = isDead(newOpponentHitPoints) ? statusMessages(0, oppStats.character) : userStats.hitpoints <= 0 ? statusMessages(1, oppStats.character) : statusMessages(2, oppStats.character)
      
      console.log('Status message: ',opponentStatusMessage, '/ Hit: ', (oppStats.hitpoints + oppStats.defense) - userStats.attack, '/ OP HP: ', oppStats.hitpoints, ' / User Attack: ', userStats.attack)
      
      return {
        ...state,
        oppStats: nextOpponent,
        currentOpponentIndex: opponentIndex,
        userStats: userLevelUpPoints,
        oppStats: {...nextOpponent, message: opponentStatusMessage},
      }

    case ON_OPPONENT_SHOT:
      const newUserHitPoints = state.userStats.hitpoints - calculateDamage( experienceFactor(state.userStats.experience, state.oppStats.attack), state.userStats.defense )
      const opponentLevelUpPoints = isDead(newUserHitPoints) ? levelUp(state.oppStats, state.oppStats.hitpoints) : state.oppStats
      
      const userStatusMessage = isDead(newUserHitPoints) ? statusMessages(0, state.userStats.player) : state.oppStats.hitpoints <= 0 ? statusMessages(1, state.userStats.player) : statusMessages(2, state.userStats.player) //<----
      // console.log('userMess: ',userStatusMessage, '/ newUserHP: ', newUserHitPoints)

      return {
        ...state,
        userStats: updateOpponent(state.userStats, newUserHitPoints, userStatusMessage),
        oppStats: opponentLevelUpPoints,
        
        // userStats: { ...state.userStats, message: userStatusMessage} //<----
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