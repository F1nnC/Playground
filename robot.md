---
layout: robot
---

# Robot Learning

<style>
  body {
        background-color: rgba(24, 24, 24, 0.8);
      }
</style>



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
<div id="div3" class="shadow" style="padding: 50px;">
  <h1>Leaderboard</h1>
  <div style="padding: 25px">
    <ul id="leaderboard"></ul>
  </div>
</div>
<script>
  fetch('http://127.0.0.1:8687/api/users/', {
  method: 'PUT',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ name: person, level: parseInt(localStorage.getItem('level')) || 1 })
})
</script>


<script>

const path = "https://f1nnc.github.io/Playground/images/robotIdle.jpg"
const pathR = "https://f1nnc.github.io/Playground/images/robotRun.jpg"
var imageX = 0;
var imageY = 0;


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

var image = new Image();
image.src = path;
image.onload = function() {
  drawImage();
};

function drawImage() {
  ctx.clearRect(0, 0, 50, 50);
  ctx.drawImage(image, imageX, imageY, 128, 128, squareX, squareY, 50, 50);
}


function updateImage() {
  imageX = imageX + 128;

  if (imageX > 512) {
    imageX = 0;

    if (imageY < 384) {
      imageY = imageY + 128;
    } else {
      imageY = 0;
    }
  }

  if (imageY === 384 && imageX === 256) {
    imageX = 0;
    imageY = 0;
  }

 
}




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

  drawImage();
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


function win() {
  if (squareX == 200 && squareY == 200) {
    let person = prompt("Please enter your name:");
    let password = prompt("Please enter your password:");
    if (person != null && password != null) {
      fetch('http://127.0.0.1:8687/api/users/win', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: person, password: password })
      })
        .then(response => response.json())
        .then(data => {
          console.log(data);
          displayLeaderboard();
        })
        .catch(error => {
          console.error('Error:', error);
        });
    }

    // increase the player's level by 1
    let level = parseInt(localStorage.getItem('level')) || 1;
    level += 1;
    localStorage.setItem('level', level);
  }
}

function displayLeaderboard() {
  fetch('http://127.0.0.1:8687/api/users/')
    .then(response => response.json())
    .then(data => {
      const leaderboard = document.getElementById("leaderboard");
      leaderboard.innerHTML = '';
      data.forEach(player => {
        const listItem = document.createElement('li');
        listItem.innerText = `${player.name}: Score ${player.score}`;
        leaderboard.appendChild(listItem);
      });
    })
    .catch(error => {
      console.error('Error:', error);
    });
}



displayLeaderboard();



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
setInterval(updateImage, 75);

</script>