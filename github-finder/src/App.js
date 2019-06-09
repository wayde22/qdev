import React from 'react';
import SearchUser from './components/SearchUser'
import GetUser from './components/GetUser'
import SavedUsers from './components/SavedUsers'
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      getInfo: '',
      client_id: '6c2546d2260c44aa89fa',
      client_secret: 'f949724f942f624c69c182cd397063830645a3ec',
      savedUsers: this.handleGetStorage(),

    }
  }

  savedToLocal = () => {
    localStorage.setItem( "savedUsers", JSON.stringify(this.state.savedUsers));
  };

  handleGetStorage = () => {
    let savedUsers = [];
    
    if ( localStorage.getItem("savedUsers") === null ) {
      savedUsers = [];
    } else {
      savedUsers = JSON.parse(localStorage.getItem( "savedUsers" ));
    }
    return savedUsers;
  };


  searchGithub = () => {
    fetch(`https://api.github.com/users/${this.state.userName}?client_id=${this.state.client_id}&client_secret=${this.state.client_secret}`)
        .then(response => response.json())
        .then(json => this.setState({getInfo: json} ))
        .catch(error => console.log(error))  
  }

  handleNameChange = ( event ) => {
      this.setState({ userName: event.target.value.trim() },this.searchGithub)
  }

  handleSaveUser = ( user ) => {
    if (user.name) {
      this.setState({ savedUsers: [...this.state.savedUsers, user]},() => this.savedToLocal())
    } 
  }

  handleDeleteSavedUser = ( id ) => {
    const { savedUsers } = this.state;
    const removeSavedUser = savedUsers.filter( savedUser => savedUser.id !== id)
    this.setState({savedUsers: [...removeSavedUser]},() => this.savedToLocal())
  }

  savedUsersHeading () {
    if (this.state.savedUsers.length > 0) return <h3>Saved Users</h3>
  }


  render() {
    // console.log('Console save', this.state.savedUsers)
    return (
      <div className="App-header">
        <h1>GitHub Search</h1>
          <SearchUser 
            userName={this.state.userName}
            onChange={ (event) => this.handleNameChange(event) }
          />
          
          {this.state.getInfo ?
          <GetUser
            getInfo={this.state.getInfo}
          /> : null
          }
          <button className="zoom" onClick={ () => this.handleSaveUser(this.state.getInfo) }> Save {this.state.getInfo.login} </button>
        
        <span>{this.savedUsersHeading()}</span>
        <div className="container1">
          <SavedUsers
            savedUsers={this.state.savedUsers}
            onDeleteSavedUser={this.handleDeleteSavedUser}
          />
          </div>
      </div>
    )
  }
}

export default App;

// {
//   this.state.getInfo ? 
//     <GetUser
//     getInfo={this.state.getInfo}
//     /> : null 
// }