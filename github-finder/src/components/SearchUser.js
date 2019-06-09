import React from 'react'

const SearchUser = ({userName, onChange}) => (
  <div>
    {/* <p>Enter username</p> */}
    <input 
      type="text"
      placeholder="Enter Username...."
      value={userName}
      onChange={onChange}
    />
  </div>
)

export default SearchUser;