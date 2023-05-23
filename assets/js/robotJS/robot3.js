var runner = document.getElementById("runner");
var sim = document.getElementById("sim");
var ctx = sim.getContext("2d");
var canvasWidth = sim.width;
var canvasHeight = sim.height;
var squareSize = 50;
var squareX = 0;
var squareY = 0;
var barX1 = 100;
var barX2 = 150;
var barX3 = 200;
var barY1 = 100;
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

    //end point
    ctx.beginPath();
    ctx.fillStyle = "yellow";
    ctx.arc(225, 225, 10, 0, 2 * Math.PI);
    ctx.fill();
    ctx.closePath();

    drawImage();
}


// This function reads input values from the HTML document, creates an array of movements based on the input, 
// and uses setInterval to execute each movement in sequence at a delay of 800 milliseconds.
function run() {
    // Read input values from the HTML document and convert them to integers.
    robotState = 1;
    runner.style.opacity = 0;
    looper = parseInt(document.getElementById("loop").value);

    // Create an array to hold the movements.
    let movements = [];

    // Push 'up' movements to the array.
    for (let i = 0; i < looper; i++) {
        movements.push(down);
        movements.push(right);
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


function right() {
    squareX += squareSize;

    // Check if the square hits the right wall
    if (squareX + squareSize > canvasWidth) {
        squareX = canvasWidth - squareSize;
    }
    console.log("right")
}

function left() {
    squareX -= squareSize;
    // Check if the square hits the left wall
    if (squareX < 0) {
        squareX = 0;
    }
    console.log("left")
}

function up() {
    squareY -= squareSize;
    // Check if the square hits the top wall
    if (squareY < 0) {
        squareY = 0;
    }
    console.log("up")
}

function down() {
    squareY += squareSize;
    // Check if the square hits the bottom wall
    if (squareY + squareSize > canvasHeight) {
        squareY = canvasHeight - squareSize;
    }
    console.log("down")
}


setInterval(draw, 10);
setInterval(updateImage, 75);