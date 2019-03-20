
var canvas;

var slider;
var growingLightBool = false;

var title;
var firstOption;
var secOption;
var thirdOption;

var greeting;
var nameInput;
var name;

var greetingBool = false;
var outside1optionBool = false;
var outside1optionBool2 = false;

var soundTrack;
var clickSound;

var pocketKnifeBool = false;


function setup() {
	
	canvas = createCanvas(windowWidth, windowHeight);
	canvas.position(0, 0);
	canvas.style('z-index', -1);
	soundTrack = loadSound("ayasiikuuki.MP3", playSoundTrack);
	click = loadSound("click.wav", clickSound);
	background(0);
	beginning();


}

function playSoundTrack() {
	soundTrack.play();
	soundTrack.loop();
}

function clickSound() {
	click.play();
}

function draw() {
	
	background(0);
	if (growingLightBool == true) {
		growingLight();
	}

}

function beginning() {

	background(0);
	
	greeting = createP("Start the game. Press ENTER");
	greetingBool = true;
	
}

function startStory() {

	background(0);	

	greeting.hide();

	title = createP("What would you like to do");
	createElement('br');
	createElement('br');
	firstOption = createA("#", "Go to bed");
	createElement('br');
	createElement('br');
	secOption = createA("#", "Go outside");
	createElement('br');
	createElement('br');
	thirdOption = createA("#", "Explore the house");

	firstOption.mousePressed(clickSound);
	secOption.mousePressed(clickSound);
	thirdOption.mousePressed(clickSound);
	firstOption.mouseReleased(goToBed);
	secOption.mouseReleased(goOutside);
	thirdOption.mouseReleased(exploreHouse);

}

function goToBed() {

	background(0);
	thirdOption.hide();

	title.html("You are now in bed, but you don't feel tired");

	firstOption.html("Try to fall asleep");
	secOption.html("Get out of bed")

	firstOption.mousePressed(clickSound);
	secOption.mousePressed(clickSound);
	firstOption.mouseReleased(fastEnding);
	secOption.mouseReleased(startStory2);

} 

function startStory2() {

	background(0);
	thirdOption.show();	

	title.html("What would you like to do");
	createElement('br');
	createElement('br');
	firstOption.html("Go to bed");
	createElement('br');
	createElement('br');
	secOption.html("Go outside");
	createElement('br');
	createElement('br');
	thirdOption.html("Explore the house");

	firstOption.mousePressed(clickSound);
	secOption.mousePressed(clickSound);
	thirdOption.mousePressed(clickSound);
	firstOption.mouseReleased(goToBed);
	secOption.mouseReleased(goOutside);
	thirdOption.mouseReleased(exploreHouse);

}

function goOutside() {

	background(0);
	
	thirdOption.hide();

	title.html("You are now outside, it is pitch black. You will need a flash light to be able to explore outside");
	firstOption.html("Go back in the house");
	secOption.html("Continue on into the darkness");

	firstOption.mousePressed(clickSound);
	firstOption.mouseReleased(outside1option);
	secOption.mousePressed(clickSound);
	secOption.mousePressed(outside2option);	

}

function outside1option() {

	outside1optionBool = true;

	background(0);
	firstOption.hide();
	secOption.hide();
	thirdOption.hide();

	title.html("You are back in the house. Press the Spacebar to continue.");

}

function outside2option() {

	background(0);
	title.hide();
	firstOption.hide();
	secOption.hide();
	thirdOption.hide();

	text1 = createP("Walking through the dark, you hear nothing but the sound of leaves and branches crushing beneath your feet");
	createElement('br');
	text2 = createP("You stop abruptly as you feel a presence behind you");
	createElement('br');
	text3 = createP("You turn around. You are dead");

}


function exploreHouse() {

	background(0);
	title.hide();
	firstOption.show();
	secOption.show();
	thirdOption.show();

	firstOption.html("Explore the living room");
	secOption.html("Explore the kitchen");
	thirdOption.html("Explore the bathroom");

	firstOption.mousePressed(clickSound);
	secOption.mousePressed(clickSound);
	thirdOption.mousePressed(clickSound);
	firstOption.mouseReleased(livingRoom);
	secOption.mouseReleased(kitchen);
	thirdOption.mouseReleased(bathroom);

}

