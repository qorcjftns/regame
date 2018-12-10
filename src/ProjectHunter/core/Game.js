import React from 'react';
import { connect } from 'react-redux';

import RGObjectGame from '../../engine/object/RGObjectGame';
import MainScene from '../scenes/MainScene';

class Game extends RGObjectGame {
	
	init() {
		this.addChild(<MainScene key="MainScene" onRef={(ref) => {this.addChildRef(ref)}}/>);
	}
	
	render() {
		return super.render();
	}
}

export default connect(
	(state) => ({
		
	}),
	(props) => ({
		
	})
)(Game);