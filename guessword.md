<!DOCTYPE html>
<html>
<head>
  <title>Guess the Word</title>
  <style>
    header {
      background-color: #333;
      color: white;
      text-align: center;
      padding: 20px;
    }
    main {
      margin: 20px auto;
      max-width: 600px;
      padding: 20px;
      border: 1px solid #ccc;
      border-radius: 5px;
    }
    /* Style the input field and button */
    input[type="text"] {
      font-size: 18px;
      padding: 5px;
      margin-right: 10px;
    }
    button {
      font-size: 18px;
      padding: 5px 10px;
      background-color: #4CAF50;
      color: white;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }
    /* Style the message area */
    #message {
      margin-top: 10px;
      font-size: 20px;
      font-weight: bold;
    }
  </style>
</head>
<body>
  <header>
    <h1>Guess the Word</h1>
  </header>
  <main>
    <p id="progress"></p>
    <p>Guess a letter:</p>
    <input type="text" id="guess">
    <button id="submit">Submit</button>
    <p id="guesses"></p>
    <p id="message"></p>
  </main>
  <script>
    // Define the game data
    var words = ["apple", "banana", "cherry", "orange", "peach", "pear"];
    var selected_word = words[Math.floor(Math.random() * words.length)];
    var game_data = {
      "guesses": [],
      "progress": "_".repeat(selected_word.length)
    };
    var max_guesses = 6;
    var guesses_left = max_guesses;
    function updateDisplay() {
      document.getElementById("progress").innerHTML = game_data["progress"].split("").join(" ");
      document.getElementById("guesses").innerHTML = "Guesses: " + game_data["guesses"].join(", ");
    }
    function checkWin() {
      if (game_data["progress"] === selected_word) {
        document.getElementById("message").innerHTML = "Congratulations, you guessed the word!";
        document.getElementById("guess").disabled = true;
        document.getElementById("submit").disabled = true;
      }
    }
    function checkLose() {
      if (guesses_left === 0) {
        document.getElementById("message").innerHTML = "Sorry, you ran out of guesses. The word was " + selected_word + ".";
        document.getElementById("guess").disabled = true;
        document.getElementById("submit").disabled = true;
      }
    }
    function guessLetter() {
      var guess = document.getElementById("guess").value.toLowerCase();
      if (selected_word.includes(guess)) {
        for (var i = 0; i < selected_word.length; i++) {
          if (selected_word[i] === guess) {
            game_data["progress"] = game_data["progress"].substr(0, i) + guess + game_data["progress"].
