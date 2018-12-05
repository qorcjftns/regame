import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Provider } from 'react-redux';

import RGEngineCore from './engine/core/RGEngineCore/RGEngineCore';
import RGObjectCore from './engine/object/RGObjectCore/RGObjectCore';
import store from './engine/redux/store';

class App extends Component {
	
	constructor() {
		super();
		this.engine = new RGEngineCore();
		
		// Initialize
		this.engine.setGame(<RGObjectCore />);
	}
	
	render() {
		return (
			<Provider store={store}>
				<div className="App">
					{ this.engine.game }
				</div>
			</Provider>
		);
	}
}

export default App;
