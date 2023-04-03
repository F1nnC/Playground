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

    function drawBall() {
        ctx.beginPath();
        ctx.arc(x, y, 10, 0, Math.PI*2);
        ctx.fillStyle = "#0095DD";
        ctx.fill();
        ctx.closePath();
    }

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawBall();
        if (x > 480) {
            dx = -2;
        }
        if (x < 0) {
            dx = 2;
        }
        if (y > 320) {
            dy = -2;
        }
        if (y < 0) {
            dy = 2;
        }
        x += dx;
        y += dy;
    }

    setInterval(draw, 10);
    function pause() {
        switch(e.code) {
            case p:
        }
    }
</script>

</body>
</html>