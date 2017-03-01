var TILE_WIDTH = 32;
var TILE_HEIGHT = 32;

function enemyLoader(){
	me.pool.register("enemy", game.Enemy);
	//me.pool.register("enemy2", game.Enemy2);
	me.pool.register("enemy3", game.Enemy);
	me.pool.register("enemy4", game.Enemy2);
	me.pool.register("enemy5", game.Enemy);
};

function enemyManager(){
	var i = 8;
	me.game.world.addChild(me.pool.pull("enemy", spawnPoints[i].x, spawnPoints[i].y), 3);
	
	i = 3;
	//me.game.world.addChild(me.pool.pull("enemy2", spawnPoints[i].x, spawnPoints[i].y), 3);
	
	i = 1;
	me.game.world.addChild(me.pool.pull("enemy3", spawnPoints[i].x, spawnPoints[i].y), 3);
	
	i = 10;
	me.game.world.addChild(me.pool.pull("enemy4", spawnPoints[i].x, spawnPoints[i].y), 3);
		
	
	me.game.world.addChild(me.pool.pull("enemy5", 10*32, 5*32), 3);
	
};

	
	
var spawnPoints = [
	// Column 1, rows 6, 7, 8, 9.
	{x: 0, y: 5 * TILE_HEIGHT},
	{x: 0, y: 6 * TILE_HEIGHT},
	{x: 0, y: 7 * TILE_HEIGHT},
	{x: 0, y: 8 * TILE_HEIGHT},
	
	// Column 1, rows 12, 13, 14, 15.
	{x: 0, y: 11 * TILE_HEIGHT},
	{x: 0, y: 12 * TILE_HEIGHT},
	{x: 0, y: 13 * TILE_HEIGHT},
	{x: 0, y: 14 * TILE_HEIGHT},
	
	
	// Columns 13, 14, 15, 16, 17, row 1.
	{x: 12 * TILE_WIDTH, y: 0},
	{x: 13 * TILE_WIDTH, y: 0},
	{x: 14 * TILE_WIDTH, y: 0},
	{x: 15 * TILE_WIDTH, y: 0},
	{x: 16 * TILE_WIDTH, y: 0},
	
	// Columns 13, 14, 15, 16, 17, row 20.
	{x: 12 * TILE_WIDTH, y: 19 * TILE_HEIGHT},
	{x: 13 * TILE_WIDTH, y: 19 * TILE_HEIGHT},
	{x: 14 * TILE_WIDTH, y: 19 * TILE_HEIGHT},
	{x: 15 * TILE_WIDTH, y: 19 * TILE_HEIGHT},
	{x: 16 * TILE_WIDTH, y: 19 * TILE_HEIGHT}
	
	// Spawn point to test westardly walking..
	//{x: 29 * TILE_WIDTH + TILE_WIDTH / 2, y: 14 * TILE_HEIGHT + TILE_HEIGHT / 2}	
];