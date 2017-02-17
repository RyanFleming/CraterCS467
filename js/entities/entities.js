/**
 * a player entity
 */
game.PlayerEntity = me.Entity.extend({
    /**
     * constructor
     */
    init : function (x, y, settings) {
        // call the constructor
        this._super(me.Entity, 'init', [x, y, settings]);

        // set the default horizontal & vertical speed (accel vector)
        this.body.setVelocity(1, 1);

        // set the display to follow our position on both axis
        me.game.viewport.follow(this.pos, me.game.viewport.AXIS.BOTH);

        // ensure the player is updated even when outside of the viewport
        this.alwaysUpdate = true;

        // define a basic walking animation (using all frames)
        this.renderable.addAnimation("walk",  [0, 1, 2, 3, 4, 5, 6, 7]);

        // define a standing animation (using the first frame)
        this.renderable.addAnimation("stand",  [0]);

        // set the standing animation as default
        this.renderable.setCurrentAnimation("stand");


    },

    /**
     * update the player pos
     */
    update : function (dt) {

        if (me.input.isKeyPressed("shoot")) {
            me.game.world.addChild(me.pool.pull("laser", this.pos.x - game.Laser.width, this.pos.y - game.Laser.height))
        }

        if (this.alive) {
            if (this.walkLeft && this.pos.x <= this.startX) {
                this.walkLeft = false;
            }
            else if (!this.walkLeft && this.pos.x >= this.endX) {
                this.walkLeft = true;
            }

            // make it walk
            this.renderable.flipX(this.walkLeft);
            this.body.vel.x += (this.walkLeft) ? -this.body.accel.x * me.timer.tick : this.body.accel.x * me.timer.tick;
        }
        else {
            this.body.vel.x = 0;
        }

        // update the body movement
        this.body.update(dt);

        // handle collisions against other shapes
        me.collision.check(this);

        // return true if we moved or if the renderable was updated
        return (this._super(me.Entity, 'update', [dt]) || this.body.vel.x !== 0 || this.body.vel.y !== 0);
    },

    /**
     /**
     * colision handler
     */
    onCollision : function () {
        // do something when collected

        // play a "coin collected" sound
        me.audio.play("cling");

        // Take away life
        game.data.health -= 1;
        game.data.enemyCount -= 1;
        if (game.data.enemyCount <= 0) {
            me.state.change(me.state.GAME_END);
        }
        if (game.data.health <= 0) {
            me.state.change(me.state.GAME_OVER);
        }

          // make sure it cannot be collected "again"
         this.body.setCollisionMask(me.collision.types.NO_OBJECT);

         // remove it
         me.game.world.removeChild(this);
    }
});

/**
 * a Coin entity
 */
game.CoinEntity = me.CollectableEntity.extend({
    // extending the init function is not mandatory
    // unless you need to add some extra initialization
    init: function (x, y, settings) {
        // call the parent constructor
        this._super(me.CollectableEntity, 'init', [x, y , settings]);


    },


    // this function is called by the engine, when
    // an object is touched by something (here collected)
    onCollision : function () {
        // do something when collected

        // play a "coin collected" sound
        me.audio.play("cling");

       /* // Take away life
        game.data.score -= 1;

       // make sure it cannot be collected "again"
        this.body.setCollisionMask(me.collision.types.NO_OBJECT);

        // remove it
        me.game.world.removeChild(this); */
    }


});

game.BuildEntity = me.Entity.extend({
    // extending the init function is not mandatory
    // unless you need to add some extra initialization
    init: function (x, y, settings) {
        // define this here instead of tiled
        //settings.image = "wheelie_right";

        // save the area size defined in Tiled
        //var width = settings.width;
        //var height = settings.height;

        // adjust the size setting information to match the sprite size
        // so that the entity object is created with the right size
        //settings.framewidth = settings.width = 64;
        //settings.frameheight = settings.height = 64;

        // redefine the default shape (used to define path) with a shape matching the renderable
        //settings.shapes[0] = new me.Rect(0, 0, settings.framewidth, settings.frameheight);

        // call the parent constructor
        this._super(me.Entity, 'init', [x, y , settings]);

        // set start/end position based on the initial area size
        //x = this.pos.x;
        //this.startX = x;
        //this.endX   = x + width - settings.framewidth
        //this.pos.x  = x + width - settings.framewidth;

        this.alreadyMade = false;
        console.log(this.alreadyMade);

        me.input.registerPointerEvent('pointerdown', this, this.pointerDown.bind(this));

    },

    update : function (time) {
        //this._super(me.Sprite, "update", [time]);


        return true;
    },

    pointerDown: function (event) {
        // do something
        if (game.data.gold >= 70  && this.alreadyMade == false) {
            me.game.world.addChild(me.pool.pull("laser", this.pos.x + (3 * game.Laser.width / 2), this.pos.y - (game.Laser.height / 2)))
            game.data.gold -= 70;
            this.alreadyMade = true;
            console.log(this.alreadyMade);
        }
        // don"t propagate the event to other objects
        return false;
    }

});


