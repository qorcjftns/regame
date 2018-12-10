
import React from 'react';
import RGObjectCore from '../RGObjectCore';

import { connect } from 'react-redux';

import './style.css';

class RGObjectScene extends RGObjectCore {
	
	constructor() {
		super();
		
		// init
		this.init();
	}
	
	init() {
		
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

export default RGObjectScene;