function exploreHouse2() {

	background(0);
	title.hide();
	firstOption.show();
	secOption.show();
	thirdOption.show();
	text1.hide();

	firstOption.html("Explore the living room");
	secOption.html("Explore the kitchen");
	thirdOption.html("Explore the bathroom");

	firstOption.mousePressed(clickSound);
	secOption.mousePressed(clickSound);
	thirdOption.mousePressed(clickSound);
	firstOption.mouseReleased(livingRoom);
	secOption.mouseReleased(kitchen);
	thirdOption.mouseReleased(bathroom);

}
function exploreHouseL() {

	background(0);
	title.hide();
	firstOption.hide();
	secOption.show();
	thirdOption.show();
	text1.hide();

	firstOption.html("Explore the living room");
	secOption.html("Explore the kitchen");
	thirdOption.html("Explore the bathroom");

	secOption.mousePressed(clickSound);
	thirdOption.mousePressed(clickSound);
	secOption.mouseReleased(kitchen);
	thirdOption.mouseReleased(bathroom);

}

function livingRoom() {

	background(0);
	secOption.show();

	text1 = createP("You are in the living room now");
	firstOption.html("Check the cabinet");
	secOption.html("Look around the table");
	thirdOption.html("Go to the TV");
	createElement('br');

	firstOption.mousePressed(clickSound);
	secOption.mousePressed(clickSound);
	thirdOption.mousePressed(clickSound);
	firstOption.mouseReleased(cabinet);
	secOption.mouseReleased(table);
	thirdOption.mouseReleased(tv);

}
function livingRoomNote() {

	background(0);
	secOption.show();
	thirdOption.show();
	text2.hide();

	text1.html("You are in the living room now");
	firstOption.html("Check the cabinet");
	secOption.html("Look around the table");
	thirdOption.html("Go to the TV");
	createElement('br');

	firstOption.mousePressed(clickSound);
	secOption.mousePressed(clickSound);
	thirdOption.mousePressed(clickSound);
	firstOption.mouseReleased(cabinet);
	secOption.mouseReleased(table);
	thirdOption.mouseReleased(tv);

}

function cabinet() {

	background(0);

	text1.html("You look around the cabinet and you see a flashlight, a pocket knife, and phone");
	firstOption.html("Take the flashlight");
	secOption.html("Take the pocket knife");
	thirdOption.html("Use the phone");
	firstOption.mousePressed(clickSound);
	secOption.mousePressed(clickSound);
	thirdOption.mousePressed(clickSound);
	firstOption.mouseReleased(flashlight);
	secOption.mouseReleased(pocketKnife);
	thirdOption.mouseReleased(phone);

}



