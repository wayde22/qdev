import React from 'react'

const Items = ({ item }) => {
  return (
    <div >
      <div >
        <div className='productContainer'>
          <span >{ item.itemName } </span> 
          <span >${ item.itemPrice.toFixed(2) }</span>
        </div>

      </div>
    </div>
  )
}

export default Items;