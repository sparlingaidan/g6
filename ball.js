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
let isClickable = true;

//Ball object, Constructor accepts only a level.
class Ball {
  constructor(level, x = 0, y = startY){
    this.level = level;
    this.diameter = 20 + level * 10; //I'm not sure what relation we want from the level to its size.
    this.xlocation = x;
    this.ylocation = y;
    this.speedX = 0;
    this.speedY = 0;
    this.color= "white";
  }


  //method for printing the ball to the screen.
  to_screen(){
  stroke(this.color);
  fill(this.color);
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
    } else if (isClickable) {
      ball = makeBall(mouseX);
      isClickable = false;
      ballArray.push(ball);
      setTimeout(() => {
        isClickable = true;
      }, 1000);
    }
  }
}




let topBall = new Ball(2);
function drawTopBall(){

  topBall.ylocation = startY
  topBall.xlocation = mouseX

    //Stops the ball from going to far left
    if( (mouseX - (topBall.diameter >> 1) ) < leftBound ){
      topBall.xlocation = leftBound + (topBall.diameter >> 1);
    }
    //Stops the ball from going to far right
    if( rightBound  < (mouseX + (topBall.diameter >> 1)) ){
      topBall.xlocation = rightBound - (topBall.diameter >> 1);
    }


  topBall.to_screen();
}



//Updates the balls current speed, and moves it if it can.
function moveMaybe(ballm,i){

    ballm.speedY = ballm.speedY + 2;  //This line controlls gravity  

  
    //Look through the list of balls to check for collisions.
    for (l=0; l<ballArray.length; l++){
      temp = ballArray[l]; 
      dy = ballm.ylocation - temp.ylocation;
      dx = ballm.xlocation - temp.xlocation;
      distance = sqrt(dx * dx + dy * dy);
      bouncedist = (ballm.diameter >>1 ) + (temp.diameter >>1);
  
      
      //detect collision
      if ( bouncedist > distance ){
          //skip the collision if it is with itself
          if (l != i){
            angle = atan2(dy, dx);
            ballm.speedX = ballm.speedX + cos(angle) * bouncedist * .04;
            ballm.speedY = ballm.speedY + sin(angle) * bouncedist * .04;
          }
      }
      if ( bouncedist > distance + 10 ){
        //skip the collision if it is with itself
        if (l != i){
          angle = atan2(dy, dx);
          ballm.speedX = ballm.speedX + cos(angle) * bouncedist * .1;
          ballm.speedY = ballm.speedY + sin(angle) * bouncedist * .1;
        }
    }
    }
  
    
  
    //For stopping the ball at the bottom of the jar.
    if ( ballm.ylocation >= (jarBottom - (ballm.diameter >> 1) ) ){
      ballm.ylocation = jarBottom - (ballm.diameter >> 1);
      ballm.speedY = 0;
    }


    //For stopping the ball at the left of the jar.
    if ((ballm.xlocation - (topBall.diameter >> 1) ) <= leftBound ){
        ballm.xlocation = leftBound + (ballm.diameter >> 1);
        ballm.speedX = ballm.speedX * -.1;
    }

    //For stopping the ball at the right of the jar.
    if ( ballm.xlocation >= (rightBound - (ballm.diameter >> 1) ) ){
        ballm.xlocation = rightBound - (ballm.diameter >> 1);
        ballm.speedX = ballm.speedX * -.1;
    }

    ballm.speedX = ballm.speedX *.5;
    ballm.speedY = ballm.speedY *.5;
    ballm.ylocation = ballm.ylocation + Math.floor(ballm.speedY);
    ballm.xlocation = ballm.xlocation + Math.floor(ballm.speedX);
  
  }


//Iterate through the list of balls, maybe move and draw each one.
function drawBalls(){
  drawTopBall();
  //Iterate through the list
  for(i = 0; i < ballArray.length; i++){
    temp = ballArray[i];
    temp.to_screen();    //print the ball
    moveMaybe(temp,i);     //maybe move the ball
  }
  

  
  
}

function setColor(color) {
  this.color = color;
}

function setLevel(level) {
  this.level = level;
}

function getDiameter() {
  return this.diameter;
}
