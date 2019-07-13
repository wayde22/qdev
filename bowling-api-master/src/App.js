import React from 'react';
import axios from 'axios';
import PlayerList from './components/PlayerList';

const POST = {
	method: 'POST'
};

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			playerName: '',
			game: {}
		};
	}

	createGame = async () => {
		const response = await axios.post('/games');
		this.setState({ game: response.data });
	};

	createPlayer = async () => {
		const response = await axios.post(
			`/games/addPlayer/${this.state.game.id}`,
			{ name: this.state.playerName }
		);

		this.setState({ game: response.data, playerName: '' });
	};

	updatePlayerName = event => {
		this.setState({ playerName: event.target.value });
	};

	render() {
		return (
			<div className="App">
				<h1>Bowling</h1>

				<div onClick={() => this.createGame()}>Create / Reset Game</div>

				<input
					placeholder="Player Name"
					onChange={event => this.updatePlayerName(event)}
					value={this.state.playerName}
				/>

				<div onClick={() => this.createPlayer()}>Create Player</div>

				<PlayerList />
			</div>
		);
	}
}

export default App;
