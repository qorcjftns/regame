
import React from 'react';
import RGObjectCore from '../RGObjectCore';

import { connect } from 'react-redux';

import RGObjectSprite from '../RGObjectSprite';

import './style.css';

class RGObjectScene extends RGObjectCore {
	
	constructor() {
		super();
		this.addChild(<RGObjectSprite key="Character" onRef={this.onRef}/>);
	}
	
	processObject() {
		// console.log("running scene...");
	}
	
	render() {
		return (
			<div className="RGObject Scene">
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
)(RGObjectScene);