import React from 'react'

function NameInput({  }) {
  return (
    <div>
      <form>
        <div>
          <label> Name </label>
          <input type="text" name={e.target.value} />
        </div>
        <br />
        <button type='submit' onChange={(event, name) => this.handleName(event, name)}>Submit</button>
      </form>

      {/* <InputName
          name='name'
          onChange={(event) => this.handleName(event, 'name')}
        /> */}
    </div>
  )
}

export default NameInput;
