import React from 'react';

const RevealObjects = (props) => {
  const guess = props.guess;
  const sideUp = props.sideUp;
}
if (guess === '' || sideUp === '') {
  return ;
} else if (guess !== sideUp) {
  return <p>Sorry...</p>;
} else if (guess === sideUp) {
  return <p>Tie</p>;
} else {
  return <h3>Win!</h3>;
}