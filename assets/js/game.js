
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext('2d');
const pawn_black = new Image();
pawn_black.src = "https://f1nnc.github.io/Playground/images/Chess_pdt60.png";
const pawn_white = new Image();
pawn_white.src = "https://f1nnc.github.io/Playground/images/Chess_plt60.png";
const run1 = new Image();
run1.src = "images/run1.png"
const run2 = new Image();
run2.src = "images/run2.png"
const run3 = new Image();
run3.src = "images/run3.png"
const run4 = new Image();
run4.src = "images/run4.png"
const run5 = new Image();
run5.src = "images/run5.png"
const run6 = new Image();
run6.src = "images/run6.png"
const run7 = new Image();
run7.src = "images/run7.png"
runs = [run1, run2, run3, run4, run5, run6, run7];
const pic1 = new Image();
pic1.src = "images/pic1.png"
const pic2 = new Image();
pic2.src = "images/pic2.png"
const pic3 = new Image();
pic3.src = "images/pic3.png"
cats = [pic1, pic2, pic3];
const white_bishop = new Image();
white_bishop.src = "https://f1nnc.github.io/Playground/images/Chess_blt60.png";
const black_bishop = new Image();
black_bishop.src = "https://f1nnc.github.io/Playground/images/Chess_bdt60.png";
const black_look = new Image();
black_look.src = "https://f1nnc.github.io/Playground/images/Chess_bdt60.png";

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
var black_bishop1 = [160, 0];
var black_bishop2 = [480, 0];
var white_bishop1 = [160, 560];
var white_bishop2 = [480, 560];
var black_horse1 = [80, 0];
var black_horse2 = [480, 0];
var white_horse1 = [80, 580];
var white_horse2 = [480, 560];
var black_look1 = [0,0];
var black_look2 = [560,0];
var white_look1 = [0,560];
var white_look2 = [560, 560];






var clickX = 640;
var clickY = 640;
var black_click = false;
var white_click = false;
var userBlack_clickX = 640;
var userBlack_clickY = 640;
var userWhite_clickY = 640;
var userWhite_clickX = 640;
var black_turn = false;
var white_turn = true;
var num = 0;
var cat_num = 0;
for (i = 0; i < 8; i++) {
    for (j = 0; j < 8; j++) {
        board_add.push([80*i, 80*j]);
    }
    chess_board.push(board_add);
    board_add = [];
}

function king() {
    if (num >= 7) {
        num = 0;
    }
    ctx.drawImage(runs[num], 240, 560, 80, 80);
    num += 1;
}
function cat() {
    if (cat_num >= 3) {
        cat_num = 0;
    }
    ctx.drawImage(cats[cat_num], 80, 560, 80, 80);
    cat_num += 1;
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
    ctx.drawImage(white_bishop, 160, 560, 80, 80);
    ctx.drawImage(white_bishop, 400, 560, 80, 80);
    ctx.drawImage(black_bishop, 160, 0, 80, 80);
    ctx.drawImage(black_bishop, 400, 0, 80, 80);
    // setInterval(king, 100);
    // setInterval(cat, 70);
}

