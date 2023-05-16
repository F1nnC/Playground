
<body onload="draw_chess_board(this)">
    <style>
        canvas { background: #eee; display: block; margin: 0 auto; }
    </style>
    <canvas id="myCanvas" onclick="clickCanvas(window.event)" width="640" height="640"></canvas><script src="{{ '/assets/js/game.js' | relative_url }}"></script>

</body>
