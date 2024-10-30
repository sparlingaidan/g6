


//Unfinished class to display all of the different ball types from the settings menu.




var ballLevels = [];

class BallViewer {

    constructor() {
        this.open = false;
        let constant = 55;
        let constant2 = 535;
        for (let i = 1; i < 12; i++) {
            if (i < 8) {
                let ball = new Ball(i, constant + (20 + 10 * i)/2, 160);
                ballLevels.push(ball);
                constant += (20 + 10 * i) + 10;
            } else {
                let ball = new Ball(i, constant2 - (20 + 10 * i)/2, 300);
                ballLevels.push(ball);
                constant2 -= (20 + 10 * i) + 10;
            }
        }
    }
        

    drawBallArray() {
        for (i = 1; i < 12; i++) {
            ball = ballLevels[i];
            ball.toScreen();
        }
    }

    getOpen() {
        return this.open;
    }

    setOpenFalse() {
        this.open = false;
    }

    setOpenTrue() {
        this.open = true;
    }

    runBallViewer() {
        fill('black');
        stroke('purple');
        rect(10, 10, 580, 480);
        noStroke();
        fill('purple');
        text("Ball Viewer:", 130, 27);
        ToMenuButton.displayButton();
        exitable = true;
        for (let i = 0; i < 11; i++) {
            let ball = ballLevels[i];
            ball.to_screen();
        }
    }
}





