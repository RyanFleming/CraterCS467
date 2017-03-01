

/* game namespace */
var game = {
    /**
     * an object where to store game global data
     */
    data: {
        health: 0,
        gold: 0,
        enemyCount: 0
    },

    // Run on page load.
    onload: function () {
        // Initialize the video.
        if (!me.video.init(960, 640, {wrapper: "screen", scale: "auto", scaleMethod: "flex-width"})) {
            alert("Your browser does not support HTML5 canvas.");
            return;
        }

        // add "#debug" to the URL to enable the debug Panel
        if (me.game.HASH.debug === true) {
            window.onReady(function () {
                me.plugin.register.defer(this, me.debug.Panel, "debug", me.input.KEY.V);
            });
        }

        // initialize the "audio"
        me.audio.init("mp3,ogg");

        // Set a callback to run when loading is complete.
        me.loader.onload = this.loaded.bind(this);

        // Load the resources.
        me.loader.preload(game.resources);

        // Initialize melonJS and display a loading screen.
        me.state.change(me.state.LOADING);
    },

    /*
     * callback when everything is loaded
     */
    loaded : function () {
        // set the "Play/Ingame" Screen Object
        me.state.set(me.state.MENU, new game.TitleScreen());

        // set the "Play/Ingame" Screen Object
        me.state.set(me.state.PLAY, new game.PlayScreen());

        //set the loss screen
        me.state.set(me.state.GAME_OVER, new game.LossScreen());

        //set the credits screen
        me.state.set(me.state.GAME_END, new game.WinScreen());

        // set a global fading transition for the screen
        me.state.transition("fade", "#FFFFFF", 250);

        // register our player entity in the object pool
        me.pool.register("mainPlayer", game.PlayerEntity);
        me.pool.register("CoinEntity", game.CoinEntity);
        me.pool.register("EnemyEntity", game.EnemyEntity);
        me.pool.register("laser", game.Laser);
        me.pool.register("BuildEntity", game.BuildEntity);
        me.pool.register("Turret", game.Turret);
        me.pool.register("Shot", game.Shot);
        me.pool.register("SpawnEntity", game.SpawnEntity);	
		me.pool.register("enemy", game.Enemy);
		
        // enable the keyboard
        me.input.bindKey(me.input.KEY.LEFT, "left");
        me.input.bindKey(me.input.KEY.RIGHT, "right");
        me.input.bindKey(me.input.KEY.X, "jump", true);
        me.input.bindKey(me.input.KEY.B, "build");
        //me.input.bindPointer(me.input.KEY.B);
        // map the right button click on the X key
       // me.input.bindPointer(me.input.pointer.RIGHT, me.input.KEY.B);


        // display the menu title
        me.state.change(me.state.MENU);
    }
};


//turns off gravity
me.sys.gravity = 0;