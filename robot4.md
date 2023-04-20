---
layout: robot
---



<div class="container">
<div id="div3" class="shadow" style="padding: 50px; display: inline-block;">
<h1>Code Block</h1>
<div class="loop-block">
    <p style="color: black; text-align: left;"><input id="loop" class="block-input"><b>Loop</b></p>
    <div class="up-block"><input id="up" class="block-input"><label class="label-block"><b>UP</b></label></div><br>
    <div class="left-block"><label class="label-block"><b>2 LEFT</b></label></div><br>
    <div class="down-block"><input id="down" class="block-input"><label class="label-block"><b>DOWN</b></label></div><br>
    <div class="right-block"><input id="right" class="block-input"><label class="label-block"><b>RIGHT</b></label></div><br>
</div>
<br>
<button id="runner" onclick="run()">RUN</button>
<form action="https://f1nnc.github.io/Playground/robot2">
    <button type="submit">RESET</button>
</form>
</div>
<div id="div4" class="shadow" style="padding: 50px;">
<h1>Simulation</h1>
<div style="padding: 25px">
    <canvas id="sim" width="250" height="250" style="background: white;">
    </canvas>
</div>
</div>
</div>

<script>
var runner = document.getElementById("runner");
var sim = document.getElementById("sim");
var ctx = sim.getContext("2d");
var canvasWidth = sim.width;
var canvasHeight = sim.height;
var squareSize = 50;
var squareX = 200;
var squareY = 200;
var barX1 = 150;
var barX2 = 150;
var barX3 = 50;
var barX4 = 50;
var barX5 = 50;
var barX6 = 50;
var barX7 = 150;
var barX8 = 150;
var barY1 = 200;
var barY2 = 150;
var barY3 = 150;
var barY4 = 200;
var barY5 = 0;
var barY6 = 50;
var barY7 = 0;
var barY8 = 50;
let winCheck = 0;


function draw() {
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    ctx.beginPath();
    ctx.fillStyle = "rgb(0, 0, 0)";
    ctx.fillRect(squareX, squareY, squareSize, squareSize);
    ctx.fill();
    ctx.closePath();

    //barrier
    ctx.beginPath();
    ctx.fillStyle = "rgb(255, 0, 0)";
    ctx.fillRect(barX1, barY1, 50, 50);
    ctx.fillRect(barX2, barY2, 50, 50);
    ctx.fillRect(barX3, barY3, 50, 50);
    ctx.fillRect(barX4, barY4, 50, 50);
    ctx.fillRect(barX5, barY5, 50, 50);
    ctx.fillRect(barX6, barY6, 50, 50);
    ctx.fillRect(barX7, barY7, 50, 50);
    ctx.fillRect(barX8, barY8, 50, 50);
    ctx.fill();
    ctx.closePath();

    //end point
    ctx.beginPath();
    ctx.fillStyle = "yellow";
    ctx.arc(25, 225, 10, 0, 2 * Math.PI);
    ctx.fill();
    ctx.closePath();
}

function collide() {
    if (squareX == barX1 && squareY == barY1) {
        squareX = 200;
        squareY = 200;
        console.log("collide");
        return;
    }
    if (squareX == barX2 && squareY == barY2) {
        squareX = 200;
        squareY = 200;
        console.log("collide");
        return;
    }
    if (squareX == barX3 && squareY == barY3) {
        squareX = 200;
        squareY = 200;
        console.log("collide");
        return;
    }
    if (squareX == barX4 && squareY == barY4) {
        squareX = 200;
        squareY = 200;
        console.log("collide");
        return;
    }
    if (squareX == barX5 && squareY == barY5) {
        squareX = 200;
        squareY = 200;
        console.log("collide");
        return;
    }
    if (squareX == barX6 && squareY == barY6) {
        squareX = 200;
        squareY = 200;
        console.log("collide");
        return;
    }
    if (squareX == barX7 && squareY == barY7) {
        squareX = 200;
        squareY = 200;
        console.log("collide");
        return;
    }
    if (squareX == barX8 && squareY == barY8) {
        squareX = 200;
        squareY = 200;
        console.log("collide");
        return;
    }
    return;
}



// This function reads input values from the HTML document, creates an array of movements based on the input, 
// and uses setInterval to execute each movement in sequence at a delay of 800 milliseconds.
function run() {
    // Read input values from the HTML document and convert them to integers.
    var UPinput = parseInt(document.getElementById("up").value);
    var DOWNinput = parseInt(document.getElementById("down").value);
    var LEFTinput = 2;
    var RIGHTinput = parseInt(document.getElementById("right").value);
    var looper = parseInt(document.getElementById("loop").value);

    runner.style.opacity = 0;
    

    // Create an array to hold the movements.
    let movements = [];

    // Push 'up' movements to the array.
    for (let l = 0; l < looper; l++) {
        for (let k = 0; k < UPinput; k++) {
            movements.push(up);
        }

        for (let a = 0; a < LEFTinput; a++) {
            movements.push(left);
        }

        // Push 'down' movements to the array.
        for (let i = 0; i < DOWNinput; i++) {
            movements.push(down);
        }


        // Push 'right' movements to the array.
        for (let c = 0; c < RIGHTinput; c++) {
            movements.push(right);
        }
    }


    // Set the initial index to 0 and execute each movement in sequence with a delay of 800 milliseconds.
    let index = 0;
    let intervalId = setInterval(() => {
        // If the end of the movements array has been reached, stop executing movements.
        if (index >= movements.length) {
            clearInterval(intervalId);
            win(); // Call the win function.
            return;
        }
        movements[index](); // Execute the movement at the current index.
        index++; // Increment the index.
    }, 800);
}

function win() {
    if (squareX == 0 && squareY == 200) {
        let person = prompt("Please enter your name to get credit for the level");
        console.log(person); // Print the entered name to the console.
    }
}


function right() {
    squareX += squareSize;

    // Check if the square hits the right wall
    if (squareX + squareSize > canvasWidth) {
        squareX = canvasWidth - squareSize;
    }
    collide();
    console.log("right")
}

function left() {
    squareX -= squareSize;
    // Check if the square hits the left wall
    if (squareX < 0) {
        squareX = 0;
    }
    collide();
    console.log("left")
}

function up() {
    squareY -= squareSize;
    // Check if the square hits the top wall
    if (squareY < 0) {
        squareY = 0;
    }
    collide();
    console.log("up")
}

function down() {
    squareY += squareSize;
    // Check if the square hits the bottom wall
    if (squareY + squareSize > canvasHeight) {
        squareY = canvasHeight - squareSize;
    }
    collide();
    console.log("down")
}

setInterval(draw, 10);


</script>
