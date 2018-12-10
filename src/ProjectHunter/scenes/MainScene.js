import React from 'react';

import RGObjectScene from '../../engine/object/RGObjectScene';
import Character from '../sprites/Character';
import Ground from '../sprites/Ground';

class MainScene extends RGObjectScene {
	
	init() {
		this.addChild(<Character key="Sprite" onRef={(ref) => {this.addChildRef(ref)}}/>);
		this.addChild(<Ground key="Ground" onRef={(ref) => {this.addChildRef(ref)}}/>);
	}
	
	render() {
		return super.render();
	}
	
}

export default MainScene;