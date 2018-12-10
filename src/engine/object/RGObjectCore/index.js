
import React, { Component } from 'react';

import './style.css';

class RGObjectCore extends Component {
	
	state = {
		position: {
			x: 0, y: 0, z: 0
		},
		movement: {
			x: 0, y: 0, z: 0
		}
	};
	
	children = [];
	childrenRef = [];
	components = [];

	run() {
		this.processComponents();
		this.processObject();
		this.processChildren();
	}

	processComponents() {
		var len = this.components.length;
		for(var i = 0 ; i < len ; i++) {
			this.components[i].run();
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

	addComponent = (child) => {
		this.components.push(child);
	};

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