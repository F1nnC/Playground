
<body onload="draw_chess_board(this)">
    <style>
        canvas { background: #eee; display: block; margin: 0 auto; }
    </style>
    <div class="index-Container">
        <div class="timerC">
            <div id="whiteTime" class="timer1">10:00</div>
            <div id="blackTime" class="timer2">10:00</div>
        </div>
        <canvas id="myCanvas" onclick="clickCanvas(window.event)" width="640" height="640"></canvas><script src="{{ '/assets/js/game.js' | relative_url }}"></script>
    </div>
</body>
