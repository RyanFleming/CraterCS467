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
			this.renderable.scale(4, 4);
			var frame = ~~(Math.random() * 5);
	  		this.renderable.addAnimation("pepper", [frame], 5);
			this.renderable.setCurrentAnimation("pepper");	

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
		
       	if (Math.abs(this.pos.x - this.x) > 64 || Math.abs(this.pos.y - this.y) > 64)
			me.game.world.removeChild(this);
        //me.collision.check(this);


        return true;
    }
});
