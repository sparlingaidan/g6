let instance = new Game(); //single instance of Game.
let settingsMenu = new SettingsMenu(); //single instance of settings menu
let ballViewer = new BallViewer(); //single instance of ball viewer

var quit = false;
var exitable = true; //there is an exitable situation in which the exit to menu button could be pressed.
var viewscore = false; //score


// const startButton = document.getElementById("Startbutton");
// const settingsButton = document.getElementById("Settingsbutton");
// const quitButton = document.getElementById("Quitbutton");
// const menuContainer = document.getElementById("themenu-container");
// const goodbyemode = document.getElementById("goodbye-message");
// const scoremode= document.getElementById("goodbye-message");


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

//   if (settingsMenu.getOpen()) {
//     settingsMenu.runSettingsMenu();
//     if (ballViewer.getOpen()) {
//       ballViewer.runBallViewer();
//     }
//   }
// }

// startButton.addEventListener("click", function() {
//   instance.setRunningTrue(); //start game
//   settings = false; //close settings if open
//   quit = false;
//   viewscore = true;
//   menuContainer.style.display = "none";
//   goodbyemode.style.display ="none";
//   scoremode=style.display ="block"; // show score only when the play start playing
//   scoremode= this.textContent = "Your-Score: " + instance.score; // initailize scoe of 0


//   });

// settingsButton.addEventListener("click", function() {
//   if (!(instance.getRunningState())) {
//     if (settings == false) {
//       settings = true;
//       quit = false;
//     } else {
//       settings = false;
//       quit = false;
//       }
//     }  
//      goodbyemode.style.display ="none";
//     menuContainer.style.display = "none";
    
//   });

// quitButton.addEventListener("click", function() {
//   if (!(instance.getRunningState()) && !settings) {
//       quit = true;
//       menuContainer.style.display = "none";
//       showGoodBye(); 
//       }
//   });

// function showGoodBye() {
//   if (quit){
//    goodbyemode.style.display = "block";
//   }  
// }
}