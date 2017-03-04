game.Peanut = me.Entity.extend({
    init : function (x, y, speed, angle) {
        this._super(me.Entity, "init", [x, y, {
			image: "packingNut",
			width: 32, 
			height: 32
		}]);
			this.z = 5;
			this.speed = speed;
			this.angle = angle;
			this.renderable.scale(0.25, 0.25);
	  		this.renderable.addAnimation("nut", [0, 1, 2, 3, 4], 5);
			this.renderable.setCurrentAnimation("nut");	

			this.body.collisionType = me.collision.types.PROJECTILE_OBJECT;

			this.alwaysUpdate = true;
    },

    update : function (time) {
		
		var yUpdate = Math.sin(this.angle);
		this.pos.y -= (yUpdate * this.speed * time / 1000);
		if (yUpdate > 0 )
			this.pos.x += (Math.cos(this.angle) * this.speed * time / 1000);
		else
			this.pos.x -= (Math.cos(this.angle) * this.speed * time / 1000);
		
       
        //me.collision.check(this);


        return true;
    }
});

