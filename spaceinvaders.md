---
layout: spaceinvaders
---

  <head>
    <title>Space Invaders</title>
    <style>
      #game-board {
        position: relative;
        width: 300px;
        height: 400px;
        border: 1px solid black;
      }

      .player {
        position: absolute;
        bottom: 10px;
        left: 135px;
        width: 30px;
        height: 20px;
        background-color: blue;
      }

      .bullet {
        position: absolute;
        background-color: red;
        width: 3px;
        height: 10px;
      }

      .invader {
        position: absolute;
        width: 20px;
        height: 20px;
        background-color: green;
      }
    </style>
  </head>
  <body>
    <div id="game-board"></div>

    <script>
      document.addEventListener('DOMContentLoaded', () => {
        const gameBoard = document.getElementById('game-board');
        const player = createPlayer();
        gameBoard.appendChild(player);

        let invaders = [];
        for (let i = 0; i < 10; i++) {
          const invader = createInvader(i * 30 + 30, 30);
          invaders.push(invader);
          gameBoard.appendChild(invader);
        }

        let bullets = [];
        document.addEventListener('keydown', (event) => {
          if (event.code === 'Space') {
            const bullet = createBullet(player.offsetLeft + 14);
            bullets.push(bullet);
            gameBoard.appendChild(bullet);
          }
        });

        document.addEventListener('keydown', (event) => {
          if (event.code === 'ArrowLeft') {
            movePlayerLeft();
          } else if (event.code === 'ArrowRight') {
            movePlayerRight();
          }
        });

        setInterval(() => {
          moveInvaders(invaders);
          moveBullets(bullets);
          detectCollisions(invaders, bullets);
        }, 500);

        function movePlayerLeft() {
          const currentLeft = parseInt(player.style.left);
          if (currentLeft > 0) {
            player.style.left = currentLeft - 10 + 'px';
          }
        }

        function movePlayerRight() {
          const currentLeft = parseInt(player.style.left);
          if (currentLeft < gameBoard.offsetWidth - player.offsetWidth) {
            player.style.left = currentLeft + 10 + 'px';
          }
        }
      });

      function createPlayer() {
        const player = document.createElement('div');
        player.className = 'player';
        return player;
      }

      function createBullet(x) {
        const bullet = document.createElement('div');
        bullet.className = 'bullet';
        bullet.style.left = x + 'px';
        bullet.style.bottom = '30px';
        return bullet;
      }

      function createInvader(x, y) {
        const invader = document.createElement('div');
        invader.className = 'invader';
        invader.style.left = x + 'px';
        invader.style.top = y + 'px';
        return invader;
      }

      function moveInvaders(invaders) {
        invaders.forEach((invader) => {
          invader.style.top = parseInt(invader.style.top) + 20 + 'px';
          if (parseInt(invader.style.top) >= 400) {
            invader.style.top = '30px';
          }
        });
      }

      function moveBullets(bullets) {
        bullets.forEach((bullet) => {
          bullet.style.bottom = parseInt(bullet.style.bottom) + 20 + 'px';
          if (parseInt(bullet.style.bottom) >= 400) {
            bullet.remove();
            bullets.splice(bullets.indexOf(bullet), 1);
          }
        });
      }

      function detectCollisions(invaders, bullets) {
        invaders.forEach((invader) => {
          bullets.forEach((bullet) => {
            if (
              bullet.offsetLeft >= invader.offsetLeft &&
              bullet.offsetLeft <= invader.offsetLeft + 20 &&
              bullet.offsetTop <= invader.offsetTop + 20
            ) {
              invader.remove();
              invaders.splice(invaders.indexOf(invader), 1);
              bullet.remove();
              bullets.splice(bullets.indexOf(bullet), 1);
            }
          });
        });
      }

    </script>

  </body>