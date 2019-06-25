import React from 'react'
import { NONAME } from 'dns';

function NameInput({ onNameChange, onKeyDown }) {

  // let myDiv = document.getElementByClassName('myDiv')
  
// hideField = () => {
//   if(this.props.playerName) {
//     myDiv.display
//   }
// }

  return (
    <div className='textField'>
      <input 
        type='text'
        placeholder='Enter Name...'
        onChange={ (event) => onNameChange(event.target.value.trim()) } 
        onKeyDown={onKeyDown}
      />
    </div>
  )
}


export default NameInput;
