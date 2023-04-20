layout: robot
---

# Robot Learning

<div class="container" style="">
  <div id="div1" class="shadow" style="padding: 50px; ">
    <h1>Controller</h1>
    <div style="padding: 15px"></div>
    <div>
      <div style="padding: 5px;">
        <button class="ControlB" onclick="up()">UP</button>
      </div>
      <div>
        <button class="ControlB" onclick="left()">LEFT</button>
        <button class="ControlB" onclick="right()">RIGHT</button>
      </div>
      <div style="padding: 5px;">
        <button class="ControlB" onclick="down()">DOWN</button>
      </div>
    </div>
  </div>
  <div id="div2" class="shadow" style="padding: 50px;">
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
var barX1 = 100;
var barY1 = 100;
var barY2 = 50;
var barY3 = 0;
var barY4 = 200;
squareX = 0;
squareY = 0;

function draw() {
  ctx.clearRect(0, 0, canvasWidth, canvasHeight);
  ctx.beginPath();
  ctx.fillStyle = "rgb(0, 0, 0)";
  ctx.fillRect(squareX, squareY, squareSize, squareSize);
  ctx.fill();
  ctx.closePath();

  ctx.beginPath();
  ctx.fillStyle = "rgb(255, 0, 0)";
  ctx.fillRect(barX1, barY1, 50, 50);
  ctx.fillRect(barX1, barY2, 50, 50);
  ctx.fillRect(barX1, barY3, 50, 50);
  ctx.fillRect(barX1, barY4, 50, 50);
  ctx.fill();
  ctx.closePath();
  
  ctx.beginPath();
  ctx.fillStyle = "yellow";
  ctx.arc(225, 225, 10, 0, 2 * Math.PI);
  ctx.fill();
  ctx.closePath();
}

function collide() {
  if (squareX == barX1 && squareY == barY1) {
    squareX = 0;
    squareY = 0;
  }
  if (squareX == barX1 && squareY == barY2) {
    squareX = 0;
    squareY = 0;
  }
  if (squareX == barX1 && squareY == barY3) {
    squareX = 0;
    squareY = 0;
  }
  if (squareX == barX1 && squareY == barY4) {
    squareX = 0;
    squareY = 0;
  }
}


...
function win() {
    if (squareX == 200 && squareY == 200) {
        let person = prompt("Please enter your name to get credit for the level");
        console.log(person); // Print the entered name to the console.

        fetch('https://playgroundproject.duckdns.org/api/leaderboard', {
            method: 'POST',
            body: JSON.stringify({
                name: person,
                level: 'Level 1'
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => {
            console.log(response);
            fetch('https://playgroundproject.duckdns.org/api/leaderboard')
            .then(response => response.json())
            .then(data => console.log(data));
        })
        .catch(error => {
            console.error(error);
        });
    }
}
function right() {
  squareX += squareSize;
  // Check if the square hits the right wall
  if (squareX + squareSize > canvasWidth) {
    squareX = canvasWidth - squareSize;
  }
    win();
    collide();
}

function left() {
  squareX -= squareSize;
  // Check if the square hits the left wall
  if (squareX < 0) {
    squareX = 0;
  }
  win();
  collide();
}

function up() {
  squareY -= squareSize;
  // Check if the square hits the top wall
  if (squareY < 0) {
    squareY = 0;
  }
  win();
  collide();
  
}

function down() {
  squareY += squareSize;
  // Check if the square hits the bottom wall
  if (squareY + squareSize > canvasHeight) {
    squareY = canvasHeight - squareSize;
  }
  win();
  collide();
}

setInterval(draw, 10);

</script>
