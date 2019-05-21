import React from 'react';

const GuessObject = (props) => {
  const objectItems = props.choice.map(choice => (
    <button onClick = { () => props.onClick(choice.item) }>
    {choice.item}
    </button>
  ))
  return (
    <div>
      <p>Choose one!</p>
      {objectItems}
    </div>
  );
};

export default GuessObject;