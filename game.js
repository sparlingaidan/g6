/*
    Class to manage basic game functions in, so that we can draw
    the game by instance.run() in sketch.js).
*/
class Game {

    //This sets the running state of the game to false when the game is created.
    constructor() {
        this.running = false;  //running = true if running & vice versa
    }

    //This draws game elements (just the background for now).
    run() {
        background(gameBackground);
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
        
}