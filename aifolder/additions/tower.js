var TILE_WIDTH = 32;
var TILE_HEIGHT = 32;

game.Tower = me.Entity.extend({
  init : function (x, y) {     
      this._super(me.Entity, "init", [x, y, {
		  
      	image : "turret",
		width : 32,
		height : 32		  
	  }]);
	  
	  this.x = x;
	  this.y = y;
	  this.range = 8 * (TILE_WIDTH / 2 + TILE_HEIGHT / 2);
	  this.firing = false;
	  this.targetIndex = 0;
	  this.counter = 0;
	  console.log("TowerX: " + this.x + " TowerY: " + this.y + " Length of enemy array: " + enemyArray.length);
	  
	  this.renderable.addAnimation("right", [0], 2);
	  this.renderable.addAnimation("left", [1], 2);
	  this.renderable.addAnimation("up", [2], 2);
	  this.renderable.addAnimation("down", [3], 2);
	  
	  this.matrix = new me.Matrix2d();
	  this.firingAngle = 0;
	  this.angleReset = true;
	  this.laserSpeed = 750;
	  //this.renderable.transform(matrix.rotate(Math.PI / 4));
	  
   	  this.renderable.setCurrentAnimation("right");
  },
	
	update: function (dt) {
      this._super(me.Entity, "update", [dt]);
	  this.counter++;
	  //console.log(this.distanceTo(me.game.world.getChildByName("enemy"));
	  if (this.firing === false){
		  this.getTarget();
	  }
		
	  else{
		  
		  var outOfRange = this.getDistance(enemyArray[this.targetIndex].x, enemyArray[this.targetIndex].y);
		  if (outOfRange > this.range  && this.angleReset === false){
			console.log("Enemy " + this.targetIndex + " out of range.");
			//this.firingAngle = Math.cos(2 * Math.PI - this.firingAngle);
			
			
			this.renderable.transform(this.matrix.setTransform(Math.cos(this.firingAngle), 
															   -1 * Math.sin(this.firingAngle),
															   Math.sin(this.firingAngle),
															   Math.cos(this.firingAngle),
															   0, 0));
			  
			  
			//this.renderable.setCurrentAnimation("right");
			//this.renderable.transform(this.matrix.setTransform(1, 0, 0, 1, 0, 0));
			this.firing = false;
			this.firingAngle = 0;
			this.angleReset = true;
			  
			  console.log("Angle is reset: " + this.angleReset + ", Angle: " + this.firingAngle);
		  }
		  
		  else{
			  var cosTheta = Math.cos(this.firingAngle);
			  var sinTheta = Math.sin(this.firingAngle);
			  
			  // Reset the matrix.
			  this.renderable.transform(this.matrix.setTransform(cosTheta, -1 * sinTheta, sinTheta, cosTheta, 0, 0));
			  
			  var distance;
			  var i = this.targetIndex;
			  
			  	distance = this.getDistance(enemyArray[i].x, enemyArray[i].y);//Math.sqrt(xDist + yDist);
			  
					if (this.y < enemyArray[i].y){
						cosTheta = (this.x - enemyArray[i].x) / distance;
					}
			  
					else{
						cosTheta = (enemyArray[i].x - this.x) / distance;
					}
			  
				sinTheta = (this.y - enemyArray[i].y) / distance;
			  	this.firingAngle = Math.acos(cosTheta);
			  	this.renderable.transform(this.matrix.setTransform(cosTheta, sinTheta, -1 * sinTheta, cosTheta, 0, 0));
			  	
			  	if (this.counter >= 70){
					
					
					me.game.world.addChild(me.pool.pull("laser", this.pos.x + TILE_WIDTH / 2, this.pos.y + TILE_HEIGHT / 2, this.laserSpeed, this.firingAngle));
					this.counter = 0;
				}
			  
		  }
		  //this.renderable.setCurrentAnimation("right");
		  //this.renderable.transform(this.matrix.rotate(Math.PI / 4));
		  
		  /*if (this.x < enemyArray[this.targetIndex].x){ // Enemy is to the right of the tower.
			this.renderable.setCurrentAnimation("right");
		  }
		  
		  else {
			  this.renderable.setCurrentAnimation("down");
		  }*/
			  
	  }
      return true;
  },
	
	setTurretDirection: function(locationX, locationY){
		var opposite, adjacent, hypotenuse, cosTheta, sinTheta;
		opposite = this.x - locationX;
		adjacent = this.y - locationY;
		hypotenuse = Math.sqrt(Math.pow(opposite, 2) + Math.pow(adjacent, 2));
		cosTheta = adjacent / hypotenuse;
		sinTheta = opposite / hypotenuse;
		this.renderable.transform(this.matrix.setTransform(cosTheta, sinTheta, -1 * sinTheta, cosTheta, 0, 0));
			
	},
	
	getDistance: function(locationX, locationY){
		var xComponent, yComponent, distance;
		xComponent = Math.pow(this.x - locationX, 2);
		yComponent = Math.pow(this.y - locationY, 2);
		distance = Math.sqrt(xComponent + yComponent);
		return distance;
	},
	
	getTarget: function(){
		//if (this.distanceTo(me.game.Enemy) < this.range)
		//	console.log("enemy1 in range");
		var distance;
		var xDist, yDist, cosTheta, sinTheta;
		for (i = 0; i < enemyArray.length; i++){
			
			distance = this.getDistance(enemyArray[i].x, enemyArray[i].y);//Math.sqrt(xDist + yDist);
			if (this.y < enemyArray[i].y){
				cosTheta = (this.x - enemyArray[i].x) / distance;
			}
			else{
				cosTheta = (enemyArray[i].x - this.x) / distance;
			}
			sinTheta = (this.y - enemyArray[i].y) / distance;
			//console.log("towerX: " + this.x + " enemyX: " + enemyArray[i].x + " distance: " + distance);
			if (distance < this.range){ // Put in && enemyArray[i].isAlive.
				this.firing = true;
				this.targetIndex = i;
				this.firingAngle = Math.acos(cosTheta);
				//this.renderable.transform(this.matrix.rotate(-1 * this.firingAngle));
				this.angleReset = false;
				
				//this.setTurretDirection(enemyArray[i].x, enemyArray[i].y);
				
				this.renderable.transform(this.matrix.setTransform(cosTheta, sinTheta, -1 * sinTheta, cosTheta, 0, 0));
				console.log("Firing on enemy " + this.targetIndex + " at angle: " + this.firingAngle);
				console.log("Angle is reset: " + this.angleReset);
				console.log("aTan: " + getAngle(this.x, this.y, enemyArray[i].x, enemyArray[i].y));
				break;
			}
		}
		
	}
});

function getAngle(x1, y1, x2, y2){
	return Math.atan((y2 - y1) / (x2 - x1));
};