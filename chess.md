---
layout: default
---

<html>


<head>
<meta charset="UTF-8"> 
<title>Chessboard</title>

<link rel="stylesheet" href="assets/css/chess.css" type="text/css">
<style>
@import url('https://fonts.googleapis.com/css?family=Chakra+Petch');
html, body{
  height: 100%;
  min-height: 100%;
  margin: 0;
	background: black;
	font-family: 'Chakra Petch', sans-serif;
	color: #ffffff;
	padding: 15px;
	overflow-x: hidden;
	max-width: 100%;
}
</style>


</head>

<body id="body">
</body>
<script src="assets/js/chessLogic.js">
</script>
<script>
    let color = true;
    let moving = false;
    lettersOnBoard = "abcdefgh";
    let gameMoves = [];
    let localColor;
    var lastMove = ["move1", "move2"]
    var chessInterval
    const url = "https://tngc.nighthawkcodescrums.gq/api/server"
    // const url = "http://localhost:8069/api/server"
    // const url = "http://10.0.0.63:8087/api/server"
    const winnerUrl = 'https://tngc.nighthawkcodescrums.gq/api/chess_users'
    //useful functions
    openPage()
    function openPage(){
        // if (typeof localuid == "undefined"){
        //     var bad = document.createElement('p')
        //     bad.innerHTML = "Please Login before playing. If you are already logged in please double check that you are actually logged in or try logging in again. Reload the page when you have logged in."
        //     document.getElementById('body').appendChild(bad)
        //     return
        // }
        var container = document.createElement('div');
        var endgame = document.createElement('div');
        var uid = document.createElement('input');
        var joinGame = document.createElement('button');
        var startGame = document.createElement('button');
        var title = document.createElement('p');
        container.classList.add('container');
        container.id = "container";
        endgame.classList.add('endgame');
        endgame.id = "endgame";
        joinGame.classList.add('button');
        joinGame.id = "joinGame"
        joinGame.innerHTML = "Join Game";
        joinGame.onclick = function(){
            if(uidCheck()){joinGamePage()}; 
            gameMoves = []}
        startGame.classList.add('button');
        startGame.innerHTML = "Start Game";
        startGame.id = "startGame"
        startGame.onclick = function(){
            document.getElementById('chessTitle').remove();
            if(uidCheck()){createNewGame()}
            document.getElementById("container").remove();
            gameMoves = []}
        uid.classList.add('button')
        uid.id = "uid"
        uid.type = "text"
        uid.placeholder = "Username"
        uid.readOnly = true
        uid.value = localStorage.getItem("name")
        title.id = "chessTitle"
        title.classList.add('title')
        title.innerHTML = "Welcome to Chess"
        document.getElementById('body').appendChild(title)
        document.getElementById('body').appendChild(container)
        document.getElementById('container').appendChild(endgame)
        document.getElementById('endgame').appendChild(uid)
        document.getElementById('endgame').appendChild(joinGame)
        document.getElementById('endgame').appendChild(startGame)
    }
    function joinGamePage(){
        document.getElementById("startGame").remove();
        document.getElementById("joinGame").remove();
        var gid = document.createElement('input')
        var joinGame = document.createElement('button');
        gid.id = "gid"
        gid.type = "text"
        gid.classList.add('button')
        gid.placeholder = "Game Name"
        joinGame.classList.add('button');
            joinGame.id = "joinGame"
            joinGame.innerHTML = "Join Game";
            joinGame.onclick = function(){
                addSecondPlayer();}
        document.getElementById('endgame').appendChild(gid)
        document.getElementById('endgame').appendChild(joinGame)
    }
    function uidCheck(){
        if(document.getElementById("uid").value == ""){
            var bad = document.createElement('p')
            bad.innerHTML = "Please reload and enter a username"
            document.getElementById("container").remove()
            document.getElementById('body').appendChild(bad)
            document.getElementById('chessTitle').remove()
            return false;
        }
        else {
            localuid = document.getElementById("uid").value
            return true
        }
    }
    function globalIDs(gidTemp){
        gid = gidTemp
    }
    function checkMove(){
        let moveCheckOptions = {
            mode : 'cors',
            method : 'GET'
        }
        fetch(url + '/', moveCheckOptions)
        .then(response => {
            if (response.status !== 200) {
            console.log(errorMsg);
            return;
            }
            response.json().then(data => {
            data.forEach((c) => {
                if (c[[gid]] != undefined){
                    var newMoves = [c[[gid]]["move1"], c[[gid]]["move2"]]
                    if (lastMove[0] != newMoves[0] || lastMove[1] != newMoves[1]){
                        lastMove = newMoves
                        chessBoard[newMoves[0]][1].move(newMoves[1], newMoves[0])
                        putBoard()
                        turn++
                        kingCheck()
                    }
                }
            })
        })
        })
    }
    function kingCheck(){
        kingAlive = false
        for (let i = 1; i < 9; i++){
                for (j in lettersOnBoard){
                    var thisId = lettersOnBoard[j] + i;
                    if (chessBoard[thisId][0] == localColor + "K"){
                        kingAlive = true
                    }
                }
            }   
        if (!kingAlive){
                removeOptions = {
                    mode : 'cors',
                    method: 'POST',
                    body : gid
                }
                fetch(url + "/removeGame", removeOptions)
                .then(response => {
                    if (response.status !== 200){
                        console.log(errorMsg);
                    return;
                    }
                })
            if (localColor == "b"){
                endGame("w")
            }
            else if (localColor =="w"){
                endGame("b")
            }
        }
    }
    function pushMove(currentM, newM){
        let movePushOptions = {
            mode : 'cors',
            method: 'POST',
            body : JSON.stringify([gid, currentM, newM])
        }
        fetch(url + '/pushMove', movePushOptions)
        .then(response => {
            if (response.status !== 200) {
            console.log(errorMsg);
            return;
            }
        })
    }
    function pushWinner(winner){
        let moveCheckOptions = {
            mode : 'cors',
            method : 'GET'
        }
        fetch(url + '/', moveCheckOptions)
        .then(response => {
            if (response.status !== 200) {
            console.log(errorMsg);
            return;
            }
            response.json().then(data => {
            console.log(data)
            data.forEach((c) => {
                if (c[[gid]] != undefined){
                    console.log(c[gid])
                    postGame(winner, c[[gid]])
                }
            })
        })
        })
    }
    function postGame(winner, storedData){
        if (winner === 'w'){
            winner = storedData.uid1
        } else {
            winner = storedData.uid2
        }
        storedData.winner = winner
        var today = new Date()
        today = today.getTime()
        storedData.date = today
        delete storedData.move1
        delete storedData.move2
        console.log(storedData)
        storedData = JSON.stringify(storedData)
        storedData = JSON.parse(storedData)
        let movePushOptions = {
            mode : 'cors',
            method: 'POST',
            body : JSON.stringify(storedData)
        }
        fetch(winnerUrl + '/update_game', movePushOptions)
        .then(response => {
            if (response.status !== 200) {
            console.log(response);
            return;
            }
            console.log(response)
            response.json().then(data => {
                console.log(data)
            })
        })
    }
    function readGame(){
        var options = {
            mode : 'cors',
            method: 'GET'
        }
        fetch(url + "/", options)
        .then(response => {
        if (response.status !== 200) {
          console.log(errorMsg);
          return;
        }
        response.json().then(data => {
            console.log(data)
        })
    })
    }
    function addSecondPlayer(){
        gid = document.getElementById("gid").value
        localColor = "b"
        secondPlayerOptions ={
            mode : 'cors',
            method: 'POST',
            body: JSON.stringify([localuid, gid]),
        }
        fetch(url + "/secondPlayer", secondPlayerOptions)
        .then(response => {
            if (response.status !== 200) {
                console.log(errorMsg);
            return;
        }
        response.json().then(success => {
            if (success){
                document.getElementById('chessTitle').remove()
                document.getElementById("container").remove();
                gameMoves = []
                startGame()
            }else{
                document.getElementById('chessTitle').innerHTML = "Please use a valid game name.";
                document.getElementById('chessTitle').style.fontSize = 50
                document.getElementById('chessTitle').style.marginTop = "1.5%"
            }
        })
        })
        return;
    }
    function createNewGame(){
        gidOptions = {
            mode :'cors',
            method: 'GET',
        }
        fetch(url + "/createNewGid", gidOptions)
        .then(response => {
            if (response.status !== 200){
                console.log(errorMsg);
            return;
            }
        response.json().then(data => {
            globalIDs(data)
            localColor = "w"
            createGameOptions = {
                mode : 'cors',
                method: 'POST',
                body : JSON.stringify({[gid] : {'uid1' : localuid, 'uid2' : 1234, 'move1' : 'move1', 'move2' : 'move2'}})
            }
            fetch(url + "/start", createGameOptions)
            .then(response => {
                if (response.status !== 200) {
                    console.log(errorMsg);
                return;
                }
            })
            startGame()
        })
        })
    }
    function getKeyByValue(object, value, type) {
        if (type == 1){
            return Object.keys(object).find(key => object[key] === value);
        }
        if (type == 2){
            return Object.keys(object).find(key => object[0][key] === value);
        }
        else{
            return "";
        }
    }
    function setBoard(obj){
            chessBoard[obj.position] = [obj.color + obj.id, obj]
    }
    function movePiece(currentM, newM){
            chessBoard[currentM][1].move(newM, currentM)
            lastMove = [currentM, newM]
            pushMove(currentM, newM)
    }
    function putOnBoard(id) {
            document.getElementById(id + "i").src = chessPieces[chessBoard[id][0][0]+chessBoard[id][0][1]];
            document.getElementById(id).style.fontSize = "60px";
            try{document.getElementById(id).classList.remove('selected')}catch{}
            if (id.split("")[1] == "1") color = !color;
            if (color){document.getElementById(id).classList.add('dark');}
            else document.getElementById(id).classList.add('light');
            color = !color;
    }
    function putBoard(){
            for (x in chessBoard){
                putOnBoard(x);
            }
    }
    function startGame(){
        var gidDisplay = document.createElement('p')
        gidDisplay.id = "gidDisplay"
        gidDisplay.innerHTML = "Game ID: \"" + gid + "\""
        var chessBoardDiv = document.createElement('div')
        chessBoardDiv.id = "chessBoard"
        chessBoardDiv.classList.add('chessboard')
        document.getElementById("body").appendChild(chessBoardDiv)
        document.getElementById("body").appendChild(gidDisplay)
        if (localColor == "w"){
            for (let i = 1; i < 9; i++){
                for (j in lettersOnBoard){
                    var thisId = lettersOnBoard[j] + (9 - i);
                    var square = document.createElement('div')
                    square.id = thisId
                    document.getElementById("chessBoard").appendChild(square)
                }
            }  
        }
        else {
            for (let i = 1; i < 9; i++){
                for (j in lettersOnBoard){
                    var thisId = lettersOnBoard[j] + i;
                    var square = document.createElement('div')
                    square.id = thisId
                    document.getElementById("chessBoard").appendChild(square)
                }
            }  
        } 
        // all of the setup
        chessBoard = {};
        //assigns the board
        for (j = 0; j <= 7; j++){
            letter = lettersOnBoard[j];
            for (i = 1; i <= 8; i++){
                var newKey = letter + i;
                chessBoard[newKey] = ["OO", undefined]
            }
        }
        currentM = [];
        // assigns chess piece codes to their emoji 
        chessPieces = {
            wP: "../TGDKPD_reunion_fort_batman/images/white_pawn.png",
            wR: "../TGDKPD_reunion_fort_batman/images/white_rook.png",
            wN: "../TGDKPD_reunion_fort_batman/images/white_knight.png",
            wB: "../TGDKPD_reunion_fort_batman/images/white_bishop.png",
            wQ: "../TGDKPD_reunion_fort_batman/images/white_queen.png",
            wK: "../TGDKPD_reunion_fort_batman/images/white_king.png",
            OO: "",
            bP: "../TGDKPD_reunion_fort_batman/images/black_pawn.png",
            bR: "../TGDKPD_reunion_fort_batman/images/black_rook.png",
            bN: "../TGDKPD_reunion_fort_batman/images/black_knight.png",
            bB: "../TGDKPD_reunion_fort_batman/images/black_bishop.png",
            bQ: "../TGDKPD_reunion_fort_batman/images/black_queen.png",
            bK: "../TGDKPD_reunion_fort_batman/images/black_king.png",
        }
        //   chessPieces = {
        //     wP: "../images/white_pawn.png",
        //     wR: "../images/white_rook.png",
        //     wN: "../images/white_knight.png",
        //     wB: "../images/white_bishop.png",
        //     wQ: "../images/white_queen.png",
        //     wK: "../images/white_king.png",
        //     OO: "",
        //     bP: "../images/black_pawn.png",
        //     bR: "../images/black_rook.png",
        //     bN: "../images/black_knight.png",
        //     bB: "../images/black_bishop.png",
        //     bQ: "../images/black_queen.png",
        //     bK: "../images/black_king.png",
        // }
        endGameBool = false;
        //move counter
        turn = 0;
        //Queens
        queenw = new queen("d1", "w")
        setBoard(queenw)
        queenb = new queen("d8", "b")
        setBoard(queenb)
        //Bishops
        bishopb1 = new bishop("c8", "b");
        setBoard(bishopb1)
        bishopb2 = new bishop("f8", "b");
        setBoard(bishopb2)
        bishopw1 = new bishop("c1", "w");
        setBoard(bishopw1)
        let bishopw2 = new bishop("f1", "w");
        setBoard(bishopw2)
        //Rooks
        rookb1 = new rook("a8", "b");
        setBoard(rookb1)
        rookb2 = new rook("h8", "b");
        setBoard(rookb2)
        rookw1 = new rook("a1", "w");
        setBoard(rookw1)
        rookw2 = new rook("h1", "w");
        setBoard(rookw2)
        //Pawns
        pawnw1 = new pawn("a2", "w")
        setBoard(pawnw1)
        pawnw2 = new pawn("b2", "w")
        setBoard(pawnw2)
        pawnw3 = new pawn("c2", "w")
        setBoard(pawnw3)
        pawnw4 = new pawn("d2", "w")
        setBoard(pawnw4)
        pawnw5 = new pawn("e2", "w")
        setBoard(pawnw5)
        pawnw6 = new pawn("f2", "w")
        setBoard(pawnw6)
        pawnw7 = new pawn("g2", "w")
        setBoard(pawnw7)
        pawnw8 = new pawn("h2", "w")
        setBoard(pawnw8)
        pawnb1 = new pawn("a7", "b")
        setBoard(pawnb1)
        pawnb2 = new pawn("b7", "b")
        setBoard(pawnb2)
        pawnb3 = new pawn("c7", "b")
        setBoard(pawnb3)
        pawnb4 = new pawn("d7", "b")
        setBoard(pawnb4)
        pawnb5 = new pawn("e7", "b")
        setBoard(pawnb5)
        pawnb6 = new pawn("f7", "b")
        setBoard(pawnb6)
        pawnb7 = new pawn("g7", "b")
        setBoard(pawnb7)
        pawnb8 = new pawn("h7", "b")
        setBoard(pawnb8)
        kingw = new king ("e1", "w")
        setBoard(kingw)
        kingb = new king ("e8", "b")
        setBoard(kingb)
        knightw1 = new knight ("b1", "w")
        setBoard(knightw1)
        knightw2 = new knight ("g1", "w")
        setBoard(knightw2)
        knightb1 = new knight ("b8", "b")
        setBoard(knightb1)
        knightb2 = new knight ("g8", "b")
        setBoard(knightb2)
        //puts the pieces on the board
        for (let i = 1; i < 9; i++){
            for (j in lettersOnBoard){
                const x = document.createElement('img') 
                var thisId = lettersOnBoard[j] + i;
                x.id=(thisId + "i")
                if (chessPieces[chessBoard[thisId][0][0]+chessBoard[thisId][0][1]] != ""){
                    x.src=(chessPieces[chessBoard[thisId][0][0]+chessBoard[thisId][0][1]])
                }
                document.getElementById(thisId).appendChild(x)
                document.getElementById(thisId).onclick = function () {move(this);};
            }
        }
        putBoard()
        chessInterval = setInterval(() => {   try {checkMove()} catch {console.log('heheheha')}}, 2000)
        }
        // startGame()
        function move(div){
            var id = div.id
            if (!moving && div.children[0].src.slice(-1) =="g" && turnMoveCheck(chessBoard[id][0][0])){
                moving = true
                if (div.children[0].src.slice(-1) == "g"){
                    currentM.push(id);
                    var moves = chessBoard[id][1].getAvailableMoves();
                    moves.forEach((c) => {
                        document.getElementById(c).classList.replace('dark', 'selected');
                        document.getElementById(c).classList.replace('light', 'selected');
                    })
                } 
            }else if (div.className == "selected"){
                divId = div.id
                if (chessBoard[divId][0][1] == "K"){
                    endGameBool = true;
                }
                movePiece(currentM[0], divId)
                gameMoves.push({["move" + turn] : [currentM[0], divId]})
                putBoard();
                if (endGameBool){setTimeout(() => endGame(localColor), 0)}
                moving = false;
                turn += 1;
                currentM = [];
            }else{
                putBoard();
                currentM = [];
                moving = false;
                if (div.children[0].src.slice(-1) == "g" && turnMoveCheck(chessBoard[id][0][0])){
                    move(id);
                }
            }
        }
        function turnMoveCheck(color){
            if (turn % 2 == 1 && localColor == "b" && localColor == color){
                return true
            }
            if (turn % 2 == 0 && localColor == "w" && localColor == color){
                return true
            }
            else {
                return false;
            }
        }
        function endGame(color){
            for (let i = 1; i < 9; i++){
                for (j in lettersOnBoard){
                    var thisId = lettersOnBoard[j] + i;
                    document.getElementById(thisId).remove()
                }
            }   
            document.getElementById("chessBoard").remove();
            var container = document.createElement('div');
            var endgame = document.createElement('div');
            var winlose = document.createElement('p');
            var startGame = document.createElement('button');
            container.classList.add('container');
            container.id = "container";
            winlose.classList.add('winLose');
            if (color == localColor){
                winlose.innerHTML = "You Win!"
            }
            else {
                winlose.innerHTML = "You Lose!"
            }
            endgame.classList.add('endgame');
            endgame.id = "endgame";
            startGame.classList.add('button');
            startGame.innerHTML = "Play Again?";
            startGame.id = "startGame"
            startGame.onclick = function(){
                document.getElementById("container").remove();
                openPage();
                gameMoves = []}
            document.getElementById('body').appendChild(container)
            document.getElementById('container').appendChild(endgame)
            document.getElementById('endgame').appendChild(winlose)
            document.getElementById('endgame').appendChild(startGame)
            document.getElementById('gidDisplay').remove();
            clearInterval(chessInterval)
            pushWinner(color)
            }   
</script>
<script>
</script>
</html>

