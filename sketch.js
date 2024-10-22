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
    loadContainer();                        //This should be put in the if statement above, 
                                            //but since we haven't gotten that working im loading it here
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

// Function to draw the container
function loadContainer() {
  strokeWeight(1);
  let c = [173, 216, 230];
  let c2 = [136, 231, 136];

  fill(c);
  rect(100, 449, 399, 50); // Base of container (blue rect)
  fill(c2);
  rect(100, 440, 399, 10); // Actual floor of container (green)
  //x values for bounds in future: left:(100) right:(500)
  //y values for bounds in future: top: 150 right: 449

  noFill();
  strokeWeight(3);
  line(100, 150, 100, 500);  // Left side line
  line(500, 150, 500, 500);  // Right side line
  line(100, 499, 500, 500);  // Bottom line
}