import React from 'react';

const Guess = (props) => {
  const headsOrTails = props.choice.map(choice => (
    <button onClick = {() => props.onClick(choice.side)}>
    {choice.side}
    </button>
  ));
  return (
    <div>
      <h4>Heads or Tails?</h4>
      {headsOrTails}
    </div>
  );
  };
  export default Guess;