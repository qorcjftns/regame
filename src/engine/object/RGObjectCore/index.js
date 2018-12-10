
import React, { Component } from 'react';

import './style.css';

class RGObjectCore extends Component {

	run(physics) {
		this.processComponents(physics);
		this.processObject(physics);
		this.processChildren(physics);
	}

	processComponents(physics) {
		var len = this.components.length;
		for(var i = 0 ; i < len ; i++) {
			this.components[i].run(physics);
		}
	}

	// empty
	processObject(physics) {
		return;
	}

	processChildren(physics) {
		var len = this.childrenRef.length;
		for(var i = 0 ; i < len ; i++) {
			if(this.childrenRef[i] !== undefined)
				this.childrenRef[i].run(physics);
		}
	}

	componentDidMount() {
		this.props.onRef(this);
	}
	componentWillUnmount() {
		this.props.onRef(undefined);
	}

	render() {
		
		var position = this.calculatePosition();
		
		return (
			<div className="RGObject" style={position}>
			</div>
		);
	}
	
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

	calculatePosition = () => {
		let { position } 	= this.state;
		return {
			left: 	position.x,
			top: 	position.y,
		};	
	};
	
}

// Connecting Redux state to component.
export default RGObjectCore;