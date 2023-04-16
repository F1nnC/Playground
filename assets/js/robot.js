var sim = document.getElementById("sim")
var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    var x = canvas.width/2;
    var y = canvas.height-30;
    var dx = 2;
    var dy = -2;
    function draw() {
        console.log(x);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.beginPath();
        ctx.arc(240, 240, 15, 0, Math.PI*2, false);
        ctx.fillStyle = "rgb(0,0,255)";
        ctx.fill();
        
        ctx.closePath();
        x += dx;
        y += dy;
    }