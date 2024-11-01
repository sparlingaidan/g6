/*
    Class to manage basic game functions in, so that we can draw
    the game by instance.run() in sketch.js).
*/
let container;
class Game {

    //This sets the running state of the game to false when the game is created.
    constructor() {
        this.running = false;    //running = true if running & vice versa
         this.score = 0;// for score problem is here it neve updating.
        
    }


    //This draws game elements (container, background, balls).
    run() {
        background(runningBackground);
        loadContainer();
        drawBalls();
        drawDashedLine();
        ToMenuButton.displayButton();
        this.didBallmerge();// for score
        this.displayScore();// for score
    }

    //Set the running state to true
    setRunningTrue() {
        this.running = true;
    }

    //toggle the running state
    toggleRunning() {
        if (this.running == false) {
            this.running = true;
        } else {
            this.running = false;
            firstClick = true;
        }
    }

    //set the running state to false
    setRunningFalse() {
        firstClick = true;
        this.running = false;
    }

    //return the running state
    getRunningState() {
        return this.running;
    }

    displayScore() { //forscore
      const pscoring = document.getElementById("scoring");
      pscoring.textContent = `Score: ${this.score}`;
    }
    addtoscore(){ //forscore
        this.score +=2;
        this.displayScore();
    }

    backtozero(){
        this.score = 0;
    }
    // Function to draw the container
    loadContainer() {
        stroke(0);
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

    drawDashedLine(){
        const y = 150; // out of bounds / losing condition coordinate
        const dashLength = 10;
        const gap = 20;
        const lineLength = width;
        for (let x = 0; x < lineLength; x += dashLength + gap) {
            stroke("red")
            strokeWeight(2)
            line(x, y, x + dashLength, y);
            }
            noStroke();
        }

       
  didBallmerge(){
    for (let i = 0; i < ballArray.length; i++) {
        for (let j = i + 1; j < ballArray.length; j++) {
            if (this.checkCollision(ballArray[i], ballArray[j])) {
                this. addtoscore();           // add to score
                ballArray.splice(j, 1);      // Remove the second ball
                j--;                         // Adjust index after removal
            }
        }
    }

  
}
   checkCollision(ball1, ball2) {
    const dx = ball1.xlocation - ball2.xlocation;
    const dy = ball1.ylocation - ball2.ylocation;
    const distance = Math.sqrt(dx * dx + dy * dy);
    const collisionDistance = (ball1.diameter / 2) + (ball2.diameter / 2);
    return distance < collisionDistance;
  }
}
    


