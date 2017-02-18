/******************
Adam Much
1-24-2017, Last modified: 2-17-2017
CS 467
Crater group initial canvas drawing to test a path.
******************/

// Adjust the canvas element in the HTML file accordingly if changes are made to 
// IMAGE_WIDTH or IMAGE_HEIGHT.
var IMAGE_WIDTH = 1200;
var IMAGE_HEIGHT = 800;

// 30 tiles wide by 20 tiles high, scale to the IMAGE_WIDTH and IMAGE_HEIGHT.
var TILE_WIDTH = IMAGE_WIDTH / 30;
var TILE_HEIGHT = IMAGE_HEIGHT / 20;

var canvas = document.getElementById('mainCanvas');
var context = canvas.getContext('2d');

var img = new Image();
img.src = "images/mall_clone.png";

var baldImage = new Image();
baldImage.src = "images/baldGuy.png";

var barricade = new Image();
barricade.src = "images/Candy_Fence_sprite_001.png";

//Draws the background and scales it to the globally defined IMAGE_WIDTH and IMAGE_HEIGHT.
function drawBackground(){	
	// For some reason this onload function is necessary.
	img.onload = function(){
		
		context.drawImage(img, 0, 0, IMAGE_WIDTH, IMAGE_HEIGHT);		
		
	};	
};

// Draw the background on load.
drawBackground();

// Arrays to hold the customers, towers, and spawn points.
var objectArray = [];
var towerArray = [
	// Middle of column 7, rows 7 and 14.
	{x: 6 * TILE_WIDTH + TILE_WIDTH / 2, y: 6 * TILE_HEIGHT + TILE_HEIGHT / 2, active: false},
	{x: 6 * TILE_WIDTH + TILE_WIDTH / 2, y: 13 * TILE_HEIGHT + TILE_HEIGHT / 2, active: false},
	
	// Middle of column 15, rows 4 and 17.
	{x: 14 * TILE_WIDTH + TILE_WIDTH / 2, y: 3 * TILE_HEIGHT + TILE_HEIGHT / 2, active: false},
	{x: 14 * TILE_WIDTH + TILE_WIDTH / 2, y: 16 * TILE_HEIGHT + TILE_HEIGHT / 2, active: false},
	
	// between columns 26 and 27, rows 5 and 16. 
	{x: 26 * TILE_WIDTH, y: 4 * TILE_HEIGHT + TILE_HEIGHT / 2, active: false},
	{x: 26 * TILE_WIDTH, y: 15 * TILE_HEIGHT + TILE_HEIGHT / 2, active: false}
	
];
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

// Function to track the mouse position.
function getMousePos(canvas, event) {
	var rect = canvas.getBoundingClientRect();
	return {
	  x: event.clientX - rect.left,
	  y: event.clientY - rect.top
	};
}

// On a mouse down event, check for a tower to activate.
canvas.addEventListener('mousedown', function(event) {
	
	var mousePos = getMousePos(canvas, event);
	
	for (var i = 0; i < towerArray.length; i++){
		if (Math.abs(towerArray[i].x - mousePos.x) < (3 * TILE_WIDTH) &&
			Math.abs(towerArray[i].y - mousePos.y) < (3 * TILE_HEIGHT))
			
				if (towerArray[i].active == true){
					towerArray[i].active = false;
				}
				else{
					towerArray[i].active = true;	
				}
		}
	
}, false);


