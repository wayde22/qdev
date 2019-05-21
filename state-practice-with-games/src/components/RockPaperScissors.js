import React from 'react';

const RockPaperScissors = (props) => {
  if (props.objects === '') {
    return (
      <div>
        <h4>
          Choose One Please!
        </h4>
        <button onClick = { () => props.onClick(props.object) }>
        Choose
        </button>
      </div>
    )
  } 
  // else {
  //   return (
  //   <div>
  //     <h4>
  //       Choose One Please!
  //     </h4>
  //     <button onClick = { () => props.onClick(props.object) }>
  //       Choose one please!
  //     </button>
  //   </div>
  //   )
  // }
}


export default RockPaperScissors;