
import React from 'react';
import RGObjectCore from '../RGObjectCore';

import { connect } from 'react-redux';

class RGObjectSprite extends RGObjectCore {
	
	processObject() {
		
	}
	
	render() {
		return (
			<div className="RGObject Sprite" style={this.calculatePosition()}>
				{this.children}
			</div>
		)
	}
	
}

export default RGObjectSprite;