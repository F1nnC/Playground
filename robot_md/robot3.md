---
layout: robot
---
<br>
<div class="index-Container">
  <div id="div3" class="shadow" style="padding-top: 50px; padding-bottom: 50px;">
    <h1>Code Block</h1>
      <div class="loop-block">
          <p style="color: black; text-align: left;"><input id="loop" class="block-input"><b>Loop</b></p>
          <div class="down-block"><label class="label-block"><b>1 DOWN</b></label></div><br>
          <div class="right-block"><label class="label-block"><b>1 RIGHT</b></label></div><br>
      </div>
    <br>
    <button id="runner" onclick="run()">RUN</button>
    <form action="{{ site.baseurl }}/robot_md/robot3">
        <button type="submit">RESET</button>
    </form>
    </div>
    <div id="div4" class="shadow" style="">
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
    <label># of people shown</label>
    <select name="Entries" id="numberRows" onchange="updateLeaderboard()">
      <option value="5">5</option>
      <option value="10">10</option>
      <option value="25">25</option>
    </select>
    <input type="text" id="searchInput" onkeyup="searchPlayer()" placeholder="Search for a player...">
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

<script src="{{ '/assets/js/robotJS/robot3.js' | relative_url }}"></script>
