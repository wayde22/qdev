import React from 'react';

const Toggle = (props) => (
  <div>
    <button onClick={props.handleClick}>
      Click me
    </button>
    <p> Current isToggleOn: {props.isToggleOn.toString()} </p>
  </div>
);

export default Toggle;