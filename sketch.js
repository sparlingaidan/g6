let instance = new Game(); //single instance of Game.
let settingsMenu = new SettingsMenu(); //single instance of settings menu

var quit = false;
var exitable = true; //there is an exitable situation in which the exit to menu button could be pressed.


function setup() {
  createCanvas(600, 500);
  textAlign(CENTER, TOP); //Makes it easier to place text.
}

function preload() {
  menuBackground = loadImage('assets/MenuBackground.png');
  runningBackground = loadImage('assets/runningBackground.png')
}

function draw() {
  if (instance.getRunningState() == true) { //If the game has started,
    instance.run();     //draw the game
    exitable = true;
  } else {                                  //otherwise draw the menu.
    background(menuBackground);                   
  }

  if (settingsMenu.getOpen()) {
    settingsMenu.runSettingsMenu();
  }
}


