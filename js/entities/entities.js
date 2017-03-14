

/**
 * a Coin entity
 */
game.CoinEntity = me.CollectableEntity.extend({
    // extending the init function is not mandatory
    // unless you need to add some extra initialization
    init: function (x, y, settings) {
        // call the parent constructor

        this._super(me.CollectableEntity, 'init', [x, y , settings]);
        this.body.setMaxVelocity(0, 0);
    },

    update : function (time) {
        //this._super(me.Sprite, "update", [time]);
        // Check game state first.
        if (game.data.enemyCount <= 0) {
            if (game.data.level == 1 || game.data.level == 2 || game.data.level == 3 || game.data.level == 4){
                console.log("should go to next level");
                //game.data.level += 1;
                me.state.change(me.state.READY);

            }
            if (game.data.level > 4) {
                me.state.change(me.state.GAME_END);
            }
        }
        if (game.data.health <= 0) {
            console.log("why is this triggering")
            me.state.change(me.state.GAME_OVER);
        }
        return true;
    },
});

game.BuildEntity = me.GUI_Object.extend({
    init:function (x, y)
    {
        var settings = {}
        settings.image = "alpha";
        settings.framewidth = 32;
        settings.frameheight = 32;
        // super constructor
        this._super(me.GUI_Object, "init", [x, y, settings]);
        // define the object z order
        this.pos.z = 4;
        this.alreadyMade = false;
    },

    // output something in the console
    // when the object is clicked
    onClick:function (event)
    {
        console.log("clicked!");
        // do something
        if (game.data.gold >= 70  && this.alreadyMade == false) {
            me.game.world.addChild(me.pool.pull("turret", this.pos.x, this.pos.y))
            game.data.gold -= 70;
            this.alreadyMade = true;
            console.log(this.alreadyMade);
        }
        // don't propagate the event
        return false;
    }
});


