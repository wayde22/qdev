 import { GET_STORAGE, ADD_SONG, ADD_TO_TOP, CURRENT_SONG, GET_PREVIOUS, GET_NEXT } from './actions'
 import { handleGetStorage } from '../utils/storage'
 

 const songList = [
  {
    id: 1,
    title: 'Bob Marley',
    album: "No Woman No Cry"
  },
  {
    id: 2,
    title: 'Mercy Me',
    album: "Almost There"
  },
  {
    id: 3,
    title: 'Comatose',
    album: "Skillet"
  },
  {
    id: 4,
    title: 'Chain Breaker',
    album: "Zach Williams"
  },
  {
    id: 5,
    title: 'Something To Say',
    album: "Matthew West"
  }
];

const initialState = {
  songList: songList,
  playList: handleGetStorage(),
  currentSong: {},
  currentPlaylistId: 0,
};

export const reducer = ( state = initialState, action) => {
  switch(action.type) {
    case ADD_SONG:
    return {
      ...state, 
      playList:[...state.playList, {...action.payload, playListId: state.currentPlayListId}],
      currentPlayListId: state.currentPlayListId+1
    }
    case CURRENT_SONG:
      return {...state, currentSong: action.payload };
    // case ADD_TO_TOP:
    //   return {...state, playList: action.payload};
    case GET_PREVIOUS:
      let currentSong;
      const currentIndex = state.playList.findIndex((song) => song.id === state.currentSong.id)
      if (currentIndex > 0) {
        currentSong = state.playList[currentIndex - 1]
      } else {
        currentSong = state.playList[currentIndex]
      }
        return {...state, currentSong}
      case GET_NEXT:
        // let currentSong;
        // const currentIndex = state.playList.findIndex((song) => song.id === state.currentSong.id)
        // if (currentIndex > 0) {
        //   currentSong = state.playList[currentIndex + 1]
        // } else {
        //   currentSong = state.playList[currentIndex]
        // }
        //   return {...state, currentSong}
        
    default:
      return state;
  }
}