


//Unfinished class to display all of the different ball types from the settings menu.




var ballLevels = [];

class BallViewer extends ball {
    constructor () {
        for (i = 1; i < 12; i++) {
            if (i < 6) {
                ball = new ball(i, 100 + i * 30, 100);
                ballLevels.add(ball);
            } else if (i < 11) {
                ball = new ball(i, 100 + i * 30, 160);
                ballLevels.add(ball);
            } else {
                ball = new ball(i, 100 + i * 30, 220);
            ballLevels.add(ball);
            }

        }
    }

    drawBallArray() {
        for (i = 1; i < 12; i++) {
            ball = ballLevels[i];
            ball.toScreen();
        }
    }
}





