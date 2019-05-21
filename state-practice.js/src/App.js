import React from 'react';
import logo from './logo.svg';
import './App.css';
import SuperPeople from './components/SuperPeople.js'

const superPeople = [
  {
    id: 1,
    name: 'Thanos',
    power: 'the snap'
  },
  {
    id: 2,
    name: 'Iron Man',
    power: 'Intellegence x 3000'
  },
  {
    id: 3,
    name: 'Dr strange',
    power: 'the time store'
  }
];

let restaurants = ['Texas road house', 'bk',' mc donalds', 'arbys'];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      randomPerson: 'Miles',
      randomRestaurants: 'Home'
    }
  }
  handleClick = () => {
    const person1 = superPeople[0].name
//This takes in a random person
      const randomPerson = superPeople[Math.floor(Math.random()* superPeople.length)].name
      const randomRestaurants = restaurants[Math.random() * randomRestaurants.length]
      this.setState({
        randomPerson,
        randomRestaurants,
    }) 
  }

  render() {
    console.log(this.state.randomPerson)
    return (
      <SuperPeople
      superPeople={superPeople}
      restaurants={restaurants}
      onClick={this.handleClick}
      randomPerson={this.state.randomPerson}
      randomeResteraunt={this.state.randomRestaurants}
      />
    );
  }
}



export default App;
