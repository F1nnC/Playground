---
layout: default
---
<style>
a {
  color: white;
  text-decoration: none;
}
p {
  margin-left: 25px;
  margin-right: 25px;
}
</style>


<div class="index-Container">
  <div id="div2" class="shadow">
    <a href="{{ site.baseurl }}/API"><h1>Pizza API</h1></a>
    <a href="{{ site.baseurl }}/API"><img src="{{ site.baseurl }}/images/pizzaIndex.png" width="50" height="50"></a>
    <a href="{{ site.baseurl }}/API"><p>Example Text</p></a>
  </div>
  <div id="div2" class="shadow">
    <a href="{{ site.baseurl }}/game"><h1>Chess</h1></a>
    <a href="{{ site.baseurl }}/game"><img src="{{ site.baseurl }}/images/Chess_nlt60.png" width="50" height="50"></a>
    <a href="{{ site.baseurl }}/game"><p>Example Text</p></a>
  </div>
  <div id="div1" class="shadow">
    <a href="{{ site.baseurl }}/robot_md/robot"><h1>Robot</h1></a>
    <a href="{{ site.baseurl }}/robot_md/robot"><canvas id="sim" width="50" height="50"></canvas></a>
    <a href="{{ site.baseurl }}/robot_md/robot"><p>Robot learning teaches fundamental coding principales at a beginner level. You learn the three main principles of coding, iteration, selection, and sequncing. It challenges with differnet puzzle where you input diffrent values. Your main goal is to get the robot to the yellow coin, while dodging the red squares.</p></a>
  </div>
  <div id="div4" class="shadow">
    <a href="{{ site.baseurl }}/memory2"><h1>Memory Game</h1></a>
    <a href="{{ site.baseurl }}/memory2"><img src="{{ site.baseurl }}/images/Playground-Logo-transparent.png" width="50" height="50"></a>
    <a href="{{ site.baseurl }}/memory2"><p>Example Text</p></a>
  </div>
  <div id="div5" class="shadow">
    <a href="{{ site.baseurl }}/tictactoe"><h1>Tic Tac Toe</h1></a>
    <a href="{{ site.baseurl }}/tictactoe"><img src="{{ site.baseurl }}/images/X.png" width="50" height="50"></a>
    <a href="{{ site.baseurl }}/tictactoe"><p>Example Text</p></a>
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
