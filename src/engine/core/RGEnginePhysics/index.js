


class RGEnginePhysics {
	
	// Constructor
	constructor() {
		// Declare properties
		this.game = undefined;
		this.bodies = [];
	}
	
	registerBody(body) {
		this.bodies = [...this.bodies, body];
	}
	
	checkContact(body) {
		var ret = [];
		for(var i = 0 ; i < this.bodies.length ; i++) {
			var target = this.bodies[i];
			if(body.aabb.max.x < target.aabb.min.x || body.aabb.min.x > target.aabb.max.x) continue;
			if(body.aabb.max.y < target.aabb.min.y || body.aabb.min.y > target.aabb.max.y) continue;
			ret = [...ret, this.bodies[i]];
		}
		if(ret.length > 1) console.log("..!?");
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