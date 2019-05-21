import React from 'react';

const CoinToss = (props) => {
  // if (props.side === '') {
    return (
      <div>
        <h4>Toss the coin!</h4>
        <button 
        onClick = { () => props.onClick(props.side) }> 
        Toss It!
        </button>
      </div>
    );
  // } else {
  //   return (
  //     <div>
  //       <h3>Toss the coin!</h3>
  //       <button onClick={() => props.onClick(props.side)}> </button>
  //       Toss It!
  //     </div>
  //     );
  // }
}
export default CoinToss;