import React, { Component } from 'react';

import './App.css';

import { Provider } from 'react-redux';

import store from './engine/redux/store';

import Game from './ProjectHunter/core/Game';

class App extends Component {
	
	render() {
		let game = <Game onRef={(ref) => {this.game = ref}}/>;
		return (
			<Provider store={store}>
				<div className="App">
					{game}
				</div>
			</Provider>
		);
	}
	
	componentDidMount() {
		this.game.run();
	}
	
}

export default App;
