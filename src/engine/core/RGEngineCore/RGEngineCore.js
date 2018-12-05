


class RGEngineCore {
	
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
	
	// Setters
	setGame(game) {
		this.game = game;
	}
	
	
	// Methods
	
	start(game) {
		this.setGame(game);
		this.loop();
	}
	
	loop() {
		setInterval(() => {
			this.game.run();
		}, this.interval);
	}
	
}

export default RGEngineCore;