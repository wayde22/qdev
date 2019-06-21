import React from 'react'
import Items from './Items'


const Cart = ({cartItems, removeCartItem}) => {
  return (
    <div>
      { 
        cartItems.map((item) => {
          return (
            <div key={item.id} className='cartContainer2'>
              <Items item={item} /> 
              <div row> 
              <button onClick={ () => {} }>-</button>
              <span>10</span>
              <button onClick={ () => {} }>+</button>
              </div>
              <button onClick = { () =>  removeCartItem(item)}> Remove </button>

            </div>)
        })
      }
    </div>
  )
}

export default Cart;