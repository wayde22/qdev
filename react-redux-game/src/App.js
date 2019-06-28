import React from 'react';
import './App.css';
import { connect } from 'react-redux'
import { changeUserName, changeUserStats, createOnPlayerShot, createOnOpponentShot, createOnPlayerName, createOnNameEntered, createOnPlayerStatusMessage} from './store/action'
import User from './components/User'
import Opponent from './components/Opponent'
import NameInput from './components/NameInput'
import UserMessage from './components/UserMessage'
import OpponentMessage from './components/OpponentMessage'

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

  handlePlayerStatusMessage = () => {
    this.props.onPlayerStatusMessage()
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
        <button className='shootButton' onClick={ () => this.handleUserShot() } > Go </button>
  
        <Opponent 
          oppStats={this.props.oppStats}
        />

        <UserMessage
          userStats={'this.props.userStats'}
        />

        <OpponentMessage
          oppStats={this.props.oppStats}
        />
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