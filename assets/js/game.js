var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var x = canvas.width/2;
var y = canvas.height-30;
var dx = 2;
var dy = -2;
var x_bar = canvas.width/2;
var y_bar = canvas;
var stopped = false;
var i = 0;
var j = 0;
function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, 10, 0, Math.PI*2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}
function Bar() {
    ctx.beginPath()
    ctx.arc()
}
function drawText(text) {
    ctx.font = "bold 70px arial";
    ctx.fillStyle = "blue";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(text, 240, 160);
}
function draw() {
    if (stopped == false) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
    drawBall();
    if (x + dx> 480) {
        dx = -2;
    }
    if (x + dx < 0) {
        dx = 2;
    }
    if (y + dy > 320) {
        dy = -2;
    }
    if (y +dy < 00) {
        dy = 2;
    }
    x += dx;
    y += dy;
    
}
setInterval(draw, 10)
function pause() {
    if (stopped == false) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        i = dx;
        j = dy;
        dx = 0;
        dy = 0;
        stopped = true;

        drawText("Pause");
        return
    }
    if (stopped == true) {
        dx = i;
        dy = j;
        stopped = false;
        return
    }
}

