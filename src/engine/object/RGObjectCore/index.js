
import React, { Component } from 'react';

import './style.css';

class RGObjectCore extends Component {
	
	state = {
		position: {
			x: 0, y: 0, z: 0
		},
		properties: [],
	};
	
	children = [];
	childrenRef = [];

	run() {
		this.processProperties();
		this.processObject();
		this.processChildren();
	}

	processProperties() {
		var len = this.state.properties.length;
		for(var i = 0 ; i < len ; i++) {
			this.state.properties[i].run();
		}
	}

	// empty
	processObject() {
		return;
	}

	processChildren() {
		var len = this.childrenRef.length;
		for(var i = 0 ; i < len ; i++) {
			this.childrenRef[i].run();
		}
	}

	addChild = (child) => {
		this.children.push(child);
	};

	addChildRef = (childRef) => {
		this.childrenRef.push(childRef);
	};

	onRef = (ref) => {this.addChildRef(ref)};

	componentDidMount() {
		this.props.onRef(this);
	}
	componentWillUnmount() {
		this.props.onRef(undefined);
	}

	calculatePosition = () => {
		let { position } 	= this.state;
		return {
			left: 	position.x,
			top: 	position.y,
		};	
	};

	render() {
		
		var position = this.calculatePosition();
		
		return (
			<div className="RGObject" style={position}>
			</div>
		);
	}
	
	
}

// Connecting Redux state to component.
export default RGObjectCore;