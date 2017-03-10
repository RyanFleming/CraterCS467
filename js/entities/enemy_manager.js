var waveOneOne;
var waveOneTwo;
var waveOneThree;
var waveOneFour;
var waveOneFive;
var waveOneSix;
var waveOneSeven;
var waveOneEight;
var waveOneNine;
var waveOneTen;

function enemyManager(){
	waveOneOne = setTimeout(waveOne, 0, true);
	waveOneTwo = setTimeout(waveOne, 25000, true);
	waveOneThree = setTimeout(waveTwo, 50000, true);
	waveOneFour = setTimeout(waveTwo, 75000, true);
	waveOneFive = setTimeout(waveThree, 100000, true);
	waveOneSix = setTimeout(waveThree, 125000, true);
	waveOneSeven = setTimeout(waveFour, 150000, true);
	waveOneEight = setTimeout(waveFive, 182000, true);
	waveOneNine = setTimeout(waveSix, 214000, true);
	waveOneTen = setTimeout(waveSeven, 246000, true);

};

function enemyManagerStop(){
	clearTimeout(waveOneOne);
	clearTimeout(waveOneTwo);
	clearTimeout(waveOneThree);
	clearTimeout(waveOneFour);
	clearTimeout(waveOneFive);
	clearTimeout(waveOneSix);
	clearTimeout(waveOneSeven);
	clearTimeout(waveOneEight);
	clearTimeout(waveOneNine);
	clearTimeout(waveOneTen);
}

function enemyManager2(){
	waveOneOne = setTimeout(waveOne2, 0, true);
	waveOneTwo = setTimeout(waveOne2, 22000, true);
	waveOneThree = setTimeout(waveTwo2, 44000, true);
	waveOneFour = setTimeout(waveTwo2, 66000, true);
	waveOneFive = setTimeout(waveThree2, 88000, true);
	waveOneSix = setTimeout(waveThree2, 110000, true);
	waveOneSeven = setTimeout(waveFour2, 125000, true);
	waveOneEight = setTimeout(waveFive2, 140000, true);
	waveOneNine = setTimeout(waveSix2, 155000, true);
	waveOneTen = setTimeout(waveSeven2, 170000, true);
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
	
function waveOne2(){
	me.game.world.addChild(me.pool.pull("Enemy", 24*32, 1*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 25*32, 1*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 26*32, 1*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 27*32, 1*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 28*32, 1*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 24*32, 19*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 25*32, 19*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 26*32, 19*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 27*32, 19*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 28*32, 19*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 18*32, 19*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 17*32, 19*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 16*32, 19*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 14*32, 19*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 13*32, 19*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 12*32, 19*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 27*32, 2*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 28*32, 2*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 28*32, 18*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 27*32, 18*32), 3);
}

function waveTwo2(){
	me.game.world.addChild(me.pool.pull("Enemy", 24*32, 1*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 25*32, 1*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 26*32, 1*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 27*32, 1*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 28*32, 1*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 24*32, 19*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 25*32, 19*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 26*32, 19*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 27*32, 19*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 28*32, 19*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 18*32, 19*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 17*32, 19*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 16*32, 19*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 14*32, 19*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 13*32, 19*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 12*32, 19*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 27*32, 2*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 28*32, 2*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 28*32, 18*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 27*32, 18*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 26*32, 2*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 25*32, 2*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 26*32, 18*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 25*32, 18*32), 3);
}

function waveThree2(){
	me.game.world.addChild(me.pool.pull("Enemy", 24*32, 1*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 25*32, 1*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 26*32, 1*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 27*32, 1*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 28*32, 1*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 24*32, 19*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 25*32, 19*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 26*32, 19*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 27*32, 19*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 28*32, 19*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 18*32, 19*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 17*32, 19*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy2", 16*32, 19*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy2", 14*32, 19*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy2", 13*32, 19*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy2", 12*32, 19*32), 3);
}

function waveFour2() {
	me.game.world.addChild(me.pool.pull("Enemy3", 24 * 32, 1 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy3", 25 * 32, 1 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy3", 26 * 32, 1 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy3", 27 * 32, 1 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy3", 28 * 32, 1 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy3", 24 * 32, 19 * 32), 3);
}

function waveFive2(){
	me.game.world.addChild(me.pool.pull("Enemy", 24*32, 1*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 25*32, 1*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 26*32, 1*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 27*32, 1*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 28*32, 1*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 24*32, 19*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 25*32, 19*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 26*32, 19*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 27*32, 19*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 28*32, 19*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 18*32, 19*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 17*32, 19*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 16*32, 19*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 14*32, 19*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 13*32, 19*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 12*32, 19*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 27*32, 2*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 28*32, 2*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 28*32, 18*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 27*32, 18*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy2", 26*32, 2*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy2", 25*32, 2*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy2", 26*32, 18*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy2", 25*32, 18*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy2", 26*32, 17*32), 3);
	me.game.world.addChild(me.pool.pull("Enemy2", 25*32, 17*32), 3);
}

function waveSix2() {
	me.game.world.addChild(me.pool.pull("Enemy3", 24 * 32, 1 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy3", 25 * 32, 1 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy3", 26 * 32, 1 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy3", 27 * 32, 1 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy3", 28 * 32, 1 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy3", 24 * 32, 19 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy2", 25 * 32, 19 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy2", 26 * 32, 19 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy2", 27 * 32, 19 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy2", 28 * 32, 19 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy2", 18 * 32, 19 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy2", 17 * 32, 19 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 16 * 32, 19 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 14 * 32, 19 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 13 * 32, 19 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 12 * 32, 19 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 27 * 32, 2 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 28 * 32, 2 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 28 * 32, 18 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 27 * 32, 18 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 26 * 32, 2 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 25 * 32, 2 * 32), 3);
}

function waveSeven2() {
	me.game.world.addChild(me.pool.pull("Enemy", 24 * 32, 1 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 25 * 32, 1 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 26 * 32, 1 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 27 * 32, 1 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 28 * 32, 1 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 24 * 32, 19 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 25 * 32, 19 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 26 * 32, 19 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 27 * 32, 19 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 28 * 32, 19 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 18 * 32, 19 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 17 * 32, 19 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 16 * 32, 19 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 14 * 32, 19 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 13 * 32, 19 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 12 * 32, 19 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 27 * 32, 2 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 28 * 32, 2 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 28 * 32, 18 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy", 27 * 32, 18 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy2", 26 * 32, 2 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy2", 25 * 32, 2 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy2", 26 * 32, 18 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy2", 25 * 32, 18 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy2", 26 * 32, 17 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy2", 25 * 32, 17 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy2", 26 * 32, 18 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy2", 25 * 32, 18 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy2", 26 * 32, 17 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy2", 25 * 32, 17 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy3", 24 * 32, 1 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy3", 25 * 32, 1 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy3", 26 * 32, 1 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy3", 27 * 32, 1 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy3", 28 * 32, 1 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy3", 24 * 32, 19 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy3", 25 * 32, 19 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy3", 26 * 32, 19 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy3", 27 * 32, 19 * 32), 3);
	me.game.world.addChild(me.pool.pull("Enemy3", 28 * 32, 19 * 32), 3);
}
