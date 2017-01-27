All the CSS file does is make an orange background for the canvas.

The HTML file creates three buttons and a canvas. The canvas is 1633x919 because I wanted to place single pixel lines in between the 50x50 tiles.

The showTiles() function in the script.js file draws the single pixel lines to the canvas. 

The showPath() function draws the black tiles. The for loops are weird because I drew the single pixel lines onto the canvas. This function will eventually be replaced with one that draws the background image, so its weirdness will go away. I added the blue square at the end to be the "goal" tile. The circles get destroyed when they're about halfway into the tile.

The animation() function is part of what will, presumably, be the game update function. The increment and speed variables set the number of pixels the object will move and the number of milliseconds between frame updates, respectively. I should rename them because different objects will be able to have different increments, but objects having different speeds will be problematic. The function calls showPath(), which just redraws the black tiles. The function then loops through the array of objects, draws the circles, updates the circle's locations, and then the function calls itself.

The pathfinding that I have going on is really more path following. The method I use will work and it's efficient. But, I don't want to use it unless we need the efficiency. I'd like for each walkable tile to have a direction associated with it and when a unit is on a particular tile it moves in that direction. 

The array of objects seems to be working fine. Right now, the only attributes it has are x and y coordinates. But, other attributes could easily be added.
