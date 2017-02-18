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
       // me.game.viewport.follow(this.pos, me.game.viewport.AXIS.BOTH);

        // ensure the player is updated even when outside of the viewport
        this.alwaysUpdate = true;

        // define a basic walking animation (using all frames)
        this.renderable.addAnimation("walk",  [0, 1, 2, 3, 4, 5, 6, 7]);

        // define a standing animation (using the first frame)
        this.renderable.addAnimation("stand",  [0]);

        // set the standing animation as default
        this.renderable.setCurrentAnimation("stand");
        this.health = 16;


    },

    /**
     * update the player pos
     */
    update : function (dt) {

        if (me.input.isKeyPressed("shoot")) {
            me.game.world.addChild(me.pool.pull("laser", this.pos.x - game.Laser.width, this.pos.y - game.Laser.height, -10, 0))
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
       this.health -= 1;
        game.data.gold += 3;
        game.data.enemyCount -= 1;
        if (game.data.enemyCount <= 0) {
            me.state.change(me.state.GAME_END);
        }
        me.game.world.removeChild(this);
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

        game.data.health -= 1;
       /* game.data.enemyCount -= 1;
        if (game.data.enemyCount <= 0) {
            me.state.change(me.state.GAME_END);
        }*/
        if (game.data.health <= 0) {
            me.state.change(me.state.GAME_OVER);
        }


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
            me.game.world.addChild(me.pool.pull("Turret", this.pos.x + (2.5 * game.Laser.width), this.pos.y - (game.Laser.height / 5)))
            game.data.gold -= 70;
            this.alreadyMade = true;
            console.log(this.alreadyMade);
        }
        // don"t propagate the event to other objects
        return false;
    }

});

game.SpawnEntity = me.Entity.extend({
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
        this.wave = 0;
        this.timeToNextWave = 0;
        this.testFlag = false;
        // call the parent constructor
        this._super(me.Entity, 'init', [x, y , settings]);

        // set start/end position based on the initial area size
        //x = this.pos.x;
        //this.startX = x;
        //this.endX   = x + width - settings.framewidth
        //this.pos.x  = x + width - settings.framewidth;



    },

    update : function (time) {
        //this._super(me.Sprite, "update", [time]);
        if (this.timeToNextWave <= 0)
        {
            this.wave++;
            this.timeToNextWave = 2500;

        }
        if (this.wave == 1 && this.testFlag == false)
        {
            me.game.world.addChild(me.pool.pull("EnemyEntity", this.pos.x + 64, this.pos.y));
            this.testFlag == true;
        }
        this.timeToNextWave -= me.timer.tick;

    },



});

/**
 * an enemy Entity
 */
