
const initialState = {
  foo: 'Random Number',
  whiz: 'Targeted',
  some: 'OOOHHH'
}

export const reducer = (state = initialState, action) => { // The store needs to be initialized before its ran the first time or it will break
  
  switch(action.type) {
    case 'CHANGE_BAR_TO_RANDOM':
      return {...state, foo: action.payload};
    case 'CHANGE_WHIZ_TO_BANG':
      return {...state, whiz: action.payload};
    case 'CHANGE_SOMETHING':
      return {...state, some: action.payload};
    default:
      return state;
      
  }
}

