import React from 'react';
import ReactDOM from 'react-dom';

import Toggle from './components/Toggle.js';
import EventsAndState from './components/EventsAndState.js';
import Form from './components/Form.js';
import TextArea from './components/TextArea.js';
import Select from './components/Select.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: true,
      name: '',
      people: [],
      food: '',
      poem: '',
      chocolate: '',
    };
  }
  handleClick = () => {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }
  handleChange = (event, stateKey) => {
      this.setState({
        ...this.state,
        [stateKey]: event.target.value
      });
   }
  handleEnterPress = (event) => {
    if (event.key === 'Enter') {
      this.setState({
        ...this.state,
        name: '',
        people: [
          ...this.state.people,
          event.target.value
        ]
      });
    }
  }
  handleSubmit = (event, stateKey, input) => {
    alert(`Sumited: ${input}`);
    this.setState({
      ...this.state,
      [stateKey]: '',
    });
    event.preventDefault();
  }
  render() {
    return (
      <div className="App">
        <Toggle
          handleClick={this.handleClick}
          isToggleOn={this.state.isToggleOn}
        />
        <hr/>
        <EventsAndState
          name={this.state.name}
          onKeyDown={this.handleEnterPress}
          onChange={(event) => this.handleChange(event, 'name')}
          people={this.state.people}
        />
        <hr/>
        <Form
          onSubmit={(event) => this.handleSubmit(event, 'food', this.state.food)}
          food={this.state.food}
          onChange={(event) => this.handleChange(event, 'food')}
        />
        <hr/>
        <TextArea
          onSubmit={(event) => this.handleSubmit(event, 'poem', this.state.poem)}
          poem={this.state.poem}
          onChange={(event) => this.handleChange(event, 'poem')}
        />
        <hr />
        <Select
          onSubmit={(event) => this.handleSubmit(event, 'chocolate', this.state.chocolate)}
          chocolate={this.state.chocolate}
          onChange={(event) => this.handleChange(event, 'chocolate')}
        />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
