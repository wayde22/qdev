import React from 'react'
import Song from './Song'

const styles = {
  spacing: {
    margin: 3
  },
  songRow: {
    display: 'flex',
    justifyContent: 'space-around',
  },
  action: {
    flex: 1,
    margingLeft: 2,
    marginRight: 2,
    marginTop: 2,
    marginBottom: 2,
  },
  song: {
    flex: 3,
  }
}

const AllSongs = ({allsongs, onAddToPlaylist, onPlay, onAddTop}) => {
  return (
    <>
      {
        allsongs.map((song) => {
          return (
            <div style={styles.songRow}>
              <Song style={styles.song} song={song} />
              <button style={styles.action} onClick={() => onAddToPlaylist(song)}> Add to Playlist </button>
              <button style={styles.action} onClick={() => onPlay(song)}> Play </button>
              <button style={styles.action} onClick={() => onAddTop(song)}> Add Top </button>  
             </div>)
        })
      }
    </>
  )
}

export default AllSongs;