function flashlight() {
	
	background(0);
	thirdOption.hide();

	text1.html("You picked up the flashlight. Now you are able to explore outside");
	firstOption.html("Explore outside");
	secOption.html("Keep searching the cabinet");
	firstOption.mousePressed(clickSound);
	firstOption.mouseReleased(goOutside2);
	secOption.mousePressed(clickSound);
	secOption.mouseReleased(cabinetFlashlight);

}
function cabinetFlashlight() {

	background(0);
	firstOption.hide();
	thirdOption.show();

	text1.html("You look around the cabinet and you see a pocket knife and phone");
	secOption.html("Take the pocket knife");
	thirdOption.html("Use the phone");
	secOption.mousePressed(clickSound);
	thirdOption.mousePressed(clickSound);
	secOption.mouseReleased(flashLightPocketKnife);
	thirdOption.mouseReleased(flashLightPhone);

}
function flashLightPocketKnife() {

	background(0);
	secOption.hide();
	thirdOption.hide();
	firstOption.show();

	text1.html("You took the pocket knife. With this, you are able to defend yourself. Press E to equip or unequip the knife");
	firstOption.html("Keep searching the cabinet");
	firstOption.mousePressed(clickSound);
	firstOption.mouseReleased(cabinetFlashlightKnife);

}
function cabinetFlashlightKnife() {

	background(0);
	firstOption.hide();
	thirdOption.show();

	text1.html("You look around the cabinet and you see a phone");
	thirdOption.html("Use the phone");
	thirdOption.mousePressed(clickSound);
	thirdOption.mouseReleased(flashLightKnifePhone);

}
function flashLightKnifePhone() {
	
	background(0);
	firstOption.show();
	thirdOption.hide();
	secOption.show();

	text1.html("You picked up the phone. It starts to ring");
	firstOption.html("Answer the call");
	secOption.html("Ignore the call and shut off the phone");
	firstOption.mousePressed(clickSound);
	firstOption.mouseReleased(FKPanswerCall);
	secOption.mousePressed(clickSound);
	secOption.mouseReleased(FKPcont);

}
function FKPcont() {

	background(0);
	text1.html("You put the phone down. You are done searching the cabinet");
	firstOption.html("Go outside");
	secOption.html("Keep exploring the house");
	firstOption.mousePressed(clickSound);
	firstOption.mouseReleased(goOutside2);
	secOption.mousePressed(clickSound);
	secOption.mouseReleased(exploreHouseL);
}
function FKPanswerCall() {

	background(0);
	firstOption.hide();
	secOption.hide();
	thirdOption.hide();

	text1.html("You answered the phone, you hear heavy breathing through the other side. The call ends. You hear footsteps behind you. You turn around seeing an axe getting bigger and closer to your face. You are dead");
}
function flashLightPhone() {

	background(0);
	firstOption.show();
	thirdOption.hide();
	secOption.show();

	text1.html("You picked up the phone. It starts to ring");
	firstOption.html("Answer the call");
	secOption.html("Ignore the call and shut off the phone");
	firstOption.mousePressed(clickSound);
	firstOption.mouseReleased(FKPanswerCall);
	secOption.mousePressed(clickSound);
	secOption.mouseReleased(cabinetFlashlightPhone);

}
function cabinetFlashlightPhone() {

	background(0);
	firstOption.hide();
	secOption.show();
	thirdOption.hide();

	text1.html("You look around the cabinet and you see a pocket knife");
	secOption.html("Take the pocketKnife");
	secOption.mousePressed(clickSound);
	secOption.mouseReleased(flashLightPhonePocketKnife);

}
function flashLightPhonePocketKnife() {

	background(0);
	secOption.hide();
	thirdOption.hide();
	firstOption.show();

	text1.html("You took the pocket knife. With this, you are able to defend yourself. Press E to equip or unequip the knife");
	firstOption.html("Keep searching the cabinet");
	firstOption.mousePressed(clickSound);
	firstOption.mouseReleased(FPKcont);

}
function FPKcont() {

	background(0);
	secOption.show();

	text1.html("You are done searching the cabinet");
	firstOption.html("Go outside");
	secOption.html("Keep exploring the house");
	firstOption.mousePressed(clickSound);
	firstOption.mouseReleased(goOutside2);
	secOption.mousePressed(clickSound);
	secOption.mouseReleased(exploreHouseL);
}




