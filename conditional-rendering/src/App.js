import React from 'react';
import logo from './logo.svg';
import './App.css';
import FavMusic from './components/FavMusic.js'

const music = [
  { id: 1,
    style: 'rock'
  },
  { id: 2,
  style: 'house'
   },
   { id: 3,
  style: 'country'
   },
   {
  id: 4,
  style: anything
  } 
 ];

const isBusy = false;

const luckyNumbers = [15, 32, 3, 54, 25];

const showMyLuckyNumbers = () => {
  luckyNumbers.map(num => );
}

function App() {
  return (
    <div> 
      <p>This is orange</p>
      <p className="p1">Hello, I'm blue</p>
      <p id="p2">Hi... I'm red</p>
      <FavMusic music={music} />
      {music.length > 3 && <p>I love more than 3 music</p>}
      {isBusy ? <p>Im busy</p> : <p>I'm free</p>}
      <p>My lucky numbers are:</p>
      {showMyLuckyNumbers()}
    </div>
  );
}

export default App;
