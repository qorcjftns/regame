
import React, { Component } from 'react';

import { connect } from 'react-redux';

import { bindActionCreators } from 'redux';
import * as gameActions from '../../redux/store/modules/game';

class RGObjectCore extends Component {
	
	state = {
		children: []
	};
	
	constructor() {
		super();
	}

	addChild(child) {
		this.setState({
			children: this.state.children.concat(child)
		});
	}
	
	render() {
		return (
			<div className="object">
			</div>
		);
	}
	
	
}

// Connecting Redux state to component.
export default connect(
	(state) => ({ 		// redux state
		number: state.game.number
	}), 
	(dispatch) => ({ 	// redux action
		GameActions: bindActionCreators(gameActions, dispatch)
	})
)(RGObjectCore);