import React from 'react';
import MyFamily from './MyFamily.js';
import Sports from './Sports.js';

const family = [
  {
    title: 'Wife',
    name: 'Danielle'
  },
  {
    title: 'Son',
    name: 'Zachary'
  },
  {
    title: 'Daughter',
    name: 'Jillian'
  },
  {
    title: 'Son',
    name: 'Isaac'
  },
  {
    title: 'Son',
    name: 'Noah'
  }
]

const AboutMe = () => (
<div className='App'>
  <h2>About Wade</h2>
  <p>I live in Vienna Illinois which is about twenty miles north of the Illinois and Kentucky border. I love living in the country because of it's beauty, it's mostly peaceful, I like to hunt and fish, and I rarely have to sit in traffic. I like to read and study history and philosophy.</p>

  <div className = 'Color-blue'>
  <p>I love to spend time with my family...</p>
  {family.map(member => 
    <MyFamily
    key={family.title}
    title={member.title}
    name={member.name}
    />)
  }
  </div>
  
  <div className = 'Left-align'> 
  <Sports
  />
  </div>
</div>
);
export default AboutMe;