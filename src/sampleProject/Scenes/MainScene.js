import React from 'react';

import RGObjectScene from '../../engine/object/RGObjectScene';
import RGObjectSprite from '../../engine/object/RGObjectSprite';

class MainScene extends RGObjectScene {
	
	init() {
		this.addChild(<RGObjectSprite key="Sprite" onRef={(ref) => {this.addChildRef(ref)}}/>);
	}
	
	render() {
		return super.render();
	}
	
}

export default MainScene;