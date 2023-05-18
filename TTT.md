---
layout: word
---
<style>
    * {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "Raleway", sans-serif;
}
body {
  height: 100vh;
  background: linear-gradient(135deg, #8052ec, #d161ff);
}
html {
  font-size: 16px;
}
.wrapper {
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
}
.container {
  width: 70vmin;
  height: 70vmin;
  display: flex;
  flex-wrap: wrap;
  gap: 2vmin;
}
.button-option {
  background: #ffffff;
  height: 22vmin;
  width: 22vmin;
  border: none;
  border-radius: 8px;
  font-size: 12vmin;
  color: #d161ff;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
}
#restart {
  font-size: 1.3em;
  padding: 1em;
  border-radius: 8px;
  background-color: #0a0027;
  color: #ffffff;
  border: none;
  position: relative;
  margin: 1.5em auto 0 auto;
  display: block;
}
.popup {
  background: linear-gradient(135deg, #8052ec, #d161ff);
  height: 100%;
  width: 100%;
  position: absolute;
  display: flex;
  z-index: 2;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1em;
  font-size: 12vmin;
}
#new-game {
  font-size: 0.6em;
  padding: 0.5em 1em;
  background-color: #0a0027;
  color: #ffffff;
  border-radius: 0.2em;
  border: none;
}
#message {
  color: #ffffff;
  text-align: center;
  font-size: 1em;
}
.popup.hide {
  display: none;
}
</style>
<html lang="en">
<!DOCTYPE html>
<html lang="en">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tic Tac Toe</title>
    <!-- Google Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@700&display=swap" rel="stylesheet">
    <!-- Stylesheet -->
    <link rel="stylesheet" href="style.css">
</head>
<body>
   <div class="wrapper">
       <div class="container">
           <button class="button-option"></button>
           <button class="button-option"></button>
           <button class="button-option"></button>
           <button class="button-option"></button>
           <button class="button-option"></button>
           <button class="button-option"></button>
           <button class="button-option"></button>
           <button class="button-option"></button>
           <button class="button-option"></button>
       </div>
       <button id="restart">Restart</button>
   </div>

   <div class="popup hide">
       <p id="message">Sample Message</p>
       <button id="new-game">New Game</button>
   </div>
</body>
</html>
<script>
let btnRef = document.querySelectorAll(".button-option");
let popupRef = document.querySelector(".popup");
let newgameBtn = document.getElementById("new-game");
let restartBtn = document.getElementById("restart");
let msgRef = document.getElementById("message");
//Winning Pattern Array
let winningPattern = [
  [0, 1, 2],
  [0, 3, 6],
  [2, 5, 8],
  [6, 7, 8],
  [3, 4, 5],
  [1, 4, 7],
  [0, 4, 8],
  [2, 4, 6],
];
//Player 'X' plays first
let xTurn = true;
let count = 0;
//Disable All Buttons
const disableButtons = () => {
  btnRef.forEach((element) => (element.disabled = true));
  //enable popup
  popupRef.classList.remove("hide");
};
//Enable all buttons (For New Game and Restart)
const enableButtons = () => {
  btnRef.forEach((element) => {
    element.innerText = "";
    element.disabled = false;
  });
  //disable popup
  popupRef.classList.add("hide");
};
//This function is executed when a player wins
const winFunction = (letter) => {
  disableButtons();
  if (letter == "X") {
    msgRef.innerHTML = "&#x1F389; <br> 'X' Wins";
  } else {
    msgRef.innerHTML = "&#x1F389; <br> 'O' Wins";
  }
};
//Function for draw
const drawFunction = () => {
  disableButtons();
  msgRef.innerHTML = "&#x1F60E; <br> It's a Draw";
};
//New Game
newgameBtn.addEventListener("click", () => {
  count = 0;
  enableButtons();
});
restartBtn.addEventListener("click", () => {
  count = 0;
  enableButtons();
});
//Win Logic
const winChecker = () => {
  //Loop through all win patterns
  for (let i of winningPattern) {
    let [element1, element2, element3] = [
      btnRef[i[0]].innerText,
      btnRef[i[1]].innerText,
      btnRef[i[2]].innerText,
    ];
    //Check if elements are filled
    //If 3 empty elements are same and would give win as would
    if (element1 != "" && (element2 != "") & (element3 != "")) {
      if (element1 == element2 && element2 == element3) {
        //If all 3 buttons have same values then pass the value to winFunction
        winFunction(element1);
      }
    }
  }
};
//Display X/O on click
btnRef.forEach((element) => {
  element.addEventListener("click", () => {
    if (xTurn) {
      xTurn = false;
      //Display X
      element.innerText = "X";
      element.disabled = true;
    } else {
      xTurn = true;
      //Display Y
      element.innerText = "O";
      element.disabled = true;
    }
    //Increment count on each click
    count += 1;
    if (count == 9) {
      drawFunction();
    }
    //Check for win on every click
    winChecker();
  });
});
//Enable Buttons and disable popup on page load
window.onload = enableButtons;
</script>