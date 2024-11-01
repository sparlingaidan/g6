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
let maxBallLevel =14;
let ballCombinations = 0;

//Ball object, Constructor accepts only a level.
class Ball {
  constructor(level, x = 0, y = startY){
    this.level = level;
    this.diameter = 20 + level * 21; //I'm not sure what relation we want from the level to its size.
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
  
  //Look through the list of balls to check for collisions.
  for (otherIndex=0; otherIndex<ballArray.length; otherIndex++){
    temp = ballArray[otherIndex]; 
    dy = ballm.ylocation - temp.ylocation;
    dx = ballm.xlocation - temp.xlocation;
    distance = sqrt(dx * dx + dy * dy);
    bouncedist = (ballm.diameter >>1 ) + (temp.diameter >>1);


    
    //detect collision
    if ( bouncedist > distance ){
        //skip the collision if it is with itself
        if (otherIndex != i){
          angle = atan2(dy, dx);
          ballm.speedX = ballm.speedX + cos(angle) * 5 * .05;
          ballm.speedY = ballm.speedY + sin(angle) * 5 * .05;
          console.log(ballArray.length)

          if ((ballm.level == temp.level) & (ballm.level != maxBallLevel)){
            ballArray.push( new Ball(ballm.level + 1, ballm.xlocation + ( .5 * dx) , ballm.ylocation) );
            ballm.ylocation = ballm.ylocation + ( .5 * dy); // set the correct y position for new ball
            ballCombinations = ballCombinations + ballm.level;
            ballArray.splice(otherIndex,1); // delete other ball. 
            ballArray.splice(i,1); // delete this ball.
            return null;
          }
        }
    }
    if ( bouncedist > distance + 2 ){//The next few ifs are for the squishyness
      if (otherIndex != i){
        angle = atan2(dy, dx);
        ballm.speedX = ballm.speedX + cos(angle) * bouncedist * .02;
        ballm.speedY = ballm.speedY + sin(angle) * bouncedist * .02;
      }
    }
    if ( bouncedist > distance + 4 ){
      if (otherIndex != i){
        angle = atan2(dy, dx);
        ballm.speedX = ballm.speedX + cos(angle) * bouncedist * .02;
        ballm.speedY = ballm.speedY + sin(angle) * bouncedist * .02;
      }

    }
    if ( bouncedist > distance + 6 ){
      if (otherIndex != i){
        angle = atan2(dy, dx);
        ballm.speedX = ballm.speedX + cos(angle) * bouncedist * .03;
        ballm.speedY = ballm.speedY + sin(angle) * bouncedist * .03;
      }
    }
    if ( bouncedist > distance + 8 ){
      if (otherIndex != i){
        angle = atan2(dy, dx);
        ballm.speedX = ballm.speedX + cos(angle) * bouncedist * .05;
        ballm.speedY = ballm.speedY + sin(angle) * bouncedist * .05;
      }

    }
  }



  

  //For stopping the ball at the bottom of the jar.
  if ( ballm.ylocation >= (jarBottom - (ballm.diameter >> 1) ) ){
    ballm.speedY = -Math.abs(ballm.speedY) *.25 -4;
  }
  if ( ballm.ylocation >= (jarBottom - (ballm.diameter >> 1) + 3 ) ){
    ballm.speedY = ballm.speedY * 1.12 ;
  }
  if ( ballm.ylocation >= (jarBottom - (ballm.diameter >> 1) + 7 ) ){
    ballm.speedY = ballm.speedY * 1.25 ;
  }
  if ( ballm.ylocation >= (jarBottom - (ballm.diameter >> 1) + 10 ) ){
    ballm.speedY = ballm.speedY * 1.5 ;
  }
  if ( ballm.ylocation >= (jarBottom - (ballm.diameter >> 1) + 15 ) ){
    ballm.speedY = ballm.speedY * 1.75 ;
  }

  //For stopping the ball at the left of the jar.
  if ((ballm.xlocation - (ballm.diameter >> 1) ) <= leftBound ){
    ballm.speedX = Math.abs(ballm.speedX) *.125;
  }
  if ((ballm.xlocation - (ballm.diameter >> 1) - 3) <= leftBound ){
    ballm.speedX = ballm.speedX * 1.12 ;
  }
  if ((ballm.xlocation - (ballm.diameter >> 1) - 7 ) <= leftBound ){
    ballm.speedX = ballm.speedX * 1.25 ;
  }
  if ((ballm.xlocation - (ballm.diameter >> 1) - 10 ) <= leftBound ){
    ballm.speedX = ballm.speedX * 1.9 ;
  }

  //For stopping the ball at the right of the jar.
  if ( ballm.xlocation >= (rightBound - (ballm.diameter >> 1) ) ){
    ballm.speedX = -Math.abs(ballm.speedX) *.125;
  }
  if ( ballm.xlocation >= (rightBound - (ballm.diameter >> 1) + 3 ) ){
    ballm.speedX = ballm.speedX * 1.2 ;
  }
  if ( ballm.xlocation >= (rightBound - (ballm.diameter >> 1) + 7 ) ){
    ballm.speedX = ballm.speedX * 1.4 ;
  }
  if ( ballm.xlocation >= (rightBound - (ballm.diameter >> 1) + 10 ) ){
    ballm.speedX = ballm.speedX * 1.9 ;
  }

  
  ballm.speedY = ballm.speedY + 3 ;  //This line controlls gravity
  ballm.speedX = ballm.speedX *.5;
  ballm.speedY = ballm.speedY *.5;


  //These ifs are for stopping small movements.
  if ( ballm.speedY < 0){
    ballm.ylocation = ballm.ylocation + Math.ceil(ballm.speedY);
  }
  else{
    ballm.ylocation = ballm.ylocation + Math.floor(ballm.speedY);
  }

  if ( ballm.speedX < 0){
    ballm.xlocation = ballm.xlocation + Math.ceil(ballm.speedX);
  }
  else{
    ballm.xlocation = ballm.xlocation + Math.floor(ballm.speedX);
  }


  
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
