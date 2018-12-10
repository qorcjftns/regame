import React from 'react';

import RGObjectScene from '../../engine/object/RGObjectScene';
import Character from '../sprites/Character';

class MainScene extends RGObjectScene {
	
	init() {
		this.addChild(<Character key="Sprite" onRef={(ref) => {this.addChildRef(ref)}}/>);
	}
	
	render() {
		return super.render();
	}
	
}

export default MainScene;