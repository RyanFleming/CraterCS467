

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

        if (game.data.health <= 0) {
            console.log("why is this triggering")
            me.state.change(me.state.GAME_OVER);
        }
    }
});

game.BuildEntity = me.Entity.extend({
    // extending the init function is not mandatory
    // unless you need to add some extra initialization
    init: function (x, y, settings) {
        // call the parent constructor
        this._super(me.Entity, 'init', [x, y , {
            width : 32,
            height : 32}
        ]);

       this.alreadyMade = false;
        console.log(this.alreadyMade);

        me.input.registerPointerEvent('pointerdown', this, this.pointerDown.bind(this));
        this.body.setCollisionMask(me.collision.types.NO_OBJECT)

    },

    update : function (time) {
        //this._super(me.Sprite, "update", [time]);
        return true;
    },

    pointerDown: function (event) {
        // do something
        if (game.data.gold >= 70  && this.alreadyMade == false) {
            me.game.world.addChild(me.pool.pull("turret", this.pos.x, this.pos.y))
            game.data.gold -= 70;
            this.alreadyMade = true;
            console.log(this.alreadyMade);
        }
        // don"t propagate the event to other objects
        return false;
    }

});
