game.PepperSpray = me.Entity.extend({
    init : function (x, y, speed, angle) {
        this._super(me.Entity, "init", [x, y, {
			image: "pepperSpray",
			width: 32, 
			height: 32
		}]);
			this.z = 5;
			this.x = x;
			this.y = y;
			this.speed = speed;
			this.angle = angle;
			
			this.scaleFactor = 0.02;
			this.myScale = 1;
			this.renderable.scale(this.myScale, this.myScale);
		
			//if (Math.sin(angle) > 0)
				this.rotationAngle = angle + Math.PI / 2;
			//else 
				//this.rotationAngle = angle - Math.PI / 2;
		
			var frame = ~~(Math.random() * 5);
	  		this.renderable.addAnimation("pepper", [frame], 5);
			this.renderable.setCurrentAnimation("pepper");	

			this.body.collisionType = me.collision.types.PROJECTILE_OBJECT;
			this.matrix = new me.Matrix2d();			
		
			this.setMatrix();
			console.log("Angle: " + this.angle + " RotationAngle: " + this.rotationAngle);

			this.alwaysUpdate = true;
    },

    update : function (time) {
		
		var yUpdate = Math.sin(this.angle);
		this.pos.y -= (yUpdate * this.speed * time / 1000);
		
		if (yUpdate > 0 )			
			this.pos.x += (Math.cos(this.angle) * this.speed * time / 1000);		
		else			
			this.pos.x -= (Math.cos(this.angle) * this.speed * time / 1000);
		
		
       	if (Math.abs(this.pos.x - this.x) > 96 || Math.abs(this.pos.y - this.y) > 96)
			me.game.world.removeChild(this);		
		
		if (this.myScale < 1.8){
			this.renderable.scale(1, 1);
			this.myScale += this.scaleFactor;
			this.renderable.scale(this.myScale, this.myScale);
		}
		
		//me.collision.check(this);

        return true;
    },
	
	setMatrix: function(){
		var cosTheta = Math.cos(this.rotationAngle);
		var sinTheta = Math.sin(this.rotationAngle);
		
		if (this.rotationAngle > Math.PI){
			sinTheta = -1 * sinTheta;
		}
	
		this.renderable.transform(this.matrix.setTransform(cosTheta, sinTheta, -1 * sinTheta, cosTheta, 0, 0));
	}	
});