/**
 * an enemy Entity
 */
game.EnemyEntity = me.Entity.extend({
    init: function (x, y, settings) {
        // define this here instead of tiled
        settings.image = "wheelie_right";

        // save the area size defined in Tiled
        var width = settings.width;
        var height = settings.height;

        // adjust the size setting information to match the sprite size
        // so that the entity object is created with the right size
        settings.framewidth = settings.width = 64;
        settings.frameheight = settings.height = 64;

        // redefine the default shape (used to define path) with a shape matching the renderable
        settings.shapes[0] = new me.Rect(0, 0, settings.framewidth, settings.frameheight);

        // call the parent constructor
        this._super(me.Entity, 'init', [x, y , settings]);

        // set start/end position based on the initial area size
        x = this.pos.x;
        this.startX = x;
        this.endX   = x + width - settings.framewidth
        this.pos.x  = x + width - settings.framewidth;

        // to remember which side we were walking
        this.walkLeft = false;

        // walking & jumping speed
        this.body.setVelocity(4, 6);

    },

    /**
     * update the enemy pos
     */
    update : function (dt) {

        if (this.alive) {
            if (this.walkLeft && this.pos.x <= this.startX) {
                this.walkLeft = false;
            }
            else if (!this.walkLeft && this.pos.x >= this.endX) {
                this.walkLeft = true;
            }

            // make it walk
            this.renderable.flipX(this.walkLeft);
            this.body.vel.x += (this.walkLeft) ? -this.body.accel.x * me.timer.tick : this.body.accel.x * me.timer.tick;
        }
        else {
            this.body.vel.x = 0;
        }

        // update the body movement
        this.body.update(dt);

        // handle collisions against other shapes
        me.collision.check(this);

        // return true if we moved or if the renderable was updated
        return (this._super(me.Entity, 'update', [dt]) || this.body.vel.x !== 0 || this.body.vel.y !== 0);
    },

    /**
     * colision handler
     * (called when colliding with other objects)
     */
    onCollision : function (response, other) {
        if (response.b.body.collisionType !== me.collision.types.WORLD_SHAPE) {
            // res.y >0 means touched by something on the bottom
            // which mean at top position for this one
            if (this.alive && (response.overlapV.y > 0) && response.a.body.falling) {
                this.renderable.flicker(750);
            }
            return false;
        }
        // Make all other objects solid
        return true;
    }
});


//Tower template from Florian Rappl
//code project
var Tower = me.Entity.extend({
    init: function(x, y, settings) {

        this.range = range || 0;
        this.targets = [];
        this.timeToNextShot = 0;
        this.mazeWeight = 0;
        this.direction = Direction.left;
        this.shotType = shotType || {};
        this.registerEvent(events.shot);
        this._super(MGNest.speed, 25, MGNest.range, MGNest.shotType);
        this.createVisual(MGNest.sprite, [1]);
    },

    update: function() {
        this._super();
        var shot = undefined;

        if (this.timeToNextShot <= 0)
            shot = this.shoot();

        if (shot) {
            this.triggerEvent(events.shot, shot);
            this.timeToNextShot = ~~(1000 / this.speed);
        } else
            this.timeToNextShot -= constants.ticks;
    },
    shoot: function() {
         var closestTarget = this.getClosestTarget(targets, this.range);

        if (closestTarget) {
            var shot = new (this.shotType)();
            shot.mazeCoordinates = this.mazeCoordinates;
            shot.velocity = closestTarget.mazeCoordinates.subtract(this.mazeCoordinates);
            shot.direction = shot.velocity.toDirection();
            shot.targets = targets;
            this.direction = shot.direction;
            return shot;
        }
    },
});
