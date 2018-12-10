
import RGCompCore from '../RGCompCore';

class RGCompPhysicsBody extends RGCompCore {
	
	constructor(obj) {
		super(obj);
		this.lastTime = undefined;
		this.static = false;
		this.registered = false;
	}
	
	calculateAABB() {
		this.aabb = {
			min: {
				x: this.obj.state.position.x,
				y: this.obj.state.position.y
			},
			max: {
				x: this.obj.state.position.x + this.obj.state.size.x,
				y: this.obj.state.position.y + this.obj.state.size.y
			},
		};
	}
	
	setStatic(stat) {
		this.static = stat;
	}
	
	run(physics) {
		
		this.calculateAABB();
		
		if(!this.registered) {
			physics.registerBody(this);
			this.registered = true;
		}
		
		if(this.lastTime === undefined) this.lastTime = physics.getTime();
		
		var deltaTime = physics.getTimeDiff(this.lastTime);
		if(this.static) {
			this.obj.setState({
				movement: {
					x: 0,
					y: 0
				}
			});
		} else {
			this.obj.setState({
				movement: {
					x: this.obj.state.movement.x,
					y: this.obj.state.movement.y + (5 * deltaTime)
				}
			});
		}
		this.obj.setState({
			position: {
				x: this.obj.state.position.x + this.obj.state.movement.x,
				y: this.obj.state.position.y + this.obj.state.movement.y
			}
		});
		
		physics.checkContact(this);
		
		this.lastTime = physics.getTime();
		
	}
	
}

export default RGCompPhysicsBody;