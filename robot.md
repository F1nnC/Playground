---
layout: robot
---


# Robot Learning

<div class="container">
  <div id="div1" class="shadow">
        <h1>Controller</h1>
        <div>
        <button class="ControlB" id="up">UP</button>
        </div>
        <div>
        <button class="ControlB" id="left">LEFT</button>
        <button class="ControlB" id="right">RIGHT</button>
        </div>
        <div>
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

