


class RGEnginePhysics {
	
	// Constructor
	constructor() {
		// Declare properties
		this.game = undefined;	
	}
	
	setGame(g) {
		this.game = g;
	}
	
	getTime() {
		return new Date();
	}
	
	getTimeDiff(time) {
		return (this.getTime() - time) / 1000;
	}
	
	getPhysicsWorld() {
		
	}
	
}

export default RGEnginePhysics;