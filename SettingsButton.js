
var action;
var width;
var height;
var x;
var y;

class SettingsButton {


    constructor(action, x, y) {
        this.width = 250;
        this.height = 30;
        this.x = x;
        this.y = y;
        this.action = action;
    }

    displayButton() {
         stroke("Purple");
         fill("BLACK");
         rect(this.x, this.y, this.width, this.height);
         noStroke();
         fill("purple");
         textAlign(CENTER, CENTER);
         textSize(25);
         text(this.action, this.x + this.width / 2, this.y + this.height / 2 + 1);
     }

     getXmin() {
        return this.x;
     }

     getXmax() {
        return this.x + 250;
     }

     getYmin() {
        return this.y;
     }

     getYmax() {
        return this.y + 30;
     }

     getAction() {
        return this.action;
     }
}
