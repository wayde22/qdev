import React from 'react'
import Song from './Song'

const Playbar = ({song, onPrev, onNext}) => {
  return (
    <>
      <marquee>
      <Song song={song}/>
      </marquee>
      <div>
        {
          <div>
            <span><button onClick={() => onPrev()}> Prev </button></span>
            <span><button onClick={() => onNext()}> Next </button></span>
          </div>
        }
      </div>
    </>
  )
}

export default Playbar;