function pocketKnife() {

	background(0);
	secOption.hide();
	thirdOption.hide();
	firstOption.show();

	text1.html("You took the pocket knife. With this, you are able to defend yourself. Press E to equip or unequip the knife");
	firstOption.html("Keep searching the cabinet");
	firstOption.mousePressed(clickSound);
	firstOption.mouseReleased(cabinetKnife);

}
function cabinetKnife() {

	background(0);
	firstOption.hide();
	secOption.show();
	thirdOption.show();

	text1.html("You look around the cabinet and you see a flashlight and phone");
	secOption.html("Take the flashlight");
	thirdOption.html("Use the phone");
	secOption.mousePressed(clickSound);
	thirdOption.mousePressed(clickSound);
	secOption.mouseReleased(pocketKnifeFlashlight);
	thirdOption.mouseReleased(phone);

}
function pocketKnifeFlashlight() {
	
	background(0);
	thirdOption.hide();

	text1.html("You picked up the flashlight. Now you are able to explore outside");
	firstOption.html("Explore outside");
	secOption.html("Keep searching the cabinet");
	firstOption.mousePressed(clickSound);
	firstOption.mouseReleased(goOutside2);
	secOption.mousePressed(clickSound);
	secOption.mouseReleased(cabinetKnifeFlashlight);

}
function cabinetKnifeFlashlight() {

	background(0);
	firstOption.hide();
	secOption.hide();
	thirdOption.show();

	text1.html("You look around the cabinet and you see a phone");
	thirdOption.html("Use the phone");
	thirdOption.mousePressed(clickSound);
	thirdOption.mouseReleased(KnifeFlashlightPhone);

}
function KnifeFlashlightPhone() {
	
	background(0);
	firstOption.show();
	thirdOption.hide();
	secOption.show();

	text1.html("You picked up the phone. It starts to ring");
	firstOption.html("Answer the call");
	secOption.html("Ignore the call and shut off the phone");
	firstOption.mousePressed(clickSound);
	firstOption.mouseReleased(FKPanswerCall);
	secOption.mousePressed(clickSound);
	secOption.mouseReleased(KFPcont);

}
function KFPcont() {

	background(0);
	secOption.show();

	text1.html("You are done searching the cabinet");
	firstOption.html("Go outside");
	secOption.html("Keep exploring the house");
	firstOption.mousePressed(clickSound);
	firstOption.mouseReleased(goOutside2);
	secOption.mousePressed(clickSound);
	secOption.mouseReleased(exploreHouseL);

}





function phone() {

	background(0);
	firstOption.show();
	thirdOption.hide();
	secOption.show();

	text1.html("You picked up the phone. It starts to ring");
	firstOption.html("Answer the call");
	secOption.html("Ignore the call and shut off the phone");
	firstOption.mousePressed(clickSound);
	firstOption.mouseReleased(FKPanswerCall);
	secOption.mousePressed(clickSound);
	secOption.mouseReleased(cabinetPhone);

}
function cabinetPhone() {

	background(0);
	firstOption.hide();
	secOption.show();
	thirdOption.show();

	text1.html("You look around the cabinet and you see a flashlight and pocket knife");
	secOption.html("Take the flashlight");
	thirdOption.html("Take the pocket knife");
	secOption.mousePressed(clickSound);
	thirdOption.mousePressed(clickSound);
	secOption.mouseReleased(flashlight);
	thirdOption.mouseReleased(pocketKnife);

}


function goOutside2() {

	background(0);

	text1.html("You are now outside, it is pitch black. You will need a flash light to be able to explore outside");
	firstOption.html("Go back in the house");
	secOption.html("Use the flashlight");

	firstOption.mousePressed(clickSound);
	firstOption.mouseReleased(outside1option2);
	secOption.mousePressed(clickSound);
	secOption.mousePressed(useFlashlight);	

}

function outside1option2() {

	outside1optionBool2 = true;

	background(0);
	firstOption.hide();
	secOption.hide();

	text1.html("You are back in the house. Press the Spacebar to continue.");

}

function useFlashlight() {
	background(0);
	firstOption.hide();
	secOption.hide();
	thirdOption.hide();

	text1.html("Use the slider to increase the light size");
	slider = createSlider(0, 255, 0);
	growingLightBool = true;

}
function growingLight() {
	
	background(0);
  	fill(255, 255, 0);
  	ellipse(windowWidth/2, windowHeight/2, slider.value(), slider.value());

}

function table() {

	background(0);
	thirdOption.hide();

	text1.html("You look around the table and see a note");
	firstOption.html("Pick up the note");
	secOption.html("Ignore it");
	firstOption.mousePressed(clickSound);
	secOption.mousePressed(clickSound);
	firstOption.mouseReleased(note);
	secOption.mouseReleased(livingRoomIgnore);

}
function livingRoomIgnore() {

	background(0);
	thirdOption.show();


	text1.html("You are in the living room now");
	firstOption.html("Check the cabinet");
	secOption.html("Look around the table");
	thirdOption.html("Go to the TV");

	firstOption.mousePressed(clickSound);
	secOption.mousePressed(clickSound);
	thirdOption.mousePressed(clickSound);
	firstOption.mouseReleased(cabinet);
	secOption.mouseReleased(table);
	thirdOption.mouseReleased(tv);

}

