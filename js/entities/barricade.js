var TILE_WIDTH = 32;
var TILE_HEIGHT = 32;

game.Barricade = me.Entity.extend({
    init : function (x, y) {
        this._super(me.Entity, "init", [x, y, {

            image : "candyCaneBarrier",
            width : 32,
            height : 30
        }]);

        this.x = x;
        this.y = y;
        this.laserSpeed = 250;
        this.coolDown = 500;
        this.range = 3 * (TILE_WIDTH / 2 + TILE_HEIGHT / 2);
        this.firing = false;
        this.firingAngle = 0;
        this.targetIndex = 0;
        this.renderable.scale(1.3, 1.3);

        this.renderable.addAnimation("idle", [0], 2);
        this.renderable.addAnimation("active", [0, 1, 2, 3, 4], 2);
        this.renderable.addAnimation("recharging", [0, 5], 2);
        this.renderable.setCurrentAnimation("active");
        this.counter = this.coolDown;
    },

    update: function (dt) {
        this._super(me.Entity, "update", [dt]);

        this.counter++;
        if (this.counter >= this.coolDown){
            this.renderable.setCurrentAnimation("active");
        }
        // If not firing, look for a target.
        if (this.firing === false){
            this.getTarget();
        }

        // Otherwise fire on the same target until it gets out of range.
        else{
            var i = this.targetIndex;
            var outOfRange = this.getDistance(targetArray[i].x, targetArray[i].y);

            // Target is out of range or dead.
            if (outOfRange > this.range || targetArray[i].isAlive === false){
                this.firingAngle = 0;
                this.firing = false;
            }

            // Target is in range.
            else{
                var distance, cosine, sine;
                var i = this.targetIndex;
                distance = this.getDistance(targetArray[i].x, targetArray[i].y);
                cosine = (targetArray[i].x - this.x) / distance;
                sine = (this.y - targetArray[i].y) / distance;
                this.firingAngle = Math.acos(cosine);

                if (sine < 0)
                    this.firingAngle += Math.PI;

                if (this.counter >= this.coolDown){
                    this.shoot();
                    this.renderable.setCurrentAnimation("recharging");
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

            // Target is in range and alive.
            if (distance < this.range && targetArray[i].isAlive === true){
                this.firing = true;
                this.targetIndex = i;
                break;
            }
        }
        return false;
    },

    // Adds a blank projectile to the game using the current firing angle and pre-defined speed.
    shoot: function(){
        var x, y, speed, angle;
        x = this.pos.x + TILE_WIDTH / 2; // Width of 15, height of 32.
        y = this.pos.y + TILE_HEIGHT / 2;
        speed = this.laserSpeed;
        angle = this.firingAngle;
        me.game.world.addChild(me.pool.pull("blank", x, y, speed, angle));
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
