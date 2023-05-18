//all of the classes to be later extended used
class piece{
    constructor(_position, _color){
        this.position = _position;
        this.color = _color
    }
    move(move, currentM, castling){
        let castleBool = castling || 0
        let currentBoard = chessBoard[currentM];
        if(this.getAvailableMoves().includes(move)) {
            this.position = move;
            chessBoard[move] = currentBoard;
            chessBoard[currentM] = ["OO", undefined];
        }
        else if (castleBool == 1){
            this.position = move;
            chessBoard[move] = currentBoard;
            chessBoard[currentM] = ["OO", undefined];
        }
    }
    getAvailableMoves(){
        let freeMoves = this.getFreeMoves()
        let captures = this.getAvailableCaptures()
        captures.forEach((c) => {
            freeMoves.push(c);
        })
        return freeMoves;
    }
}
class queen extends piece{
    constructor(_position, _color){
        // super is the position constructor, uh basically does some super cool inheritence stuff or something. 
        super(_position, _color);
        // automatically sets the spot on the board which is passed in to this rook
        this.id = "Q";
        }   
    //method to return all of the available moves that the piece can make. 
    getTotalMovesR(){
        let currentPosition = this.position.split("");
        let moves = [];
        for (var i = 1; i <= 8; i++){
            var newMove = currentPosition[0] + i;
            moves[i - 1] = newMove;
        }
        for (var i = 1; i <= 8; i++){
            var newMove = lettersOnBoard[i - 1] + currentPosition[1];
            moves.push(newMove);
        }
        let totalMoves = [];
        moves.forEach((c) => {
            if (c != this.position){
                totalMoves.push(c);
            }
        });
        return totalMoves;
    }
    //method to return all of the obstructed moves based on the total moves
    getObstructedMovesR(){
        let totalMoves = this.getTotalMovesR();
        let obstructedMoves = [];
        let blockedMoves = [];
        let index = -1
        totalMoves.forEach((c) => {
            if (!obstructedMoves.includes(c)){
                if (chessBoard[c][0] != "OO"){
                    obstructedMoves.push(c);
                    index++
                    totalMoves.forEach((c) => {
                        try{
                            if (obstructedMoves[index][1] > this.position[1] && c[1] > obstructedMoves[index][1]){
                                blockedMoves.push(c)
                            }
                            else if (obstructedMoves[index][1] < this.position[1] && c[1] < obstructedMoves[index][1]){
                                blockedMoves.push(c)
                            }
                        } catch{}
                        try{
                            if (lettersOnBoard.indexOf(obstructedMoves[index][0]) > lettersOnBoard.indexOf(this.position[0]) && lettersOnBoard.indexOf(c[0]) > lettersOnBoard.indexOf(obstructedMoves[index][0])){
                                blockedMoves.push(c)
                            }
                            if (lettersOnBoard.indexOf(obstructedMoves[index][0]) < lettersOnBoard.indexOf(this.position[0]) && lettersOnBoard.indexOf(c[0]) < lettersOnBoard.indexOf(obstructedMoves[index][0])){
                                blockedMoves.push(c)
                            }
                        } catch{}
                    })
                } 
            }
        })
        blockedMoves.forEach((c) => {obstructedMoves.push(c);})
        return obstructedMoves;
    }
    //method to return all of the moves which are not obstructed
    getFreeMovesR(){
        let totalMoves = this.getTotalMovesR();
        let obstructedMoves = this.getObstructedMovesR();
        totalMoves = totalMoves.filter( (c) => !obstructedMoves.includes(c) );
        return totalMoves;
    }
    //method to return the pieces which can be captured. 
    getAvailableCapturesR(){
        // defines new variables as other methods in this class which may be useful.
        let totalMoves = this.getTotalMovesR();
        let obstructedMoves = this.getObstructedMovesR();
        // defines arrays
        let sameRow = [];
        let sameColumn = [];
        let columnNums = [];
        let columnDifs = [];
        let negDifsColumn = [];
        let posDifsColumn = [];
        let rowLets = [];
        let rowNums = [];
        let rowDifs = [];
        let posDifsRow = [];
        let negDifsRow = [];
        let captures = [];
        let finalCaptures = [];
        // finds all of the moves which are in the same row or in the same column as the rook.
        obstructedMoves.forEach((c) => {
            if (this.position.split("")[0] == c.split("")[0]){
                sameColumn.push(c);
            }
            else if (this.position.split("")[1] == c.split("")[1]){
                sameRow.push(c);
            }
        })
        //adds to a new array all of the numbers in the obstructed columns. Also converts it to an Integer
        sameColumn.forEach((c) => {
            columnNums.push(parseInt(c.split("")[1]));
        })        
        //elipses is a spread function, basically inputs each value in the array as it's own parameter. 
        //this foreach finds the difference between the pieces in the same column and the rooks current position
        columnNums.forEach((c) => {
            columnDifs.push(c - parseInt(this.position.split("")[1]))
        });
        //this foreach defines two new
        columnDifs.forEach((c) => {
            if (c < 0) negDifsColumn.push(Math.abs(c)); else posDifsColumn.push(c);
        })
        // finds the minimum positive number and the minimum negative number and converts them to an integer
        var posMinColumn = parseInt(Math.min(...posDifsColumn));
        var negMinColumn = parseInt(Math.min(...negDifsColumn));
        // works backwards to find the position on the board given the smallest differences 
        sameColumn.forEach((c) => {
            if (parseInt(c.split("")[1]) == parseInt(this.position.split("")[1]) + posMinColumn || parseInt(c.split("")[1]) == parseInt(this.position.split("")[1]) - negMinColumn){
                captures.push(c)
            }
        })
        // basically does all of the same stuff but for the rows using the index of the lettersOnBoard array
        sameRow.forEach((c) => {
            rowLets.push(c.split("")[0]);
        })
        rowLets.forEach((c) => {
            rowNums.push(lettersOnBoard.indexOf(c) + 1)
        })
        rowNums.forEach((c) => {
            rowDifs.push(parseInt(c) - (lettersOnBoard.indexOf(this.position.split("")[0]) + 1))
        })
        rowDifs.forEach((c) => {
            if (c < 0) negDifsRow.push(Math.abs(c)); else posDifsRow.push(c);
        })
        var posMinRow = parseInt(Math.min(...posDifsRow));
        var negMinRow = parseInt(Math.min(...negDifsRow))
        sameRow.forEach((c) => {
            if ((lettersOnBoard.indexOf(c.split("")[0]) + 1) == (lettersOnBoard.indexOf(this.position.split("")[0]) + posMinRow + 1) || (lettersOnBoard.indexOf(c.split("")[0]) + 1) == (lettersOnBoard.indexOf(this.position.split("")[0]) - negMinRow + 1)){
                captures.push(c)
            }
        })
        //checks if captures are the same color or not
        captures.forEach((c) => {
            if (chessBoard[c][0].split("")[0] != this.color){
                finalCaptures.push(c);
            }
        })
        return finalCaptures
    }
    getTotalMovesB(){
        let currentPosition = this.position;
        let movesLToR = [];
        let movesRToL = [];
        let furthestLeft = currentPosition;
        let furthestRight = currentPosition;
        let bruh = 0;
        while (furthestLeft[0] != "a" && furthestLeft[1] != 1){
            furthestLeft = lettersOnBoard[lettersOnBoard.indexOf(furthestLeft[0]) - 1] + (furthestLeft[1] - 1);
        }
        while (furthestRight[0] != "h" && furthestRight[1] != 1){
            furthestRight = lettersOnBoard[lettersOnBoard.indexOf(furthestRight[0]) + 1] + (furthestRight[1] - 1);
        }
        for (i = 0; i < 8 - lettersOnBoard.indexOf(furthestLeft[0]) - furthestLeft[1] + 1; i++){
            movesLToR.push(lettersOnBoard[lettersOnBoard.indexOf(furthestLeft[0]) + i] + (parseInt(furthestLeft[1]) + i));
        }
        for (i = 0; i < 2 + lettersOnBoard.indexOf(furthestRight[0]) - furthestRight[1]; i++){
            movesRToL.push(lettersOnBoard[lettersOnBoard.indexOf(furthestRight[0]) - i] + (parseInt(furthestRight[1]) + i));
        }
        let totalMovesLToR = [];
        let totalMovesRToL = []
        movesLToR.forEach((c) => {
            if (c != this.position){
                totalMovesLToR.push(c);
            }
        });
        movesRToL.forEach((c) => {
            if (c != this.position){
                totalMovesRToL.push(c);
            }
        });
        return [totalMovesLToR, totalMovesRToL];
    }
    //method to return all of the obstructed moves based on the total moves
    getObstructedMovesB(){
        let totalMoves = this.getTotalMovesB();
        let obstructedMovesLToR = [];
        let obstructedMovesRToL = [];
        let blockedMovesLToR = [];
        let blockedMovesRToL = [];
        let index = -1
        // Finds the moves which are behind an obstructed move and also finds all of the obstructed moves. Only for left to right. Does it by compating whether the letter + number is higher or lower. 
        totalMoves[0].forEach((c) => {
            if (!blockedMovesLToR.includes(c)){
                if (chessBoard[c][0] != "OO"){
                    obstructedMovesLToR.push(c);
                    index++
                    totalMoves[0].forEach((c) => {
                        try{
                            if (parseInt(obstructedMovesLToR[index][1]) + lettersOnBoard.indexOf(obstructedMovesLToR[index][0]) > parseInt(this.position[1]) + lettersOnBoard.indexOf(obstructedMovesLToR[index][0]) && parseInt(c[1]) + lettersOnBoard.indexOf(c[0]) > parseInt(obstructedMovesLToR[index][1]) + lettersOnBoard.indexOf(obstructedMovesLToR[index][0])){
                                blockedMovesLToR.push(c)
                            }
                            else if (obstructedMovesLToR[index][1] + lettersOnBoard.indexOf(obstructedMovesLToR[index][0]) < this.position[1] + lettersOnBoard.indexOf(obstructedMovesLToR[index][0]) && c[1] + lettersOnBoard.indexOf(c[0]) < obstructedMovesLToR[index][1] + lettersOnBoard.indexOf(obstructedMovesLToR[index][0])){
                                blockedMovesLToR.push(c)
                            }
                        } catch{}
                    })
                } 
            }
        })
        index = -1
        // Finds the moves which are behind an obstructed move and also finds all of the obstructed moves. Only for right to left. Does it by finding whether the number is bigger or smaller (realized I was being dumb before but i'm not changing the old code. Because it's only one diaganol though you can easily find if its blocked just by the number.)
        totalMoves[1].forEach((c) => {
            if (!blockedMovesRToL.includes(c)){
                if (chessBoard[c][0] != "OO"){
                    obstructedMovesRToL.push(c);
                    index++
                    totalMoves[1].forEach((c) => {
                        try{
                            if (parseInt(c[1]) > parseInt(obstructedMovesRToL[index][1]) && parseInt(obstructedMovesRToL[index][1]) > parseInt(this.position[1])){
                                blockedMovesRToL.push(c)
                            }
                            else if (parseInt(c[1]) < parseInt(obstructedMovesRToL[index][1]) && parseInt(obstructedMovesRToL[index][1]) < parseInt(this.position[1])){
                                blockedMovesRToL.push(c)
                            }
                        } catch{}
                    })
                } 
            }
        })
        //seperates the obstructed moves and the blocked moves and returns both. 
        let obstructedMoves = [];
        obstructedMovesLToR.forEach((c) => [obstructedMoves.push(c)])
        obstructedMovesRToL.forEach((c) => [obstructedMoves.push(c)])
        let blockedMoves = [];
        blockedMovesLToR.forEach((c) => {blockedMoves.push(c);})
        blockedMovesRToL.forEach((c) => {blockedMoves.push(c);})
        obstructedMoves = obstructedMoves.filter((c) => !blockedMoves.includes(c))
        return [obstructedMoves, blockedMoves];
    }
    //method to return all of the moves which are not obstructed
    getFreeMovesB(){
        let totalMoves = this.getTotalMovesB()[0];
        this.getTotalMovesB()[1].forEach((c) => {totalMoves.push(c)})
        let obstructedMoves = this.getObstructedMovesB()[0];
        this.getObstructedMovesB()[1].forEach((c) => {obstructedMoves.push(c)})
        totalMoves = totalMoves.filter((c) => !obstructedMoves.includes(c) );
        return totalMoves;
    }
    //method to return the pieces which can be captured. 
    getAvailableCapturesB(){
        let finalCaptures = [];
        let obstructedMoves = this.getObstructedMovesB()[0]
        obstructedMoves.forEach((c) => {
            if (chessBoard[c][0][0] != this.color) {finalCaptures.push(c)}
        })
        return finalCaptures
    }
    getFreeMoves(){
        let getFreeMovesB = this.getFreeMovesB()
        let getFreeMovesR = this.getFreeMovesR()
        let freeMoves = [];
        getFreeMovesB.forEach((c) => freeMoves.push(c))
        getFreeMovesR.forEach((c) => freeMoves.push(c))
        return freeMoves
    }
    getAvailableCaptures(){
        let getAvailableCapturesB = this.getAvailableCapturesB()
        let getAvailableCapturesR = this.getAvailableCapturesR()
        let captures = [];
        getAvailableCapturesB.forEach((c) => captures.push(c))
        getAvailableCapturesR.forEach((c) => captures.push(c))
        return captures
    }
}
class rook extends piece{
    constructor(_position, _color){
        // super is the position constructor, uh basically does some super cool inheritence stuff or something. 
        super(_position, _color);
        // automatically sets the spot on the board which is passed in to this rook
        this.id = "R"
        this.hasMoved = 0;
        }   
    move(move, currentM, castling){
        super.move(move, currentM, castling)
        this.hasMoved = 1
    }
    //method to return all of the available moves that the piece can make. 
    getTotalMoves(){
        let currentPosition = this.position.split("");
        let moves = [];
        for (var i = 1; i <= 8; i++){
            var newMove = currentPosition[0] + i;
            moves[i - 1] = newMove;
        }
        for (var i = 1; i <= 8; i++){
            var newMove = lettersOnBoard[i - 1] + currentPosition[1];
            moves.push(newMove);
        }
        let totalMoves = [];
        moves.forEach((c) => {
            if (c != this.position){
                totalMoves.push(c);
            }
        });
        return totalMoves;
    }
    //method to return all of the obstructed moves based on the total moves
    getObstructedMoves(){
        let totalMoves = this.getTotalMoves();
        let obstructedMoves = [];
        let blockedMoves = [];
        let index = -1
        totalMoves.forEach((c) => {
            if (!obstructedMoves.includes(c)){
                if (chessBoard[c][0] != "OO"){
                    obstructedMoves.push(c);
                    index++
                    totalMoves.forEach((c) => {
                        try{
                            if (obstructedMoves[index][1] > this.position[1] && c[1] > obstructedMoves[index][1]){
                                blockedMoves.push(c)
                            }
                            else if (obstructedMoves[index][1] < this.position[1] && c[1] < obstructedMoves[index][1]){
                                blockedMoves.push(c)
                            }
                        } catch{}
                        try{
                            if (lettersOnBoard.indexOf(obstructedMoves[index][0]) > lettersOnBoard.indexOf(this.position[0]) && lettersOnBoard.indexOf(c[0]) > lettersOnBoard.indexOf(obstructedMoves[index][0])){
                                blockedMoves.push(c)
                            }
                            if (lettersOnBoard.indexOf(obstructedMoves[index][0]) < lettersOnBoard.indexOf(this.position[0]) && lettersOnBoard.indexOf(c[0]) < lettersOnBoard.indexOf(obstructedMoves[index][0])){
                                blockedMoves.push(c)
                            }
                        } catch{}
                    })
                } 
            }
        })
        blockedMoves.forEach((c) => {obstructedMoves.push(c);})
        return obstructedMoves;
    }
    //method to return all of the moves which are not obstructed
    getFreeMoves(){
        let totalMoves = this.getTotalMoves();
        let obstructedMoves = this.getObstructedMoves();
        totalMoves = totalMoves.filter( (c) => !obstructedMoves.includes(c) );
        return totalMoves;
    }
    //method to return the pieces which can be captured. 
    getAvailableCaptures(){
        // defines new variables as other methods in this class which may be useful.
        let totalMoves = this.getTotalMoves();
        let obstructedMoves = this.getObstructedMoves();
        // defines arrays
        let sameRow = [];
        let sameColumn = [];
        let columnNums = [];
        let columnDifs = [];
        let negDifsColumn = [];
        let posDifsColumn = [];
        let rowLets = [];
        let rowNums = [];
        let rowDifs = [];
        let posDifsRow = [];
        let negDifsRow = [];
        let captures = [];
        let finalCaptures = [];
        // finds all of the moves which are in the same row or in the same column as the rook.
        obstructedMoves.forEach((c) => {
            if (this.position.split("")[0] == c.split("")[0]){
                sameColumn.push(c);
            }
            else if (this.position.split("")[1] == c.split("")[1]){
                sameRow.push(c);
            }
        })
        //adds to a new array all of the numbers in the obstructed columns. Also converts it to an Integer
        sameColumn.forEach((c) => {
            columnNums.push(parseInt(c.split("")[1]));
        })        
        //elipses is a spread function, basically inputs each value in the array as it's own parameter. 
        //this foreach finds the difference between the pieces in the same column and the rooks current position
        columnNums.forEach((c) => {
            columnDifs.push(c - parseInt(this.position.split("")[1]))
        });
        //this foreach defines two new
        columnDifs.forEach((c) => {
            if (c < 0) negDifsColumn.push(Math.abs(c)); else posDifsColumn.push(c);
        })
        // finds the minimum positive number and the minimum negative number and converts them to an integer
        var posMinColumn = parseInt(Math.min(...posDifsColumn));
        var negMinColumn = parseInt(Math.min(...negDifsColumn));
        // works backwards to find the position on the board given the smallest differences 
        sameColumn.forEach((c) => {
            if (parseInt(c.split("")[1]) == parseInt(this.position.split("")[1]) + posMinColumn || parseInt(c.split("")[1]) == parseInt(this.position.split("")[1]) - negMinColumn){
                captures.push(c)
            }
        })
        // basically does all of the same stuff but for the rows using the index of the lettersOnBoard array
        sameRow.forEach((c) => {
            rowLets.push(c.split("")[0]);
        })
        rowLets.forEach((c) => {
            rowNums.push(lettersOnBoard.indexOf(c) + 1)
        })
        rowNums.forEach((c) => { 
            rowDifs.push(parseInt(c) - (lettersOnBoard.indexOf(this.position.split("")[0]) + 1))
        })
        rowDifs.forEach((c) => {
            if (c < 0) negDifsRow.push(Math.abs(c)); else posDifsRow.push(c);
        })
        var posMinRow = parseInt(Math.min(...posDifsRow));
        var negMinRow = parseInt(Math.min(...negDifsRow))
        sameRow.forEach((c) => {
            if ((lettersOnBoard.indexOf(c.split("")[0]) + 1) == (lettersOnBoard.indexOf(this.position.split("")[0]) + posMinRow + 1) || (lettersOnBoard.indexOf(c.split("")[0]) + 1) == (lettersOnBoard.indexOf(this.position.split("")[0]) - negMinRow + 1)){
                captures.push(c)
            }
        })
        //checks if captures are the same color or not
        captures.forEach((c) => {
            if (chessBoard[c][0][0].split("")[0] != this.color){
                finalCaptures.push(c);
            }
        })
        return finalCaptures
    }
}
class knight extends piece{
    constructor(_position, _color){
        super(_position, _color);
        this.id = "N";
        }
    //method to return all of the available moves that the piece can make. 
    getTotalMoves(){
        let currentPosition = this.position.split("");
        let moves = [];
        let aboveNum2 = parseInt(currentPosition[1]) + 2
        let currentLetNum = lettersOnBoard.indexOf(currentPosition[0])  
        for (var i = -1; i <= 1; i++){
            if (currentLetNum + i != -1 && currentLetNum + i != 8 && aboveNum2 != 9 && aboveNum2 != 10 && aboveNum2 != 11){
                if (currentLetNum + i > -1 && currentLetNum + i < 8 && i != 0){
                    moves.push(lettersOnBoard[currentLetNum + i] + aboveNum2);
            }
        }
        }
        let aboveNum1 = parseInt(currentPosition[1]) + 1
        for (var i = -2; i <= 2; i++){
            if (currentLetNum + i != -2 && currentLetNum + i != 8 && aboveNum1 != 9){
                if (currentLetNum + i != -2 && currentLetNum + i != -1 && currentLetNum + i != 8 && currentLetNum + i != 9 && aboveNum1 != 0 && i != 0 && i != 1 && i != -1){
                    moves.push(lettersOnBoard[currentLetNum + i] + aboveNum1);
            }    
            }
        }
        let belowNum1 = parseInt(currentPosition[1]) -1
        for (var i = -2; i <= 2; i++){
            if (currentLetNum + i != -2 && currentLetNum + i != 8 && belowNum1 != 0 && belowNum1 !=-1){
                if (currentLetNum + i != -2 && currentLetNum + i != -1 && currentLetNum + i != 8 && currentLetNum + i != 9 && aboveNum1 != 0 && i != 0 && i != 1 && i != -1){
                    moves.push(lettersOnBoard[currentLetNum + i] + belowNum1);
            }
            }
        }
        let belowNum2 = parseInt(currentPosition[1]) - 2
        for (var i = -1; i <= 1; i++){
            if (currentLetNum + i != -1 && currentLetNum + i != 8 && belowNum2 != 0 && belowNum2 !=-1){
                if (currentLetNum + i > -1 && currentLetNum + i < 8 && i != 0){
                moves.push(lettersOnBoard[currentLetNum + i] + belowNum2);
            }
            }
        }
        return moves;
    }
    //method to return all of the obstructed moves based on the total moves
    getObstructedMoves(){
        let totalMoves = this.getTotalMoves();
        let obstructedMoves = [];
        totalMoves.forEach((c) => {
            if (chessBoard[c][0] != "OO"){
                obstructedMoves.push(c);
            }
        })
        return obstructedMoves;
    }
    //method to return all of the moves which are not obstructed
    getFreeMoves(){
        let totalMoves = this.getTotalMoves();
        let obstructedMoves = this.getObstructedMoves();
        let freeMoves = totalMoves.filter( (c) => !obstructedMoves.includes(c) );
        return freeMoves;
    }
    getAvailableCaptures(){
        let finalCaptures =[]
        this.getObstructedMoves().forEach((c) => {
            if (chessBoard[c][0][0] != this.color){
                finalCaptures.push(c);
            }
        })
        return finalCaptures
    }
}
class pawn extends piece{
    constructor(_position, _color){
        // super is the position constructor, uh basically does some super cool inheritence stuff or something. 
        super(_position, _color);
        // automatically sets the spot on the board which is passed in to this pawn using the parent method
        if (_color == "w"){this.direction = 1}
        else if (_color == "b") {this.direction = -1}
        this.hasMoved = 0;
        this.id = "P";
        this.doubleMoved = 0
        this.lastMovedOn = 0
    }
    getAvailableMoves(){
        let availableMoves = super.getAvailableMoves();
        let enPassants = this.getEnPassant()
        if (enPassants){
            enPassants.forEach((c) => availableMoves.push(c));
        }
        return availableMoves;
    }
    move(move, currentM){
        this.doubleMoved = 0
        let currentBoard = chessBoard[currentM];
        let enPassants = this.getEnPassant() || [];
        if(this.getAvailableMoves().includes(move)) {
            this.position = move;
            chessBoard[move] = currentBoard;
            chessBoard[currentM] = ["OO", undefined];
        }
        if (enPassants.includes(move)){
            chessBoard[move[0] + (parseInt(move[1]) - 1 * this.direction)] =  ["OO", undefined];
        }
        if (Math.abs(move[1]-currentM[1]) == 2){
            this.doubleMoved = 1
        }
        this.hasMoved = 1
        this.lastMovedOn = parseInt(turn) - 1
    }
    getTotalMoves(){
        let moves = [];
        let currentPosition = this.position.split("");
        if(this.hasMoved == 0){
            moves.push(currentPosition[0] + (parseInt(currentPosition[1]) + (1 * this.direction)))
            moves.push(currentPosition[0] + (parseInt(currentPosition[1]) + (2 * this.direction)))
        }
        else{
            moves.push(currentPosition[0] + (parseInt(currentPosition[1]) + (1 * this.direction)))
        }
        return moves;
    }
    getFreeMoves(){
        let moves = this.getTotalMoves();
        let freeMoves = [];
        if (chessBoard[moves[0]][0] == "OO"){
            freeMoves.push(moves[0]);
            try{
                if (chessBoard[moves[1]][0] == "OO"){freeMoves.push(moves[1]);}
            }catch{}
        }
        return freeMoves;
    } 
    getEnPassant(){
        let currentPosition = this.position
        let enPassants = [];
        let possibleEnPassants = [
            lettersOnBoard[lettersOnBoard.indexOf(currentPosition[0]) - 1] + this.position[1],
            lettersOnBoard[lettersOnBoard.indexOf(currentPosition[0]) + 1] + this.position[1]
        ];
        possibleEnPassants.forEach((c) => {
            if (chessBoard[c] != undefined && chessBoard[c][0][1] == "P"){
                if (chessBoard[c][1].doubleMoved == 1 && chessBoard[c][1].lastMovedOn == turn - 2){
                    enPassants.push(c[0] + (parseInt(c[1]) + 1 * this.direction));
                }
            }
        })
        return enPassants;
    }
    getAvailableCaptures(){
        let captures = [];
        let currentPosition = this.position.split(""); 
        let possibleLets = [
            lettersOnBoard[lettersOnBoard.indexOf(currentPosition[0]) - 1],
            lettersOnBoard[lettersOnBoard.indexOf(currentPosition[0]) + 1]
        ];
        possibleLets = possibleLets.filter(c => c != undefined);
        possibleLets.forEach((c) => {
            let a = parseInt(currentPosition[1]) + (1 * this.direction)
            let check = c + a
            if (chessBoard[check][0][0] != this.color && chessBoard[check][0] != "OO"){
                    captures.push(check);
            }
        })
        return captures;
    }
    get promotion(){
        let position 
    }
}
class king extends piece{
    constructor(_position, _color){
        super(_position, _color);
        this.id = "K";
        this.hasMoved = 0;
        }
    move(move, currentM){
        super.move(move, currentM)
        let num = this.position[1];
        if (this.hasMoved == 0){
            if (move == "c" + num && chessBoard["a" + num][1].hasMoved == 0){
                chessBoard["a" + num][1].move("d" + num, "a" + num, 1)
            }
            if (move == "g" + num && chessBoard["h" + num][1].hasMoved == 0){
                chessBoard["h" + num][1].move("f" + num, "h" + num, 1)
            }
        }
        this.hasMoved = 1
    }
    //method to return all of the available moves that the piece can make. 
    getTotalMoves(){
        let currentPosition = this.position.split("");
        let moves = [];
        let aboveNum = parseInt(currentPosition[1]) + 1
        let currentLetNum = lettersOnBoard.indexOf(currentPosition[0])  
        for (var i = -1; i <= 1; i++){
            if (currentLetNum + i != -1 && currentLetNum + i != 7 && aboveNum != 9){
                moves.push(lettersOnBoard[currentLetNum + i] + aboveNum);
            }
        }
        let belowNum = parseInt(currentPosition[1]) - 1
        for (var i = -1; i <= 1; i++){
            if (currentLetNum + i != -1 && currentLetNum + i != 7 && belowNum != 0){
                moves.push(lettersOnBoard[currentLetNum + i] + belowNum);
            }    
        }
        let sameNum = parseInt(currentPosition[1])
        for (var i = -1; i <= 1;i++){
            if (i != 0 && currentLetNum + i != -1 && currentLetNum + i != 7){
                moves.push(lettersOnBoard[currentLetNum + i] + sameNum);
            }
        }
        this.getCastle().forEach((c) => {
            moves.push(c)
        })
        return moves;
    }
    //method to return all of the obstructed moves based on the total moves
    getObstructedMoves(){
        let totalMoves = this.getTotalMoves();
        let obstructedMoves = [];
        totalMoves.forEach((c) => {
            if (chessBoard[c][0] != "OO"){
                obstructedMoves.push(c);
            }
        })
        return obstructedMoves;
    }
    //method to return all of the moves which are not obstructed
    getFreeMoves(){
        let totalMoves = this.getTotalMoves();
        let obstructedMoves = this.getObstructedMoves();
        totalMoves = totalMoves.filter( (c) => !obstructedMoves.includes(c) );
        return totalMoves;
    }
    getAvailableCaptures(){
        let captures = [];
        let currentPosition = this.position.split(""); 
        let possibleLets = [
            lettersOnBoard[lettersOnBoard.indexOf(currentPosition[0]) - 1],
            lettersOnBoard[lettersOnBoard.indexOf(currentPosition[0]) + 1],
            lettersOnBoard[lettersOnBoard.indexOf(currentPosition[0])]
        ];
        possibleLets = possibleLets.filter(c => c != undefined);
        possibleLets.forEach((c) => {
            let a = parseInt(currentPosition[1]) + (1);
                if (a != 9){
                    let check = c + a
                    if (chessBoard[check][0][0] != this.color && chessBoard[check][0] != "OO"){
                        captures.push(check);
                }
            }
            let b = parseInt(currentPosition[1]) - (1)
                if (b != 0){
                    let check1 = c + b
                    if (chessBoard[check1][0][0] != this.color && chessBoard[check1][0] != "OO"){
                        captures.push(check1);
                }
            }
            let d = parseInt(currentPosition[1])
            let check2 = c + d
            if (chessBoard[check2][0][0] != this.color && chessBoard[check2][0] != "OO"){
                captures.push(check2);
            }
        })
        return captures;
    }
    getCastle(){
        let currentPosition = this.position;
        let moves = []
        if (this.hasMoved == 0 && chessBoard["b" + this.position[1]][0] == "OO" && chessBoard["d" + this.position[1]][0] == "OO" && chessBoard["c" + this.position[1]][0] == "OO" && chessBoard["a" + this.position[1]][0] == this.color + "R" && chessBoard["a" + this.position[1]][1].hasMoved == 0){
            moves.push("c" + this.position[1])
        }
        if (this.hasMoved == 0 && chessBoard["f" + this.position[1]][0] == "OO" && chessBoard["g" + this.position[1]][0] == "OO" && chessBoard["h" + this.position[1]][0] == this.color + "R" && chessBoard["h" + this.position[1]][1].hasMoved == 0){
            moves.push("g" + this.position[1])
        }
        return moves;
    }
}
class bishop extends piece{
    constructor(_position, _color){
        // super is the position constructor, uh basically does some super cool inheritence stuff or something. 
        super(_position, _color);
        // automatically sets the spot on the board which is passed in to this rook
        this.id = "B"
        }   
    //method to return all of the available moves that the piece can make. 
    getTotalMoves(){
        let currentPosition = this.position;
        let movesLToR = [];
        let movesRToL = [];
        let furthestLeft = currentPosition;
        let furthestRight = currentPosition;
        let bruh = 0;
        while (furthestLeft[0] != "a" && furthestLeft[1] != 1){
            furthestLeft = lettersOnBoard[lettersOnBoard.indexOf(furthestLeft[0]) - 1] + (furthestLeft[1] - 1);
        }
        while (furthestRight[0] != "h" && furthestRight[1] != 1){
            furthestRight = lettersOnBoard[lettersOnBoard.indexOf(furthestRight[0]) + 1] + (furthestRight[1] - 1);
        }
        for (i = 0; i < 8 - lettersOnBoard.indexOf(furthestLeft[0]) - furthestLeft[1] + 1; i++){
            movesLToR.push(lettersOnBoard[lettersOnBoard.indexOf(furthestLeft[0]) + i] + (parseInt(furthestLeft[1]) + i));
        }
        for (i = 0; i < 2 + lettersOnBoard.indexOf(furthestRight[0]) - furthestRight[1]; i++){
            movesRToL.push(lettersOnBoard[lettersOnBoard.indexOf(furthestRight[0]) - i] + (parseInt(furthestRight[1]) + i));
        }
        let totalMovesLToR = [];
        let totalMovesRToL = []
        movesLToR.forEach((c) => {
            if (c != this.position){
                totalMovesLToR.push(c);
            }
        });
        movesRToL.forEach((c) => {
            if (c != this.position){
                totalMovesRToL.push(c);
            }
        });
        return [totalMovesLToR, totalMovesRToL];
    }
    //method to return all of the obstructed moves based on the total moves
    getObstructedMoves(){
        let totalMoves = this.getTotalMoves();
        let obstructedMovesLToR = [];
        let obstructedMovesRToL = [];
        let blockedMovesLToR = [];
        let blockedMovesRToL = [];
        let index = -1
        // Finds the moves which are behind an obstructed move and also finds all of the obstructed moves. Only for left to right. Does it by compating whether the letter + number is higher or lower. 
        totalMoves[0].forEach((c) => {
            if (!blockedMovesLToR.includes(c)){
                if (chessBoard[c][0] != "OO"){
                    obstructedMovesLToR.push(c);
                    index++
                    totalMoves[0].forEach((c) => {
                        try{
                            if (parseInt(obstructedMovesLToR[index][1]) + lettersOnBoard.indexOf(obstructedMovesLToR[index][0]) > parseInt(this.position[1]) + lettersOnBoard.indexOf(obstructedMovesLToR[index][0]) && parseInt(c[1]) + lettersOnBoard.indexOf(c[0]) > parseInt(obstructedMovesLToR[index][1]) + lettersOnBoard.indexOf(obstructedMovesLToR[index][0])){
                                blockedMovesLToR.push(c)
                            }
                            else if (obstructedMovesLToR[index][1] + lettersOnBoard.indexOf(obstructedMovesLToR[index][0]) < this.position[1] + lettersOnBoard.indexOf(obstructedMovesLToR[index][0]) && c[1] + lettersOnBoard.indexOf(c[0]) < obstructedMovesLToR[index][1] + lettersOnBoard.indexOf(obstructedMovesLToR[index][0])){
                                blockedMovesLToR.push(c)
                            }
                        } catch{}
                    })
                } 
            }
        })
        index = -1
        // Finds the moves which are behind an obstructed move and also finds all of the obstructed moves. Only for right to left. Does it by finding whether the number is bigger or smaller (realized I was being dumb before but i'm not changing the old code. Because it's only one diaganol though you can easily find if its blocked just by the number.)
        totalMoves[1].forEach((c) => {
            if (!blockedMovesRToL.includes(c)){
                if (chessBoard[c][0] != "OO"){
                    obstructedMovesRToL.push(c);
                    index++
                    totalMoves[1].forEach((c) => {
                        try{
                            if (parseInt(c[1]) > parseInt(obstructedMovesRToL[index][1]) && parseInt(obstructedMovesRToL[index][1]) > parseInt(this.position[1])){
                                blockedMovesRToL.push(c)
                            }
                            else if (parseInt(c[1]) < parseInt(obstructedMovesRToL[index][1]) && parseInt(obstructedMovesRToL[index][1]) < parseInt(this.position[1])){
                                blockedMovesRToL.push(c)
                            }
                        } catch{}
                    })
                } 
            }
        })
        //seperates the obstructed moves and the blocked moves and returns both. 
        let obstructedMoves = [];
        obstructedMovesLToR.forEach((c) => [obstructedMoves.push(c)])
        obstructedMovesRToL.forEach((c) => [obstructedMoves.push(c)])
        let blockedMoves = [];
        blockedMovesLToR.forEach((c) => {blockedMoves.push(c);})
        blockedMovesRToL.forEach((c) => {blockedMoves.push(c);})
        obstructedMoves = obstructedMoves.filter((c) => !blockedMoves.includes(c))
        return [obstructedMoves, blockedMoves];
    }
    //method to return all of the moves which are not obstructed
    getFreeMoves(){
        let totalMoves = this.getTotalMoves()[0];
        this.getTotalMoves()[1].forEach((c) => {totalMoves.push(c)})
        let obstructedMoves = this.getObstructedMoves()[0];
        this.getObstructedMoves()[1].forEach((c) => {obstructedMoves.push(c)})
        totalMoves = totalMoves.filter((c) => !obstructedMoves.includes(c) );
        return totalMoves;
    }
    //method to return the pieces which can be captured. 
    getAvailableCaptures(){
        let finalCaptures = [];
        let obstructedMoves = this.getObstructedMoves()[0]
        obstructedMoves.forEach((c) => {
            if (chessBoard[c][0][0] != this.color) {finalCaptures.push(c)}
        })
        return finalCaptures
    }
}