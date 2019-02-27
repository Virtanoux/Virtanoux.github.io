// Ball x, y position

var xPos;
var yPos;

// Ball speed
var xSpeed;
var ySpeed;

// Score
var score = 0;

// Calculate the distance
var mouseDist;

// Booleans can be either true or false
var start = false;
var end = false;

// runs once
function setup() {
	
	createCanvas(windowWidth, windowHeight);
	background(200);

	// generate random ball positions
	xPos = random(1, windowWidth-15);
	yPos = random(15, windowHeight-15);
	print("x position: " + xPos);
	print("y position: " + yPos);

	// Set the speed variables
	xSpeed = 2;
	ySpeed = 2;

	start = true;

}

// runs in loop
function draw() { 

	if (start == true) {
		game();
	}
	if (end == true) {
		win();
	}

}

function windowResized() {
	
	resizeCanvas(windowWidth, windowHeight);
	background(200);

}

function game() {

	background(200);
	textSize(40);
	text("Score: " + score, 10, 50);
	fill(255, 255, 255);
	// Current x, y position and update it
	xPos = xPos + xSpeed;
	yPos = yPos + ySpeed;

	// Use variables for ball 
	ellipse(xPos, yPos, 30, 30);

	// Check to see if the ball position has reached
	// edges of the scrren, it so reverse
	if ((xPos >= windowWidth) || (xPos <= 0)) {
		xSpeed = xSpeed * -1;
		fill(random(255), random(255), random(255));
	}

	if ((yPos >= windowHeight) || (yPos <= 0)) {
		ySpeed = ySpeed * -1;
		fill(random(255), random(255), random(255));
	}

	mouseDist = dist(mouseX, mouseY, xPos, yPos);


	if (score != 10) {
		if (mouseDist <= 15) {
			score++;
			xPos = random(15, windowWidth-15);
			yPos = random(15, windowHeight-15);
			xSpeed = xSpeed * 1.1;
			ySpeed = ySpeed * 1.1; 
			print(score);
		}
	}
	else {
		start = false;
		end = true;
	}
}


function win() {
	background(200);
	textSize(40);
	text("You win!", 10, );
}




















