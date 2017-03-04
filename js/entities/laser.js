game.Laser = me.Entity.extend({
    init : function (x, y, speed, angle) {
        this._super(me.Entity, "init", [x, y, { width: game.Laser.width, height: game.Laser.height }]);
        this.z = 5;
        this.speed = speed;
        this.angle = angle;
        //var xSpeed = speed * Math.cos(angle);
        //var ySpeed = speed * Math.sin(angle);
        //this.body.setVelocity(xSpeed, ySpeed);
        this.body.collisionType = me.collision.types.PROJECTILE_OBJECT;
        this.renderable = new (me.Renderable.extend({
            init : function () {
                this._super(me.Renderable, "init", [0, 0, game.Laser.width, game.Laser.height]);
            },
            destroy : function () {},
            draw : function (renderer) {
                var color = renderer.getColor();
                renderer.setColor('#5EFF7E');
                renderer.fillRect(0, 0, this.width, this.height);
                renderer.setColor(color);
            }
        }));
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

game.Laser.width = 5;
game.Laser.height = 5;