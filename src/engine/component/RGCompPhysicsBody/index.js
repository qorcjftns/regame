
import RGCompCore from '../RGCompCore';

class RGCompPhysicsBody extends RGCompCore {
	
	constructor(obj) {
		super(obj);
		this.lastTime = undefined;
	}
	
	run(physics) {
		
		if(this.lastTime === undefined) this.lastTime = physics.getTime();
		
		var deltaTime = physics.getTimeDiff(this.lastTime);
		
		this.obj.setState({
			movement: {
				x: this.obj.state.movement.x,
				y: this.obj.state.movement.y + (5 * deltaTime)
			}
		});
		this.obj.setState({
			position: {
				x: this.obj.state.position.x + this.obj.state.movement.x,
				y: this.obj.state.position.y + this.obj.state.movement.y
			}
		});
		
		this.lastTime = physics.getTime();
		
	}
	
}

export default RGCompPhysicsBody;