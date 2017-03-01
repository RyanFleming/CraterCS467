var targetArray = [];

game.PlayScreen = me.ScreenObject.extend({
    /**
     *  action to perform on state change
     */
    onResetEvent: function() {
		me.game.world.addChild(me.pool.pull("mall_clone"), 0);		
		
		enemyManager();
		
		//me.game.world.addChild(me.pool.pull("tower", 16 * TILE_WIDTH, 4 * TILE_HEIGHT), 2);
		me.game.world.addChild(me.pool.pull("turret", 16 * TILE_WIDTH, 4 * TILE_HEIGHT), 2);
    },

    /**
     *  action to perform when leaving this screen (state change)
     */
    onDestroyEvent: function() {
      targetArray = [];
    }
});
