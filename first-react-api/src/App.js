import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      whatever: '',
    }
  }

  myFunction = () => {
    fetch('https://api.kanye.rest/')
      .then(response => response.json())
      .then(json => this.setState({whatever: json.quote}));
  }

  render() {
  return (
    <div className="App">
      <a>
      <button onClick={() => this.myFunction()}>Click</button>
      <hr />
        <div>
      <span>{this.state.whatever}</span> 
      </div>
      </a>
    </div>
  );
  }
}

export default App;

// myfunction() {
//   fetch('https://api.kanye.rest/')
//   .then(response => response.json())
//   .then(json => console.log(json));
// }


// fetch('https://api.spacexdata.com/v3/ships')
//       .then(response => response.json())
//       .then(json => console.log(json))
//       .catch(error => alert(error));

// fetch('https://api.github.com/users')
//       .then(response => response.json())
//       .then(json => console.log(json))
//       .catch(error => alert(error));