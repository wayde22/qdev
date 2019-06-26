import React from 'react'
import { NONAME } from 'dns';

function NameInput({ onNameChange, onKeyDown }) {

  return (
    <div className='textField'>
      <input 
        className='inputNameField'
        type='text'
        placeholder='Enter Name...'
        onChange={ (event) => onNameChange(event.target.value.trim()) } 
        onKeyDown={onKeyDown}
      />
    </div>
  )
}


export default NameInput;
