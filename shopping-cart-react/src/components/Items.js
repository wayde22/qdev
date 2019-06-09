import React, { Component } from 'react'


class Items extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div className = 'background'>
        <div className = 'header'>The Store</div>
        <div className = 'flex-container'>
            {
              this.props.items.map( (item) => {
                  return (
                    <div>
                    {item.itemName}
                      <div>{item.itemDescript}</div>
                      <div>{item.itemPrice}</div>
                      <select name='qty'>
                        <option value='1'>1</option>
                        <option value='2'>2</option>
                        <option value='3'>3</option>
                        <option value='4'>4</option>
                        <option value='5'>5</option>
                      </select>

                      <input type='button' value='Add' onClick = { () => console.log('hello') }/>
                    </div>
                  )
              })
            }
        </div>
      </div>
      </div>
    )
  }
}

export default Items
