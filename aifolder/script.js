/******************
Adam Much
1-24-2017, Last modified: 1-26-2017
CS 467
Crater group initial canvas drawing to test a path.
******************/

var TILE_WIDTH = 50;
var TILE_HEIGHT = 50;

var canvas = document.getElementById("mainCanvas");
var context = canvas.getContext("2d");

var objectArray = [];

// Set to a button, draws an outline intersecting the tiles. 
function showTiles(){
	
	context.fillStyle = 'black';
	
	// Draw vertical lines.
	for (var i = 0; i < 1634; i++){
		
		context.beginPath();
		context.moveTo(i + TILE_WIDTH * i, 0);
		context.lineTo(i + TILE_WIDTH * i, 919);
			
		context.stroke();
	}
	
	// Draw horizontal lines.
	for (var j = 0; j < 920; j++){
		
		context.beginPath();
		context.moveTo(0, j + TILE_HEIGHT * j);
		context.lineTo(1633, j + TILE_HEIGHT * j);
		
		context.stroke();
		
	}
};

// Draws black rectangles onto canvas for a path I chose arbitrarily.
function showPath(){
	
	context.fillStyle = 'black';
	
	// Start on the fifth tile from the left and draw twelve tiles down.
	for (var j = 0; j < 12 + TILE_HEIGHT * 11; j += (TILE_HEIGHT + 1)){
		context.fillRect(5 + 4 * TILE_WIDTH, j, TILE_WIDTH, TILE_HEIGHT);	
	}
	
	// Start on the thirteenth tile down and draw right to the 31st.
	for (var i = 5 + TILE_WIDTH * 4; i < 33 + TILE_WIDTH * 32; i += (TILE_WIDTH + 1)){
		if (i > 32 + TILE_WIDTH * 30)
			context.fillStyle = 'blue';
			
		context.fillRect(i, 613, TILE_WIDTH, TILE_HEIGHT);	
	}
	
};

// Draws a white circle that will follow the arbitrarily chosen path.
function animation(){
	
	var increment = 2; // Number of pixels to jump per frame.
	var speed = 20; // Milliseconds to wait to redraw.
	
	// Redaw on each pass.	
	showPath();
	
	for (var k = 0; k < objectArray.length; k++){
		
		// Draw the white circle.
		context.fillStyle = 'white';
		context.beginPath();
		//x, y of center, radius, start and end angle.
		context.arc(objectArray[k].x, objectArray[k].y, 25, 0, Math.PI * 2); 
		context.fill();

		// Path following for the arbitrarily chosen path.
		if (objectArray[k].y < 638)
			objectArray[k].y += increment;
		
		// Remove the object from the array if it makes it into the blue square.
		else if (objectArray[k].x > 1580){
			objectArray.splice(k, 1);
			showPath(); // This is probably unnecessary.
		}
		
		else if (objectArray[k].x < 1581)
			objectArray[k].x += increment;
		
	}
	var loopTimer = setTimeout(animation, speed);
};

// Add an object to the array at the center of the first black square.
function addObject(){
	objectArray.push({x:230, y:25});	
};

// Draw the path on load.
showPath();



	