function erase_Black() {
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
}
function erase_White() {
    if (userWhite_clickX%160 == 0) {
        if (userWhite_clickY%160 == 0){
            ctx.clearRect(userWhite_clickX, userWhite_clickY, 80, 80);
        }
        else {
            ctx.fillStyle = "#484848";
            ctx.fillRect(userWhite_clickX, userWhite_clickY, 80, 80);
        }
        

    }
    else if (userWhite_clickX%160 == 80) {
        if (userWhite_clickY%160 == 0) {
            ctx.fillStyle = "#484848";
            ctx.fillRect (userWhite_clickX, userWhite_clickY, 80, 80);
        }
        else {
            ctx.clearRect(userWhite_clickX, userWhite_clickY, 80, 80);
        }

    }
    white_click = false;
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
    if (white_turn == false) {
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
            if (clickX == black_bishop1[0] && clickY == black_bishop1[1]) {
                black_click = true;
                userBlack_clickX = clickX;
                userWhite_clickY = clickY;
            }
        }
        else if (black_click) {
            if (clickX == userBlack_clickX && clickY == userBlack_clickY) {
                black_click = true;
                return;
            }
            else {
                if (userBlack_clickX == pawn_black1[0] && userBlack_clickY == pawn_black1[1]) {
                    if (pawn_black1[1] == 80) {
                        if (clickY == 240 || clickY == 160) {
                            if (clickX == pawn_black1[0]) {
                                ctx.drawImage(pawn_black, clickX, clickY, 80, 80);
                                pawn_black1[0] = clickX;
                                pawn_black1[1] = clickY;
                                erase_Black();
                                white_turn = true;
                                return;
                            }
                        }
                    }
                    if (clickY == pawn_black1[1]+80 && clickX == pawn_black1[0]) {
                        ctx.drawImage(pawn_black, clickX, clickY, 80, 80);
                        pawn_black1[0] = clickX;
                        pawn_black1[1] = clickY;
                        erase_Black();
                        white_turn = true;
                        return;
                    }
                    else {
                        black_click = false;
                        return;
                    }
                }
                if (userBlack_clickX == pawn_black2[0] && userBlack_clickY == pawn_black2[1]) {
                    if (pawn_black2[1] == 80) {
                        if (clickY == 240 || clickY == 160) {
                            if (clickX == pawn_black2[0]) {
                                ctx.drawImage(pawn_black, clickX, clickY, 80, 80);
                                pawn_black2[0] = clickX;
                                pawn_black2[1] = clickY;
                                erase_Black();
                                white_turn = true;
                                return;
                            }
                        }
                    }
                    if (clickY == pawn_black2[1]+80 && clickX == pawn_black2[0]) {
                        ctx.drawImage(pawn_black, clickX, clickY, 80, 80);
                        pawn_black2[0] = clickX;
                        pawn_black2[1] = clickY;
                        erase_Black();
                        white_turn = true;
                        return;
                    }
                    else {
                        black_click = false;
                        return;
                    }
                }
                if (userBlack_clickX == pawn_black3[0] && userBlack_clickY == pawn_black3[1]) {
                    if (pawn_black3[1] == 80) {
                        if (clickY == 240 || clickY == 160) {
                            if (clickX == pawn_black3[0]) {
                                ctx.drawImage(pawn_black, clickX, clickY, 80, 80);
                                pawn_black3[0] = clickX;
                                pawn_black3[1] = clickY;
                                erase_Black();
                                white_turn = true;
                                return;
                            }
                        }
                    }
                    else {
                        if (clickY == pawn_black3[1]+80 && clickX == pawn_black3[0]) {
                            ctx.drawImage(pawn_black, clickX, clickY, 80, 80);
                            pawn_black3[0] = clickX;
                            pawn_black3[1] = clickY;
                            erase_Black();
                            white_turn = true;
                            return;
                        }
                    }
                }
                if (userBlack_clickX == pawn_black4[0] && userBlack_clickY == pawn_black4[1]) {
                    if (pawn_black4[1] == 80) {
                        if (clickY == 240 || clickY == 160) {
                            if (clickX == pawn_black4[0]) {
                                ctx.drawImage(pawn_black, clickX, clickY, 80, 80);
                                pawn_black4[0] = clickX;
                                pawn_black4[1] = clickY;
                                erase_Black();
                                white_turn = true;
                                return;
                            }
                        }
                    }
                    else {
                        if (clickY == pawn_black4[1]+80 && clickX == pawn_black4[0]) {
                            ctx.drawImage(pawn_black, clickX, clickY, 80, 80);
                            pawn_black4[0] = clickX;
                            pawn_black4[1] = clickY;
                            erase_Black();
                            white_turn = true;
                            return;
                        }
                    }
                }
                if (userBlack_clickX == pawn_black5[0] && userBlack_clickY == pawn_black5[1]) {
                    if (pawn_black5[1] == 80) {
                        if (clickY == 240 || clickY == 160) {
                            if (clickX == pawn_black5[0]) {
                                ctx.drawImage(pawn_black, clickX, clickY, 80, 80);
                                pawn_black5[0] = clickX;
                                pawn_black5[1] = clickY;
                                erase_Black();
                                white_turn = true;
                                return;
                            }
                        }
                    }
                    else {
                        if (clickY == pawn_black5[1]+80 && clickX == pawn_black5[0]) {
                            ctx.drawImage(pawn_black, clickX, clickY, 80, 80);
                            pawn_black5[1] = clickY;
                            erase_Black();
                            white_turn = true;
                            return;
                        }
                    }
                }
                if (userBlack_clickX == pawn_black6[0] && userBlack_clickY == pawn_black6[1]) {
                    if (pawn_black6[1] == 80) {
                        if (clickY == 240 || clickY == 160) {
                            if (clickX == pawn_black6[0]) {
                                ctx.drawImage(pawn_black, clickX, clickY, 80, 80);
                                pawn_black6[0] = clickX;
                                pawn_black6[1] = clickY;
                                erase_Black();
                                white_turn = true;
                                return;
                            }
                        }
                    }
                    else {
                        if (clickY == pawn_black6[1]+80 && clickX == pawn_black6[0]) {
                            ctx.drawImage(pawn_black, clickX, clickY, 80, 80);
                            pawn_black6[0] = clickX;
                            pawn_black6[1] = clickY;
                            erase_Black();
                            white_turn = true;
                            return;
                        }
                    }
                }
                if (userBlack_clickX == pawn_black7[0] && userBlack_clickY == pawn_black7[1]) {
                    if (pawn_black7[1] == 80) {
                        if (clickY == 240 || clickY == 160) {
                            if (clickX == pawn_black7[0]) {
                                ctx.drawImage(pawn_black, clickX, clickY, 80, 80);
                                pawn_black7[0] = clickX;
                                pawn_black7[1] = clickY;
                                erase_Black();
                                white_turn = true;
                                return;
                            }
                        }
                    }
                    else {
                        if (clickY == pawn_black7[1]+80 && clickX == pawn_black7[0]) {
                            ctx.drawImage(pawn_black, clickX, clickY, 80, 80);
                            pawn_black7[0] = clickX;
                            pawn_black7[1] = clickY;
                            erase_Black();
                            white_turn = true;
                            return;
                        }
                    }
                }
                if (userBlack_clickX == pawn_black8[0] && userBlack_clickY == pawn_black8[1]) {
                    if (pawn_black8[1] == 80) {
                        if (clickY == 240 || clickY == 160) {
                            if (clickX == pawn_black8[0]) {
                                ctx.drawImage(pawn_black, clickX, clickY, 80, 80);
                                pawn_black8[0] = clickX;
                                pawn_black8[1] = clickY;
                                erase_Black();
                                white_turn = true;
                                return;
                            }
                        }
                    }
                    else {
                        if (clickY == pawn_black8[1]+80 && clickX == pawn_black8[0]) {
                            ctx.drawImage(pawn_black, clickX, clickY, 80, 80);
                            pawn_black8[0] = clickX;
                            pawn_black8[1] = clickY;
                            erase_Black();
                            white_turn = true;
                            return;
                        }
                    }
                }
                if (userBlack_clickX == black_bishop1[0] && userBlack_clickY == black_bishop1[1]) {
                    if (pa)
                }
            }
        }
    }
    else if (white_turn == true) {
        if (white_click == false) {
            if (clickX == pawn_white1[0] && clickY == pawn_white1[1]) {
                white_click = true;
                userWhite_clickX = clickX;
                userWhite_clickY = clickY;
            }
            if (clickX == pawn_white2[0] && clickY == pawn_white2[1]) {
                white_click = true;
                userWhite_clickX = clickX;
                userWhite_clickY = clickY;
            }
            if (clickX == pawn_white3[0] && clickY == pawn_white3[1]) {
                white_click = true;
                userWhite_clickX = clickX;
                userWhite_clickY = clickY;
            }
            if (clickX == pawn_white4[0] && clickY == pawn_white4[1]) {
                white_click = true;
                userWhite_clickX = clickX;
                userWhite_clickY = clickY;
            }
            if (clickX == pawn_white5[0] && clickY == pawn_white5[1]) {
                white_click = true;
                userWhite_clickX = clickX;
                userWhite_clickY = clickY;
            }
            if (clickX == pawn_white6[0] && clickY == pawn_white6[1]) {
                white_click = true;
                userWhite_clickX = clickX;
                userWhite_clickY = clickY;
            }
            if (clickX == pawn_white7[0] && clickY == pawn_white7[1]) {
                white_click = true;
                userWhite_clickX = clickX;
                userWhite_clickY = clickY;
            }
            if (clickX == pawn_white8[0] && clickY == pawn_white8[1]) {
                white_click = true;
                userWhite_clickX = clickX;
                userWhite_clickY = clickY;
            }
        }
        else if (white_click) {
            if (clickX == pawn_white1[0] && clickY == pawn_white1[1]) {
                white_click = true;
                userWhite_clickX = clickX;
                userWhite_clickY = clickY;
                return;
            }
            if (clickX == pawn_white2[0] && clickY == pawn_white2[1]) {
                white_click = true;
                userWhite_clickX = clickX;
                userWhite_clickY = clickY;
                return;
            }
            if (clickX == pawn_white3[0] && clickY == pawn_white3[1]) {
                white_click = true;
                userWhite_clickX = clickX;
                userWhite_clickY = clickY;
                return;
            }
            if (clickX == pawn_white4[0] && clickY == pawn_white4[1]) {
                white_click = true;
                userWhite_clickX = clickX;
                userWhite_clickY = clickY;
                return;
            }
            if (clickX == pawn_white5[0] && clickY == pawn_white5[1]) {
                white_click = true;
                userWhite_clickX = clickX;
                userWhite_clickY = clickY;
                return;
                
            }
            if (clickX == pawn_white6[0] && clickY == pawn_white6[1]) {
                white_click = true;
                userWhite_clickX = clickX;
                userWhite_clickY = clickY;
                return;
            }
            if (clickX == pawn_white7[0] && clickY == pawn_white7[1]) {
                white_click = true;
                userWhite_clickX = clickX;
                userWhite_clickY = clickY;
                return;
            }
            if (clickX == pawn_white8[0] && clickY == pawn_white8[1]) {
                white_click = true;
                userWhite_clickX = clickX;
                userWhite_clickY = clickY;
                return;
            }
            else {
                if (userWhite_clickX == pawn_white1[0] && userWhite_clickY == pawn_white1[1]) {
                    if (pawn_white1[1] == 480) {
                        if (clickY == 320 || clickY == 400) {
                            if (clickX == pawn_white1[0]) {
                                ctx.drawImage(pawn_white, clickX, clickY, 80, 80);
                                pawn_white1[0] = clickX;
                                pawn_white1[1] = clickY;
                                erase_White();
                                white_turn = false;
                                return;
                            }
                        }
                    }
                    else {
                        if (clickY == pawn_white1[1]-80 && clickX == pawn_white1[0]) {
                            ctx.drawImage(pawn_white, clickX, clickY, 80, 80);
                            pawn_white1[0] = clickX;
                            pawn_white1[1] = clickY;
                            erase_White();
                            white_turn = false;
                            return;
                        }
                    }
                }
                if (userWhite_clickX == pawn_white2[0] && userWhite_clickY == pawn_white2[1]) {
                    if (pawn_white2[1] == 480) {
                        if (clickY == 320 || clickY == 400) {
                            if (clickX == pawn_white2[0]) {
                                ctx.drawImage(pawn_white, clickX, clickY, 80, 80);
                                pawn_white2[0] = clickX;
                                pawn_white2[1] = clickY;
                                erase_White();
                                white_turn = false;
                                return;
                            }
                        }
                    }
                    else {
                        if (clickY == pawn_white2[1]-80 && clickX == pawn_white2[0]) {
                            ctx.drawImage(pawn_white, clickX, clickY, 80, 80);
                            pawn_white2[0] = clickX;
                            pawn_white2[1] = clickY;
                            erase_White();
                            white_turn = false;
                            return;
                        }
                    }
                }
                if (userWhite_clickX == pawn_white3[0] && userWhite_clickY == pawn_white3[1]) {
                    if (pawn_white3[1] == 480) {
                        if (clickY == 320 || clickY == 400) {
                            if (clickX == pawn_white3[0]) {
                                ctx.drawImage(pawn_white, clickX, clickY, 80, 80);
                                pawn_white3[0] = clickX;
                                pawn_white3[1] = clickY;
                                erase_White();
                                white_turn = false;
                                return;
                            }
                        }
                    }
                    else {
                        if (clickY == pawn_white3[1]-80 && clickX == pawn_white3[0]) {
                            ctx.drawImage(pawn_white, clickX, clickY, 80, 80);
                            pawn_white3[0] = clickX;
                            pawn_white3[1] = clickY;
                            erase_White();
                            white_turn = false;
                            return;
                        }
                    }
                }
                if (userWhite_clickX == pawn_white4[0] && userWhite_clickY == pawn_white4[1]) {
                    if (pawn_white4[1] == 480) {
                        if (clickY == 320 || clickY == 400) {
                            if (clickX == pawn_white4[0]) {
                                ctx.drawImage(pawn_white, clickX, clickY, 80, 80);
                                pawn_white4[0] = clickX;
                                pawn_white4[1] = clickY;
                                erase_White();
                                white_turn = false;
                                return;
                            }
                        }
                    }
                    else {
                        if (clickY == pawn_white4[1]-80 && clickX == pawn_white4[0]) {
                            ctx.drawImage(pawn_white, clickX, clickY, 80, 80);
                            pawn_white4[0] = clickX;
                            pawn_white4[1] = clickY;
                            erase_White();
                            white_turn = false;
                            return;
                        }
                    }
                }
                if (userWhite_clickX == pawn_white5[0] && userWhite_clickY == pawn_white5[1]) {
                    if (pawn_white5[1] == 480) {
                        if (clickY == 320 || clickY == 400) {
                            if (clickX == pawn_white5[0]) {
                                ctx.drawImage(pawn_white, clickX, clickY, 80, 80);
                                pawn_white5[0] = clickX;
                                pawn_white5[1] = clickY;
                                erase_White();
                                white_turn = false;
                                return;
                            }
                        }
                    }
                    else {
                        if (clickY == pawn_white5[1]-80 && clickX == pawn_white5[0]) {
                            ctx.drawImage(pawn_white, clickX, clickY, 80, 80);
                            pawn_white5[0] = clickX;
                            pawn_white5[1] = clickY;
                            erase_White();
                            white_turn = false;
                            return;
                        }
                    }
                }
                if (userWhite_clickX == pawn_white6[0] && userWhite_clickY == pawn_white6[1]) {
                    if (pawn_white6[1] == 480) {
                        if (clickY == 320 || clickY == 400) {
                            if (clickX == pawn_white6[0]) {
                                ctx.drawImage(pawn_white, clickX, clickY, 80, 80);
                                pawn_white6[0] = clickX;
                                pawn_white6[1] = clickY;
                                erase_White();
                                white_turn = false;
                                return;
                            }
                        }
                    }
                    else {
                        if (clickY == pawn_white6[1]-80 && clickX == pawn_white6[0]) {
                            ctx.drawImage(pawn_white, clickX, clickY, 80, 80);
                            pawn_white6[0] = clickX;
                            pawn_white6[1] = clickY;
                            erase_White();
                            white_turn = false;
                            return;
                        }
                    }
                }
                if (userWhite_clickX == pawn_white7[0] && userWhite_clickY == pawn_white7[1]) {
                    if (pawn_white7[1] == 480) {
                        if (clickY == 320 || clickY == 400) {
                            if (clickX == pawn_white7[0]) {
                                ctx.drawImage(pawn_white, clickX, clickY, 80, 80);
                                pawn_white7[0] = clickX;
                                pawn_white7[1] = clickY;
                                erase_White();
                                white_turn = false;
                                return;
                            }
                        }
                    }
                    else {
                        if (clickY == pawn_white7[1]-80 && clickX == pawn_white7[0]) {
                            ctx.drawImage(pawn_white, clickX, clickY, 80, 80);
                            pawn_white7[0] = clickX;
                            pawn_white7[1] = clickY;
                            erase_White();
                            white_turn = false;
                            return;
                        }
                    }
                }
                if (userWhite_clickX == pawn_white8[0] && userWhite_clickY == pawn_white8[1]) {
                    if (pawn_white8[1] == 480) {
                        if (clickY == 320 || clickY == 400) {
                            if (clickX == pawn_white8[0]) {
                                ctx.drawImage(pawn_white, clickX, clickY, 80, 80);
                                pawn_white8[0] = clickX;
                                pawn_white8[1] = clickY;
                                erase_White();
                                white_turn = false;
                                return;
                            }
                        }
                    }
                    else {
                        if (clickY == pawn_white8[1]-80 && clickX == pawn_white8[0]) {
                            ctx.drawImage(pawn_white, clickX, clickY, 80, 80);
                            pawn_white8[0] = clickX;
                            pawn_white8[1] = clickY;
                            erase_White();
                            white_turn = false;
                            return;
                        }
                    }
                }
            }
        }
    }
}
