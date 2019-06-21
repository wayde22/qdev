import {CHANGE_USER_STATS, ON_PLAYER_SHOT, ON_OPPONENT_SHOT} from './action'

const initialUserStats = {
  experience: 3,
  attack: 4,
  defense: 3,
  hitpoints: 20
  }

const listOpponentStats = [
  {character: 'rat', experience: 1, attack: 1, defense: 1, hitpoints: 2},
  {character: 'goblin', experience: 2, attack: 2, defense: 2, hitpoints: 2},
  {character: 'gremlin', experience: 3, attack: 3, defense: 3, hitpoints: 3},
  {character: 'troll', experience: 4, attack: 4, defense: 4, hitpoints: 4},
  {character: 'Dragon', experience: 5, attack: 5, defense: 5, hitpoints: 5}, 
]

const intialState = {
  userStats: initialUserStats,
  oppStats: listOpponentStats[0],
  currentOpponentIndex: 0,
}

const updateOpponent = (oppStats, newHitPoints) => {
  return {
    ...oppStats, 
    hitpoints: newHitPoints
  };
}

const pickOpponent = (listOpponentStats, oppIndex) => {
  return listOpponentStats[oppIndex]
}

const isDead  = (newHitPoints) => {
  return newHitPoints <= 0;
}

const calculateDamage = (attack, def) => {
  let damage;
  return damage = Math.round(attack * attack / (attack + def))
}

// const randomness = (attack) => {
//   return Math.floor(Math.random() * (attack + 1))
// }

// const experienceFactor = (experience, attack) => {
//   switch(experience) {
//     case 1:
//       const accuracyHitpoints = Math.floor(randomness(attack) * .2)
//       return {accuracyHitpoints}
//       case 1:
//       const accuracyHitpoints = Math.floor(randomness(attack) * .2)
//       return {accuracyHitpoints}
      
// }


export const reducer = (state = intialState, action) => {

  switch(action.type) {
    case CHANGE_USER_STATS:
      return {...state}

    case ON_PLAYER_SHOT:
      const { oppStats, userStats } = state
      const newHitPoints = oppStats.hitpoints - calculateDamage( userStats.attack, oppStats.defense ) 
      const oppIndex = isDead(newHitPoints) ? state.currentOpponentIndex + 1 : state.currentOpponentIndex
      const nextOpponent = isDead(newHitPoints) ? pickOpponent(listOpponentStats, oppIndex) : updateOpponent(oppStats, newHitPoints)

      console.log(`Updated hitpoints ${newHitPoints} / current index ${state.currentOpponentIndex} / calced index: ${oppIndex} = `, nextOpponent)

      return {
        ...state,
        oppStats: nextOpponent,
        currentOpponentIndex: oppIndex
      }

    case ON_OPPONENT_SHOT:
      const newTakeHitPoints = state.userStats.hitpoints - calculateDamage( state.oppStats.attack, state.userStats.defense )
      const playerLost = isDead(newTakeHitPoints) ? console.log('You Lose') : updateOpponent(state.userStats, newTakeHitPoints)
      console.log(`Updated hitpoints ${state.userStats.hitpoints} + defense ${state.userStats.defense} - attack: ${state.oppStats.attack} newTakeHitPoints, ${newTakeHitPoints}`)
      return {
        ...state,
        userStats: updateOpponent(state.userStats, newTakeHitPoints)
      }
     


    default:
    return state;
  }
}