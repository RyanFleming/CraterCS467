var TILE_WIDTH = 32;
var TILE_HEIGHT = 32;

/*function enemyLoader(){
	me.pool.register("enemy", game.Enemy);
	//me.pool.register("enemy2", game.Enemy2);
	me.pool.register("enemy3", game.Enemy);
	me.pool.register("enemy4", game.Enemy2);
	me.pool.register("enemy5", game.Enemy);
};*/

var quickMode = true;
var timeArray = [0, 25000, 50000, 75000, 100000, 125000, 150000, 182000, 214000, 246000];
var functionArray = ['waveOne', 'waveOne', 'waveTwo', 'waveTwo', 'waveThree', 'waveThree', 'waveFour', 'waveFive', 'waveSix', 'waveSeven']; 
function enemyManager(){
	
	/*var myTimer;
	for (var i = 0; i < timeArray.length; i++){
		if (quickMode){
			myTimer = timeArray[i] / 10;
		}
		
		else{
			myTimer = timeArray[i];
		}
		setTimeout(functionArray[i], myTimer, true);
		
	}
	*/setTimeout(waveOne, 0, true);
	setTimeout(waveOne, 25000, true);
	setTimeout(waveTwo, 50000, true);
	setTimeout(waveTwo, 75000, true);
	setTimeout(waveThree, 100000, true);
	setTimeout(waveThree, 125000, true);
	setTimeout(waveFour, 150000, true);
	setTimeout(waveFive, 182000, true);
	setTimeout(waveSix, 214000, true);
	setTimeout(waveSeven, 246000, true);
	

	
};

function waveOne(){

	me.game.world.addChild(me.pool.pull("Enemy", 1*32, 6*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 1*32, 12*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 13*32, 1*32), 3);
}

function waveTwo(){

	me.game.world.addChild(me.pool.pull("Enemy", 1*32, 6*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 1*32, 12*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 13*32, 1*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 17*32, 1*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 13*32, 19*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 17*32, 19*32), 3);
}


function waveThree(){

	me.game.world.addChild(me.pool.pull("Enemy", 1*32, 6*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 1*32, 12*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 13*32, 1*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 17*32, 1*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 13*32, 19*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 17*32, 19*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 2*32, 6*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 2*32, 12*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 18*32, 1*32), 3);
}


function waveFour(){

	me.game.world.addChild(me.pool.pull("Enemy", 1*32, 6*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 1*32, 12*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 13*32, 1*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 17*32, 1*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy2", 13*32, 19*32), 3);

}


function waveFive(){

	me.game.world.addChild(me.pool.pull("Enemy2", 1*32, 6*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy2", 1*32, 12*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy2", 13*32, 1*32), 3);


}

function waveSix(){
	me.game.world.addChild(me.pool.pull("Enemy", 1*32, 6*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 1*32, 12*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 13*32, 1*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 17*32, 1*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 13*32, 19*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 17*32, 19*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 2*32, 6*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 2*32, 12*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 18*32, 1*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 18*32, 19*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy2", 1*32, 7*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy2", 1*32, 13*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy2", 14*32, 1*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy2", 14*32, 19*32), 3);
}

function waveSeven(){
	me.game.world.addChild(me.pool.pull("Enemy", 1*32, 6*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 1*32, 12*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 13*32, 1*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 17*32, 1*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 13*32, 19*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 17*32, 19*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 2*32, 6*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 2*32, 12*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 18*32, 1*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 18*32, 19*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 1*32, 7*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 1*32, 13*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 14*32, 1*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 14*32, 19*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 3*32, 6*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 3*32, 12*32), 3);
}
	
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