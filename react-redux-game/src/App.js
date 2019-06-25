import React from 'react';
import './App.css';
import { connect } from 'react-redux'
import { changeUserName, changeUserStats, createOnPlayerShot, createOnOpponentShot, createOnPlayerName, createOnNameEntered} from './store/action'
import User from './components/User'
import Opponent from './components/Opponent'
import NameInput from './components/NameInput'
// import DarkDesertNight from './images/DarkDesertNight'

class App extends React.Component {

  handleUserShot = () => {
    this.props.onShot()
    setTimeout( () => {this.props.onOpponentShot()}, 2000 )
  }

  handlePlayerName = (name) => {
    this.props.onPlayerName(name)
  }

  handleNameEnter = (event) => {
    if(event.key === 'Enter') {
      this.props.onNameEntered()
    }
  }


  render() {
  
    return (
      <div className='container'>
        {this.props.displayInputName ?
        <NameInput 
          onNameChange={(name) => { this.handlePlayerName(name) }}
          onKeyDown={this.handleNameEnter}
        /> :
        null}
        
        <User
          userStats={this.props.userStats}
        />

        <button className='shootButton' onClick={ () => this.handleUserShot() } > Shoot </button>
  
        <Opponent 
          oppStats={this.props.oppStats}
        />

        {/* <Messages
          messages={this.props.messages}
        /> */}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  userStats: state.userStats,
  oppStats: state.oppStats,
  player: state.userStats.player,
  displayInputName: state.displayInputName,
})

const mapDispatchToProps = (dispatch) => ({
  changeUserStats: () => dispatch(changeUserStats()),
  onShot: () => dispatch(createOnPlayerShot()),
  onOpponentShot: () => dispatch(createOnOpponentShot()),
  onPlayerName: (player) => dispatch(createOnPlayerName(player)),
  onNameEntered: () => dispatch(createOnNameEntered()),
})


export default connect(mapStateToProps, mapDispatchToProps)(App);

/*
Req-
  1. Player should be able to create a char
  2. Should encounter enemies
  3. Should involve some challenge or combat(e.g. damage/armor/mofifiers)
  4.There should be a random element to the ecounters
  5 Your char should be able to level up.


- user and char "shooting" at each other
- if user wins, he plays a differnt char with more skills, and user
  gains skill along the way
- if you beat all the characters, you win the game.

Questions -
  Does everything in the all of the components become this.props or props?

*/