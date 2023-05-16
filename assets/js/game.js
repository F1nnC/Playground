

function draw_chess_board() {
    for (t=0; t< 4; t++) {
        for (k = 0; k < 4; k++) {
            ctx.beginPath()
            ctx.fillStyle = "#484848";
            ctx.fillRect (80*(2*t+1), chess_board[t][2*k][1], 80, 80);
            
            ctx.fill();
            ctx.closePath();
        }
    }
    for (t=0; t< 4; t++) {
        for (k = 0; k < 4; k++) {
            ctx.beginPath()
            ctx.fillStyle = "#484848";
            ctx.fillRect (80*(2*t), chess_board[t][2*k+1][1], 80, 80);
            
            ctx.fill();
            ctx.closePath();
        }
    }
    for (i = 0; i < 8; i++) {
        ctx.drawImage(pawn_black, 80*i, 80, 80, 80);
        ctx.drawImage(pawn_white, 80*i, 480, 80, 80);
    }
}

function clickCanvas(event) {
    var x = event.offsetX;
    var y = event.offsetY;
    for (i=0; i<8;i++) {
        for (j=0; j<8; j++) {
            if (y >= i*80 && y < i*80 +80) {
                if (x >= j*80 && x < j*80 +80) {
                    clickX = j*80;
                    clickY = i*80;
                }
            }
        }
    }
    
    
    // if (clickY == 480) {
    //     ctx.fillStyle = "#DFFE00";
    //     ctx.fillRect (clickX, clickY, 80, 80);
    //     ctx.drawImage(pawn_white, clickX, clickY, 80, 80);
    // }
    // else if (clickY === 80) {
    //     ctx.fillStyle = "#DFFE00";
    //     ctx.fillRect (clickX, clickY, 80, 80);
    //     ctx.drawImage(pawn_black, clickX, clickY, 80, 80);
    // }
    // else {
    //     ctx.fillStyle = "#DFFE00";
    //     ctx.fillRect (clickX, clickY, 80, 80);
    // }
    if (black_click == false) {
        if (clickX == pawn_black1[0] && clickY == pawn_black1[1]) {
            black_click = true;
            userBlack_clickX = clickX;
            userBlack_clickXY = clickY;
        }
        if (clickX == pawn_black2[0] && clickY == pawn_black2[1]) {
            black_click = true;
            userBlack_clickX = clickX;
            userBlack_clickXY = clickY;
        }
        if (clickX == pawn_black3[0] && clickY == pawn_black3[1]) {
            black_click = true;
            userBlack_clickX = clickX;
            userBlack_clickXY = clickY;
        }
        if (clickX == pawn_black4[0] && clickY == pawn_black4[1]) {
            black_click = true;
            userBlack_clickX = clickX;
            userBlack_clickXY = clickY;
        }
        if (clickX == pawn_black5[0] && clickY == pawn_black5[1]) {
            black_click = true;
            userBlack_clickX = clickX;
            userBlack_clickXY = clickY;
        }
        if (clickX == pawn_black6[0] && clickY == pawn_black6[1]) {
            black_click = true;
            userBlack_clickX = clickX;
            userBlack_clickXY = clickY;
        }
        if (clickX == pawn_black7[0] && clickY == pawn_black7[1]) {
            black_click = true;
            userBlack_clickX = clickX;
            userBlack_clickXY = clickY;
        }
        if (clickX == pawn_black8[0] && clickY == pawn_black8[1]) {
            black_click = true;
            userBlack_clickX = clickX;
            userBlack_clickXY = clickY;
        }
    }
    
    else if (black_click) {
        if (clickX == pawn_black1[0] && clickY == pawn_black1[1]) {
            black_click = true;
            userBlack_clickX = clickX;
            userBlack_clickXY = clickY;
            return;
        }
        if (clickX == pawn_black2[0] && clickY == pawn_black2[1]) {
            black_click = true;
            userBlack_clickX = clickX;
            userBlack_clickXY = clickY;
            return;
        }
        if (clickX == pawn_black3[0] && clickY == pawn_black3[1]) {
            black_click = true;
            userBlack_clickX = clickX;
            userBlack_clickXY = clickY;
            return;
        }
        if (clickX == pawn_black4[0] && clickY == pawn_black4[1]) {
            black_click = true;
            userBlack_clickX = clickX;
            userBlack_clickXY = clickY;
            return;
        }
        if (clickX == pawn_black5[0] && clickY == pawn_black5[1]) {
            black_click = true;
            userBlack_clickX = clickX;
            userBlack_clickXY = clickY;
            return;
            
        }
        if (clickX == pawn_black6[0] && clickY == pawn_black6[1]) {
            black_click = true;
            userBlack_clickX = clickX;
            userBlack_clickXY = clickY;
            return;
        }
        if (clickX == pawn_black7[0] && clickY == pawn_black7[1]) {
            black_click = true;
            userBlack_clickX = clickX;
            userBlack_clickXY = clickY;
            return;
        }
        if (clickX == pawn_black8[0] && clickY == pawn_black8[1]) {
            black_click = true;
            userBlack_clickX = clickX;
            userBlack_clickXY = clickY;
            return;
        }
        else {
            if (userBlack_clickX == pawn_black1[0] && userBlack_clickXY == pawn_black1[1]) {
                // this is the code for pawn 
                // edit this code to make a rule
                if (pawn_black1[1] == 80) {

                }
                pawn_black1[0] = clickX;
                pawn_black1[1] = clickY;
            }
            if (userBlack_clickX == pawn_black2[0] && userBlack_clickXY == pawn_black2[1]) {
                // this is the code for pawn 
                // edit this code to make a rule
                pawn_black2[0] = clickX;
                pawn_black2[1] = clickY;
            }
            if (userBlack_clickX == pawn_black3[0] && userBlack_clickXY == pawn_black3[1]) {
                // this is the code for pawn 
                // edit this code to make a rule
                pawn_black3[0] = clickX;
                pawn_black3[1] = clickY;
            }
            if (userBlack_clickX == pawn_black4[0] && userBlack_clickXY == pawn_black4[1]) {
                // this is the code for pawn 
                // edit this code to make a rule
                pawn_black4[0] = clickX;
                pawn_black4[1] = clickY;
            }
            if (userBlack_clickX == pawn_black5[0] && userBlack_clickXY == pawn_black5[1]) {
                // this is the code for pawn 
                // edit this code to make a rule
                pawn_black5[0] = clickX;
                pawn_black5[1] = clickY;
            }
            if (userBlack_clickX == pawn_black6[0] && userBlack_clickXY == pawn_black6[1]) {
                // this is the code for pawn 
                // edit this code to make a rule
                pawn_black6[0] = clickX;
                pawn_black6[1] = clickY;
            }
            if (userBlack_clickX == pawn_black7[0] && userBlack_clickXY == pawn_black7[1]) {
                // this is the code for pawn 
                // edit this code to make a rule
                pawn_black7[0] = clickX;
                pawn_black7[1] = clickY;
            }
            if (userBlack_clickX == pawn_black8[0] && userBlack_clickXY == pawn_black8[1]) {
                // this is the code for pawn 
                // edit this code to make a rule
                pawn_black8[0] = clickX;
                pawn_black8[1] = clickY;
            }
            ctx.drawImage(pawn_black, clickX, clickY, 80, 80);
            if (userBlack_clickX%160 == 0) {
                if (userBlack_clickXY%160 == 0){
                    ctx.clearRect(userBlack_clickX, userBlack_clickXY, 80, 80);
                }
                else {
                    ctx.fillStyle = "#484848";
                    ctx.fillRect(userBlack_clickX, userBlack_clickXY, 80, 80);
                }
                

            }
            else if (userBlack_clickX%160 == 80) {
                if (userBlack_clickXY%160 == 0) {
                    ctx.fillStyle = "#484848";
                    ctx.fillRect (userBlack_clickX, userBlack_clickXY, 80, 80);
                }
                else {
                    ctx.clearRect(userBlack_clickX, userBlack_clickXY, 80, 80);
                }

            }
            black_click = false;
        }
    }
    

}
