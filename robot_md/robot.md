---
layout: robot
---

# Robot Learning

<style>
  body {
        background-color: rgba(24, 24, 24, 0.8);
      }
</style>



<div class="container" style="">
  <div id="div1" class="shadow" style="padding: 50px; ">
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
  </div>
  <div id="div2" class="shadow" style="padding: 50px;">
    <h1>Simulation</h1>
    <div style="padding: 25px">
      <canvas id="sim" width="250" height="250" style="background: white;">
      </canvas>
    </div>
  </div>
</div>
<div style="padding: 50px;"></div>
<div id="div3" class="shadow" style="padding: 50px;">
  <h1>Leaderboard</h1>
  <div style="padding: 25px">
    <ul id="leaderboard"></ul>
  </div>
</div>
<script src="{{ '/assets/js/robotJS/robot.js' | relative_url }}"></script>