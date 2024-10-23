let instance = new Game(); //single instance of Game.
let gameBackground; //The background for after the game has started
var settings = false; //toggle for settings menu
var quit = false;
const startButton = document.getElementById("Startbutton");
const settingsButton = document.getElementById("Settingsbutton");
const quitButton = document.getElementById("Quitbutton");
const menuContainer = document.getElementById("themenu-container");
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


  startButton.addEventListener("click", function() {
    instance.setRunningTrue(); //start game
    settings = false; //close settings if open
    menuContainer.style.display = "none";
    //Need line to remove start menu from screen here
  });
  settingsButton.addEventListener("click", function() {
    if (!(instance.getRunningState())) {
      if (settings == false) {
        settings = true;
      } else {
        settings = false;
      }
    }  menuContainer.style.display = "none";
  });

  quitButton.addEventListener("click", function() {
    if (!(instance.getRunningState()) && !settings) {
          quit = true;
        menuContainer.style.display = "none";
        showGoodBye(); 
      }
  });
  