game.EnemyEntity = me.Entity.extend({
    init: function (x, y, settings) {
        // define this here instead of tiled
        var settings = {};
        settings.image = "gripe_run_right";
        settings.height = 64;
        settings.width = 64;
        settings.spritewidth = 64;
        settings.spriteheight = 64;
        this._super(me.Entity, 'init', [x, y, settings]);
        // set the default horizontal & vertical speed (accel vector)
        this.body.setVelocity(1, 1);

        // set the display to follow our position on both axis
        // me.game.viewport.follow(this.pos, me.game.viewport.AXIS.BOTH);

        // ensure the player is updated even when outside of the viewport
        this.alwaysUpdate = true;

        // define a basic walking animation (using all frames)
        this.renderable.addAnimation("walk",  [0, 1, 2, 3, 4, 5, 6, 7]);

        // define a standing animation (using the first frame)
        this.renderable.addAnimation("stand",  [0]);

        // set the standing animation as default
        this.renderable.setCurrentAnimation("stand");
        this.health = 16;
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
     /**
     * colision handler
     */
   /* onCollision : function () {
        // do something when collected

        // play a "coin collected" sound
        me.audio.play("cling");

        // Take away life
        this.health -= 1;
        game.data.gold += 3;
        game.data.enemyCount -= 1;
        //if (game.data.enemyCount <= 0) {
        //    me.state.change(me.state.GAME_END);
        //}
        me.game.world.removeChild(this);
        this.body.setCollisionMask(me.collision.types.NO_OBJECT);

        if (this.health <= 0)
        {
            game.data.gold += 3;
            // remove it
            me.game.world.removeChild(this);
            this.body.setCollisionMask(me.collision.types.NO_OBJECT);
        }


    }*/
});

game.Turret = me.Entity.extend({
    init: function(x, y, settings) {
        var settings = {};
        settings.image = "mgnest";
        settings.height = 32;
        settings.width = 32;
        settings.spritewidth = 32;
        settings.spriteheight = 32;
        this._super(me.Entity, 'init', [x, y , settings]);
        this.range = 4.0;
        this.targets = [];
        this.timeToNextShot = 0;
        this.direction
        this.speed = 4.0;
        this.Xcoordinate = x;
        this.Ycoordinate = y;

    },
    update: function() {
        //this._super();
        var shot = undefined;

        if (this.timeToNextShot <= 0) {
            me.game.world.addChild(me.pool.pull("laser", this.pos.x - game.Laser.height, this.pos.y - game.Laser.height, 300, 0));
            me.game.world.addChild(me.pool.pull("laser", this.pos.x - game.Laser.height, this.pos.y - game.Laser.height, 200, 100));
            me.game.world.addChild(me.pool.pull("laser", this.pos.x - game.Laser.height, this.pos.y - game.Laser.height, 100, 200));
            me.game.world.addChild(me.pool.pull("laser", this.pos.x - game.Laser.height, this.pos.y - game.Laser.height, 0, 300));
            shot = true;
        }
        if (shot) {

            this.timeToNextShot = ~~(1000 / this.speed);
            shot = false;

        } else
            this.timeToNextShot -= me.timer.tick;
    },
 /*   targetFilter: function(target) {
        return target.enemyTag == true;
    },
    shoot: function() {
        var targets = this.targets.filter(this.targetFilter);
        var closestTarget = this.getClosestTarget(targets, this.range);

        if (closestTarget) {
   //         var shot = new (Shot)();
   //         shot.Xcoordinate = this.Xcoordinate;
 //           shot.Ycoordinate = this.Ycoordinate;
        //    shot.velocity = closestTarget.mazeCoordinates.subtract(this.mazeCoordinates);
        //    shot.direction = shot.velocity.toDirection();
        //    shot.targets = targets;
        //    this.direction = shot.direction;
        //    return shot;
        }
    },*/
    getClosestTarget: function(targets, maximum) {
        var closestTarget;
        var dist = Number.MAX_VALUE;

        for (var i = targets.length; i--; ) {
            var target = targets[i];
            var t = Math.sqrt((Math.pow(target.xCoordinate - this.xCoordinate),2) + (Math.pow(target.yCoordinate - this.yCoordinate),2));

            if (t < dist) {
                closestTarget = target;
                dist = t;
            }
        }

        if (dist <= maximum)
            return closestTarget;
    },

});

game.Shot = me.Entity.extend({
    init: function(speed, animationDelay, damage, impactRadius) {
    //    this._super(speed, animationDelay);
    //    this.damage = damage || 0;
    //    this.targets = [];
    //    this.impactRadius = impactRadius || 0.5;
    //    this.timeToDamagability = ~~(200 / this.speed);
    //    this.velocity = new Point();
    //    this.registerEvent(events.hit);
    },
    update: function() {
    //    var pt = this.velocity.scale(this.speed * constants.ticks * 0.001);
     //   this.mazeCoordinates = this.mazeCoordinates.add(pt);
    //    this._super();

    //    if (this.timeToDamagability > 0) {
    //        this.timeToDamagability -= constants.ticks;
    //    } else {
    //        var closestTarget = this.getClosestTarget(this.targets, this.impactRadius);

    //        if (closestTarget) {
    //            closestTarget.hit(this);
    //            this.dead = true;
    //            this.triggerEvent(events.hit, closestTarget);
    //        }
  //      }
    },
});