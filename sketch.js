let instance = new Game(); //single instance of Game.
let gameBackground; //The background for after the game has started
var settings = false; //toggle for settings menu

function setup() {
  createCanvas(600, 500);
  textAlign(CENTER, TOP); //Makes it easier to place text.
}

function preload() {
  gameBackground = loadImage('assets/RunningBackground.png');
}

function draw() {
  if (instance.getRunningState() == true) { //If the game has started,
    instance.run();                         //draw the game
  } else {                                  //otherwise draw the menu.
    background(200);                        //Main menu draw goes here                   
  }
  if (settings) {                           //If settings is opened draw settings menu.
    fill('white');
    text("SETTINGS:", 100, 5);
  }
}

//Start and settings buttons
//The three if statements will need to be changed to match button
//location once menu design is done.
function mousePressed() {
  if (mouseX < 100) {
    instance.setRunningTrue(); //start game
    settings = false; //close settings if open
  }

  if (!(instance.getRunningState())) { //settings buttons dont work if game is started
    if (mouseX < 150 && mouseX > 100) { //Open settings button
    settings = true; 
    }

    if (mouseX > 150) {
    settings = false; //close settings button
    }
  }
}

