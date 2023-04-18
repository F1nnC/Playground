---
layout: robot
---

<div class="container">
<div id="div3" class="shadow" style="padding: 50px; display: inline-block;">
<h1>Code Block</h1>
<div class="loop-block">
    <p style="color: black; text-align: left;"><b>1 Loop</b></p>
    <div class="up-block"><input id="up" class="block-input"><label class="label-block"><b>UP</b></label></div><br>
    <div class="down-block"><input id="down" class="block-input"><label class="label-block"><b>DOWN</b></label></div><br>
    <div class="left-block"><input id="left" class="block-input"><label class="label-block"><b>LEFT</b></label></div><br>
    <div class="right-block"><input id="right" class="block-input"><label class="label-block"><b>RIGHT</b></label></div><br>
</div>
<br>
<button onclick="run()">RUN</button>
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
var sim = document.getElementById("sim");
var ctx = sim.getContext("2d");
var canvasWidth = sim.width;
var canvasHeight = sim.height;
var squareSize = 50;
var squareX = canvasWidth - squareSize;
var squareY = 0;
var input = parseInt(document.getElementById("right").value);
squareX = 0;
squareY = 0;


function draw() {
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    ctx.beginPath();
    ctx.fillRect(squareX, squareY, squareSize, squareSize);
    ctx.fillStyle = "rgb(0, 0, 0)";
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(225, 225, 10, 0, 2 * Math.PI);
    ctx.fill();
    ctx.closePath();
}

function run() {
    UPinput = parseInt(document.getElementById("up").value);
    DOWNinput = parseInt(document.getElementById("down").value);
    LEFTinput = parseInt(document.getElementById("left").value);
    RIGHTinput = parseInt(document.getElementById("right").value);
    for (let i = 0; i < UPinput; i++) {
        setTimeout(up, 800 * i);
    }
    for (let i = 0; i < DOWNinput; i++) {
        setTimeout(down, 800 * i);
    }
    for (let i = 0; i < LEFTinput; i++) {
        setTimeout(left, 800 * i);
    }
    for (let i = 0; i < RIGHTinput; i++) {
        setTimeout(right, 800 * i);
    }
}


function win() {
    if (squareX == 200 && squareY == 200) {
        let person = prompt("Please enter your name to get credit for the level");
        squareX = 0
        squareY = 0
    }
    else {
        return
    }
}

function right() {
    squareX += squareSize;
    // Check if the square hits the right wall
    if (squareX + squareSize > canvasWidth) {
        squareX = canvasWidth - squareSize;
    }
}

function left() {
    squareX -= squareSize;
    // Check if the square hits the left wall
    if (squareX < 0) {
        squareX = 0;
    }
}

function up() {
    squareY -= squareSize;
    // Check if the square hits the top wall
    if (squareY < 0) {
        squareY = 0;
    }
}

function down() {
    squareY += squareSize;
    // Check if the square hits the bottom wall
    if (squareY + squareSize > canvasHeight) {
        squareY = canvasHeight - squareSize;
    }
}

setInterval(win, 1000)
setInterval(draw, 10);


</script>
