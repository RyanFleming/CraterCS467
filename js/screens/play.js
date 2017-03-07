var targetArray = [];

game.PlayScreen = me.ScreenObject.extend({
    /**
     * action to perform on state change
     */
    onResetEvent : function () {
        // play the audio track

        if (game.data.level == 1) {
            me.audio.playTrack("dst-inertexponent");
            // load a level
            me.levelDirector.loadLevel("mall_clone");
			
			/******************************
			Tower Testing
			
			*******************************/
			//me.game.world.addChild(me.pool.pull("turret", 17 * TILE_WIDTH, 1 * TILE_HEIGHT), 2);
			me.game.world.addChild(me.pool.pull("sprayCan", 21 * TILE_WIDTH + 10, 6 * TILE_HEIGHT), 2);
			me.game.world.addChild(me.pool.pull("lightningTower", 21 * TILE_WIDTH + 8, 13 * TILE_HEIGHT), 2);

            // reset the score
            game.data.health = 100;
            game.data.gold = 265;
            game.data.enemyCount = 74;
            console.log("level 1 loaded");
            console.log(game.data.level);
			targetArray = [];
            enemyManager();

        }

        if (game.data.level == 2) {
            me.audio.playTrack("dst-inertexponent");
            // load a level
            me.levelDirector.loadLevel("bullseye_clone");

            // reset the score
            game.data.health = 10;
            game.data.gold = 220;
            game.data.enemyCount = 13;
            console.log("level 2 loaded");
            console.log(game.data.level);
			targetArray = [];
			enemyManager();

        }

        if (game.data.level == 3) {
            me.audio.playTrack("dst-inertexponent");
            // load a level
            me.levelDirector.loadLevel("best_buy_clone");

            // reset the score
            game.data.health = 10;
            game.data.gold = 300;
            game.data.enemyCount = 13;
            console.log("level 3 loaded");
            console.log(game.data.level);
			targetArray = [];

        }

        if (game.data.level == 4) {
            me.audio.playTrack("dst-inertexponent");
            // load a level
            me.levelDirector.loadLevel("floor_mart_clone");

            // reset the score
            game.data.health = 10;
            game.data.gold = 680;
            game.data.enemyCount = 13;
            console.log("level 4 loaded");
            console.log(game.data.level);
			targetArray = [];

        }




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
        targetArray = [];
    },

    checkIfLoss : function () {
        if (game.data.health <= 0) {
         //   me.state.change(me.state.GAME_OVER);
        }
    }
});

