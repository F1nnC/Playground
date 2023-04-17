var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var x = canvas.width/2;
var y = canvas.height-30;
var dx = 2;
var dy = -2;
var x_bar = canvas.width/2;

var stopped = false;
var i = 0;
var j = 0;
var dx_bar = 0;
var speed_cache = 0;
var bar_cache = 0;
function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, 5, 0, Math.PI*2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}
function Bar() {
    ctx.beginPath()
    ctx.fillRect(x_bar, 300, 90, 10);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}
function drawText(text) {
    ctx.font = "bold 70px arial";
    ctx.fillStyle = "blue";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(text, 240, 160);
}
function ball_angle(angle) {
    bounce_angle = angle/90 * Math.PI;
    return Math.sin(bounce_angle)
}
function draw() {
    if (stopped == false) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
    Bar();
    drawBall();
    if (x + dx> 480) {
        dx = -dx;
    }
    if (x + dx < 0) {
        dx = -dx;
    }
    if (x + dx >= x_bar-45 && x + dx <= x_bar +45) {
        if (y + dy == 300) {
            speed_cache = x;
            bar_cache = x_bar;
            b_angle = ball_angle(x-x_bar);
            dy = -dy*b_angle;
        }
    }
    if (y + dy > 320) {
        dy = -dy;
    }
    if (y +dy < 00) {
        dy = -dy;
    }
    x += dx;
    y += dy;
    x_bar += dx_bar;
}
setInterval(draw, 12)
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


document.addEventListener('keydown', function(ev) {
    if (ev.code === 'KeyP') {
        pause()
    }
    if (ev.code === "ArrowLeft") {
        dx_bar = -5;
    }
    if (ev.code === "ArrowRight") {
        dx_bar = 5;
    }
});
document.addEventListener('keyup', event => {
    if (event.code === "ArrowLeft") {
        dx_bar = 0;
    }
    if (event.code === "ArrowRight") {
        dx_bar = 0;
    }
});

