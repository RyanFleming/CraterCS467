var TILE_WIDTH = 32;
var TILE_HEIGHT = 32;

function getDirection(x, y, level){	
	var direction;
	
	switch(level){
			
		case 1:
			// Mall Level
			direction = [
			['SE', 'SE', 'SE', 'SE', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'SE', 'SE', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'SW'],//0	
			['SE', 'SE', 'SE', 'E', 'SE', 'SE', 'SE', 'SE', 'SE', 'SE', 'SE', 'SE', 'SE', 'SE', 'SE', 'SE', 'SE', 'SE', 'SE', 'SE', 'SE', 'SE', 'SE', 'S', 'S', 'SW', 'SW', 'SW', 'SW', 'W'],	
			['SE', 'SE', 'SE', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'SE', 'S', 'S', 'SW', 'SW', 'SW', 'SW', 'W'],	
			['SE', 'SE', 'E', 'E', 'NE', 'NE', 'N', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'SE', 'SE', 'S', 'SW', 'SW', 'SW', 'SW', 'W'],	
			['SE', 'E', 'E', 'E', 'NE', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'SE', 'SE', 'S', 'SW', 'SW', 'SW', 'SW', 'W'],//4	
			['E', 'E', 'E', 'E', 'NE', 'N', 'N', 'E', 'SE', 'SE', 'S', 'S', 'E', 'SE', 'S', 'S', 'E', 'SE', 'SE', 'S', 'S', 'E', 'SE', 'SE', 'S', 'W', 'W', 'W', 'W', 'W'],	
			['E', 'NE', 'E', 'E', 'SE', 'SE', 'S', 'E', 'SE', 'SE', 'SE', 'S', 'S', 'SE', 'SE', 'S', 'S', 'SE', 'S', 'S', 'S', 'E', 'SE', 'SE', 'S', 'S', 'S', 'S', 'S', 'SW'],	
			['NE', 'N', 'N', 'E', 'SE', 'SE', 'S', 'E', 'SE', 'SE', 'SE', 'SE', 'SE', 'SE', 'SE', 'SE', 'SE', 'SE', 'SE', 'SE', 'SE', 'E', 'SE', 'SE', 'S', 'SE', 'SE', 'SE', 'S', 'SW'],	
			['NE', 'N', 'N', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'SE', 'SE', 'S', 'SE', 'SE', 'SE', 'S', 'SW'],	
			['N', 'N', 'N', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'SE', 'E', 'E', 'E', 'SE', 'SW'],//9
			['S', 'S', 'S', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'NE', 'E', 'E', 'E', 'NE', 'NW'],	
			['S', 'S', 'S', 'E', 'NE', 'NE', 'NE', 'NE', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'NE', 'NE', 'N', 'NE', 'NE', 'NE', 'N', 'NW'],	
			['SE', 'S', 'S', 'E', 'NE', 'N', 'N', 'E', 'NE', 'NE', 'NE', 'NE', 'NE', 'NE', 'NE', 'NE', 'NE', 'NE', 'NE', 'NE', 'NE', 'E', 'NE', 'NE', 'N', 'NE', 'NE', 'NE', 'N', 'NW'],	
			['SE', 'E', 'E', 'E', 'NE', 'NE', 'N', 'E', 'NE', 'NE', 'NE', 'N', 'N', 'NE', 'NE', 'N', 'N', 'NE', 'N', 'N', 'N', 'E', 'NE', 'NE', 'N', 'N', 'N', 'N', 'N', 'NW'],
			['E', 'E', 'E', 'E', 'SE', 'S', 'S', 'E', 'SE', 'SE', 'N', 'N', 'E', 'NE', 'N', 'N', 'E', 'NE', 'NE', 'N', 'N', 'E', 'NE', 'NE', 'N', 'W', 'W', 'W', 'W', 'W'],//14	
			['NE', 'E', 'E', 'E', 'E', 'SE', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'NE', 'NE', 'N', 'NW', 'NW', 'NW', 'NW', 'W'],	
			['NE', 'NE', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'NE', 'NE', 'N', 'NW', 'NW', 'NW', 'NW', 'W'],	
			['NE', 'NE', 'NE', 'E', 'NE', 'NE', 'NE', 'NE', 'NE', 'NE', 'NE', 'NE', 'NE', 'NE', 'NE', 'NE', 'NE', 'E', 'E', 'E', 'E', 'NE', 'NE', 'N', 'N', 'NW', 'NW', 'NW', 'NW', 'W'],	
			['NE', 'NE', 'NE', 'E', 'NE', 'NE', 'NE', 'NE', 'NE', 'NE', 'NE', 'NE', 'NE', 'NE', 'N', 'N', 'N', 'NE', 'NE', 'NE', 'NE', 'NE', 'NE', 'N', 'N', 'NW', 'NW', 'NW', 'NW', 'W'],	
			['NE', 'NE', 'NE', 'NE', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'NE', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'NW'] //19
			];
			break;
		
		case 2:
			// Bullseye level
			direction = [
			['SE', 'SE', 'SE', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'W', 'W'],//0	
			['E', 'SE', 'SE', 'S', 'SW', 'SW', 'SW', 'SW', 'SW', 'SW', 'SW', 'SW', 'SW', 'SW', 'SW', 'SW', 'SW', 'SW', 'SW', 'SW', 'SW', 'SW', 'SW', 'SW', 'SW', 'SW', 'SW', 'SW', 'W', 'W'],	
			['E', 'E', 'E', 'S', 'SW', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W'],	
			['NE', 'NE', 'NE', 'S', 'SW', 'SW', 'W', 'NW', 'NW', 'NW', 'NW', 'NW', 'NW', 'NW', 'NW', 'NW', 'NW', 'NW', 'NW', 'NW', 'NW', 'NW', 'NW', 'NW', 'NW', 'NW', 'NW', 'NW', 'NW', 'NW'],	
			['S', 'S', 'SW', 'S', 'S', 'SW', 'W', 'SE', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'N', 'N', 'NW', 'NW', 'NW', 'W', 'NW', 'NW'],//4	
			['S', 'S', 'SW', 'S', 'S', 'SW', 'W', 'S', 'S', 'S', 'SW', 'SW', 'SW', 'SW', 'SW', 'SW', 'SW', 'SW', 'SW', 'SW', 'SW', 'SW', 'S', 'S', 'SW', 'SW', 'SW', 'W', 'W', 'W'],	
			['S', 'S', 'SW', 'S', 'S', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W'],
			['S', 'S', 'SW', 'S', 'SW', 'W', 'W', 'NW', 'NW', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'NW', 'NW', 'W', 'W', 'W', 'W'],
			['S', 'SW', 'SW', 'S', 'SW', 'SW', 'W', 'N', 'N', 'N', 'NW', 'NW', 'NW', 'NW', 'NW', 'NW', 'NW', 'NW', 'NW', 'NW', 'NW', 'NW', 'N', 'N', 'N', 'N', 'NW', 'W', 'W', 'W'],	
			['W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'N', 'N', 'NW', 'NW', 'NW', 'NW', 'NW', 'NW', 'NW', 'NW', 'NW', 'NW', 'NW', 'NW', 'E', 'N', 'N', 'N', 'NW', 'W', 'W', 'W'],//9
			['N', 'NW', 'NW', 'N', 'NW', 'NW', 'W', 'W', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'E', 'S', 'S', 'S', 'SW', 'W', 'W', 'W'],	
			['N', 'N', 'NW', 'N', 'NW', 'NW', 'W', 'W', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'SW', 'E', 'S', 'S', 'SW', 'SW', 'W', 'W', 'W'],	
			['N', 'N', 'NW', 'N', 'N', 'NW', 'W', 'W', 'S', 'SW', 'SW', 'SW', 'SW', 'SW', 'SW', 'SW', 'SW', 'SW', 'SW', 'SW', 'SW', 'SW', 'E', 'S', 'SW', 'SW', 'SW', 'W', 'W', 'W'],
			['N', 'N', 'NW', 'N', 'N', 'NW', 'NW', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'NW', 'NW', 'NW', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W'],
			['N', 'N', 'NW', 'N', 'N', 'NW', 'NW', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'N', 'N', 'N', 'NW', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W'],//14	
			['E', 'E', 'E', 'N', 'N', 'N', 'NW', 'NW', 'NW', 'NW', 'NW', 'NW', 'NW', 'NW', 'N', 'N', 'N', 'NW', 'NW', 'NW', 'NW', 'NW', 'NW', 'N', 'N', 'NW', 'NW', 'W', 'W', 'W'],	
			['E', 'E', 'E', 'N', 'N', 'NW', 'N', 'E', 'N', 'N', 'NW', 'NW', 'NW', 'NW', 'E', 'N', 'N', 'NW', 'NW', 'NW', 'NW', 'N', 'E', 'N', 'N', 'N', 'NW', 'W', 'W', 'W'],	
			['E', 'E', 'E', 'N', 'N', 'NW', 'E', 'E', 'N', 'N', 'NW', 'NW', 'NW', 'NW', 'E', 'N', 'N', 'NW', 'NW', 'NW', 'NW', 'W', 'E', 'N', 'N', 'NW', 'W', 'W', 'W', 'W'],	
			['E', 'E', 'E', 'N', 'N', 'NW', 'E', 'E', 'N', 'N', 'N', 'NW', 'N', 'N', 'E', 'N', 'N', 'NW', 'NW', 'NW', 'NW', 'W', 'E', 'N', 'N', 'N', 'NW', 'W', 'W', 'W'],	
			['NE', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'E', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'E', 'N', 'N', 'N', 'N', 'NW', 'W', 'W'] //19
			];
			break;

	}



return direction[Math.floor((y + 0.5) / TILE_HEIGHT)][Math.floor((x + 0.5) / TILE_WIDTH)];	
};

// Mall level
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
	
	// Spawn point to test westardly walking.
	//,
	//{x: 29 * TILE_WIDTH, y: 14 * TILE_HEIGHT}	
];
