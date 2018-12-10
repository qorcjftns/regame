import React from 'react';

import RGObjectSprite from '../../../engine/object/RGObjectSprite';

import RGCompPhysicsBody from '../../../engine/component/RGCompPhysicsBody';

import './style.css';

class Ground extends RGObjectSprite {
	
	constructor() {
		super();
		var physics = new RGCompPhysicsBody(this);
		physics.setStatic(true);
		this.addComponent(physics);
	}
	
	componentWillMount() {
		this.setState({
			position: {
				x: 0,
				y: 500
			},
			size: {
				x: "100%",
				y: 30
			}
		});
	}
	
	render() {
		
		return (
			<div className="RGObject Sprite Ground" style={this.calculatePosition()}>
				{this.children}
			</div>
		);
	}
	
}

export default Ground;