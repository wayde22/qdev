import React from 'react';

const FavMusic = (props) => 
  props.music.map(m => {
    if (m.style === 'rock') {
      return <p key={m.id}>{m.style} is good</p>
    }
    else if (musicStyle === 'house') {
      return <p key={m.id}> House is better</p>
    }
    else if ( musicStyle === 'country') {
      return <p key={m.id}>No Tay Tay allowed</p>
    }
    else {
      return <p key={m.id}>I don't know what {musicStyle} is....</p>
    }
  });


export default FavMusic;