/******************
Adam Much
1-24-2017, Last modified: 1-28-2017
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

//Draws the background and scales it to the globally defined IMAGE_WIDTH and IMAGE_HEIGHT.
function drawBackground(){	
	// For some reason this onload function is necessary.
	img.onload = function(){
		
		context.drawImage(img, 0, 0, IMAGE_WIDTH, IMAGE_HEIGHT);		
	};	
};

// Draw the background on load.
drawBackground();

// Arrays to hold the customers and spawn points.
var objectArray = [];
var spawnPoints = [
	// Middle of column 1, rows 6, 7, 8, 9.
	{x: TILE_WIDTH / 2, y: 5 * TILE_HEIGHT + TILE_HEIGHT / 2},
	{x: TILE_WIDTH / 2, y: 6 * TILE_HEIGHT + TILE_HEIGHT / 2},
	{x: TILE_WIDTH / 2, y: 7 * TILE_HEIGHT + TILE_HEIGHT / 2},
	{x: TILE_WIDTH / 2, y: 8 * TILE_HEIGHT + TILE_HEIGHT / 2},
	
	// Middle of column 1, rows 12, 13, 14, 15.
	{x: TILE_WIDTH / 2, y: 11 * TILE_HEIGHT + TILE_HEIGHT / 2},
	{x: TILE_WIDTH / 2, y: 12 * TILE_HEIGHT + TILE_HEIGHT / 2},
	{x: TILE_WIDTH / 2, y: 13 * TILE_HEIGHT + TILE_HEIGHT / 2},
	{x: TILE_WIDTH / 2, y: 14 * TILE_HEIGHT + TILE_HEIGHT / 2},	
	
	// Middle of columns 13, 14, 15, 16, 17, row 1.
	{x: 12 * TILE_WIDTH + TILE_WIDTH / 2, y: TILE_HEIGHT / 2},
	{x: 13 * TILE_WIDTH + TILE_WIDTH / 2, y: TILE_HEIGHT / 2},
	{x: 14 * TILE_WIDTH + TILE_WIDTH / 2, y: TILE_HEIGHT / 2},
	{x: 15 * TILE_WIDTH + TILE_WIDTH / 2, y: TILE_HEIGHT / 2},
	{x: 16 * TILE_WIDTH + TILE_WIDTH / 2, y: TILE_HEIGHT / 2},
	
	// Middle of columns 13, 14, 15, 16, 17, row 20.
	{x: 12 * TILE_WIDTH + TILE_WIDTH / 2, y: 19 * TILE_HEIGHT + TILE_HEIGHT / 2},
	{x: 13 * TILE_WIDTH + TILE_WIDTH / 2, y: 19 * TILE_HEIGHT + TILE_HEIGHT / 2},
	{x: 14 * TILE_WIDTH + TILE_WIDTH / 2, y: 19 * TILE_HEIGHT + TILE_HEIGHT / 2},
	{x: 15 * TILE_WIDTH + TILE_WIDTH / 2, y: 19 * TILE_HEIGHT + TILE_HEIGHT / 2},
	{x: 16 * TILE_WIDTH + TILE_WIDTH / 2, y: 19 * TILE_HEIGHT + TILE_HEIGHT / 2}	
];

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

var columns = 30;
var rows = 20;
var direction = [
['SE', 'SE', 'SE', 'SE', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'SE', 'SE', 'SE', 'SE', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'SW'],//0	
['SE', 'SE', 'SE', 'E', 'SE', 'SE', 'SE', 'SE', 'SE', 'SE', 'SE', 'SE', 'SE', 'SE', 'SE', 'SE', 'SE', 'SE', 'SE', 'SE', 'SE', 'SE', 'SE', 'S', 'S', 'SW', 'SW', 'SW', 'SW', 'W'],	
['SE', 'SE', 'SE', 'E', 'SE', 'SE', 'SE', 'SE', 'SE', 'SE', 'SE', 'SE', 'SE', 'SE', 'SE', 'SE', 'SE', 'SE', 'SE', 'SE', 'SE', 'SE', 'SE', 'S', 'S', 'SW', 'SW', 'SW', 'SW', 'W'],	
['SE', 'SE', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'SE', 'SE', 'S', 'SW', 'SW', 'SW', 'SW', 'W'],	
['SE', 'E', 'E', 'E', 'E', 'NE', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'SE', 'SE', 'S', 'SW', 'SW', 'SW', 'SW', 'W'],//4	
['E', 'E', 'E', 'NE', 'NE', 'N', 'N', 'E', 'SE', 'SE', 'S', 'S', 'E', 'SE', 'S', 'S', 'E', 'SE', 'SE', 'S', 'S', 'E', 'SE', 'SE', 'S', 'W', 'W', 'W', 'W', 'W'],	
['E', 'E', 'E', 'E', 'SE', 'SE', 'S', 'E', 'SE', 'SE', 'SE', 'S', 'S', 'SE', 'SE', 'S', 'S', 'SE', 'S', 'S', 'S', 'E', 'SE', 'SE', 'S', 'SW', 'NW', 'NW', 'NW', 'W'],	
['NE', 'NE', 'N', 'E', 'SE', 'SE', 'S', 'E', 'SE', 'SE', 'SE', 'SE', 'SE', 'SE', 'SE', 'SE', 'SE', 'SE', 'SE', 'SE', 'SE', 'E', 'SE', 'SE', 'S', 'SW', 'W', 'NW', 'NW', 'W'],	
['NE', 'N', 'N', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'SE', 'SE', 'S', 'SW', 'W', 'W', 'W', 'W'],	
['N', 'N', 'N', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'SE', 'SW', 'W', 'W', 'W', 'W'],//9
['S', 'S', 'S', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'NE', 'NW', 'W', 'W', 'W', 'W'],	
['SE', 'S', 'S', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'NE', 'NE', 'N', 'NW', 'W', 'W', 'W', 'W'],	
['SE', 'SE', 'S', 'E', 'NE', 'NE', 'N', 'E', 'NE', 'NE', 'NE', 'NE', 'NE', 'NE', 'NE', 'NE', 'NE', 'NE', 'NE', 'NE', 'NE', 'E', 'NE', 'NE', 'N', 'NW', 'W', 'NW', 'NW', 'W'],	
['E', 'E', 'E', 'E', 'NE', 'NE', 'N', 'E', 'NE', 'NE', 'NE', 'N', 'N', 'NE', 'NE', 'N', 'N', 'NE', 'N', 'N', 'N', 'E', 'NE', 'NE', 'N', 'NW', 'SW', 'SW', 'SW', 'W'],
['E', 'E', 'E', 'SE', 'SE', 'S', 'S', 'E', 'SE', 'SE', 'N', 'N', 'E', 'NE', 'N', 'N', 'E', 'NE', 'NE', 'N', 'N', 'E', 'NE', 'NE', 'N', 'W', 'W', 'W', 'W', 'W'],//14	
['NE', 'E', 'E', 'E', 'E', 'SE', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'NE', 'NE', 'N', 'NW', 'NW', 'NW', 'NW', 'W'],	
['NE', 'NE', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'NE', 'NE', 'N', 'NW', 'NW', 'NW', 'NW', 'W'],	
['NE', 'NE', 'NE', 'E', 'NE', 'NE', 'NE', 'NE', 'NE', 'NE', 'NE', 'NE', 'NE', 'NE', 'NE', 'NE', 'NE', 'NE', 'NE', 'NE', 'NE', 'NE', 'NE', 'N', 'N', 'NW', 'NW', 'NW', 'NW', 'W'],	
['NE', 'NE', 'NE', 'E', 'NE', 'NE', 'NE', 'NE', 'NE', 'NE', 'NE', 'NE', 'NE', 'NE', 'NE', 'NE', 'NE', 'NE', 'NE', 'NE', 'NE', 'NE', 'NE', 'N', 'N', 'NW', 'NW', 'NW', 'NW', 'W'],	
['NE', 'NE', 'NE', 'NE', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'NE', 'NE', 'NE', 'NE', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'NW'] //19
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

// Draws a white circle that will follow the vector field.
function animation(){
	
	var increment = 2; // Number of pixels to jump per frame.
	var speed = 20; // Milliseconds to wait to redraw.
	
	// Half the average of a tile side.
	var radius = TILE_WIDTH / 4 + TILE_HEIGHT / 4;
	var unitVector;
	
	context.drawImage(img, 0, 0, IMAGE_WIDTH, IMAGE_HEIGHT);
	
	for (var k = 0; k < objectArray.length; k++){
		
		context.font = '30px Arial';
		context.fillStyle = 'blue';
		context.fillText('Current object count: ' + objectArray.length, IMAGE_WIDTH / 3, IMAGE_HEIGHT / 2);
		
		context.fillStyle = 'white';
		context.beginPath();
		//x, y of center, radius, start and end angle.
		context.arc(objectArray[k].x, objectArray[k].y, radius, 0, Math.PI * 2); 
		context.fill();
		unitVector = getDirection(objectArray[k].x, objectArray[k].y);
		
		if (objectArray[k].x > 25 * TILE_WIDTH - TILE_WIDTH / 2 && 
			objectArray[k].x < 25 * TILE_WIDTH + TILE_WIDTH / 2 && 
			objectArray[k].y > 10 * TILE_HEIGHT - TILE_HEIGHT / 2 && 
			objectArray[k].y < 10 * TILE_HEIGHT + TILE_HEIGHT / 2)
			objectArray.splice(k, 1);
		
		else{
			
			switch (unitVector){

				case 'SE':
					objectArray[k].x += 1;
					objectArray[k].y += 1;
					break;

				case 'S':
					//objectArray[k].x += 1;
					objectArray[k].y += 2;
					break;

				case 'SW':
					objectArray[k].x -= 1;
					objectArray[k].y += 1;
					break;

				case 'W':
					objectArray[k].x -= 2;
					//objectArray[k].y += 1;
					break;

				case 'NW':
					objectArray[k].x -= 1;
					objectArray[k].y -= 1;
					break;

				case 'N':
					//objectArray[k].x += 1;
					objectArray[k].y -= 2;
					break;

				case 'NE':
					objectArray[k].x += 1;
					objectArray[k].y -= 1;
					break;

				default: // E
					objectArray[k].x += 2;
					break;

			}
		}
		
	}
	var loopTimer = setTimeout(animation, speed);
};


function addObject(){
	var i = Math.floor(Math.random() * spawnPoints.length);	
	objectArray.push(spawnPoints[i]);	
};




	