function note() {

	background(0);
	secOption.hide();

	text1.html("You picked up the note");
	createElement('br');
	text2 = createP('"Dear son, your mother and I will be gone for the day. We decide to take a little break from home and go on a vacation. We hired a babysitter to look after you so done worry. Behave yourself and be a good boy. Your mother and I will be back soon. Love you."');
	firstOption.html("Put the note back");
	firstOption.mousePressed(clickSound);
	firstOption.mouseReleased(livingRoomNote);
}

function tv() {

	background(0);

	text1.html("You sit down on the couch to take a rest. For some reason you feel very tired");
	firstOption.html("Turn on the TV");
	secOption.html("Go to Bed");
	thirdOption.html("Explore the house more");
	firstOption.mousePressed(clickSound);
	secOption.mousePressed(clickSound);
	thirdOption.mousePressed(clickSound);
	firstOption.mouseReleased(turnOnTv);
	secOption.mouseReleased(goToBed);
	thirdOption.mouseReleased(exploreHouse);

}

function kitchen() {

	background(0);
	thirdOption.hide();

	text1 = createP("You are in the kitchen now. As you look around, you see splatters of blood on the ground, along with a body on the ground");
	firstOption.html("Examine body");
	secOption.html("Keep exploring the kitchen");
	firstOption.mousePressed(clickSound);
	secOption.mousePressed(clickSound);
	firstOption.mouseReleased(body);
	secOption.mouseReleased(keepExploringK);

}

function body() {

	background(0);
	firstOption.hide();

	text1.html("You examine the body. It looks as like the they have been stabbed multiple of times to death. You almost gag at the sight of the wound.");
	secOption.mousePressed(clickSound);
	secOption.mouseReleased(keepExploringK2);

}

function keepExploringK2() {

	background(0);
	firstOption.show();
	secOption.hide();

	text1.html("You look around the kitchen, checking the drawers and cabinets, finding nothing important.");
	firstOption.html("Explore somewhere else");
	firstOption.mousePressed(clickSound);
	firstOption.mouseReleased(exploreHouse2);
}

function keepExploringK() {

	background(0);
	secOption.hide();

	text1.html("You look around the kitchen, checking the drawers and cabinets, finding nothing important.");
	firstOption.html("Explore somewhere else");
	firstOption.mousePressed(clickSound);
	firstOption.mouseReleased(exploreHouse2);
}

function bathroom() {

	background(0);
	thirdOption.hide();

	text1 = createP("You are in the bathroom now, the light seems to be out of battery as it flickers on and off");
	firstOption.html("Check around the sink");
	secOption.html("Check the bathtub");
	firstOption.mousePressed(clickSound);
	secOption.mousePressed(clickSound);
	firstOption.mouseReleased(sink);
	secOption.mouseReleased(bathtub);

}
function sink() {

}
function bathtub() {
	
}

function fastEnding() {

	background(0);

	firstOption.hide();
	secOption.hide();
	thirdOption.hide();

	title.html("You slowly drift into sleep. You avoided the terror that was lurking. You survived the night");

}

function windowResized() {
	
	canvas = createCanvas(windowWidth, windowHeight);
	background(0);

}


function keyPressed(){

	if (outside1optionBool == true && keyCode === 32) {
		exploreHouse(); 
		outside1optionBool = false;
	}
	if (outside1optionBool2 == true && keyCode === 32) {
		exploreHouse2(); 
		outside1optionBool2 = false;
	}
	if (greetingBool == true && keyCode === ENTER) {
		startStory();
		greetingBool = false;
	}
	if (pocketKnifeBool == false && keyCode === 69) {
		pocketKnifeE = createP("Equipped the pocket knife");
		pocketKnifeBool = true;
	}
	else if (pocketKnife == true && keyCode === 69) {
		pocketKnifeE.hide();
		pocketKnifeBool = false;
	}

}

































