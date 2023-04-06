---
layout: robot
---

# Robot Learning

<div class="container">
  <div id="div1" class="shadow">
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
        <input placeholder="How many times right" id="right">
        <button onclick="run()">RUN</button>
    </div>
  <div id="div2" class="shadow">
        <h1>Simulation</h1>
        <div style="padding: 25px">
          <canvas id="sim" width="250" height="250" style="background: white;">
        </div>
    </div>
</div>

<script>
  var sim = document.getElementById("sim")
  var ctx = sim.getContext("2d");
  var x = sim.width/2;
  var y = sim.height-30;
  var input = parseInt(document.getElementById("right"))
  var dx = 2;
  var dy = -2;
  let Rx = 0;
  let Ry = 0;
  function draw() {
      console.log(x);
      ctx.clearRect(0, 0, sim.width, sim.height);
      ctx.beginPath();
      ctx.fillRect(Rx, Ry, 50, 50);
      ctx.fillStyle = "rgb(0,0,0)";
      ctx.fill();
      
      ctx.closePath();
      x += dx;
      y += dy;
  }
  function run() {
    for (let i = 0; i < input; i++) {
      right()
    }
  }
  function right() {
    Rx = Rx + 50;
    console.log("right");
  }
  function left() {
    Rx = Rx - 50;
    console.log("left");
  }
  function up() {
    Ry = Ry - 50;
    console.log("up");
  }
  function down() {
    Ry = Ry + 50;
    console.log("down");
  }
  setInterval(draw, 100);
</script>