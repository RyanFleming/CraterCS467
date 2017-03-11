var TILE_WIDTH = 32;
var TILE_HEIGHT = 32;

// Render code.
// renderer.drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh);
// dx, dy, dw, dh being the destination target & dimensions. sx, sy, sw, sh being the position & dimensions to take from the image


game.Enemy = me.Entity.extend({
	init: function (x, y) {
		this._super(me.Entity, "init", [x, y, {
			image : "shopper1",
			width : 64,
			height : 64
		}]);

		this.speed = 20;
		this.x = x;
		this.y = y;
		this.timeToNextMove = 0;
		this.health = 16;
		this.fireCodeValue = 1;
		this.body.setCollisionMask(me.collision.types.COLLECTABLE_OBJECT | me.collision.types.PROJECTILE_OBJECT);
		this.alreadyHit = [];

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
		if (this.health <= 0)	{
			game.data.gold += 3;
			game.data.enemyCount -= 1;
			// remove it
			me.game.world.removeChild(this);
			// Set the target array so the turrets choose a new target.
			targetArray[this.number].isAlive = false;
			//this.body.setCollisionMask(me.collision.types.NO_OBJECT);
		}
		return true;
	},

	/**
	 /**
	 * colision handler and gameplay functions
	 */
	onCollision : function (res, other) {


		// Collision with a tower's projectile.
		if (other.body.collisionType === me.collision.types.PROJECTILE_OBJECT){

			// Packing nut.
			if (other.projectileID == 0){
				me.audio.play("snowBallHit");
				this.health -= other.damage;
			}

			// Pepper spray.
			else if (other.projectileID == 2){
				// If the array is empty take damage and push to the array.
				if (this.alreadyHit.length == 0){
					this.health -= other.damage;
					this.alreadyHit.push(other.id);
				}

				// Otherwise check to see if this enemy has already been hit by this pepper spray.
				else{
					for (var i = 0; i < this.alreadyHit.length; i++){
						// Already hit.
						if (this.alreadyHit[i] === other.id){
							// Don't take away any damage.
						}
						// Not hit yet.
						else{
							this.health -= other.damage;
							this.alreadyHit.push(other.id);
						}
					}
				}
			}

			// Other projectiles.
			// other.projectileID = 0; peanut.
			// other.projectileID = 1; lightning.
			// other.projectileID = 2; pepper spray.
			// other.projectileID = 3; blank.
			else{
				this.health -= other.damage;
			}
		}

		// Enemy reaches the store.
		else if (other.body.collisionType === me.collision.types.COLLECTABLE_OBJECT){
			// play a "coin collected" sound
			me.audio.play("cling");
			game.data.enemyCount -= 1;
			game.data.health -= this.fireCodeValue;
			me.game.world.removeChild(this);
		}

		//this.body.setCollisionMask(me.collision.types.NO_OBJECT);
	}

});