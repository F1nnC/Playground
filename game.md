<html>
<head>
    <meta charset="utf-8" />
    <title>Game</title>
    <style>
      canvas { background: #eee; display: block; margin: 0 auto; }
    </style>
</head>
<body>

<canvas id="myCanvas" width="480" height="320"></canvas>

<script>
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
    // ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
    // ctx.fillRect (30, 30, 50, 50);
    setInterval(draw, 10);
</script>

</body>
</html>