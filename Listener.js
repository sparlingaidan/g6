//Listener for all of our buttons


//Put Independant Javascript button declarations here (SettingsMenu Buttons are not independant, for example, they are handled in SettingsMenu.js)
let ToMenuButton = new exit(); //single instance of an exit button



//JavaScript Listening 
function mousePressed() {
    if (mouseX > 560 && mouseX < 590 && mouseY > 10 && mouseY < 40 && exitable == true) {   //Listen for exit button
        exitButtonClicked();
    }

    if (settingsMenu.getOpen()) {               //listen for menu buttons when appropriate
        for(let i = 0; i < settingsButtons.length; i++) {
            let button = settingsButtons[i];
            if ((mouseX > button.getXmin() && mouseX < button.getXmax() && mouseY > button.getYmin() && mouseY < button.getYmax())) {
                menuButtonClicked(button.getAction());
            }
        }
    }   
}

//put independant javascript button functions here

function exitButtonClicked() {          //exit button function
    if (ballViewer.getOpen()) {
        ballViewer.setOpenFalse();
    } else {
        exitable = false;
        menuContainer.style.display = "block";
        instance.setRunningFalse();
        ballArray = [];
        settingsMenu.setOpenFalse();
        backtozero();
        scoringit.style.display ="none";
    }
}


//HTML Button stuff below

const startButton = document.getElementById("Startbutton");
const settingsButton = document.getElementById("Settingsbutton");
const quitButton = document.getElementById("Quitbutton");
const menuContainer = document.getElementById("themenu-container");
const goodbyemode = document.getElementById("goodbye-message");
const scoringit = document.getElementById("scoring"); //newscore

startButton.addEventListener("click", function() {
    instance.setRunningTrue(); //start game
    settingsMenu.setOpenFalse();
    quit = false;
    menuContainer.style.display = "none";
    goodbyemode.style.display ="none";
    // instance.score = 0; //to 0 score
    scoringit.style.display ="block"; // show score only when the play start playing
    instance.displayScore();
    });
  
  settingsButton.addEventListener("click", function() {
    if (!(instance.getRunningState())) {
      if (!settingsMenu.getOpen()) {
        settingsMenu.setOpenTrue();
        quit = false;
      } else {
        settingsMenu.setOpenFalse();
        quit = false;
        }
      }  
       goodbyemode.style.display ="none";
      menuContainer.style.display = "none";
      scoringit.style.display ="none";//for score
      
    });
  
  quitButton.addEventListener("click", function() {
    if (!(instance.getRunningState()) && !settingsMenu.getOpen()) {
        quit = true;
        menuContainer.style.display = "none";
        showGoodBye(); 
        scoringit.style.display ="none";//scoring
        }
    });
  
  function showGoodBye() {
    if (quit){
     goodbyemode.style.display = "block";
     scoringit.style.display ="none";//score
    }  
  }