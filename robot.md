---
layout: robot
---
<style>
.dropdown {
  display: inline-block;
  background-color: green;
  font-size: 25px;
}
.dropdown-content {
  text-align: center;
  display: none;
  position: absolute;
  background-color: rgb(102, 255, 153);
  min-width: 160px;
  box-shadow: green;
  padding: 12px 16px;
  z-index: 1;
  color: rgb(255, 80, 80);
}
.dropdown:hover .dropdown-content {
  display: block;
}
.levelAlign {
  text-align: center;
  position: relative;
}
.levelButton {
  width: 20%;
  text-align: center;
  position: relative;
}
</style>

# Robot Learning


<div class="dropdown">
  <div id="levelAlign">
  <span>Choose Your Level</span>
  </div>
  <div class="dropdown-content">
    <div class="levelButton"><a href="/robotlvl1"><p>Level 1</p></a></div>
    <p>Level 2</p>
    <p>Level 3</p>
    <p>Level 4</p>
  </div>
</div>

<div class="container">
  <div id="div1" class="shadow">
        <h1>Controller</h1>
        <div style="padding: 5px;">
        <button class="ControlB" id="up">UP</button>
        </div>
        <div>
        <button class="ControlB" id="left">LEFT</button>
        <button class="ControlB" id="right">RIGHT</button>
        </div>
        <div style="padding: 5px;">
        <button class="ControlB" id="down">DOWN</button>
        </div>
    </div>
  <div id="div2" class="shadow">
        <h1>Simulation</h1>
      <div style="padding: 50px;">
        <div id="board">
          <div id="square"></div>
        </div>
      </div>
    </div>
</div>

<script>
const square = document.getElementById('square');
const upBtn = document.getElementById('up');
const downBtn = document.getElementById('down');
const leftBtn = document.getElementById('left');
const rightBtn = document.getElementById('right');
let x = 0;
let y = 0;

upBtn.addEventListener('click', () => {
  if (y >= 50 && y < 200) {
    y -= 50;
    square.style.top = `${y}px`;
  }
});

downBtn.addEventListener('click', () => {
  if (y >= 0 && y < 150) {
    y += 50;
    square.style.top = `${y}px`;
  }
});

leftBtn.addEventListener('click', () => {
  if (x >= 50 && x < 200) {
    x -= 50;
    square.style.left = `${x}px`;
  }
});

rightBtn.addEventListener('click', () => {
  if (x >= 0 && x < 150) {
    x += 50;
    square.style.left = `${x}px`;
  }
});


</script>

