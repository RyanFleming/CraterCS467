

function enemyManager(){
	
	setTimeout(waveOne, 0, true);
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