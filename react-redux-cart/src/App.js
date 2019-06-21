import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import { connect } from 'react-redux';
import { addToCart, addItemRemove } from './store/actions'
import TheStore from './components/TheStore'
import Cart from './components/Cart'
import Total from './components/Total'

class App extends React.Component {

handleAddToCart = (item) => {
  this.props.handleAddToCart(item)
}

handleRemoveCartItem = (item) => {
  this.props.removeCartItem(item)
}


  render() {
    return (

      <div className="App">
        <h1 >The Store</h1> 

         <TheStore 
            allItems={this.props.items}
            addToCart={this.props.handleAddToCart}
          />

          {/* <Total 
            itemsTotal={this.props.cart}
          /> */}

          <Cart 
            cartItems={this.props.cart}
            removeCartItem={this.props.removeCartItem}
          />

      </div>
    );
  }
}


  const mapStateToProps = (state) => ({
    items: state.items,
    cart: state.cart,
  })

  const mapDispatchToProps = (dispatch) => ({
    handleAddToCart: (item) => dispatch(addToCart(item)),
    removeCartItem: (item) => dispatch(addItemRemove(item))
  })



export default connect(mapStateToProps, mapDispatchToProps)(App);
