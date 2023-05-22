<<<<<<< HEAD:robot5.md
---
layout: robot
---



<div class="container">
<div id="div3" class="shadow" style="padding: 50px; display: inline-block;">
<h1>Code Block</h1>
<div class="loop-block">
    <p style="color: black; text-align: left;"><input id="loop" class="block-input"><b>Loop</b></p>
    <div class="up-block"><input id="up" class="block-input"><label class="label-block"><b>UP</b></label></div><br>
    <div class="down-block"><input id="down" class="block-input"><label class="label-block"><b>DOWN</b></label></div><br>
    <div class="left-block"><input id="left" class="block-input"><label class="label-block"><b>LEFT</b></label></div><br>
    <div class="right-block"><input id="right" class="block-input"><label class="label-block"><b>RIGHT</b></label></div><br>
</div>
<br>
<button id="runner" onclick="run()">RUN</button>
<form action="{{ site.baseurl }}/robot5">
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
<div id="div3" class="shadow" style="padding: 50px;">
  <h1>Leaderboard</h1>
  <div style="padding: 25px">
    <ul id="leaderboard"></ul>
  </div>
</div>
<script>
  fetch('https://Playgroundproject.duckdns.org/api/users/', {
  method: 'PUT',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ name: person, level: parseInt(localStorage.getItem('level')) || 1 })
})
</script>

<script>
=======
>>>>>>> refs/remotes/origin/gh-pages:assets/js/robotJS/robot5.js
var runner = document.getElementById("runner");
var sim = document.getElementById("sim");
var ctx = sim.getContext("2d");
var canvasWidth = sim.width;
var canvasHeight = sim.height;
var squareSize = 50;
var squareX = 0;
var squareY = 0;
var barX1 = 0;
var barX2 = 200;
var barY1 = 100;
var barY2 = 150;
let winCheck = 0;

var robotState = 0;
var path = "https://f1nnc.github.io/Playground/images/robotIdle.jpg"
const pathI = "https://f1nnc.github.io/Playground/images/robotIdle.jpg"
const pathR = "https://f1nnc.github.io/Playground/images/robotRun.jpg"
var imageX = 0;
var imageY = 0;

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
    if (robotState == 0) {
        path = pathI;
        image.src = path;
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
    if (robotState == 1) {
        path = pathR;
        image.src = path;
        imageY = 64;
        imageX = 0;
        robotState = 2;
    }
    if (robotState == 2) {
        if (imageX < 512) {
            imageX = imageX + 128;
        }
        if (imageX == 512) {
            imageY = 216;
            imageX = 0;
        }
        if (imageX == 512 && imageY == 216) {
            imageY = 64;
            imageX = 0;
        }
    }
}


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
    ctx.fill();
    ctx.closePath();

    //end point
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
        console.log("collide");
        return;
    }
    if (squareX == barX2 && squareY == barY2) {
        squareX = 0;
        squareY = 0;
        console.log("collide");
        return;
    }
    return;
}

function changepos() {
    if (barX1 == 200) {
        barX1 = 0;
    } 
    else {
        barX1 = barX1 + 50;
    }
    if (barX2 == 0) {
        barX2 = 200;
    } 
    else {
        barX2 = barX2 - 50;
    }
}



// This function reads input values from the HTML document, creates an array of movements based on the input, 
// and uses setInterval to execute each movement in sequence at a delay of 800 milliseconds.
function run() {
    // Read input values from the HTML document and convert them to integers.
    robotState = 1;
    UPinput = parseInt(document.getElementById("up").value);
    DOWNinput = parseInt(document.getElementById("down").value);
    LEFTinput = parseInt(document.getElementById("left").value);
    RIGHTinput = parseInt(document.getElementById("right").value);
    looper = parseInt(document.getElementById("loop").value);

    runner.style.opacity = 0;
    

    // Create an array to hold the movements.
    let movements = [];

    // Push 'up' movements to the array.
    for (let l = 0; l < looper; l++) {
        for (let k = 0; k < UPinput; k++) {
            movements.push(up);
        }

        // Push 'down' movements to the array.
        for (let i = 0; i < DOWNinput; i++) {
            movements.push(down);
        }

        // Push 'left' movements to the array.
        for (let a = 0; a < LEFTinput; a++) {
            movements.push(left);
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
            robotState = 0;
            return;
        }
        movements[index](); // Execute the movement at the current index.
        index++; // Increment the index.
    }, 800);
}

function win() {
  if (squareX == 200 && squareY == 200) {
    let person = prompt("Please enter your name:");
    let password = prompt("Please enter your password:");
    if (person != null && password != null) {
      fetch('https://Playgroundproject.duckdns.org/api/users/win', {
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
    path = pathI;
    image.src = path;
    imageX = 0;
    imageY = 0;
}

<<<<<<< HEAD:robot5.md
function displayLeaderboard() {
  fetch('https://Playgroundproject.duckdns.org/api/users/')
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
=======
>>>>>>> refs/remotes/origin/gh-pages:assets/js/robotJS/robot5.js


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

setInterval(changepos, 1000)
setInterval(draw, 10);
setInterval(updateImage, 75);
