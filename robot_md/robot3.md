---
layout: robot
---

<div class="container">
<div id="div3" class="shadow" style="padding: 50px; display: inline-block;">
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
<div id="div4" class="shadow" style="padding: 50px;">
<h1>Simulation</h1>
<div style="padding: 25px">
    <canvas id="sim" width="250" height="250" style="background: white;">
    </canvas>
</div>
</div>
</div>
<script src="{{ '/assets/js/robotJS/robot3.js' | relative_url }}"></script>
