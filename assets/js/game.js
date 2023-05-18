
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext('2d');
const pawn_black = new Image();
pawn_black.src = "https://f1nnc.github.io/Playground/images/pawn_black.png";
const pawn_white = new Image();
pawn_white.src = "https://f1nnc.github.io/Playground/images/pawn_white.png";
var chess_board = [];
var board_add = [];
var pawn_white1 = [0, 480];
var pawn_white2 = [80, 480];
var pawn_white3 = [160, 480];
var pawn_white4 = [240, 480];
var pawn_white5 = [320, 480];
var pawn_white6 = [400, 480];
var pawn_white7 = [480, 480];
var pawn_white8 = [560, 480];
var pawn_black1 = [0, 80];
var pawn_black2 = [80, 80];
var pawn_black3 = [160, 80];
var pawn_black4 = [240, 80];
var pawn_black5 = [320, 80];
var pawn_black6 = [400, 80];
var pawn_black7 = [480, 80];
var pawn_black8 = [560, 80];
var clickX = 0;
var clickY = 0;
var black_click = false;
var userBlack_clickX = 0;
var userBlack_clickY = 0;
var userWhite_clickY = 0;
var userWhite_clickX = 0
var black_turn = false;
var white_turn = true;
for (i = 0; i < 8; i++) {
    for (j = 0; j < 8; j++) {
        board_add.push([80*i, 80*j]);

    }
    chess_board.push(board_add);
    board_add = [];
}

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
            userBlack_clickY = clickY;
        }
        if (clickX == pawn_black2[0] && clickY == pawn_black2[1]) {
            black_click = true;
            userBlack_clickX = clickX;
            userBlack_clickY = clickY;
        }
        if (clickX == pawn_black3[0] && clickY == pawn_black3[1]) {
            black_click = true;
            userBlack_clickX = clickX;
            userBlack_clickY = clickY;
        }
        if (clickX == pawn_black4[0] && clickY == pawn_black4[1]) {
            black_click = true;
            userBlack_clickX = clickX;
            userBlack_clickY = clickY;
        }
        if (clickX == pawn_black5[0] && clickY == pawn_black5[1]) {
            black_click = true;
            userBlack_clickX = clickX;
            userBlack_clickY = clickY;
        }
        if (clickX == pawn_black6[0] && clickY == pawn_black6[1]) {
            black_click = true;
            userBlack_clickX = clickX;
            userBlack_clickY = clickY;
        }
        if (clickX == pawn_black7[0] && clickY == pawn_black7[1]) {
            black_click = true;
            userBlack_clickX = clickX;
            userBlack_clickY = clickY;
        }
        if (clickX == pawn_black8[0] && clickY == pawn_black8[1]) {
            black_click = true;
            userBlack_clickX = clickX;
            userBlack_clickY = clickY;
        }
    }
    
    else if (black_click) {
        if (clickX == pawn_black1[0] && clickY == pawn_black1[1]) {
            black_click = true;
            userBlack_clickX = clickX;
            userBlack_clickY = clickY;
            return;
        }
        if (clickX == pawn_black2[0] && clickY == pawn_black2[1]) {
            black_click = true;
            userBlack_clickX = clickX;
            userBlack_clickY = clickY;
            return;
        }
        if (clickX == pawn_black3[0] && clickY == pawn_black3[1]) {
            black_click = true;
            userBlack_clickX = clickX;
            userBlack_clickY = clickY;
            return;
        }
        if (clickX == pawn_black4[0] && clickY == pawn_black4[1]) {
            black_click = true;
            userBlack_clickX = clickX;
            userBlack_clickY = clickY;
            return;
        }
        if (clickX == pawn_black5[0] && clickY == pawn_black5[1]) {
            black_click = true;
            userBlack_clickX = clickX;
            userBlack_clickY = clickY;
            return;
            
        }
        if (clickX == pawn_black6[0] && clickY == pawn_black6[1]) {
            black_click = true;
            userBlack_clickX = clickX;
            userBlack_clickY = clickY;
            return;
        }
        if (clickX == pawn_black7[0] && clickY == pawn_black7[1]) {
            black_click = true;
            userBlack_clickX = clickX;
            userBlack_clickY = clickY;
            return;
        }
        if (clickX == pawn_black8[0] && clickY == pawn_black8[1]) {
            black_click = true;
            userBlack_clickX = clickX;
            userBlack_clickY = clickY;
            return;
        }
        else {
            if (userBlack_clickX == pawn_black1[0] && userBlack_clickY == pawn_black1[1]) {
                if (pawn_black1[1] == 80) {
                    if (clickY == 240 && clickX == pawn_black1[0]) {
                        ctx.drawImage(pawn_black, clickX, clickY, 80, 80);
                        pawn_black1[0] = clickX;
                        pawn_black1[1] = clickY;
                        if (userBlack_clickX%160 == 0) {
                            if (userBlack_clickY%160 == 0){
                                ctx.clearRect(userBlack_clickX, userBlack_clickY, 80, 80);
                            }
                            else {
                                ctx.fillStyle = "#484848";
                                ctx.fillRect(userBlack_clickX, userBlack_clickY, 80, 80);
                            }
                            
            
                        }
                        else if (userBlack_clickX%160 == 80) {
                            if (userBlack_clickY%160 == 0) {
                                ctx.fillStyle = "#484848";
                                ctx.fillRect (userBlack_clickX, userBlack_clickY, 80, 80);
                            }
                            else {
                                ctx.clearRect(userBlack_clickX, userBlack_clickY, 80, 80);
                            }
            
                        }
                        black_click = false;
                        return;
                    }
                    if (clickY == 160 && clickX == pawn_black1[0]) {
                        ctx.drawImage(pawn_black, clickX, clickY, 80, 80);
                        pawn_black1[0] = clickX;
                        pawn_black1[1] = clickY;
                        if (userBlack_clickX%160 == 0) {
                            if (userBlack_clickY%160 == 0){
                                ctx.clearRect(userBlack_clickX, userBlack_clickY, 80, 80);
                            }
                            else {
                                ctx.fillStyle = "#484848";
                                ctx.fillRect(userBlack_clickX, userBlack_clickY, 80, 80);
                            }
                            
            
                        }
                        else if (userBlack_clickX%160 == 80) {
                            if (userBlack_clickY%160 == 0) {
                                ctx.fillStyle = "#484848";
                                ctx.fillRect (userBlack_clickX, userBlack_clickY, 80, 80);
                            }
                            else {
                                ctx.clearRect(userBlack_clickX, userBlack_clickY, 80, 80);
                            }
            
                        }
                        black_click = false;
                        return;
                    }
                }
                else {
                    if (clickY == pawn_black1[1]+80 && clickX == pawn_black1[0]) {
                        ctx.drawImage(pawn_black, clickX, clickY, 80, 80);
                        pawn_black1[0] = clickX;
                        pawn_black1[1] = clickY;
                        if (userBlack_clickX%160 == 0) {
                            if (userBlack_clickY%160 == 0){
                                ctx.clearRect(userBlack_clickX, userBlack_clickY, 80, 80);
                            }
                            else {
                                ctx.fillStyle = "#484848";
                                ctx.fillRect(userBlack_clickX, userBlack_clickY, 80, 80);
                            }
                            
            
                        }
                        else if (userBlack_clickX%160 == 80) {
                            if (userBlack_clickY%160 == 0) {
                                ctx.fillStyle = "#484848";
                                ctx.fillRect (userBlack_clickX, userBlack_clickY, 80, 80);
                            }
                            else {
                                ctx.clearRect(userBlack_clickX, userBlack_clickY, 80, 80);
                            }
            
                        }
                        black_click = false;
                        return;
                    }
                }
                
            }
            if (userBlack_clickX == pawn_black2[0] && userBlack_clickY == pawn_black2[1]) {
                if (pawn_black2[1] == 80) {
                    if (clickY == 240 && clickX == pawn_black2[0]) {
                        ctx.drawImage(pawn_black, clickX, clickY, 80, 80);
                        pawn_black2[0] = clickX;
                        pawn_black2[1] = clickY;
                        if (userBlack_clickX%160 == 0) {
                            if (userBlack_clickY%160 == 0){
                                ctx.clearRect(userBlack_clickX, userBlack_clickY, 80, 80);
                            }
                            else {
                                ctx.fillStyle = "#484848";
                                ctx.fillRect(userBlack_clickX, userBlack_clickY, 80, 80);
                            }
                            
            
                        }
                        else if (userBlack_clickX%160 == 80) {
                            if (userBlack_clickY%160 == 0) {
                                ctx.fillStyle = "#484848";
                                ctx.fillRect (userBlack_clickX, userBlack_clickY, 80, 80);
                            }
                            else {
                                ctx.clearRect(userBlack_clickX, userBlack_clickY, 80, 80);
                            }
            
                        }
                        black_click = false;
                        return;
                    }
                    if (clickY == 160 && clickX == pawn_black2[0]) {
                        ctx.drawImage(pawn_black, clickX, clickY, 80, 80);
                        pawn_black2[0] = clickX;
                        pawn_black2[1] = clickY;
                        if (userBlack_clickX%160 == 0) {
                            if (userBlack_clickY%160 == 0){
                                ctx.clearRect(userBlack_clickX, userBlack_clickY, 80, 80);
                            }
                            else {
                                ctx.fillStyle = "#484848";
                                ctx.fillRect(userBlack_clickX, userBlack_clickY, 80, 80);
                            }
                            
            
                        }
                        else if (userBlack_clickX%160 == 80) {
                            if (userBlack_clickY%160 == 0) {
                                ctx.fillStyle = "#484848";
                                ctx.fillRect (userBlack_clickX, userBlack_clickY, 80, 80);
                            }
                            else {
                                ctx.clearRect(userBlack_clickX, userBlack_clickY, 80, 80);
                            }
            
                        }
                        black_click = false;
                        return;
                    }
                }
                else {
                    if (clickY == pawn_black2[1]+80 && clickX == pawn_black2[0]) {
                        ctx.drawImage(pawn_black, clickX, clickY, 80, 80);
                        pawn_black2[0] = clickX;
                        pawn_black2[1] = clickY;
                        if (userBlack_clickX%160 == 0) {
                            if (userBlack_clickY%160 == 0){
                                ctx.clearRect(userBlack_clickX, userBlack_clickY, 80, 80);
                            }
                            else {
                                ctx.fillStyle = "#484848";
                                ctx.fillRect(userBlack_clickX, userBlack_clickY, 80, 80);
                            }
                            
            
                        }
                        else if (userBlack_clickX%160 == 80) {
                            if (userBlack_clickY%160 == 0) {
                                ctx.fillStyle = "#484848";
                                ctx.fillRect (userBlack_clickX, userBlack_clickY, 80, 80);
                            }
                            else {
                                ctx.clearRect(userBlack_clickX, userBlack_clickY, 80, 80);
                            }
            
                        }
                        black_click = false;
                        return;
                    }
                }
            }
            if (userBlack_clickX == pawn_black3[0] && userBlack_clickY == pawn_black3[1]) {
                if (pawn_black3[1] == 80) {
                    if (clickY == 240 && clickX == pawn_black3[0]) {
                        ctx.drawImage(pawn_black, clickX, clickY, 80, 80);
                        pawn_black3[0] = clickX;
                        pawn_black3[1] = clickY;
                        if (userBlack_clickX%160 == 0) {
                            if (userBlack_clickY%160 == 0){
                                ctx.clearRect(userBlack_clickX, userBlack_clickY, 80, 80);
                            }
                            else {
                                ctx.fillStyle = "#484848";
                                ctx.fillRect(userBlack_clickX, userBlack_clickY, 80, 80);
                            }
                            
            
                        }
                        else if (userBlack_clickX%160 == 80) {
                            if (userBlack_clickY%160 == 0) {
                                ctx.fillStyle = "#484848";
                                ctx.fillRect (userBlack_clickX, userBlack_clickY, 80, 80);
                            }
                            else {
                                ctx.clearRect(userBlack_clickX, userBlack_clickY, 80, 80);
                            }
            
                        }
                        black_click = false;
                        return;
                    }
                    if (clickY == 160 && clickX == pawn_black3[0]) {
                        ctx.drawImage(pawn_black, clickX, clickY, 80, 80);
                        pawn_black3[0] = clickX;
                        pawn_black3[1] = clickY;
                        if (userBlack_clickX%160 == 0) {
                            if (userBlack_clickY%160 == 0){
                                ctx.clearRect(userBlack_clickX, userBlack_clickY, 80, 80);
                            }
                            else {
                                ctx.fillStyle = "#484848";
                                ctx.fillRect(userBlack_clickX, userBlack_clickY, 80, 80);
                            }
                            
            
                        }
                        else if (userBlack_clickX%160 == 80) {
                            if (userBlack_clickY%160 == 0) {
                                ctx.fillStyle = "#484848";
                                ctx.fillRect (userBlack_clickX, userBlack_clickY, 80, 80);
                            }
                            else {
                                ctx.clearRect(userBlack_clickX, userBlack_clickY, 80, 80);
                            }
            
                        }
                        black_click = false;
                        return;
                    }
                }
                else {
                    if (clickY == pawn_black3[1]+80 && clickX == pawn_black3[0]) {
                        ctx.drawImage(pawn_black, clickX, clickY, 80, 80);
                        pawn_black3[0] = clickX;
                        pawn_black3[1] = clickY;
                        if (userBlack_clickX%160 == 0) {
                            if (userBlack_clickY%160 == 0){
                                ctx.clearRect(userBlack_clickX, userBlack_clickY, 80, 80);
                            }
                            else {
                                ctx.fillStyle = "#484848";
                                ctx.fillRect(userBlack_clickX, userBlack_clickY, 80, 80);
                            }
                            
            
                        }
                        else if (userBlack_clickX%160 == 80) {
                            if (userBlack_clickY%160 == 0) {
                                ctx.fillStyle = "#484848";
                                ctx.fillRect (userBlack_clickX, userBlack_clickY, 80, 80);
                            }
                            else {
                                ctx.clearRect(userBlack_clickX, userBlack_clickY, 80, 80);
                            }
            
                        }
                        black_click = false;
                        return;
                    }
                }
            }
            if (userBlack_clickX == pawn_black4[0] && userBlack_clickY == pawn_black4[1]) {
                if (pawn_black4[1] == 80) {
                    if (clickY == 240 && clickX == pawn_black4[0]) {
                        ctx.drawImage(pawn_black, clickX, clickY, 80, 80);
                        pawn_black4[0] = clickX;
                        pawn_black4[1] = clickY;
                        if (userBlack_clickX%160 == 0) {
                            if (userBlack_clickY%160 == 0){
                                ctx.clearRect(userBlack_clickX, userBlack_clickY, 80, 80);
                            }
                            else {
                                ctx.fillStyle = "#484848";
                                ctx.fillRect(userBlack_clickX, userBlack_clickY, 80, 80);
                            }
                            
            
                        }
                        else if (userBlack_clickX%160 == 80) {
                            if (userBlack_clickY%160 == 0) {
                                ctx.fillStyle = "#484848";
                                ctx.fillRect (userBlack_clickX, userBlack_clickY, 80, 80);
                            }
                            else {
                                ctx.clearRect(userBlack_clickX, userBlack_clickY, 80, 80);
                            }
            
                        }
                        black_click = false;
                        return;
                    }
                    if (clickY == 160 && clickX == pawn_black4[0]) {
                        ctx.drawImage(pawn_black, clickX, clickY, 80, 80);
                        pawn_black4[0] = clickX;
                        pawn_black4[1] = clickY;
                        if (userBlack_clickX%160 == 0) {
                            if (userBlack_clickY%160 == 0){
                                ctx.clearRect(userBlack_clickX, userBlack_clickY, 80, 80);
                            }
                            else {
                                ctx.fillStyle = "#484848";
                                ctx.fillRect(userBlack_clickX, userBlack_clickY, 80, 80);
                            }
                            
            
                        }
                        else if (userBlack_clickX%160 == 80) {
                            if (userBlack_clickY%160 == 0) {
                                ctx.fillStyle = "#484848";
                                ctx.fillRect (userBlack_clickX, userBlack_clickY, 80, 80);
                            }
                            else {
                                ctx.clearRect(userBlack_clickX, userBlack_clickY, 80, 80);
                            }
            
                        }
                        black_click = false;
                        return;
                    }
                }
                else {
                    if (clickY == pawn_black4[1]+80 && clickX == pawn_black4[0]) {
                        ctx.drawImage(pawn_black, clickX, clickY, 80, 80);
                        pawn_black4[0] = clickX;
                        pawn_black4[1] = clickY;
                        if (userBlack_clickX%160 == 0) {
                            if (userBlack_clickY%160 == 0){
                                ctx.clearRect(userBlack_clickX, userBlack_clickY, 80, 80);
                            }
                            else {
                                ctx.fillStyle = "#484848";
                                ctx.fillRect(userBlack_clickX, userBlack_clickY, 80, 80);
                            }
                            
            
                        }
                        else if (userBlack_clickX%160 == 80) {
                            if (userBlack_clickY%160 == 0) {
                                ctx.fillStyle = "#484848";
                                ctx.fillRect (userBlack_clickX, userBlack_clickY, 80, 80);
                            }
                            else {
                                ctx.clearRect(userBlack_clickX, userBlack_clickY, 80, 80);
                            }
            
                        }
                        black_click = false;
                        return;
                    }
                }
            }
            if (userBlack_clickX == pawn_black5[0] && userBlack_clickY == pawn_black5[1]) {
                if (pawn_black5[1] == 80) {
                    if (clickY == 240 && clickX == pawn_black5[0]) {
                        ctx.drawImage(pawn_black, clickX, clickY, 80, 80);
                        pawn_black5[0] = clickX;
                        pawn_black5[1] = clickY;
                        if (userBlack_clickX%160 == 0) {
                            if (userBlack_clickY%160 == 0){
                                ctx.clearRect(userBlack_clickX, userBlack_clickY, 80, 80);
                            }
                            else {
                                ctx.fillStyle = "#484848";
                                ctx.fillRect(userBlack_clickX, userBlack_clickY, 80, 80);
                            }
                            
            
                        }
                        else if (userBlack_clickX%160 == 80) {
                            if (userBlack_clickY%160 == 0) {
                                ctx.fillStyle = "#484848";
                                ctx.fillRect (userBlack_clickX, userBlack_clickY, 80, 80);
                            }
                            else {
                                ctx.clearRect(userBlack_clickX, userBlack_clickY, 80, 80);
                            }
            
                        }
                        black_click = false;
                        return;
                    }
                    if (clickY == 160 && clickX == pawn_black5[0]) {
                        ctx.drawImage(pawn_black, clickX, clickY, 80, 80);
                        pawn_black5[0] = clickX;
                        pawn_black5[1] = clickY;
                        if (userBlack_clickX%160 == 0) {
                            if (userBlack_clickY%160 == 0){
                                ctx.clearRect(userBlack_clickX, userBlack_clickY, 80, 80);
                            }
                            else {
                                ctx.fillStyle = "#484848";
                                ctx.fillRect(userBlack_clickX, userBlack_clickY, 80, 80);
                            }
                            
            
                        }
                        else if (userBlack_clickX%160 == 80) {
                            if (userBlack_clickY%160 == 0) {
                                ctx.fillStyle = "#484848";
                                ctx.fillRect (userBlack_clickX, userBlack_clickY, 80, 80);
                            }
                            else {
                                ctx.clearRect(userBlack_clickX, userBlack_clickY, 80, 80);
                            }
            
                        }
                        black_click = false;
                        return;
                    }
                }
                else {
                    if (clickY == pawn_black5[1]+80 && clickX == pawn_black5[0]) {
                        ctx.drawImage(pawn_black, clickX, clickY, 80, 80);
                        pawn_black5[0] = clickX;
                        pawn_black5[1] = clickY;
                        if (userBlack_clickX%160 == 0) {
                            if (userBlack_clickY%160 == 0){
                                ctx.clearRect(userBlack_clickX, userBlack_clickY, 80, 80);
                            }
                            else {
                                ctx.fillStyle = "#484848";
                                ctx.fillRect(userBlack_clickX, userBlack_clickY, 80, 80);
                            }
                            
            
                        }
                        else if (userBlack_clickX%160 == 80) {
                            if (userBlack_clickY%160 == 0) {
                                ctx.fillStyle = "#484848";
                                ctx.fillRect (userBlack_clickX, userBlack_clickY, 80, 80);
                            }
                            else {
                                ctx.clearRect(userBlack_clickX, userBlack_clickY, 80, 80);
                            }
            
                        }
                        black_click = false;
                        return;
                    }
                }
            }
            if (userBlack_clickX == pawn_black6[0] && userBlack_clickY == pawn_black6[1]) {
                if (pawn_black6[1] == 80) {
                    if (clickY == 240 && clickX == pawn_black6[0]) {
                        ctx.drawImage(pawn_black, clickX, clickY, 80, 80);
                        pawn_black6[0] = clickX;
                        pawn_black6[1] = clickY;
                        if (userBlack_clickX%160 == 0) {
                            if (userBlack_clickY%160 == 0){
                                ctx.clearRect(userBlack_clickX, userBlack_clickY, 80, 80);
                            }
                            else {
                                ctx.fillStyle = "#484848";
                                ctx.fillRect(userBlack_clickX, userBlack_clickY, 80, 80);
                            }
                            
            
                        }
                        else if (userBlack_clickX%160 == 80) {
                            if (userBlack_clickY%160 == 0) {
                                ctx.fillStyle = "#484848";
                                ctx.fillRect (userBlack_clickX, userBlack_clickY, 80, 80);
                            }
                            else {
                                ctx.clearRect(userBlack_clickX, userBlack_clickY, 80, 80);
                            }
            
                        }
                        black_click = false;
                        return;
                    }
                    if (clickY == 160 && clickX == pawn_black6[0]) {
                        ctx.drawImage(pawn_black, clickX, clickY, 80, 80);
                        pawn_black6[0] = clickX;
                        pawn_black6[1] = clickY;
                        if (userBlack_clickX%160 == 0) {
                            if (userBlack_clickY%160 == 0){
                                ctx.clearRect(userBlack_clickX, userBlack_clickY, 80, 80);
                            }
                            else {
                                ctx.fillStyle = "#484848";
                                ctx.fillRect(userBlack_clickX, userBlack_clickY, 80, 80);
                            }
                            
            
                        }
                        else if (userBlack_clickX%160 == 80) {
                            if (userBlack_clickY%160 == 0) {
                                ctx.fillStyle = "#484848";
                                ctx.fillRect (userBlack_clickX, userBlack_clickY, 80, 80);
                            }
                            else {
                                ctx.clearRect(userBlack_clickX, userBlack_clickY, 80, 80);
                            }
            
                        }
                        black_click = false;
                        return;
                    }
                }
                else {
                    if (clickY == pawn_black6[1]+80 && clickX == pawn_black6[0]) {
                        ctx.drawImage(pawn_black, clickX, clickY, 80, 80);
                        pawn_black6[0] = clickX;
                        pawn_black6[1] = clickY;
                        if (userBlack_clickX%160 == 0) {
                            if (userBlack_clickY%160 == 0){
                                ctx.clearRect(userBlack_clickX, userBlack_clickY, 80, 80);
                            }
                            else {
                                ctx.fillStyle = "#484848";
                                ctx.fillRect(userBlack_clickX, userBlack_clickY, 80, 80);
                            }
                            
            
                        }
                        else if (userBlack_clickX%160 == 80) {
                            if (userBlack_clickY%160 == 0) {
                                ctx.fillStyle = "#484848";
                                ctx.fillRect (userBlack_clickX, userBlack_clickY, 80, 80);
                            }
                            else {
                                ctx.clearRect(userBlack_clickX, userBlack_clickY, 80, 80);
                            }
            
                        }
                        black_click = false;
                        return;
                    }
                }
            }
            if (userBlack_clickX == pawn_black7[0] && userBlack_clickY == pawn_black7[1]) {
                if (pawn_black7[1] == 80) {
                    if (clickY == 240 && clickX == pawn_black7[0]) {
                        ctx.drawImage(pawn_black, clickX, clickY, 80, 80);
                        pawn_black7[0] = clickX;
                        pawn_black7[1] = clickY;
                        if (userBlack_clickX%160 == 0) {
                            if (userBlack_clickY%160 == 0){
                                ctx.clearRect(userBlack_clickX, userBlack_clickY, 80, 80);
                            }
                            else {
                                ctx.fillStyle = "#484848";
                                ctx.fillRect(userBlack_clickX, userBlack_clickY, 80, 80);
                            }
                            
            
                        }
                        else if (userBlack_clickX%160 == 80) {
                            if (userBlack_clickY%160 == 0) {
                                ctx.fillStyle = "#484848";
                                ctx.fillRect (userBlack_clickX, userBlack_clickY, 80, 80);
                            }
                            else {
                                ctx.clearRect(userBlack_clickX, userBlack_clickY, 80, 80);
                            }
            
                        }
                        black_click = false;
                        return;
                    }
                    if (clickY == 160 && clickX == pawn_black7[0]) {
                        ctx.drawImage(pawn_black, clickX, clickY, 80, 80);
                        pawn_black7[0] = clickX;
                        pawn_black7[1] = clickY;
                        if (userBlack_clickX%160 == 0) {
                            if (userBlack_clickY%160 == 0){
                                ctx.clearRect(userBlack_clickX, userBlack_clickY, 80, 80);
                            }
                            else {
                                ctx.fillStyle = "#484848";
                                ctx.fillRect(userBlack_clickX, userBlack_clickY, 80, 80);
                            }
                            
            
                        }
                        else if (userBlack_clickX%160 == 80) {
                            if (userBlack_clickY%160 == 0) {
                                ctx.fillStyle = "#484848";
                                ctx.fillRect (userBlack_clickX, userBlack_clickY, 80, 80);
                            }
                            else {
                                ctx.clearRect(userBlack_clickX, userBlack_clickY, 80, 80);
                            }
            
                        }
                        black_click = false;
                        return;
                    }
                }
                else {
                    if (clickY == pawn_black7[1]+80 && clickX == pawn_black7[0]) {
                        ctx.drawImage(pawn_black, clickX, clickY, 80, 80);
                        pawn_black7[0] = clickX;
                        pawn_black7[1] = clickY;
                        if (userBlack_clickX%160 == 0) {
                            if (userBlack_clickY%160 == 0){
                                ctx.clearRect(userBlack_clickX, userBlack_clickY, 80, 80);
                            }
                            else {
                                ctx.fillStyle = "#484848";
                                ctx.fillRect(userBlack_clickX, userBlack_clickY, 80, 80);
                            }
                            
            
                        }
                        else if (userBlack_clickX%160 == 80) {
                            if (userBlack_clickY%160 == 0) {
                                ctx.fillStyle = "#484848";
                                ctx.fillRect (userBlack_clickX, userBlack_clickY, 80, 80);
                            }
                            else {
                                ctx.clearRect(userBlack_clickX, userBlack_clickY, 80, 80);
                            }
            
                        }
                        black_click = false;
                        return;
                    }
                }
            }
            if (userBlack_clickX == pawn_black8[0] && userBlack_clickY == pawn_black8[1]) {
                if (pawn_black8[1] == 80) {
                    if (clickY == 240 && clickX == pawn_black8[0]) {
                        ctx.drawImage(pawn_black, clickX, clickY, 80, 80);
                        pawn_black8[0] = clickX;
                        pawn_black8[1] = clickY;
                        if (userBlack_clickX%160 == 0) {
                            if (userBlack_clickY%160 == 0){
                                ctx.clearRect(userBlack_clickX, userBlack_clickY, 80, 80);
                            }
                            else {
                                ctx.fillStyle = "#484848";
                                ctx.fillRect(userBlack_clickX, userBlack_clickY, 80, 80);
                            }
                            
            
                        }
                        else if (userBlack_clickX%160 == 80) {
                            if (userBlack_clickY%160 == 0) {
                                ctx.fillStyle = "#484848";
                                ctx.fillRect (userBlack_clickX, userBlack_clickY, 80, 80);
                            }
                            else {
                                ctx.clearRect(userBlack_clickX, userBlack_clickY, 80, 80);
                            }
            
                        }
                        black_click = false;
                        return;
                    }
                    if (clickY == 160 && clickX == pawn_black8[0]) {
                        ctx.drawImage(pawn_black, clickX, clickY, 80, 80);
                        pawn_black8[0] = clickX;
                        pawn_black8[1] = clickY;
                        if (userBlack_clickX%160 == 0) {
                            if (userBlack_clickY%160 == 0){
                                ctx.clearRect(userBlack_clickX, userBlack_clickY, 80, 80);
                            }
                            else {
                                ctx.fillStyle = "#484848";
                                ctx.fillRect(userBlack_clickX, userBlack_clickY, 80, 80);
                            }
                            
            
                        }
                        else if (userBlack_clickX%160 == 80) {
                            if (userBlack_clickY%160 == 0) {
                                ctx.fillStyle = "#484848";
                                ctx.fillRect (userBlack_clickX, userBlack_clickY, 80, 80);
                            }
                            else {
                                ctx.clearRect(userBlack_clickX, userBlack_clickY, 80, 80);
                            }
            
                        }
                        black_click = false;
                        return;
                    }
                }
                else {
                    if (clickY == pawn_black8[1]+80 && clickX == pawn_black8[0]) {
                        ctx.drawImage(pawn_black, clickX, clickY, 80, 80);
                        pawn_black8[0] = clickX;
                        pawn_black8[1] = clickY;
                        if (userBlack_clickX%160 == 0) {
                            if (userBlack_clickY%160 == 0){
                                ctx.clearRect(userBlack_clickX, userBlack_clickY, 80, 80);
                            }
                            else {
                                ctx.fillStyle = "#484848";
                                ctx.fillRect(userBlack_clickX, userBlack_clickY, 80, 80);
                            }
                            
            
                        }
                        else if (userBlack_clickX%160 == 80) {
                            if (userBlack_clickY%160 == 0) {
                                ctx.fillStyle = "#484848";
                                ctx.fillRect (userBlack_clickX, userBlack_clickY, 80, 80);
                            }
                            else {
                                ctx.clearRect(userBlack_clickX, userBlack_clickY, 80, 80);
                            }
            
                        }
                        black_click = false;
                        return;
                    }
                }
            }
            // ctx.drawImage(pawn_black, clickX, clickY, 80, 80);
           
        }
    }
    

}
