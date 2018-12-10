import React from 'react';

import RGObjectSprite from '../../../engine/object/RGObjectSprite';

import RGCompPhysicsBody from '../../../engine/component/RGCompPhysicsBody';

class Character extends RGObjectSprite {
	
	constructor() {
		super();
		this.addComponent(new RGCompPhysicsBody(this));
	}
	
	render() {
		return super.render();
	}
	
}

export default Character;