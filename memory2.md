<html>
  <head>
    <meta charset='UTF-8'>
    <title>Memory Game</title>
    <script src="{{ '/assets/js/memory2.js' | relative_url }}"></script>
  </head>
  <body>
    <style>
        .tile {
            display: flex;
            flex-wrap: wrap;
            width: 1600px;
            height: 1600px;
            margin: 0 auto;
        }
    </style>
    <h1>Memory Game</h1> 
    <h3>SCORE: <span id="score"></span></h3>
    <div class="tile" >
    </div>
  </body>
</html>