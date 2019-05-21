import React from 'react';

const Select = (props) => (
  <form onSubmit={props.onSubmit}>
     <label>
       Pick your favorite chocolate bar:
       <select value={props.chocolate} onChange={props.onChange}>
         <option>Select One</option>
         <option value="White Chocolate">White Chocolate</option>
         <option value="Milk Chocolate">Milk Chocolate</option>
         <option value="Dark Chocolate">Dark Chocolate</option>
       </select>
     </label>
     <input type="submit" value="Submit" />
   </form>
)

export default Select;