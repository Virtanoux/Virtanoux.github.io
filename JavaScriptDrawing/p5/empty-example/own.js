// Ball x, y position
var xPos;
var yPos;
var xPos2;
var yPos2;

// Ball speed
var xOrigSpeed = 3;
var yOrigSpeed = 3;
var xSpeed = 3;
var ySpeed = 3;
var xOrigSpeed2 = 3;
var yOrigSpeed2 = 3;
var xSpeed2 = 3;
var ySpeed2 = 3;

// Score
var score1 = 0;
var score2 = 0;

// Booleans can be either true or false
var start = false;
var end = false;

var yPosRect1 = 30;
var yPosRect2 = 480;
var xPosRect1 = 20;
var xPosRect2 = 1210; 

var value = 255;


function setup() {
	createCanvas(windowWidth, windowHeight);
	background(0, 0, 0);
	// generate random ball positions
	xPos = random(1, windowWidth-15);
	yPos = random(15, windowHeight-15);
	xPos2 = random(1, windowWidth-15);
	yPos2 = random(15, windowHeight-15);
	// print("x position: " + xPos);
	// print("y position: " + yPos);

	// Set the speed variables

	start = true;
}

function draw() {
	if (start == true) {
		game();
	}
	if (end == true) {
		win();
	}
}


function game() {

	background(0, 0, 0);
	textSize(40);
	textAlign(CENTER);
	text("SCORE\n" + score1 + " | " + score2, 650, 50);
	fill(255, 255, 255);

	rect(25, 25, 25, 25);
	fill(200);
	rect(xPosRect1, yPosRect1, 30, 140);
	rect(xPosRect2, yPosRect2, 30, 140);
	fill(255, 255, 255);	

	// Current x, y position and update it
	xPos = xPos + xOrigSpeed;
	yPos = yPos + yOrigSpeed;


	// Use variables for ball 
	ellipse(xPos, yPos, 30, 30);

	// Check to see if the ball position has reached
	// edges of the screen, it so reverse
	if ((xPos >= xPosRect2 - 30) && (yPos < yPosRect2 + 140) && (yPos > yPosRect2)) {
		xOrigSpeed = xOrigSpeed * -1;
		xOrigSpeed -= 2;
	}
	else if (xPos >= windowWidth) {
		xPos = xPos - 650;
		xOrigSpeed = xSpeed * -1
		score1 += 1;
	}

	if ((xPos <= xPosRect1 + 30) && (yPos < yPosRect1 + 140) && (yPos > yPosRect1)) {
		xOrigSpeed = xOrigSpeed * -1;
		xOrigSpeed += 2;
	}
	else if (xPos <= 0) {
		xPos = xPos + 650;
		xOrigSpeed = xSpeed;
		score2 += 1;
	}

	if ((yPos >= windowHeight) || (yPos <= 0)) {
		yOrigSpeed = yOrigSpeed * -1;
	}

	if (score1 >= 5 || score2 >= 5) {

		xPos2 = xPos2 + xOrigSpeed2;
		yPos2 = yPos2 + yOrigSpeed2;


		ellipse(xPos2, yPos2, 30, 30);
		rect(xPosRect1, yPosRect1, 30, 200);
		rect(xPosRect2, yPosRect2, 30, 200);	
		
		if ((xPos2 >= xPosRect2 - 30) && (yPos2 < yPosRect2 + 200) && (yPos2 > yPosRect2)) {
		xOrigSpeed2 = xOrigSpeed2 * -1;
		xOrigSpeed2 -= 2;
		}
		else if (xPos2 >= windowWidth) {
		xPos2 = xPos2 - 650;
		xOrigSpeed2 = xSpeed2 * -1
		score1 += 1;
		}

		if ((xPos2 <= xPosRect1 + 30) && (yPos2 < yPosRect1 + 200) && (yPos2 > yPosRect1)) {
			xOrigSpeed2 = xOrigSpeed2 * -1;
			xOrigSpeed2 += 2;
		}
		else if (xPos2 <= 0) {
			xPos2 = xPos2 + 650;
			xOrigSpeed2 = xSpeed2;
			score2 += 1;
		}

		if ((yPos2 >= windowHeight) || (yPos2 <= 0)) {
			yOrigSpeed2 = yOrigSpeed2 * -1;
		}
	}
	
	if (score1 == 10 || score2 == 10) {
		start = false;
		end = true;
	}
}

function mousePressed() {
    if (mouseX > 0 && mouseX < 100 && mouseY > 0 && mouseY < 100) {
    	let fs = fullscreen();
        fullscreen(!fs);
    }
}

function win() {
	
	background(0, 0, 0);
	
	if (score1 == 10) {
		textSize(40);
		textAlign(CENTER);
		text("Player 1 Wins!", 650, 50);
		fill(255, 255, 255);
	}
	if (score2 == 10) {
		textSize(40);
		textAlign(CENTER);
		text("Player 2 Wins!", 650, 50);
		fill(255, 255, 255);
	}

}


function keyPressed() {
  if (key === 'w') {
    yPosRect1 = yPosRect1 - 70;
  } 
  else if (key === 's') {
    yPosRect1 = yPosRect1 + 70;
  }
  else if (key === 'a') {
  	xPosRect1 = xPosRect1 - 70;
  }
  else if (key === 'd') {
  	xPosRect1 = xPosRect1 + 70;
  }
  else if (keyCode === UP_ARROW) {
  	yPosRect2 = yPosRect2 - 70;
  }
  else if (keyCode === DOWN_ARROW) {
    yPosRect2 = yPosRect2 + 70;
  }
  else if (keyCode === LEFT_ARROW) {
  	xPosRect2 = xPosRect2 - 70;
  }
  else if (keyCode === RIGHT_ARROW) {
  	xPosRect2 = xPosRect2 + 70;
  }
}







