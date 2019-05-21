import React from 'react';
import CoinToss from './CoinToss';
import RockPaperScissors from './RockPaperScissors';
import Guess from './Guess';
import GuessObject from './GuessObject';
// import RevealSide from './RevealSide';
// import RevealObject from './RevealObject';


const Coin = [
  {
    id: 1,
    side: 'Heads'
  },
  {
    id: 2,
    side: 'Tails'
  }
];

const RoPaSc = [
  {
    id: 1,
    item: 'Rock',
  },
  {
    id: 2,
    item: 'Paper'
  },
  {
    id: 3,
    item: 'Scissors'
  }
];



class GameView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      side: '',
      object: '',
      guessSide: '',
      guessObject: ''
    };
  }

  handleToss = () => {
    const sideUp = Coin[Math.floor(Math.random() * Coin.length)].side
    this.setState({sideUp});
  };
  handleObjects = () => {
    const object = RoPaSc[Math.floor(Math.random() * RoPaSc.length)].item
    this.setState({object});
  };
  handleGuess = (result) => {
    this.setState({guessSide: result});
  };
  handleGuessObject = (result) => {
    this.setState({guessObject: result});
  };

  render() {
    return (
    <div>
      <div>
      <Guess
        choice={Coin}
        guessSide = {this.state.guessSide}
        onClick = {this.state.guessObject}
        />
        <CoinToss
        sideUp = {this.state.sideUp}
        onClick = {this.handleToss}
        guess = {this.state.guessSide}
        />
        {/* <RevealSide
        guess = {this.state.guessSide}
        sideUp = {this.state.sideUp}
        /> */}
        <GuessObject
        choice = {RoPaSc}
        onClick = {this.guessObject}
        />
        <RockPaperScissors
        objects = {this.state.object}
        onClick = {this.handleObjects}
        />
        {/* <RevealObject
        guess = {this.state.guessObject}
        sideUp = {this.state.object} 
        /> */}
      </div>
    </div>
    );
  };
};

export default GameView;
