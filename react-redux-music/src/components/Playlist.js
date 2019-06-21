import React from 'react'
import Song from './Song'

const styles = {
  spacing: {
    margin: 3,
}
}

const Playlist = ({playlist, onRemove}) => {
  return(
  <div>
  {
    playlist.map((song) => {
      return (
      <div>
        <Song song={song} />
        <span style={styles.spacing}><button onClick={() => onRemove(song)}>Remove</button></span>
        </div>
          )
    })
  }
  </div>
  )
}


export default Playlist;