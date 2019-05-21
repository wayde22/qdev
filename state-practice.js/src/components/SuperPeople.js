import React from 'react';

const SuperPeople = (props) => {
  const heroList = props.superPeople.map(
    hero => <p key={hero.id}>{hero.name} has {hero.power}</p>);
  const restaurantList = props.restaurants.map(
    r => <p key={r}>{r}</p>);
      return (
        <div>
          <h1>My Super Heros:</h1>
          {heroList}
          <h1>Restaurant: </h1>
          {restaurantList}
          <button onClick={ props.onClick}>Click me</button>
          <p>{props.randomPerson} likes to at { props.randomRestaurants }</p>
        </div>
      )
}

  export default SuperPeople;
