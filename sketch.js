let instance = new Game(); //single instance of Game.
let ToMenuButton = new exit(); //single instance of an exit button
let gameBackground; //The background for after the game has started


var settings = false; //toggle for settings menu
var quit = false;
var ballViewer = false; //Unfinished
var exitable = true; //there is an exitable situation in which the exit to menu button could be pressed.
var viewscore = false; //score

const startButton = document.getElementById("Startbutton");
const settingsButton = document.getElementById("Settingsbutton");
const quitButton = document.getElementById("Quitbutton");
const menuContainer = document.getElementById("themenu-container");
const goodbyemode = document.getElementById("goodbye-message");
const scoremode= document.getElementById("goodbye-message");

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
  if (settings) {                           //If settings is opened draw settings menu.
    fill('white');
    stroke("purple");                       //Note to all:
                                            //I'll be moving the settings implementation to it's own class soon.
                                            // -Ryan
    strokeWeight(2);
    text("SETTINGS:", 130, 27);
    noStroke();
    ToMenuButton.displayButton();
    exitable = true;
  }
}


startButton.addEventListener("click", function() {
  instance.setRunningTrue(); //start game
  settings = false; //close settings if open
  quit = false;
  viewscore = true;
  menuContainer.style.display = "none";
  goodbyemode.style.display ="none";
  scoremode=style.display ="block"; // show score only when the play start playing
  scoremode= this.textContent = "Your-Score: " + instance.score; // initailize scoe of 0


  });

settingsButton.addEventListener("click", function() {
  if (!(instance.getRunningState())) {
    if (settings == false) {
      settings = true;
      quit = false;
    } else {
      settings = false;
      quit = false;
      }
    }  
     goodbyemode.style.display ="none";
    menuContainer.style.display = "none";
    
  });

quitButton.addEventListener("click", function() {
  if (!(instance.getRunningState()) && !settings) {
      quit = true;
      menuContainer.style.display = "none";
      showGoodBye(); 
      }
  });

function showGoodBye() {
  if (quit){
   goodbyemode.style.display = "block";
  }  
}


