    // Function to draw the container
    function loadContainer() {
        stroke(0);
        strokeWeight(1);
        let c = [173, 216, 230];
        let c2 = [136, 231, 136];
  
        fill('grey');
        rect(100, 449, 399, 50); // Base of container (blue rect)
        rect(100, 440, 399, 10); // Actual floor of container (green)
        //x values for bounds in future: left:(100) right:(500)
        //y values for bounds in future: top: 150 right: 449
  
        noFill();
        stroke('grey');
        strokeWeight(3);
        line(100, 150, 100, 500);  // Left side line
        line(500, 150, 500, 500);  // Right side line
        line(100, 499, 500, 500);  // Bottom line
        noStroke();
  }

    function drawDashedLine(){
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
