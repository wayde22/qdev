import React from 'react';
import logo from './logo.svg';
import './App.css';
import { CHANGE_WHIZ_TO_BANG, CHANGE_BAR_TO_RANDOM, CHANGE_SOMETHING} from './actions' // must import these from you actions.js file to keep from mispelling errors

import { connect } from 'react-redux'; // Using the connect function that comes with react-redux, you can plug any component into Redux’s store and pull out the data it needs.


class App extends React.Component {

  handleClick = () => {
    this.props.dispatch({ type: CHANGE_BAR_TO_RANDOM, payload: Math.floor(Math.random() * 100)}) //this.props.dispatch({ type: 'CHANGE_BAR_TO_RANDOM', payload: Math.floor(Math.random() * 100)})
  }

  handleWhizClick = () => {
    this.props.dispatch({ type: CHANGE_WHIZ_TO_BANG, payload: 'Bang!!!'})
  }

  handleSomeClick = () => {
    this.props.dispatch({ type: CHANGE_SOMETHING, payload: 'WOW!!!'})
  }
  
  render() {
    return (
      <div className="App">

        <button onClick={this.handleClick}> Click </button>
        <div>{this.props.reduxState.foo}</div>
        
        <button onClick={this.handleWhizClick}>Whiz</button>
        <div>{this.props.reduxState.whiz}</div>

        <button onClick={this.handleSomeClick}> Something </button>
        <div>{this.props.reduxState.some}</div>

      </div>
    );
  }
}

const mapStateToProps = (state) => ({ // state is the whole state of Redux
  reduxState: state
})

export default connect(mapStateToProps)(App);
