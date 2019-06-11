import React from 'react';
import logo from './logo.svg';
import './App.css';
import { changeNumber, changeWhiz, changeSome} from './actions' // must import these from you actions.js file to keep from mispelling errors

import { connect } from 'react-redux'; // Using the connect function that comes with react-redux, you can plug any component into Redux’s store and pull out the data it needs.


class App extends React.Component {

  handleClick = () => {
    this.props.changeNumber();
  }

  handleWhizClick = () => {
    this.props.changeWhiz();
  }

  handleSomeClick = () => {
    this.props.changeSome();
  }
  
  render() {
    return (
      <div className="App">

        <button onClick={this.handleClick}> Click </button>
        <div>{this.props.foo}</div>
        
        <button onClick={this.handleWhizClick}>Whiz</button>
        <div>{this.props.whiz}</div>

        <button onClick={this.handleSomeClick}> Something </button>
        <div>{this.props.some}</div>

      </div>
    );
  }
}

const mapStateToProps = (state) => ({ 
  // reduxState: state
  foo: state.foo,
  whiz: state.whiz,
  some: state.some,

})

const mapDispatchToProps = (dispatch) => ({
  changeNumber: () => dispatch(changeNumber()),
  changeWhiz: () => dispatch(changeWhiz()),
  changeSome: () => dispatch(changeSome()),
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
