import React from 'react';
import HelloEveryone from './components/HelloEveryone.js';
import GoodbyeEveryone from './components/GoodbyeEveryone.js';

const names = [
  {
    fname: 'Allison',
    lname: 'Wonderland',
  }
  ,
  {
    fname: 'bob',
    lname: 'smith',
  }
  ,
  {
    fname: 'john',
    lname: 'doe',
  }
]

// This MyAwsomeFirstComp function passes(returns) the div information inside the divs to the corresponding js file.
const MyAwsomeFirstComp = () => (
  <div>
    {names.map(name => 
      <HelloEveryone
      key={name.fname}
      fname={name.fname}
      lname={name.lname}
      />
    )
    }
    <div>
    <GoodbyeEveryone
    firstName="Emily"
    lastName="Blunt"
    />
    </div>
  </div>
);

export default MyAwsomeFirstComp;

