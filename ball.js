//File for creating storing and updating an array of balls.
//Clicking only generates one type of ball at this time.

//Array for storing the balls
var ballArray = [];
//bounds for the balls x and y position.
let leftBound = 100;
let rightBound = 500;
let jarBottom = 439;
let startY = 100;
let firstClick = true; //Boolean to track the click for the start button and make sure not to draw a ball on that click.

//Ball object, Constructor accepts only a level.
class Ball{
  constructor(level){
    this.level = level;
    this.diameter = level * 20; //I'm not sure what relation we want from the level to its size.
    this.xlocation = 0;
    this.ylocation = startY;
    this.speedX = 0;
    this.speedY = 0;
    this.color= white;
  }

  //method for printing the ball to the screen.
  to_screen(){
  FileList(this.color);
  circle(this.xlocation, this.ylocation, this.diameter);
  }
}


//Helper for making a ball within bounds.
function makeBall (clickX){
  //creates one ball with a score of 2
  let ball = new Ball(2);
  ball.xlocation = clickX;

  //Stops the ball from going to far left
  if( (clickX - (ball.diameter >> 1) ) < leftBound ){
    ball.xlocation = leftBound + (ball.diameter >> 1);
  }
  //Stops the ball from going to far right
  if( rightBound  < (clickX + (ball.diameter >> 1)) ){
    ball.xlocation = rightBound - (ball.diameter >> 1);
  }
  return ball
}

//Create a ball and add it to the list when a mouse is clicked
function mouseClicked() { 
  if(instance.getRunningState() == true) {//Only makes balls if the game is running.
    if (firstClick) {
      firstClick = false;
    } else {
      ball = makeBall(mouseX);
      ballArray.push(ball);
    }
  }
}



//Updates the balls current speed, and moves it if it can.
function moveMaybe(ball){

  ball.speedY = ball.speedY + 5;  //This line and the next controll gravity
  let correctedSpeed = ball.speedY >> 5;

  ball.ylocation = ball.ylocation + correctedSpeed;

  //For stopping the ball at the bottom of the jar.
  if ( ball.ylocation >= (jarBottom - (ball.diameter >> 1) ) ){
    ball.ylocation = jarBottom - (ball.diameter >> 1);
    ball.speedY = 0;
  }
}

//Iterate through the list of balls, maybe move and draw each one.
function drawBalls(){
  //Iterate through the list
  for(i = 0; i < ballArray.length; i++){
    temp = ballArray[i];
    moveMaybe(temp);     //maybe move the ball
    temp.to_screen();    //print the ball
  }
}

