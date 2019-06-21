export const CHANGE_USER_STATS ='CHANGE_USER_STATS'
export const ON_PLAYER_SHOT = 'ON_PLAYER_SHOT'
export const ON_OPPONENT_SHOT = 'ON_OPPONENT_SHOT'

export const changeUserStats = () => ({ type: CHANGE_USER_STATS })
export const createOnPlayerShot = () => ({ type: ON_PLAYER_SHOT })
export const createOnOpponentShot = () => ({ type: ON_OPPONENT_SHOT })