var columns = 30;
var rows = 20;
var direction = [
['SE', 'SE', 'SE', 'SE', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'SE', 'SE', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'SW'],//0	
['SE', 'SE', 'SE', 'E', 'SE', 'SE', 'SE', 'SE', 'SE', 'SE', 'SE', 'SE', 'SE', 'SE', 'SE', 'SE', 'SE', 'SE', 'SE', 'SE', 'SE', 'SE', 'SE', 'S', 'S', 'SW', 'SW', 'SW', 'SW', 'W'],	
['SE', 'SE', 'SE', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'SE', 'S', 'S', 'SW', 'SW', 'SW', 'SW', 'W'],	
['SE', 'SE', 'E', 'E', 'NE', 'NE', 'N', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'SE', 'SE', 'S', 'SW', 'SW', 'SW', 'SW', 'W'],	
['SE', 'E', 'E', 'E', 'NE', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'SE', 'SE', 'S', 'SW', 'SW', 'SW', 'SW', 'W'],//4	
['E', 'E', 'E', 'E', 'NE', 'N', 'N', 'E', 'SE', 'SE', 'S', 'S', 'E', 'SE', 'S', 'S', 'E', 'SE', 'SE', 'S', 'S', 'E', 'SE', 'SE', 'S', 'W', 'W', 'W', 'W', 'W'],	
['E', 'NE', 'E', 'E', 'SE', 'SE', 'S', 'E', 'SE', 'SE', 'SE', 'S', 'S', 'SE', 'SE', 'S', 'S', 'SE', 'S', 'S', 'S', 'E', 'SE', 'SE', 'S', 'SW', 'NW', 'NW', 'NW', 'W'],	
['NE', 'N', 'N', 'E', 'SE', 'SE', 'S', 'E', 'SE', 'SE', 'SE', 'SE', 'SE', 'SE', 'SE', 'SE', 'SE', 'SE', 'SE', 'SE', 'SE', 'E', 'SE', 'SE', 'S', 'SW', 'W', 'NW', 'NW', 'W'],	
['NE', 'N', 'N', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'SE', 'SE', 'S', 'SW', 'W', 'W', 'W', 'W'],	
['N', 'N', 'N', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'SE', 'SW', 'W', 'W', 'W', 'W'],//9
['S', 'S', 'S', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'NE', 'NW', 'W', 'W', 'W', 'W'],	
['S', 'S', 'S', 'E', 'NE', 'NE', 'NE', 'NE', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'NE', 'NE', 'N', 'NW', 'W', 'W', 'W', 'W'],	
['SE', 'S', 'S', 'E', 'NE', 'N', 'N', 'E', 'NE', 'NE', 'NE', 'NE', 'NE', 'NE', 'NE', 'NE', 'NE', 'NE', 'NE', 'NE', 'NE', 'E', 'NE', 'NE', 'N', 'NW', 'W', 'NW', 'NW', 'W'],	
['SE', 'E', 'E', 'E', 'NE', 'NE', 'N', 'E', 'NE', 'NE', 'NE', 'N', 'N', 'NE', 'NE', 'N', 'N', 'NE', 'N', 'N', 'N', 'E', 'NE', 'NE', 'N', 'NW', 'SW', 'SW', 'SW', 'W'],
['E', 'E', 'E', 'E', 'SE', 'S', 'S', 'E', 'SE', 'SE', 'N', 'N', 'E', 'NE', 'N', 'N', 'E', 'NE', 'NE', 'N', 'N', 'E', 'NE', 'NE', 'N', 'W', 'W', 'W', 'W', 'W'],//14	
['NE', 'E', 'E', 'E', 'E', 'SE', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'NE', 'NE', 'N', 'NW', 'NW', 'NW', 'NW', 'W'],	
['NE', 'NE', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'NE', 'NE', 'N', 'NW', 'NW', 'NW', 'NW', 'W'],	
['NE', 'NE', 'NE', 'E', 'NE', 'NE', 'NE', 'NE', 'NE', 'NE', 'NE', 'NE', 'NE', 'NE', 'NE', 'NE', 'NE', 'E', 'E', 'E', 'E', 'NE', 'NE', 'N', 'N', 'NW', 'NW', 'NW', 'NW', 'W'],	
['NE', 'NE', 'NE', 'E', 'NE', 'NE', 'NE', 'NE', 'NE', 'NE', 'NE', 'NE', 'NE', 'NE', 'N', 'N', 'N', 'NE', 'NE', 'NE', 'NE', 'NE', 'NE', 'N', 'N', 'NW', 'NW', 'NW', 'NW', 'W'],	
['NE', 'NE', 'NE', 'NE', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'NE', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'NW'] //19
];


function getDirection(x, y){
	return direction[Math.floor((y + 0.5) / TILE_HEIGHT)][Math.floor((x + 0.5) / TILE_WIDTH)];	
};

function showVectorField(){		
	context.font = '18px Arial';
	context.fillStyle = 'blue';
	
	for (i = 0; i < rows; i++){		
		for (j = 0; j < columns; j++){			
			context.fillText(direction[i][j], j * TILE_WIDTH + TILE_WIDTH / 4, i * TILE_HEIGHT + 3 * TILE_HEIGHT / 4);
		}
	}
	
};

// Used to select which portion of the image to draw.
var spriteCounter = 0;
// Number of pixels to jump per frame. 2 is "normal" speed.
var increment = 2;

