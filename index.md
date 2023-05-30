---
layout: default
---
<style>
a {
  color: white;
  text-decoration: none;
}
</style>

## Playground

<div class="index-Container">
  <div id="div1" class="shadow">
    <a href="{{ site.baseurl }}/robot_md/robot"><h1>Robot</h1></a>
    <canvas id="sim" width="50" height="50"></canvas>
    <p>Example Text</p>
  </div>
  <div id="div2" class="shadow">
    <h1>Pizza API</h1>
    <p>Example Text</p>
  </div>
  <div id="div3" class="shadow">
    <h1>Chess</h1>
    <p>Example Text</p>
  </div>
  <div id="div4" class="shadow">
    <h1>Memory Game</h1>
    <p>Example Text</p>
  </div>
  <div id="div5" class="shadow">
    <h1>Space Invaders Game</h1>
    <p>Example Text</p>
  </div>
</div>

<div style="padding: 400px;"></div>

<script>
  const path = "https://f1nnc.github.io/Playground/images/robotIdle.png";
  var imageX = 0;
  var imageY = 0;
  var sim = document.getElementById("sim");
  var ctx = sim.getContext("2d");

  var image = new Image();
  image.src = path;
  image.onload = function() {
    drawImage();
  };

  function drawImage() {
    ctx.clearRect(0, 0, 50, 50);
    ctx.drawImage(image, imageX, imageY, 128, 128, 0, 0, 50, 50);
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
    ctx.clearRect(0, 0, 50, 50);
    drawImage();
  }

  setInterval(draw, 10);
  setInterval(updateImage, 75);
</script>
