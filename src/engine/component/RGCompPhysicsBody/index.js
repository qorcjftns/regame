
import RGCompCore from '../RGCompCore';

class RGCompPhysicsBody extends RGCompCore {
	
	run() {
		
		
		
		this.obj.setState({
			movement: {
				x: this.obj.state.movement.x,
				y: this.obj.state.movement.y + 0.1
			}
		});
		this.obj.setState({
			position: {
				x: this.obj.state.position.x + this.obj.state.movement.x,
				y: this.obj.state.position.y + this.obj.state.movement.y
			}
		});
		
	}
	
}

export default RGCompPhysicsBody;