// Draws the bald guy image.
function animation(){
	
	
	var speed = 100; // Milliseconds to wait to redraw.
	
	// Half the average of a tile side.
	var radius = TILE_WIDTH / 4 + TILE_HEIGHT / 4;
	var range = 4 * ((TILE_WIDTH + TILE_HEIGHT) / 2); // extra calculation on purpose.
	var unitVector;
	
	// First draw the background.
	context.drawImage(img, 0, 0, IMAGE_WIDTH, IMAGE_HEIGHT);
	
	// Then draw the tower spawn points.
	for (var m = 0; m < towerArray.length; m++){

		if (towerArray[m].active == true){
			// drawImage(image, sourceX, sourceY, sourcewidth, sourceHeight, x, y, width, height);
			context.drawImage(barricade, 0, 0, 2051, 1913, towerArray[m].x - TILE_WIDTH / 2, towerArray[m].y - TILE_HEIGHT / 2, TILE_WIDTH, TILE_HEIGHT);
			/*context.fillStyle = 'yellow';
			context.beginPath();
			//x, y of center, radius, start and end angle.
			context.arc(towerArray[m].x, towerArray[m].y, radius, 0, Math.PI * 2); 
			context.fill();	*/		
		}
		
		else{
			context.strokeStyle = 'yellow';
			context.beginPath();
			//x, y of center, radius, start and end angle.
			context.arc(towerArray[m].x, towerArray[m].y, radius, 0, Math.PI * 2); 
			context.stroke();
		}
		
		context.strokeStyle = 'blue';
		context.beginPath();
		//x, y of center, radius, start and end angle.
		context.arc(towerArray[m].x, towerArray[m].y, range, 0, Math.PI * 2); 
		context.stroke();
	}

	// Then loop through the objects and draw them.
	for (var k = 0; k < objectArray.length; k++){
		
		// Check for a tower in range.
		for (var n = 0; n < towerArray.length; n++){
			if (Math.abs(towerArray[n].x - objectArray[k].x) < (4 * TILE_WIDTH) &&
				Math.abs(towerArray[n].y - objectArray[k].y) < (4 * TILE_HEIGHT)){
				
				// If the tower is active, slow the unit.
				if (towerArray[n].active == true){
					objectArray[k].slowed = true;
				}
				
				else {
					objectArray[k].slowed = false;
				}			
			}						
		}
		
		
		
		if (objectArray[k].slowed == true){
			increment = 1;
		}
		
		else {
			increment = 2;
		}
		
		/**************************
		//Used for testing object destruction.
		**************************/
		/*
		context.font = '30px Arial';
		context.fillStyle = 'blue';
		context.fillText('Current object count: ' + objectArray.length, IMAGE_WIDTH / 3, IMAGE_HEIGHT / 2);
		*/
		
		// 9 images in sprite sheet, loop through and restart.
		if (spriteCounter >= 8){
			spriteCounter = 0;
		}
		
		else{
			spriteCounter++;	
		}
		
		// Get direction for update.
		unitVector = getDirection(objectArray[k].x, objectArray[k].y);
		
		// Call the draw function to get correct portion of image.
		drawBaldGuy(objectArray[k].x, objectArray[k].y, unitVector, spriteCounter);
		
		// Destroy the object if it gets to the mall.
		if (objectArray[k].x > 25 * TILE_WIDTH - TILE_WIDTH / 2 && 
			objectArray[k].x < 25 * TILE_WIDTH + TILE_WIDTH / 2 && 
			objectArray[k].y > 10 * TILE_HEIGHT - TILE_HEIGHT / 2 && 
			objectArray[k].y < 10 * TILE_HEIGHT + TILE_HEIGHT / 2)
			objectArray.splice(k, 1);
		
		// Otherwise, update its position.
		else{
			
			switch (unitVector){

				case 'SE':
					objectArray[k].x = objectArray[k].x + increment;
					objectArray[k].y = objectArray[k].y + increment;
					break;

				case 'S':					
					objectArray[k].y = objectArray[k].y + 2 * increment;
					break;

				case 'SW':
					objectArray[k].x = objectArray[k].x - increment;
					objectArray[k].y = objectArray[k].y + increment;
					break;

				case 'W':
					objectArray[k].x = objectArray[k].x - 2 * increment;					
					break;

				case 'NW':
					objectArray[k].x = objectArray[k].x - increment;
					objectArray[k].y = objectArray[k].y - increment;
					break;

				case 'N':					
					objectArray[k].y = objectArray[k].y - 2 * increment;
					break;

				case 'NE':
					objectArray[k].x = objectArray[k].x + increment;
					objectArray[k].y = objectArray[k].y - increment;
					break;

				default: // E
					objectArray[k].x = objectArray[k].x + 2 * increment;	
					break;

			}
		}
		
	}
	var loopTimer = setTimeout(animation, speed);
};


function addObject(){
	var i = Math.floor(Math.random() * spawnPoints.length);	
	objectArray.push({x: spawnPoints[i].x, y: spawnPoints[i].y, slowed: false});
};

