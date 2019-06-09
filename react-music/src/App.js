import React from 'react';
import Playlist from './components/Playlist'
import './App.css';
import AllSongs from './components/AllSongs';
import Playbar from './components/Playbar'

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



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      songList: songList,
      playList: this.handleGetStorage(),
      currentSong: {},
      currentPlayListId: 0,
    }

  }

  saveplayList = () => {
    localStorage.setItem("playList", JSON.stringify(this.state.playList));
  };

  handleGetStorage = () => {
    let playList = [];
    
    if (localStorage.getItem("playList") === null) {
      playList = [];
    } else {
      playList = JSON.parse(localStorage.getItem("playList"));
    }
    return playList;
  };


  handleAdd = (song) => {
    this.setState({playList: [...this.state.playList, {...song, playListId: this.state.currentPlayListId}]},() => this.saveplayList)
    this.setState({currentPlayListId: this.state.currentPlayListId+1})
  }

  handlePlay = (song) => {
    this.setState({currentSong: song})
  }

  handleAddTop = (song) => {
    this.setState({playList: [song, ...this.state.playList]},this.saveplayList)
  }

  handlePrev = (event, playlist) => {
    const currentIndex = this.state.playList.findIndex((song) => song.id === this.state.currentSong.id)
    if (currentIndex > 0) {
      this.setState({currentSong: this.state.playList[currentIndex - 1]})
    } else {
      this.setState({currentSong: this.state.playList[currentIndex]})
    }
  }

  handleNext = () => {
    const currentIndex = this.state.playList.findIndex((song) => song.id === this.state.currentSong.id)
    console.log('next ' + currentIndex)
    if (currentIndex < this.state.playList.length - 1) {
      this.setState({currentSong: this.state.playList[currentIndex + 1]})
    } else {
      this.setState({currentSong: this.state.playList[currentIndex]})
    }
  }

  handlePlayListRemove = (songToRemove) => {
    const newPlayList = this.state.playList.filter((song) => songToRemove.playListId !== song.playListId)
    this.setState({playList: [...newPlayList]},this.saveplayList)
    }

  render() {
    return (
      <div>
        <h1>All Songs</h1>
        <AllSongs 
          allsongs={this.state.songList}
          onPlay={this.handlePlay}
          onAddToPlaylist={this.handleAdd}
          onAddTop={this.handleAddTop}
           />

        <h1>Play List</h1>
        <Playlist 
          playlist={this.state.playList}
          onRemove={this.handlePlayListRemove} 
         />
  
            <h1>Current Song</h1>
              <hr />
          <Playbar 
            song={this.state.currentSong}
            onPrev={this.handlePrev}
            onNext={this.handleNext}
            />
           <hr />
      </div>
    )
  }
}



export default App;
