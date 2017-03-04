var TILE_WIDTH = 32;
var TILE_HEIGHT = 32;

// Render code.
// renderer.drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh);
// dx, dy, dw, dh being the destination target & dimensions. sx, sy, sw, sh being the position & dimensions to take from the image


game.Enemy2 = me.Entity.extend({	
  init: function (x, y) {
      this._super(me.Entity, "init", [x, y, {
          image : "shopper2",
          width : 64,
          height : 64		  
      }]);
		
	  	this.speed = 30;
	  	this.x = x;
	  	this.y = y;
	  	this.timeToNextMove = 0;
	  this.health = 64;
      this.body.setCollisionMask(me.collision.types.COLLECTABLE_OBJECT | me.collision.types.PROJECTILE_OBJECT);
	  	this.renderable.scale(0.7, 0.7);
	  	this.renderable.addAnimation("right", [143, 144, 145, 146, 147, 148, 149, 150, 151], 3);
	  	this.renderable.addAnimation("down", [130, 131, 132, 133, 134, 135, 136, 137, 138], 3);
	  	this.renderable.addAnimation("left", [117, 118, 119, 120, 121, 122, 123, 124, 125], 3);
	  	this.renderable.addAnimation("up", [104, 105, 106, 107, 108, 109, 110, 111, 112], 3);	  
	  	this.chooseImage(getDirection(this.x, this.y, game.data.level));
	  
	  	this.number = targetArray.length;
	  	targetArray.push({x: this.x, y: this.y, isAlive: true});
	  	console.log("x: " + this.x + " y: " + this.y + " length: " + targetArray.length);	  	
  },
	
	chooseImage: function (direction) {
		
		switch (direction){
			
			case 'SE':				
				this.renderable.setCurrentAnimation("right");			  		
				break;

			case 'S':				
				this.renderable.setCurrentAnimation("down");			  					  		
				break;

			case 'SW':				
				this.renderable.setCurrentAnimation("left");				  				  				  		
				break;

			case 'W':				
				this.renderable.setCurrentAnimation("left");				  	
				break;

			case 'NW':				
				this.renderable.setCurrentAnimation("left");				  		
				break;

			case 'N':				
				this.renderable.setCurrentAnimation("up");				  		
				break;

			case 'NE':				
				this.renderable.setCurrentAnimation("right");			 			  					  		
				break;
			
			default: // E				
				this.renderable.setCurrentAnimation("right");			 	  				  	
				break;		
					
		
		}
	},

  update: function (dt) {
      this._super(me.Entity, "update", [dt]);
	  
	  var direction = getDirection(this.pos.x + TILE_WIDTH / 2, this.pos.y + TILE_HEIGHT / 2, game.data.level);
	   this.chooseImage(direction);
	  /*
	  var moved = false;
	  
	  if (this.timeToNextMove <= 0){
		  this.chooseImage(direction);
		  moved = true;
	  }
	  
	  if (moved){
		this.timeToNextMove = 1000;
		moved = false;
	  }
	  
	  else {
		 this.timeToNextMove -= me.timer.tick; 
	  }*/
	  
	  switch (direction){

				case 'SE':
					this.pos.x += this.speed * dt / 1000;
					this.pos.y += this.speed * dt / 1000;			  		
					break;

				case 'S':					
					this.pos.y += 2 * this.speed * dt / 1000;			  		
					break;

				case 'SW':
					this.pos.x -= this.speed * dt / 1000;
					this.pos.y += this.speed * dt / 1000;			  		
					break;

				case 'W':
					this.pos.x -= 2 * this.speed * dt / 1000;			  	
					break;

				case 'NW':
					this.pos.x -= this.speed * dt / 1000;
					this.pos.y -= this.speed * dt / 1000;			  		
					break;

				case 'N':					
					this.pos.y -= 2 * this.speed * dt / 1000;			  		
					break;

				case 'NE':
					this.pos.x += this.speed * dt / 1000;
					this.pos.y -= this.speed * dt / 1000;			  		
					break;

				default: // E
					this.pos.x += 2 * this.speed * dt / 1000;			  	
					break;

			}
	  targetArray[this.number].x = this.pos.x + TILE_WIDTH / 2;
	  targetArray[this.number].y = this.pos.y + TILE_HEIGHT / 2;
      //collison check
      me.collision.check(this);
	  // change targetArray.isAlive to false on death.
      return true;
  },

    /**
     /**
     * colision handler and gameplay functions
     */
    onCollision : function () {
        // do something when collected

        // play a "coin collected" sound
        me.audio.play("cling");

        // Take away life
        this.health -= 1;
        game.data.gold += 3;
        game.data.enemyCount -= 1;
        if (game.data.enemyCount <= 0) {
            if (game.data.level == 1 || game.data.level == 2 || game.data.level == 3 || game.data.level == 4){
                console.log("should go to next level");
                game.data.level += 1;
                me.state.change(me.state.READY);

            }
            if (game.data.level > 4) {
                me.state.change(me.state.GAME_END);
            }
        }
        me.game.world.removeChild(this);
		// Set the target array so the turrets choose a new target.
		targetArray[this.number].isAlive = false;
        this.body.setCollisionMask(me.collision.types.NO_OBJECT);

        if (this.health <= 0)
        {
            game.data.gold += 3;
            // remove it
            me.game.world.removeChild(this);
            this.body.setCollisionMask(me.collision.types.NO_OBJECT);
        }


    }
});