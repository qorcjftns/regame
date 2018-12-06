
import React from 'react';
import RGObjectCore from '../RGObjectCore';

import { connect } from 'react-redux';

class RGObjectSprite extends RGObjectCore {
	
	processObject() {
		// console.log("running sprite...");
		this.setState({
			position: {
				x: this.state.position.x + 1,
				y: this.state.position.y + 1
			}
		});
	}
	
	render() {
		return (
			<div className="RGObject Sprite" style={this.calculatePosition()}>
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
)(RGObjectSprite);