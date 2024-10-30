/*
To add a new menu button:
Everything is done in this file.

Initialize a new button below like "let testButton = new SettingsButton('test', x, y)"

'test' is the buttons function, and the text that will display on the button.
x and y are the top left corner coordinates.

The Y should be 40 greater than the previous buttons Y, unless that would make the button go off screen,
in which case the Y for the second row should begin with the first button at 50 and subsequent buttons 40 more
than the previous button.

The x value for the first row is 40, the x value for the second row is 310

Once the button is initialized add settingsButtons.push(ButtonName); to the constructor below

Then create a custom function for the button at the bottom of this file.

Then add, for example:
                    else if (action == 'test') {
                        custom function;
                    }
To the menuButtonClicked function below.
*/

let settingsButtons = [];



//Initialize Buttons here
let testButton = new SettingsButton('test', 40, 50);
let testButton2 = new SettingsButton('test2', 40, 90);
let testButton3 = new SettingsButton('test3', 40, 130);




class SettingsMenu {

    //Add Button to settingsButtons after initialization
    constructor() {
        this.open = false;
        settingsButtons.push(testButton);
        settingsButtons.push(testButton2);
        settingsButtons.push(testButton3);
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

    runSettingsMenu() {
        fill('black');
        stroke('purple');
        rect(10, 10, 580, 480);
        noStroke();
        fill('purple');
        text("SETTINGS:", 130, 27);
        ToMenuButton.displayButton();
        exitable = true;
        for (let i = 0; i < settingsButtons.length; i++) {
            settingsButtons[i].displayButton();

        }
    }
}



//Add button-specific-action as an else if statement that calls a custom function, in this function.
function menuButtonClicked(action) {
    console.log("this menu button works");
    if (action == 'test') {                 //Check for action
        TestButton();         //If the button clicked has this action, a function will be performed
    } else if (action == 'test2') {
        console.log("Test Button2");
    } else if (action == 'test3') {
        TestButtonThree();
    }
}


// Individual menu button functions below:

function TestButton() {
    console.log("Test Button");
}

function TestButtonThree() {
    console.log("Test Button 3");
}