import React, { Component } from 'react'
import Items from './components/Items'
import logo from './logo.svg';
import './App.css';

const items = [
  {
    id: 1,
    itemName: 'Bread',
    itemDescript: 'Wheat',
    itemPrice: 1.99,
  },
  {
    id: 2,
    itemName: 'Corn',
    itemDescript: 'Can Corn 15oz',
    itemPrice: 1.50
  },
  {
    id: 3,
    itemName: 'Mac n Cheese',
    itemDescript: 'Box 7oz',
    itemPrice: 2.50
  },
  {
    id: 4,
    itemName: 'Apples',
    itemDescript: '5lbs Bag',
    itemPrice: 5.50
  },
  {
    id: 5,
    itemName: 'Cheese',
    itemDescript: 'Sharp Cheddar 3 lbs',
    itemPrice: 9.99
  }
]

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      shoppingCart: [],
      items:items
    }
  }


  render() {
    return (
      <Items 
      items = {this.state.items}
      />
    )
  }
}


export default App;
