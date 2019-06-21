
export const GET_STORAGE = 'GET_STORAGE';
export const ADD_SONG = 'ADD_SONG';
export const CURRENT_SONG = 'CURRENT_SONG'
export const ADD_TO_TOP = 'ADD_TO_TOP';
export const GET_PREVIOUS = 'GET_PREVIOUS';
export const GET_NEXT = 'GET_NEXT';
export const REMOVE_SONG_FROM_PLAYLIST = 'REMOVE_SONG_FROM_PLAYLIST';

export const createAddSong = (song) => ({ type: ADD_SONG, payload: song })
export const createCurrentSong = (song) => ({ type: CURRENT_SONG, payload: song })
// export const addToTop = (song) => ({type: ADD_TO_TOP, payload: [song, ...playList]});
export const getPrevious = () => ({type: GET_PREVIOUS});


// export const getStorage = () => (type: GET_STORAGE, payload: this.handleGetStorage());
// export const getCurrentSong = () => (type: ADD_SONG, payload: [...this.state.playList, {...song, playListId: this.state.currentPlayListId}]);
export const getNext = () => ({type: GET_NEXT});
// export const removeSongFromPlaylist = () => (type: , payload: );
