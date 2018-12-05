
import React, { Component } from 'react';

import { connect } from 'react-redux';

import { bindActionCreators } from 'redux';
import * as gameActions from '../../redux/store/modules/game';

import './style.css';

class RGObjectCore extends Component {
	
	state = {
		position: {
			x: 50, y: 50, z: 0
		},
		children: []
	};

	addChild = (child) => {
		this.setState({
			children: this.state.children.concat(child)
		});
	};

	render() {
		
		let { position } 	= this.state;
		
		var style = {
			left: 	position.x,
			top: 	position.y,
		};
		
		return (
			<div className="object" style={style}>
			</div>
		);
	}
	
	
}

// Connecting Redux state to component.
export default connect(
	(state) => ({ 		// redux state
		camera: state.game.camera
	}), 
	(dispatch) => ({ 	// redux action
		GameActions: bindActionCreators(gameActions, dispatch)
	})
)(RGObjectCore);