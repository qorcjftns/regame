
import React from 'react';
import RGObjectCore from '../RGObjectCore';

import { connect } from 'react-redux';

// eslint-disable-next-line
import { bindActionCreators } from 'redux';
// eslint-disable-next-line
import * as gameActions from '../../redux/store/modules/game';

import RGObjectScene from '../RGObjectScene';

import RGEngineCore from '../../core/RGEngineCore';

import './style.css';

class RGObjectGame extends RGObjectCore {
	
	constructor() {
		super();
		
		// Add Engine core...
		this.engineCore = new RGEngineCore();
		this.engineCore.setGame(this);
		this.engineCore.loop();
		
		// Initializes child components
		this.addChild(<RGObjectScene key="MainScene" onRef={this.onRef}/>);
	}
	
	processObject() {
		// console.log("running game...");
	}
	
	render() {
		return (
			<div className="RGObject Game">
				{this.children}
			</div>
		)
	}
	
}

export default connect(
	(state) => ({
		
	}),
	(props) => ({
		
	})
)(RGObjectGame);