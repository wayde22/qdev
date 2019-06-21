import React from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux'
import AllSongs from './components/AllSongs'
import Playlist from './components/Playlist'
import Playbar from './components/Playbar'
import { createAddSong, createCurrentSong, addToTop, getPrevious, getNext } from './store/actions'



class App extends React.Component {

  handleGetStorage = () => {
    this.props.handleGetStorage();
  }

  handleAdd = (song) => {
    this.props.handleAdd(song);
    // this.props.currentPlayListId();
  }

  handlePlay = (song) => {
    this.props.handlePlay(song);
  }

  handleAddTop = (song) => {
    this.props.handleAddTop(song);
  }

  handlePrev = () => {
    this.props.handlePrevious();
  }

  handleNext = () => {
    this.props.handleNext();
  }

  handlePlaylistRemove = () => {
    this.props.handleRemoveFromPlaylist();
  }
  
  render() {
  return (
    <div className="App">
      <h1>All Songs</h1>
      <AllSongs 
          allsongs={this.props.songList}
          onAddToPlaylist={this.handleAdd}
          onPlay={this.handlePlay}
          onAddTop={this.handleAddTop}
           />

        <h1>Play List</h1>
        <Playlist 
          playlist={this.props.playList}
          onRemove={this.handlePlayListRemove} 
         />

        <h1>Current Song</h1>
              <hr />
        <Playbar 
          song={this.props.currentSong}
          onPrev={this.handlePrev}
          onNext={this.handleNext}
          />
          <hr />
    </div>
  );
  }
}

const mapStateToProps = (state) => ({
  songList: state.songList,
  playList: state.playList,
  currentSong: state.currentSong,
  currentPlayListId: state.currentPlaylistId,
})

const mapDispatchToProps = (dispatch) => ({
  handleAdd: (song) => dispatch(createAddSong(song)),
  handlePlay: (song) => dispatch(createCurrentSong(song)),
  // handleAddTop: (song) => dispatch(addToTop(song)),
  handlePrevious: () => dispatch(getPrevious()),
  handleNext: () => dispatch(getNext()),
  // handleRemoveFromPlaylist: () => dispatch(removeSongFromPlaylist()),
})



export default connect(mapStateToProps, mapDispatchToProps)(App);
