import React from 'react'

const styles = {
  spacing: {
    margin: 3,
  }
}

const Song= ({style, song}) => {
  return (
      <div style={style}>
        <span style={styles.spacing}>{song.title}</span> 
        <span style={styles.spacing}>{song.album}</span>
      </div>
  )
}

export default Song;