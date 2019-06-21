import React from 'react'
import Items from './Items'

const TheStore = ({ allItems, addToCart }) => {
  return (
    <div className='row'>
      {
        allItems.map((item) => {
          return (
            <div key={item.id} className='cartContainer'>
              <Items item={item} />  
              <button onClick = { () =>  addToCart(item)}> Add </button>

            </div>)
        })
      }
    </div>
  )
}

export default TheStore;
