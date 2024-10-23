let instance = new Game(); //single instance of Game.
let gameBackground; //The background for after the game has started
var settings = false; //toggle for settings menu
const startButton = document.getElementById("Startbutton");
const settingsButton = document.getElementById("Settingsbutton");

function setup() {
  createCanvas(600, 500);
  textAlign(CENTER, TOP); //Makes it easier to place text.
}

function preload() {
  menuBackground = loadImage('assets/MenuBackground.png');
}

function draw() {
  if (instance.getRunningState() == true) { //If the game has started,
    instance.run();                         //draw the game
  } else {                                  //otherwise draw the menu.
    background(menuBackground);                        //Main menu draw goes here                   
  }
  if (settings) {                           //If settings is opened draw settings menu.
    fill('white');
    text("SETTINGS:", 35, 5);
  }
}
// find a way to make the main menu go away once the game start or the settigns or the quit is clicked


  startButton.addEventListener("click", function() {
    instance.setRunningTrue(); //start game
    settings = false; //close settings if open
    //Need line to remove start menu from screen here
  });

  settingsButton.addEventListener("click", function() {
    if (!(instance.getRunningState())) {
      if (settings == false) {
        settings = true;
      } else {
        settings = false;
      }
    }
  });



