var TILE_WIDTH = 32;
var TILE_HEIGHT = 32;

game.Turret = me.Entity.extend({
  init : function (x, y) {     
      this._super(me.Entity, "init", [x, y, {
		  
      	image : "turret",
		width : 32,
		height : 32		  
	  }]);
	  
	  this.x = x;
	  this.y = y;	  
	  this.laserSpeed = 500;
	  this.range = 4 * (TILE_WIDTH / 2 + TILE_HEIGHT / 2);
	  this.firing = false;
	  this.firingAngle = 0;
	  this.targetIndex = 0;
	  this.matrix = new me.Matrix2d();
	  this.matrixIsSet = false;
	  
	  this.renderable.addAnimation("right", [0], 2);
	  this.renderable.addAnimation("left", [1], 2);
	  this.renderable.addAnimation("up", [2], 2);
	  this.renderable.addAnimation("down", [3], 2);	 
	  
   	  this.renderable.setCurrentAnimation("right");
	  this.counter = 0;
  },
	
	update: function (dt) {
      this._super(me.Entity, "update", [dt]);
		
	  this.counter++;
	  // If not firing, look for a target.
	  if (this.firing === false){
		  this.getTarget();
	  }
	  
	  // Otherwise fire on the same target until it gets out of range.
	  else{
		  var i = this.targetIndex;
		  var outOfRange = this.getDistance(targetArray[i].x, targetArray[i].y);
		  
		  // Target is out of range.
		  if (outOfRange > this.range ){ // Put in || !targetArray[i].isAlive.
			  
			  // Reset the image to facing right, set the angle to 0, and set firing to false.			 
			  this.setMatrix();
			  this.firingAngle = 0;
			  this.firing = false;			
		  }
		  
		  // Target is in range.
		  else{
			// Reset the matrix.			
			this.setMatrix();
			  
			var distance, cosine, sine;
			var i = this.targetIndex;
			distance = this.getDistance(targetArray[i].x, targetArray[i].y);			  
			cosine = (targetArray[i].x - this.x) / distance;
			sine = (this.y - targetArray[i].y) / distance;
			this.firingAngle = Math.acos(cosine);
			
			
			this.setAnimation(sine);
			this.setMatrix();
			  
			if (this.counter >= 70){
				this.shoot();
				
				this.counter = 0;
			}

		  }			  
	  }
      return true;
  },	
	
	
	// Find a target, favors targetArray spawn order.
	getTarget: function(){		
		var distance, cosine, sine;
		
		for (i = 0; i < targetArray.length; i++){
			
			distance = this.getDistance(targetArray[i].x, targetArray[i].y);			
			cosine = (targetArray[i].x - this.x) / distance;
			sine = (this.y - targetArray[i].y) / distance;			
			this.firingAngle = Math.acos(cosine);
			
			
			this.setAnimation(sine);
		
			if (distance < this.range){ // Put in && targetArray[i].isAlive.
				this.firing = true;
				this.targetIndex = i;
				this.setMatrix();				
				break;
			}
		}
		return false; 
	},
	
	// Chooses the left or right facing turret and corrects the firing angle.
	setAnimation: function(sine){
		if (sine < 0){			
			this.firingAngle = this.firingAngle + Math.PI;
			this.renderable.setCurrentAnimation("left");
			this.matrixIsSet = true;
		}

		else{
			this.renderable.setCurrentAnimation("right");
			this.matrixIsSet = false;
		}
		
	},
	
	// Adds a laser to the game using the current firing angle and pre-defined speed.
	shoot: function(){
		var x, y, speed, angle;
		x = this.pos.x + TILE_WIDTH / 2 - 16; // 16 is the width of the packing peanut sprite.
		y = this.pos.y + TILE_HEIGHT / 2 - 16;
		speed = this.laserSpeed;
		angle = this.firingAngle;
		me.game.world.addChild(me.pool.pull("laser", x, y, speed, angle));
	},
	
	// Rotates the image using the current firing angle. If the matrix is not set, rotates couter-clockwise.
	setMatrix: function(){
		var cosTheta = Math.cos(this.firingAngle);
		var sinTheta = Math.sin(this.firingAngle);
		if (this.matrixIsSet){
			sinTheta = -1 * sinTheta;
			this.matrixIsSet = false;
		}
		
		else{
			this.matrixIsSet = true;	
		}
		
		this.renderable.transform(this.matrix.setTransform(cosTheta, sinTheta, -1 * sinTheta, cosTheta, 0, 0));
	},	
	
	// Simple function to return the distance from the turret to a given x and y.
	getDistance: function(locationX, locationY){
		var xComponent, yComponent, distance;
		xComponent = Math.pow(this.x - locationX, 2);
		yComponent = Math.pow(this.y - locationY, 2);
		distance = Math.sqrt(xComponent + yComponent);
		return distance;
	}
});
