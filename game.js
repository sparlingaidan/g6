/*
    Class to manage basic game functions in, so that we can draw
    the game by instance.run() in sketch.js).
*/
class Game {

    //This sets the running state of the game to false when the game is created.
    constructor() {
        this.running = false;  //running = true if running & vice versa
    }

    //This draws game elements (container, background, balls).
    run() {
        background(gameBackground);
        this.loadContainer();
        drawBalls();
        this.drawDashedLine();
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
        }
    }

    //set the running state to false
    setRunningFalse() {
        this.running = false;
    }

    //return the running state
    getRunningState() {
        return this.running;
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
        }
    }
        
