game.PlayScreen = me.ScreenObject.extend({
    /**
     * action to perform on state change
     */
    onResetEvent : function () {
        // play the audio track
        me.audio.playTrack("dst-inertexponent");
        // load a level
        me.levelDirector.loadLevel("mall_clone");

        // reset the score
        game.data.health = 10;
        game.data.gold = 265;
        game.data.enemyCount = 13;



        // add our HUD to the game world
        this.HUD = new game.HUD.Container();
        me.game.world.addChild(this.HUD);


        //spawn enemy
        me.input.bindKey(me.input.KEY.SPACE, "shoot", true);
        //me.input.bindPointer(me.input.KEY.B);
        // map the right button click on the X key

    },

    /**
     * action to perform when leaving this screen (state change)
     */
    onDestroyEvent : function () {
        // remove the HUD from the game world
        me.game.world.removeChild(this.HUD);
        // stop the current audio track
        me.audio.stopTrack();
        me.input.unbindKey(me.input.KEY.SPACE);
    },

    checkIfLoss : function () {
        if (game.data.health <= 0) {
            me.state.change(me.state.GAME_OVER);
        }
    }
});