function drawBaldGuy(x, y, direction, counter){
	var offset;
	
	switch(counter){
		case 0:
			offset = 12;
			break;
			
		case 1:
			offset = 50;
			break;
			
		case 2:
			offset = 87;
			break;
			
		case 3:
			offset = 124;
			break;
			
		case 4:
			offset = 161;
			break;
			
		case 5:
			offset = 198;
			break;
		
		case 6:
			offset = 235;
			break;
			
		case 7:
			offset = 274;
			break;
			
		default:
			offset = 311;
			break;
	}
	
	
	
	switch (direction){
				// drawImage(image, sourceX, sourceY, sourcewidth, sourceHeight, x, y, width, height);
				// East walking sequence.
				case 'SE':
					context.drawImage(baldImage, offset, 121, 12, 28, x, y, TILE_WIDTH, TILE_HEIGHT);
					break;
				// South walking sequence.
				case 'S':
					context.drawImage(baldImage, offset - 1, 84, 16, 28, x, y, TILE_WIDTH, TILE_HEIGHT);
					break;
				// West walking sequence.
				case 'SW':
					context.drawImage(baldImage, offset + 1, 46, 13, 28, x, y, TILE_WIDTH, TILE_HEIGHT);
					break;
				// West walking sequence.
				case 'W':
					context.drawImage(baldImage, offset + 1, 46, 13, 28, x, y, TILE_WIDTH, TILE_HEIGHT);
					break;
				// West walking sequence.
				case 'NW':
					context.drawImage(baldImage, offset + 1, 46, 13, 28, x, y, TILE_WIDTH, TILE_HEIGHT);
					break;
				// North walking sequence.
				case 'N':
					context.drawImage(baldImage, offset - 1, 9, 16, 28, x, y, TILE_WIDTH, TILE_HEIGHT);
					break;
				// East walking sequence.
				case 'NE':
					context.drawImage(baldImage, offset, 121, 12, 28, x, y, TILE_WIDTH, TILE_HEIGHT);
					break;
				// East walking sequence.
				default: // E
					context.drawImage(baldImage, offset, 121, 12, 28, x, y, TILE_WIDTH, TILE_HEIGHT);
					break;
	}	
};


/*******************
Code for testing, to be removed later
********************/

// Show or hide spawn points.
var toggleSpawn = true;

function showSpawnPoints(){
	
	// Either show the spawn points.
	if (toggleSpawn){
		// Half the average of a tile side.
		var radius = TILE_WIDTH / 4 + TILE_HEIGHT / 4;		

		for (var i = 0; i < spawnPoints.length; i++){
			
			context.fillStyle = 'black';
			context.beginPath();
			//x, y of center, radius, start, and end angle.
			context.arc(spawnPoints[i].x, spawnPoints[i].y, radius, 0, Math.PI / 3);
			context.lineTo(spawnPoints[i].x, spawnPoints[i].y);
			context.fill();	
			
			context.fillStyle = 'yellow';
			context.beginPath();
			//x, y of center, radius, start, and end angle.
			context.arc(spawnPoints[i].x, spawnPoints[i].y, radius, Math.PI / 3, 2 * Math.PI / 3);
			context.lineTo(spawnPoints[i].x, spawnPoints[i].y);
			context.fill();	
			
			context.fillStyle = 'black';
			context.beginPath();
			//x, y of center, radius, start, and end angle.
			context.arc(spawnPoints[i].x, spawnPoints[i].y, radius, 2 * Math.PI / 3, Math.PI);
			context.lineTo(spawnPoints[i].x, spawnPoints[i].y);
			context.fill();	
			
			context.fillStyle = 'yellow';
			context.beginPath();
			//x, y of center, radius, start, and end angle.
			context.arc(spawnPoints[i].x, spawnPoints[i].y, radius, Math.PI, 4 * Math.PI / 3);
			context.lineTo(spawnPoints[i].x, spawnPoints[i].y);
			context.fill();	
			
			context.fillStyle = 'black';
			context.beginPath();
			//x, y of center, radius, start, and end angle.
			context.arc(spawnPoints[i].x, spawnPoints[i].y, radius, 4 * Math.PI / 3, 5 * Math.PI / 3);
			context.lineTo(spawnPoints[i].x, spawnPoints[i].y);
			context.fill();	
			
			context.fillStyle = 'yellow';
			context.beginPath();
			//x, y of center, radius, start, and end angle.
			context.arc(spawnPoints[i].x, spawnPoints[i].y, radius, 5 * Math.PI / 3, 2 * Math.PI);
			context.lineTo(spawnPoints[i].x, spawnPoints[i].y);
			context.fill();	
			
			context.fillStyle = 'red';
			context.beginPath();
			//x, y of center, radius, start, and end angle.
			context.arc(spawnPoints[i].x, spawnPoints[i].y, radius / 3, 0, Math.PI * 2);
			context.lineTo(spawnPoints[i].x, spawnPoints[i].y);
			context.fill();
		}
		
		toggleSpawn = false;
	}
	
	// Or draw the background.
	else{		
		context.drawImage(img, 0, 0, IMAGE_WIDTH, IMAGE_HEIGHT);
		toggleSpawn = true;
	}
	
};




	

