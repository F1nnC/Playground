---
layout: robot
---

# Robot Learning

<style>
  body {
        background-color: rgba(24, 24, 24, 0.8);
      }
</style>



<div class="index-Container" style="">
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
    <div style="padding: 15px">
      <canvas id="sim" width="250" height="250" style="background: white;">
      </canvas>
    </div>
  </div>
</div>
<div style="padding: 50px;"></div>
<div id="div3" class="shadow" style="padding: 50px;">
  <h1>Leaderboard</h1>
  <div style="padding: 25px">
    <select name="Entries" id="numberRows" onchange="updateLeaderboard()" style="float: left;">
      <option value="5">5</option>
      <option value="10">10</option>
      <option value="25">25</option>
    </select>
    <input type="text" id="searchInput" onkeyup="searchPlayer()"  placeholder="Search for a player...">
    <table id="leaderboard" style="width:100%">
      <tr>
        <th onclick="sortLeaderboard(0)">Name</th>
        <th onclick="sortLeaderboard(1)">Score</th>
      </tr>
    </table>
  </div>
</div>
<script>
  fetch('https://Playgroundproject.duckdns.org/api/users/', {
  method: 'PUT',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ name: person, level: parseInt(localStorage.getItem('level')) || 1 })
})
</script>
<script src="{{ '/assets/js/robotJS/robot.js' | relative_url }}"></script>