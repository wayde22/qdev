import React from 'react';
import './App.css';
import { connect } from 'react-redux'
import { changeUserName, changeUserStats, createOnPlayerShot, createOnOpponentShot } from './store/action'
import User from './components/User'
import Opponent from './components/Opponent'

class App extends React.Component {

  handleUserShot = () => {
    this.props.onShot()
    setTimeout( () => {this.props.onOpponentShot()}, 2000 )
  }

  render() {


    return (
      <div className='container'>
      
        <User
          userStats={this.props.userStats}
        />
        <button onClick={ () => this.handleUserShot() } > Shoot </button>
  
        <Opponent 
          oppStats={this.props.oppStats}
        />
      

      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  userStats: state.userStats,
  oppStats: state.oppStats,
})

const mapDispatchToProps = (dispatch) => ({
  changeUserStats: () => dispatch(changeUserStats()),
  onShot: () => dispatch(createOnPlayerShot()),
  onOpponentShot: () => dispatch(createOnOpponentShot()),
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