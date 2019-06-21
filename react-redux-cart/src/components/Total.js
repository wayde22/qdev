import React from 'react'
import Items from './Items'

const Total = ({ itemsTotal }) => {
  return (
    <div>
        {
          itemsTotal.map((item) => {
            return (
              <div key={item.id} className='cartContainer'>
                {/* <Items item={item} />   */}
                {/* <button onClick = { () =>  addToCart(item)}> Add </button> */}

              </div>)
          })
        }
    </div>
  )
}

export default Total;
