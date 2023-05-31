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
    <a href="{{ site.baseurl }}/API"><p>One of the most fun and simple uses of an API. Using both a Backend and Frontend, coders can use the API in order to create an pizza order by inputting their name, type of pizza they want, and their address. This Pizza API is a fun little way to teach young coders about the possibilities of API's</p></a>
  </div>
  <div id="div2" class="shadow">
    <a href="{{ site.baseurl }}/game"><h1>Chess</h1></a>
    <a href="{{ site.baseurl }}/game"><img src="{{ site.baseurl }}/images/Chess_nlt60.png" width="50" height="50"></a>
    <a href="{{ site.baseurl }}/game"><p>One of the most popular games in the world introduced to young coders in a simplistic way. Through this, coders are able to discover the possibilities of using 2D Arrays and implement them into their own. It challenges one's strategic thinking as they play another player near to them.</p></a>
  </div>
  <div id="div1" class="shadow">
    <a href="{{ site.baseurl }}/robot_md/robot"><h1>Robot</h1></a>
    <a href="{{ site.baseurl }}/robot_md/robot"><canvas id="sim" width="50" height="50"></canvas></a>
    <a href="{{ site.baseurl }}/robot_md/robot"><p>Robot learning teaches fundamental coding principles at a beginner level. You learn the three main principles of coding, iteration, selection, and sequencing. It challenges with different puzzle where you input different values. Your main goal is to get the robot to the yellow coin, while dodging the red squares.</p></a>
  </div>
  <div id="div4" class="shadow">
    <a href="{{ site.baseurl }}/memory2"><h1>Memory Game</h1></a>
    <a href="{{ site.baseurl }}/memory2"><img src="{{ site.baseurl }}/images/Playground-Logo-transparent.png" width="50" height="50"></a>
    <a href="{{ site.baseurl }}/memory2"><p>Through the memory game, young coders can learn about the use of dictionaries to aid in the creation of games. Knowledge gained by playing this game can inspire young coders in exploring new games that can be made using Dictionaries. Coders will be motivated in exploring other data structures and utilizing them in future projects. The goal of the game is to match each picture to the other</p></a>
  </div>
  <div id="div5" class="shadow">
    <a href="{{ site.baseurl }}/tictactoe"><h1>Tic Tac Toe</h1></a>
    <a href="{{ site.baseurl }}/tictactoe"><img src="{{ site.baseurl }}/images/X.png" width="50" height="50"></a>
    <a href="{{ site.baseurl }}/tictactoe"><p>Similar to Chess, this game includes 2D arrays as well in order through a even more simple game, one that most coders have played before. 2 Players will play against each other to make sure they win this game. Through both this game and Chess, young coders can learn the importance of 2D Arrays and learn how to implement them into their own games.</p></a>
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
