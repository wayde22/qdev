import React from 'react';

const RevealSide = (props) => {
  const guess = props.guess;
  const sideUp = props.sideUp;
}

if ( !!guess || !!sideUp) {
  return '';
} else if (guess !== sideUp) {
  return <p> Sorry...</p>
} else {
  return <p>Correct!</p>
}