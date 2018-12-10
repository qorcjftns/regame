


class RGEnginePhysics {
	
	// Constructor
	constructor() {
		// Declare properties
		this.game = undefined;
		this.FPS = undefined;
		this.interval = undefined;
		
		// initialize
		this.FPS = 60;
		this.interval = 1000 / this.FPS;
	}
	
}

export default RGEnginePhysics;