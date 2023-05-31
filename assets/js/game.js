
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext('2d');
const pawn_black = new Image();
pawn_black.src = "https://f1nnc.github.io/Playground/images/Chess_pdt60.png";
const pawn_white = new Image();
pawn_white.src = "https://f1nnc.github.io/Playground/images/Chess_plt60.png";
const white_bishop = new Image();
white_bishop.src = "https://f1nnc.github.io/Playground/images/Chess_blt60.png";
const black_bishop = new Image();
black_bishop.src = "https://f1nnc.github.io/Playground/images/Chess_bdt60.png";
const black_look = new Image();
black_look.src = "https://f1nnc.github.io/Playground/images/Chess_rdt60.png";
const white_look = new Image();
white_look.src = "https://f1nnc.github.io/Playground/images/Chess_rlt60.png";
const white_horse = new Image();
white_horse.src = "https://f1nnc.github.io/Playground/images/Chess_nlt60.png";
const black_horse = new Image();
black_horse.src = "https://f1nnc.github.io/Playground/images/Chess_ndt60.png";
const black_king_img = new Image();
black_king_img.src = "https://f1nnc.github.io/Playground/images/Chess_kdt60.png";
const black_queen_img = new Image();
black_queen_img.src = "https://f1nnc.github.io/Playground/images/Chess_qdt60.png";
const white_king_img = new Image();
white_king_img.src = "https://f1nnc.github.io/Playground/images/Chess_klt60.png";
const white_queen_img = new Image();
white_queen_img.src = "https://f1nnc.github.io/Playground/images/Chess_qlt60.png";
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
var black_bishop2 = [400, 0];
var white_bishop1 = [160, 560];
var white_bishop2 = [400, 560];
var black_horse1 = [80, 0];
var black_horse2 = [480, 0];
var white_horse1 = [80, 560];
var white_horse2 = [480, 560];
var black_look1 = [0,0];
var black_look2 = [560,0];
var white_look1 = [0,560];
var white_look2 = [560, 560];
var black_king = [240, 0];
var black_queen = [320, 0];
var white_king = [240, 560];
var white_queen = [320, 560];
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
    ctx.drawImage(white_bishop, 160, 560, 80, 80);
    ctx.drawImage(white_bishop, 400, 560, 80, 80);
    ctx.drawImage(black_bishop, 160, 0, 80, 80);
    ctx.drawImage(black_bishop, 400, 0, 80, 80);
    ctx.drawImage(black_look, black_look1[0], black_look1[1], 80, 80);
    ctx.drawImage(black_look, black_look2[0], black_look2[1], 80, 80);
    ctx.drawImage(white_look, white_look1[0], white_look1[1], 80, 80);
    ctx.drawImage(white_look, white_look2[0], white_look2[1], 80, 80);
    ctx.drawImage(white_horse, white_horse2[0], white_horse2[1], 80, 80);
    ctx.drawImage(white_horse, white_horse1[0], white_horse1[1], 80, 80);
    ctx.drawImage(black_horse, black_horse1[0], black_horse1[1], 80, 80);
    ctx.drawImage(black_horse, black_horse2[0], black_horse2[1], 80, 80);
    ctx.drawImage(black_king_img, black_king[0], black_king[1], 80, 80);
    ctx.drawImage(black_queen_img, black_queen[0], black_queen[1], 80, 80);
    ctx.drawImage(white_king_img, white_king[0], white_king[1], 80, 80);
    ctx.drawImage(white_queen_img, white_queen[0], white_queen[1], 80, 80);
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
    white_turn = true;
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
    white_turn = false;
}
function Black_validMove(a , b) {
    if (pawn_black1[0]==a && pawn_black1[1] == b) {
        return false;
    }
    if (pawn_black2[0] == a && pawn_black2[1] == b) {
        return false;
    }
    if (pawn_black3[0] == a && pawn_black3[1] == b) {
        return false;
    }
    if (pawn_black4[0] == a && pawn_black4[1] == b) {
        return false;
    }
    if (pawn_black5[0] == a && pawn_black5[1] == b) {
        return false;
    }
    if (pawn_black6[0] == a && pawn_black6[1] == b) {
        return false;
    }
    if (pawn_black7[0] == a && pawn_black7[1] == b) {
        return false;
    }
    if (pawn_black8[0] == a && pawn_black8[1] == b) {
        return false;
    }
    if (black_bishop1[0] == a && black_bishop1[1] == b) {
        return false;
    }
    if (black_bishop2[0] == a && black_bishop2[1] == b) {
        return false;
    }
    if (black_look1[0] == a && black_look1[1] == b) {
        return false;
    }
    if (black_look2[0] == a && black_look2[1] == b) {
        return false;
    }
    if (black_horse1[0] == a && black_horse1[1] == b) {
        return false;
    }
    if (black_horse2[0] == a && black_horse2[1] == b) {
        return false;
    }
    if (black_king[0] == a && black_king[1] == b) {
        return false;
    }
    if (black_queen[0] == a && black_queen[1] == b) {
        return false;
    }
}
function White_validMove(a , b) {
    if (pawn_white1[0]==a && pawn_white1[1] == b) {
        return false;
    }
    if (pawn_white2[0] == a && pawn_white2[1] == b) {
        return false;
    }
    if (pawn_white3[0] == a && pawn_white3[1] == b) {
        return false;
    }
    if (pawn_white4[0] == a && pawn_white4[1] == b) {
        return false;
    }
    if (pawn_white5[0] == a && pawn_white5[1] == b) {
        return false;
    }
    if (pawn_white6[0] == a && pawn_white6[1] == b) {
        black_click = false;
        return false;
    }
    if (pawn_white7[0] == a && pawn_white7[1] == b) {
        return false;
    }
    if (pawn_white8[0] == a && pawn_white8[1] == b) {
        return false;
    }
    if (white_bishop1[0] == a && white_bishop1[1] == b) {
        return false;
    }
    if (white_bishop2[0] == a && white_bishop2[1] == b) {
        return false;
    }
    if (white_bishop1[0] == a && white_bishop1[1] == b) {
        return false;
    }
    if (white_look1[0] == a && white_look1[1] == b) {
        return false;
    }
    if (white_look2[0] == a && white_look2[1] == b) {
        return false;
    }
    if (white_horse1[0] == a && white_horse1[1] == b) {
        return false;
    }
    if (white_horse2[0] == a && white_horse2[1] == b) {
        return false;
    }
    if (white_king[0] == a && white_king[1] == b) {
        return false;
    }
    if (white_queen[0] == a && white_queen[1] == b) {
        return false;
    }
}
function black_horse_move(c) {
    if (clickX == c[0] + 160) {
        if (clickY == c[1] + 80) {
            if (Black_validMove(c[0] + 160, c[1] + 80)) {
                
                black_click = false;
                return;
            }
            ctx.drawImage(black_horse, clickX, clickY, 80, 80);
            c[0] = clickX;
            c[1] = clickY;
            erase_Black();
            return;
        }
        if (clickY == c[1] - 80) {
            if (Black_validMove(c[0] + 160, c[1] - 80)) {
                black_click = false;
                return;
            }
            ctx.drawImage(black_horse, clickX, clickY, 80, 80);
            c[0] = clickX;
            c[1] = clickY;
            erase_Black();
            return;
        }
    }
    if (clickX == c[0] - 160) {
        if (clickY == c[1] + 80) {
            if (Black_validMove(c[0] - 160, c[1] + 80)) {
                black_click = false;
                return;
            }
            ctx.drawImage(black_horse, clickX, clickY, 80, 80);
            c[0] = clickX;
            c[1] = clickY;
            erase_Black();
            return;
        }
        if (clickY == c[1] - 80) {
            if (Black_validMove(c[0] - 160, c[1] - 80)) {
                black_click = false;
                return;
            }
            ctx.drawImage(black_horse, clickX, clickY, 80, 80);
            c[0] = clickX;
            c[1] = clickY;
            erase_Black();
            return;
        }
    }
    if (clickY == c[1] + 160) {
        if (clickX == c[0] + 80) {
            if (Black_validMove(c[0] + 80, c[1] + 160)) {
                black_click = false;
                return;
            }
            ctx.drawImage(black_horse, clickX, clickY, 80, 80);
            c[0] = clickX;
            c[1] = clickY;
            erase_Black();
            return;
        }
        if (clickX == c[0] - 80) {
            if (Black_validMove(c[0] - 80, c[1] + 160)) {
                black_click = false;
                return;
            }
            ctx.drawImage(black_horse, clickX, clickY, 80, 80);
            c[0] = clickX;
            c[1] = clickY;
            erase_Black();
            return;
        }
        else {
            black_click = false;
            return;
        }
    }
    if (clickY == c[1] - 160) {
        if (clickX == c[0] + 80) {
            if (Black_validMove(c[0] + 80, c[1] - 160)) {
                black_click = false;
                return;
            }
            ctx.drawImage(black_horse, clickX, clickY, 80, 80);
            c[0] = clickX;
            c[1] = clickY;
            erase_Black();
            return;
        }
        if (clickX == c[0] - 80) {
            if (Black_validMove(c[0] - 80, c[1] - 160)) {
                black_click = false;
                return;
            }
            ctx.drawImage(black_horse, clickX, clickY, 80, 80);
            c[0] = clickX;
            c[1] = clickY;
            erase_Black();
            return;
        }
        else {
            black_click = false;
            return;
        }
    }
    else {
        black_click = false;
        return;
    }
}
function white_horse_move(c) {
    if (clickX == c[0] + 160) {
        if (clickY == c[1] + 80) {
            if (White_validMove(c[0] + 160, c[1] + 80)) {
                white_click = false;
                return;
            }
            ctx.drawImage(white_horse, clickX, clickY, 80, 80);
            c[0] = clickX;
            c[1] = clickY;
            erase_White();
            return;
        }
        if (clickY == c[1] - 80) {
            if (White_validMove(c[0] + 160, c[1] - 80)) {
                white_click = false;
                return;
            }
            ctx.drawImage(white_horse, clickX, clickY, 80, 80);
            c[0] = clickX;
            c[1] = clickY;
            erase_White();
            return;
        }
    }
    if (clickX == c[0] - 160) {
        if (clickY == c[1] + 80) {
            if (White_validMove(c[0] - 160, c[1] + 80)) {
                white_click = false;
                return;
            }
            ctx.drawImage(white_horse, clickX, clickY, 80, 80);
            c[0] = clickX;
            c[1] = clickY;
            erase_White();
            return;
        }
        if (clickY == c[1] - 80) {
            if (White_validMove(c[0] - 160, c[1] - 80)) {
                white_click = false;
                return;
            }
            ctx.drawImage(white_horse, clickX, clickY, 80, 80);
            c[0] = clickX;
            c[1] = clickY;
            erase_White();
            return;
        }
    }
    if (clickY == c[1] + 160) {
        if (clickX == c[0] + 80) {
            if (White_validMove(c[0] + 80, c[1] + 160)) {
                white_click = false;
                return;
            }
            ctx.drawImage(white_horse, clickX, clickY, 80, 80);
            c[0] = clickX;
            c[1] = clickY;
            erase_White();
            return;
        }
        if (clickX == c[0] - 80) {
            if (White_validMove(c[0] - 80, c[1] + 160)) {
                white_click = false;
                return;
            }
            ctx.drawImage(white_horse, clickX, clickY, 80, 80);
            c[0] = clickX;
            c[1] = clickY;
            erase_White();
            return;
        }
        else {
            white_click = false;
            return;
        }
    }
    if (clickY == c[1] - 160) {
        if (clickX == c[0] + 80) {
            if (White_validMove(c[0] + 80, c[1] - 160)) {
                white_click = false;
                return;
            }
            ctx.drawImage(white_horse, clickX, clickY, 80, 80);
            c[0] = clickX;
            c[1] = clickY;
            erase_White();
            return;
        }
        if (clickX == c[0] - 80) {
            if (White_validMove(c[0] - 80, c[1] - 160)) {
                white_click = false;
                return;
            }
            ctx.drawImage(white_horse, clickX, clickY, 80, 80);
            c[0] = clickX;
            c[1] = clickY;
            erase_White();
            return;
        }
        else {
            white_click = false;
            return;
        }
    }
    else {
        black_click = false;
        return;
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
                userBlack_clickY = clickY;
            }
            if (clickX == black_bishop2[0] && clickY == black_bishop2[1]) {
                black_click = true;
                userBlack_clickX = clickX;
                userBlack_clickY = clickY;
            }
            if (clickX == black_look1[0] && clickY == black_look1[1]) {
                black_click = true;
                userBlack_clickX = clickX;
                userBlack_clickY = clickY;
            }
            if (clickX == black_look2[0] && clickY == black_look2[1]) {
                black_click = true;
                userBlack_clickX = clickX;
                userBlack_clickY = clickY;
            }
            if (clickX == black_horse1[0] && clickY == black_horse1[1]) {
                black_click = true;
                userBlack_clickX = clickX;
                userBlack_clickY = clickY;
            }
            if (clickX == black_horse2[0] && clickY == black_horse2[1]) {
                black_click = true;
                userBlack_clickX = clickX;
                userBlack_clickY = clickY;
            }
            if (clickX == black_king[0] && clickY == black_king[1]) {
                black_click = true;
                userBlack_clickX = clickX;
                userBlack_clickY = clickY;
            }
            if (clickX == black_queen[0] && clickY == black_queen[1]) {
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
            if (clickX == black_bishop1[0] && clickY == black_bishop1[1]) {
                black_click = true;
                userBlack_clickX = clickX;
                userBlack_clickY = clickY;
                return;
            }
            if (clickX == black_bishop2[0] && clickY == black_bishop2[1]) {
                black_click = true;
                userBlack_clickX = clickX;
                userBlack_clickY = clickY;
                return;
            }
            if (clickX == black_look1[0] && clickY == black_look1[1]) {
                black_click = true;
                userBlack_clickX = clickX;
                userBlack_clickY = clickY;
                return;
            }
            if (clickX == black_look2[0] && clickY == black_look2[1]) {
                black_click = true;
                userBlack_clickX = clickX;
                userBlack_clickY = clickY;
                return;
            }
            if (clickX == black_horse1[0] && clickY == black_horse1[1]) {
                black_click = true;
                userBlack_clickX = clickX;
                userBlack_clickY = clickY;
                return;
            }
            if (clickX == black_horse2[0] && clickY == black_horse2[1]) {
                black_click = true;
                userBlack_clickX = clickX;
                userBlack_clickY = clickY;
                return;
            }
            if (clickX == black_king[0] && clickY == black_king[1]) {
                black_click = true;
                userBlack_clickX = clickX;
                userBlack_clickY = clickY;
                return;
            }
            if (clickX == black_queen[0] && clickY == black_queen[1]) {
                black_click = true;
                userBlack_clickX = clickX;
                userBlack_clickY = clickY;
                return;
            }
            else {
                if (userBlack_clickX == black_king[0] && userBlack_clickY == black_king[1]) {
                    if (Black_validMove(clickX, clickY) == false) {
                        black_click = false;
                        return;
                    }
                    if (clickX == black_king[0] || clickX == black_king[0] + 80 || clickX == black_king[0] - 80) {
                        if (clickY == black_king[1] + 80 || clickY == black_king[1] - 80 || clickY == black_king[1]) {
                            ctx.drawImage(black_king_img, clickX, clickY, 80, 80);
                            black_king[0] = clickX;
                            black_king[1] = clickY;
                            erase_Black();
                            return;
                        }
                    }
                }
                if (userBlack_clickX == black_queen[0] && userBlack_clickY == black_queen[1]) {
                    for (i = 0; i< 8; i++) {
                        if (clickY == black_look1[1]) {
                            if (clickX == black_look2[0] + 80*i) {
                                for (t = 0; t < i; t++) {
                                    if (Black_validMove(black_look2[0] + 80*i - 80*t, black_look2[1]) == false) {
                                        black_click = false;
                                        return;
                                    }
                                }
                                ctx.drawImage(black_look, clickX, clickY, 80, 80);
                                black_look2[0] = clickX;
                                black_look2[1] = clickY;
                                erase_Black();
                                return;
                            }
                            if (clickX == black_look2[0] - 80*i) {
                                for (t = 0; t < i; t++) {
                                    if (Black_validMove(black_look2[0] - 80*i + 80*t, black_look2[1]) == false) {
                                        black_click = false;
                                        return;
                                    }
                                }
                                ctx.drawImage(black_look, clickX, clickY, 80, 80);
                                black_look2[0] = clickX;
                                black_look2[1] = clickY;
                                erase_Black();
                                return;
                            }
                            else {
                                black_click = false;
                                return;
                            }
                        }
                        if (clickX == black_look1[0]) {
                            if (clickY == black_look1[1] + 80*i) {
                                for (t = 0; t < i; t++) {
                                    if (Black_validMove(black_look1[0], black_look1[1] + 80*i - 80*t) == false) {
                                        black_click = false;
                                        return;
                                    }
                                }
                                ctx.drawImage(black_look, clickX, clickY, 80, 80);
                                black_look1[0] = clickX;
                                black_look1[1] = clickY;
                                erase_Black();
                                return;
                            }
                            if (clickY == black_look1[1] - 80*i) {
                                for (t = 0; t < i; t++) {
                                    if (Black_validMove(black_look1[0], black_look1[1]- 80*i + 80*t) == false) {
                                        black_click = false;
                                        return;
                                    }
                                }
                                ctx.drawImage(black_look, clickX, clickY, 80, 80);
                                black_look1[0] = clickX;
                                black_look1[1] = clickY;
                                erase_Black();
                                return;
                            }
                            else {
                                black_click = false;
                                return;
                            }
                        }
                        if (clickX == black_queen[0] + 80*i && clickY == black_queen[1] + 80*i) {
                            for (t = 0; t < i; t++) {
                                if (Black_validMove(black_queen[0] + 80*i - 80*t, black_queen[1] + 80*i - 80*t) == false) {
                                    black_click = false;
                                    return;
                                }
                            }
                            ctx.drawImage(black_queen_img, clickX, clickY, 80, 80);
                            black_queen[0] = clickX;
                            black_queen[1] = clickY;
                            erase_Black();
                            return;
                        }
                        if (clickX == black_queen[0] - 80*i && clickY == black_queen[1] + 80*i) {
                            for (t = 0; t < i; t++) {
                                if (Black_validMove(black_queen[0] - 80*i + 80*t, black_queen[1] + 80*i - 80*t) == false) {
                                    black_click = false;
                                    return;
                                }
                            }
                            ctx.drawImage(black_queen_img, clickX, clickY, 80, 80);
                            black_queen[0] = clickX;
                            black_queen[1] = clickY;
                            erase_Black();
                            return;
                        }
                        if (clickX == black_queen[0] + 80*i && clickY == black_queen[1] - 80*i) {
                            for (t = 0; t < i; t++) {
                                if (Black_validMove(black_queen[0] + 80*i - 80*t, black_queen[1] + 80*i - 80*t) == false) {
                                    black_click = false;
                                    return;
                                }
                            }
                            ctx.drawImage(black_queen_img, clickX, clickY, 80, 80);
                            black_queen[0] = clickX;
                            black_queen[1] = clickY;
                            erase_Black();
                            return;
                        }
                        if (clickX == black_queen[0] - 80*i && clickY == black_queen[1] - 80*i) {
                            for (t = 0; t < i; t++) {
                                if (Black_validMove(black_queen[0] + 80*i - 80*t, black_queen[1] + 80*i - 80*t) == false) {
                                    black_click = false;
                                    return;
                                }
                            }
                            ctx.drawImage(black_queen_img, clickX, clickY, 80, 80);
                            black_queen[0] = clickX;
                            black_queen[1] = clickY;
                            erase_Black();
                            return;
                        }
                    }
                    black_click = false;
                    return;
                }
                if (userBlack_clickX == black_horse1[0] && userBlack_clickY == black_horse1[1]) {
                    black_horse_move(black_horse1);
                }
                if (userBlack_clickX == black_horse2[0] && userBlack_clickY == black_horse2[1]) {
                    black_horse_move(black_horse2);
                }
                if (userBlack_clickX == black_bishop1[0] && userBlack_clickY == black_bishop1[1]) {
                    for (i = 0; i< 8; i++) {
                        if (clickX == black_bishop1[0] + 80*i && clickY == black_bishop1[1] + 80*i) {
                            for (t = 0; t < i; t++) {
                                if (Black_validMove(black_bishop1[0] + 80*i - 80*t, black_bishop1[1] + 80*i - 80*t) == false) {
                                    black_click = false;
                                    return;
                                }
                            }
                            ctx.drawImage(black_bishop, clickX, clickY, 80, 80);
                            black_bishop1[0] = clickX;
                            black_bishop1[1] = clickY;
                            erase_Black();
                            return;
                        }
                        if (clickX == black_bishop1[0] - 80*i && clickY == black_bishop1[1] + 80*i) {
                            for (t = 0; t < i; t++) {
                                if (Black_validMove(black_bishop1[0] + 80*i - 80*t, black_bishop1[1] + 80*i - 80*t) == false) {
                                    black_click = false;
                                    return;
                                }
                            }
                            ctx.drawImage(black_bishop, clickX, clickY, 80, 80);
                            black_bishop1[0] = clickX;
                            black_bishop1[1] = clickY;
                            erase_Black();
                            return;
                        }
                        if (clickX == black_bishop1[0] + 80*i && clickY == black_bishop1[1] - 80*i) {
                            for (t = 1; t < i; t++) {
                                if (Black_validMove(black_bishop1[0] + 80*i - 80*t, black_bishop1[1] + 80*i - 80*t) == false) {
                                    black_click = false;
                                    return;
                                }
                            }
                            ctx.drawImage(black_bishop, clickX, clickY, 80, 80);
                            black_bishop1[0] = clickX;
                            black_bishop1[1] = clickY;
                            erase_Black();
                            return;
                        }
                        if (clickX == black_bishop1[0] - 80*i && clickY == black_bishop1[1] - 80*i) {
                            for (t = 1; t < i; t++) {
                                if (Black_validMove(black_bishop1[0] + 80*i - 80*t, black_bishop1[1] + 80*i - 80*t) == false) {
                                    black_click = false;
                                    return;
                                }
                            }
                            ctx.drawImage(black_bishop, clickX, clickY, 80, 80);
                            black_bishop1[0] = clickX;
                            black_bishop1[1] = clickY;
                            erase_Black();
                            return;
                        }
                    }
                    black_click = false;
                    return;
                }
                if (userBlack_clickX == black_bishop2[0] && userBlack_clickY == black_bishop2[1]) {
                    for (i = 0; i< 8; i++) {
                        if (clickX == black_bishop2[0] + 80*i && clickY == black_bishop2[1] + 80*i) {
                            for (t = 0; t < i; t++) {
                                if (Black_validMove(black_bishop2[0] + 80*i - 80*t, black_bishop2[1] + 80*i - 80*t) == false) {
                                    black_click = false;
                                    return;
                                }
                            }
                            ctx.drawImage(black_bishop, clickX, clickY, 80, 80);
                            black_bishop2[0] = clickX;
                            black_bishop2[1] = clickY;
                            erase_Black();
                            return;
                        }
                        if (clickX == black_bishop2[0] - 80*i && clickY == black_bishop2[1] + 80*i) {
                            for (t = 0; t < i; t++) {
                                if (Black_validMove(black_bishop2[0] - 80*i + 80*t, black_bishop2[1] + 80*i - 80*t) == false) {
                                    black_click = false;
                                    return;
                                }
                            }
                            ctx.drawImage(black_bishop, clickX, clickY, 80, 80);
                            black_bishop2[0] = clickX;
                            black_bishop2[1] = clickY;
                            erase_Black();
                            return;
                        }
                        if (clickX == black_bishop2[0] + 80*i && clickY == black_bishop2[1] - 80*i) {
                            for (t = 0; t < i; t++) {
                                if (Black_validMove(black_bishop2[0] + 80*i - 80*t, black_bishop2[1] + 80*i - 80*t) == false) {
                                    black_click = false;
                                    return;
                                }
                            }
                            ctx.drawImage(black_bishop, clickX, clickY, 80, 80);
                            black_bishop2[0] = clickX;
                            black_bishop2[1] = clickY;
                            erase_Black();
                            return;
                        }
                        if (clickX == black_bishop2[0] - 80*i && clickY == black_bishop2[1] - 80*i) {
                            for (t = 0; t < i; t++) {
                                if (Black_validMove(black_bishop2[0] + 80*i - 80*t, black_bishop2[1] + 80*i - 80*t) == false) {
                                    black_click = false;
                                    return;
                                }
                            }
                            ctx.drawImage(black_bishop, clickX, clickY, 80, 80);
                            black_bishop2[0] = clickX;
                            black_bishop2[1] = clickY;
                            erase_Black();
                            return;
                        }
                    }
                    black_click = false;
                    return;
                }
                if (userBlack_clickX == black_look1[0] && userBlack_clickY == black_look1[1]) {
                    if (clickY == black_look1[1]) {
                        for (i = 0; i <8; i++) {
                            if (clickX == black_look1[0] + 80*i) {
                                for (t = 0; t < i; t++) {
                                    if (Black_validMove(black_look1[0] + 80*i - 80*t, black_look1[1]) == false) {
                                        black_click = false;
                                        return;
                                    }
                                }
                                ctx.drawImage(black_look, clickX, clickY, 80, 80);
                                black_look1[0] = clickX;
                                black_look1[1] = clickY;
                                erase_Black();
                                return;
                            }
                            if (clickX == black_look1[0] - 80*i) {
                                for (t = 0; t < i; t++) {
                                    if (Black_validMove(black_look1[0] - 80*i + 80*t, black_look1[1]) == false) {
                                        black_click = false;
                                        return;
                                    }
                                }
                                ctx.drawImage(black_look, clickX, clickY, 80, 80);
                                black_look1[0] = clickX;
                                black_look1[1] = clickY;
                                erase_Black();
                                return;
                            }
                        }
                        black_click = false;
                        return;
                    }
                    if (clickX == black_look1[0]) {
                        for (i = 0; i <8; i++) {
                            if (clickY == black_look1[1] + 80*i) {
                                for (t = 0; t < i; t++) {
                                    if (Black_validMove(black_look1[0], black_look1[1] + 80*i - 80*t) == false) {
                                        black_click = false;
                                        return;
                                    }
                                }
                                ctx.drawImage(black_look, clickX, clickY, 80, 80);
                                black_look1[0] = clickX;
                                black_look1[1] = clickY;
                                erase_Black();
                                return;
                            }
                            if (clickY == black_look1[1] - 80*i) {
                                for (t = 0; t < i; t++) {
                                    if (Black_validMove(black_look1[0], black_look1[1]- 80*i + 80*t) == false) {
                                        black_click = false;
                                        return;
                                    }
                                }
                                ctx.drawImage(black_look, clickX, clickY, 80, 80);
                                black_look1[0] = clickX;
                                black_look1[1] = clickY;
                                erase_Black();
                                return;
                            }
                        }
                        black_click = false;
                        return;
                    }
                    else {
                        black_click = false;
                        return;
                    }
                }
                if (userBlack_clickX == black_look2[0] && userBlack_clickY == black_look2[1]) {
                    if (clickY == black_look2[1]) {
                        for (i = 0; i <8; i++) {
                            if (clickX == black_look2[0] + 80*i) {
                                for (t = 0; t < i; t++) {
                                    if (Black_validMove(black_look2[0] + 80*i - 80*t, black_look2[1]) == false) {
                                        black_click = false;
                                        return;
                                    }
                                }
                                ctx.drawImage(black_look, clickX, clickY, 80, 80);
                                black_look2[0] = clickX;
                                black_look2[1] = clickY;
                                erase_Black();
                                return;
                            }
                            if (clickX == black_look2[0] - 80*i) {
                                for (t = 0; t < i; t++) {
                                    if (Black_validMove(black_look2[0] - 80*i + 80*t, black_look2[1]) == false) {
                                        black_click = false;
                                        return;
                                    }
                                }
                                ctx.drawImage(black_look, clickX, clickY, 80, 80);
                                black_look2[0] = clickX;
                                black_look2[1] = clickY;
                                erase_Black();
                                return;
                            }
                        }
                        black_click = false;
                        return;
                    }
                    if (clickX == black_look2[0]) {
                        for (i = 0; i <8; i++) {
                            if (clickY == black_look2[1] + 80*i) {
                                for (t = 0; t < i; t++) {
                                    if (Black_validMove(black_look2[0], black_look2[1] + 80*i - 80*t) == false) {
                                        black_click = false;
                                        return;
                                    }
                                }
                                ctx.drawImage(black_look, clickX, clickY, 80, 80);
                                black_look2[0] = clickX;
                                black_look2[1] = clickY;
                                erase_Black();
                                return;
                            }
                            if (clickY == black_look2[1] - 80*i) {
                                for (t = 0; t < i; t++) {
                                    if (Black_validMove(black_look2[0], black_look2[1]- 80*i + 80*t) == false) {
                                        black_click = false;
                                        return;
                                    }
                                }
                                ctx.drawImage(black_look, clickX, clickY, 80, 80);
                                black_look2[0] = clickX;
                                black_look2[1] = clickY;
                                erase_Black();
                                return;
                            }
                        }
                        black_click = false;
                        return;
                    }
                    else {
                        black_click = false;
                        return;
                    }
                }
                if (userBlack_clickX == pawn_black1[0] && userBlack_clickY == pawn_black1[1]) {
                    if (pawn_black1[1] == 80) {
                        if (clickY == 240 || clickY == 160) {
                            if (clickX == pawn_black1[0]) {
                                ctx.drawImage(pawn_black, clickX, clickY, 80, 80);
                                pawn_black1[0] = clickX;
                                pawn_black1[1] = clickY;
                                erase_Black();
                                return;
                            }
                        }
                    }
                    if (clickY == pawn_black1[1]+80 && clickX == pawn_black1[0]) {
                        ctx.drawImage(pawn_black, clickX, clickY, 80, 80);
                        pawn_black1[0] = clickX;
                        pawn_black1[1] = clickY;
                        erase_Black();
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
                                return;
                            }
                        }
                    }
                    if (clickY == pawn_black2[1]+80 && clickX == pawn_black2[0]) {
                        ctx.drawImage(pawn_black, clickX, clickY, 80, 80);
                        pawn_black2[0] = clickX;
                        pawn_black2[1] = clickY;
                        erase_Black();
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
                                return;
                            }
                        }
                    }
                    if (clickY == pawn_black3[1]+80 && clickX == pawn_black3[0]) {
                        ctx.drawImage(pawn_black, clickX, clickY, 80, 80);
                        pawn_black3[0] = clickX;
                        pawn_black3[1] = clickY;
                        erase_Black();
                        return;
                    }
                    else {
                        black_click = false;
                        return;
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
                                return;
                            }
                        }
                    }
                    if (clickY == pawn_black4[1]+80 && clickX == pawn_black4[0]) {
                        ctx.drawImage(pawn_black, clickX, clickY, 80, 80);
                        pawn_black4[0] = clickX;
                        pawn_black4[1] = clickY;
                        erase_Black();
                        return;
                    }
                    else {
                        black_click = false;
                        return;
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
                                return;
                            }
                        }
                    }
                    if (clickY == pawn_black5[1]+80 && clickX == pawn_black5[0]) {
                        ctx.drawImage(pawn_black, clickX, clickY, 80, 80);
                        pawn_black5[0] = clickX;
                        pawn_black5[1] = clickY;
                        erase_Black();
                        return;
                    }
                    else {
                        black_click = false;
                        return;
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
                                return;
                            }
                        }
                    }
                    if (clickY == pawn_black6[1]+80 && clickX == pawn_black6[0]) {
                        ctx.drawImage(pawn_black, clickX, clickY, 80, 80);
                        pawn_black6[0] = clickX;
                        pawn_black6[1] = clickY;
                        erase_Black();
                        return;
                    }
                    else {
                        black_click = false;
                        return;
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
                                return;
                            }
                        }
                    }
                    if (clickY == pawn_black7[1]+80 && clickX == pawn_black7[0]) {
                        ctx.drawImage(pawn_black, clickX, clickY, 80, 80);
                        pawn_black7[0] = clickX;
                        pawn_black7[1] = clickY;
                        erase_Black();
                        return;
                    }
                    else {
                        black_click = false;
                        return;
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
                                return;
                            }
                        }
                    }
                    if (clickY == pawn_black8[1]+80 && clickX == pawn_black8[0]) {
                        ctx.drawImage(pawn_black, clickX, clickY, 80, 80);
                        pawn_black8[0] = clickX;
                        pawn_black8[1] = clickY;
                        erase_Black();
                        return;
                    }
                    else {
                        black_click = false;
                        return;
                    }
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
            if (clickX == white_bishop1[0] && clickY == white_bishop1[1]) {
                white_click = true;
                userWhite_clickX = clickX;
                userWhite_clickY = clickY;
            }
            if (clickX == white_bishop2[0] && clickY == white_bishop2[1]) {
                white_click = true;
                userWhite_clickX = clickX;
                userWhite_clickY = clickY;
            }
            if (clickX == white_look1[0] && clickY == white_look1[1]) {
                white_click = true;
                userWhite_clickX = clickX;
                userWhite_clickY = clickY;
            }
            if (clickX == white_look2[0] && clickY == white_look2[1]) {
                white_click = true;
                userWhite_clickX = clickX;
                userWhite_clickY = clickY;
            }
            if (clickX == white_horse1[0] && clickY == white_horse1[1]) {
                white_click = true;
                userWhite_clickX = clickX;
                userWhite_clickY = clickY;
            }
            if (clickX == white_horse2[0] && clickY == white_horse2[1]) {
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
            if (clickX == white_bishop1[0] && clickY == white_bishop1[1]) {
                white_click = true;
                userWhite_clickX = clickX;
                userWhite_clickY = clickY;
                return;
            }
            if (clickX == white_bishop1[0] && clickY == white_bishop1[1]) {
                white_click = true;
                userWhite_clickX = clickX;
                userWhite_clickY = clickY;
                return;
            }
            if (clickX == white_look1[0] && clickY == white_look1[1]) {
                white_click = true;
                userWhite_clickX = clickX;
                userWhite_clickY = clickY;
                return;
            }
            if (clickX == white_look2[0] && clickY == white_look2[1]) {
                white_click = true;
                userWhite_clickX = clickX;
                userWhite_clickY = clickY;
                return;
            }
            if (clickX == white_horse1[0] && clickY == white_horse1[1]) {
                white_click = true;
                userWhite_clickX = clickX;
                userWhite_clickY = clickY;
                return;
            }
            if (clickX == white_horse1[0] && clickY == white_horse1[1]) {
                white_click = true;
                userWhite_clickX = clickX;
                userWhite_clickY = clickY;
                return;
            }
            else {
                if (userWhite_clickX == white_horse1[0] && userWhite_clickY ==  white_horse1[1]) {
                    white_horse_move(white_horse1);
                }
                if (userWhite_clickX == white_horse2[0] && userWhite_clickY ==  white_horse2[1]) {
                    white_horse_move(white_horse2);
                }
                if (userWhite_clickX == pawn_white1[0] && userWhite_clickY == pawn_white1[1]) {
                    if (pawn_white1[1] == 480) {
                        if (clickY == 320 || clickY == 400) {
                            if (clickX == pawn_white1[0]) {
                                ctx.drawImage(pawn_white, clickX, clickY, 80, 80);
                                pawn_white1[0] = clickX;
                                pawn_white1[1] = clickY;
                                erase_White();
                                return;
                            }
                        }
                    }
                    if (clickY == pawn_white1[1]-80 && clickX == pawn_white1[0]) {
                        ctx.drawImage(pawn_white, clickX, clickY, 80, 80);
                        pawn_white1[0] = clickX;
                        pawn_white1[1] = clickY;
                        erase_White();
                        return;
                    }
                    else {
                        white_click = false;
                        return;
                    }
                }
                if (userWhite_clickX == white_look1[0] && userWhite_clickY == white_look1[1]) {
                    
                    if (clickY == white_look1[1]) {
                        for (i = 0; i <8; i++) {
                            if (clickX == white_look1[0] + 80*i) {
                                for (t = 0; t < i; t++) {
                                    if (White_validMove(white_look1[0] + 80*i - 80*t, white_look1[1]) == false) {
                                        white_click = false;
                                        return;
                                    }
                                }
                                ctx.drawImage(white_look, clickX, clickY, 80, 80);
                                white_look1[0] = clickX;
                                white_look1[1] = clickY;
                                erase_White();
                                return;
                            }
                            if (clickX == white_look1[0] - 80*i) {
                                for (t = 0; t < i; t++) {
                                    if (White_validMove(white_look1[0] - 80*i + 80*t, white_look1[1]) == false) {
                                        white_click = false;
                                        return;
                                    }
                                }
                                ctx.drawImage(white_look, clickX, clickY, 80, 80);
                                white_look1[0] = clickX;
                                white_look1[1] = clickY;
                                erase_White();
                                return;
                            }
                        }
                        white_click = false;
                        return;
                    }
                    if (clickX == white_look1[0]) {
                        for (i = 0; i <8; i++) {
                            if (clickY == white_look1[1] + 80*i) {
                                for (t = 0; t < i; t++) {
                                    if (White_validMove(white_look1[0], white_look1[1] + 80*i - 80*t) == false) {
                                        white_click = false;
                                        return;
                                    }
                                }
                                ctx.drawImage(white_look, clickX, clickY, 80, 80);
                                white_look1[0] = clickX;
                                white_look1[1] = clickY;
                                erase_White();
                                return;
                            }
                            if (clickY == white_look1[1] - 80*i) {
                                for (t = 0; t < i; t++) {
                                    if (White_validMove(white_look1[0], white_look1[1]- 80*i + 80*t) == false) {
                                        white_click = false;
                                        return;
                                    }
                                }
                                ctx.drawImage(white_look, clickX, clickY, 80, 80);
                                white_look1[0] = clickX;
                                white_look1[1] = clickY;
                                erase_White();
                                return;
                            }
                        }
                        white_click = false;
                        return;
                    }
                    else {
                        white_click = false;
                        return;
                    }
                }
                if (userWhite_clickX == white_look2[0] && userWhite_clickY == white_look2[1]) {
                    for (i = 0; i <8; i++) {
                        if (clickY == white_look2[1]) {
                            if (clickX == white_look2[0] + 80*i) {
                                for (t = 0; t < i; t++) {
                                    if (White_validMove(white_look2[0] + 80*i - 80*t, white_look2[1]) == false) {
                                        white_click = false;
                                        return;
                                    }
                                }
                                ctx.drawImage(white_look, clickX, clickY, 80, 80);
                                white_look2[0] = clickX;
                                white_look2[1] = clickY;
                                erase_White();
                                return;
                            }
                            if (clickX == white_look2[0] - 80*i) {
                                for (t = 0; t < i; t++) {
                                    if (White_validMove(white_look2[0] - 80*i + 80*t, white_look2[1]) == false) {
                                        white_click = false;
                                        return;
                                    }
                                }
                                ctx.drawImage(white_look, clickX, clickY, 80, 80);
                                white_look2[0] = clickX;
                                white_look2[1] = clickY;
                                erase_White();
                                return;
                            }
                        }
                        if (clickX == white_look2[0]) {
                            if (clickY == white_look2[1] + 80*i) {
                                for (t = 0; t < i; t++) {
                                    if (White_validMove(white_look2[0], white_look2[1] + 80*i - 80*t) == false) {
                                        white_click = false;
                                        return;
                                    }
                                }
                                ctx.drawImage(white_look, clickX, clickY, 80, 80);
                                white_look2[0] = clickX;
                                white_look2[1] = clickY;
                                erase_White();
                                return;
                            }
                            if (clickY == white_look2[1] - 80*i) {
                                for (t = 0; t < i; t++) {
                                    if (White_validMove(white_look2[0], white_look2[1]- 80*i + 80*t) == false) {
                                        white_click = false;
                                        return;
                                    }
                                }
                                ctx.drawImage(white_look, clickX, clickY, 80, 80);
                                white_look2[0] = clickX;
                                white_look2[1] = clickY;
                                erase_White();
                                return;
                            }
                        }
                    }
                }
                if (userWhite_clickX == white_bishop1[0] && userWhite_clickY == white_bishop1[1]) {
                   
                    for (i = 0; i< 8; i++) {
                        if (clickX == white_bishop1[0] + 80*i && clickY == white_bishop1[1] - 80*i ) {
                            for (t = 0; t < i; t++) {
                                if (White_validMove(white_bishop1[0] + 80*i - 80*t, white_bishop1[1] - 80*i + 80*t) == false) {
                                    white_click = false;
                                    return;
                                }
                            }
                            ctx.drawImage(white_bishop, clickX, clickY, 80, 80);
                            white_bishop1[0] = clickX;
                            white_bishop1[1] = clickY;
                            erase_White();
                            return;
                        }
                        else if (clickX == white_bishop1[0] - 80*i && clickY == white_bishop1[1] + 80*i) {
                            for (t = 0; t < i; t++) {
                                if (White_validMove(white_bishop1[0] - 80*i + 80*t, white_bishop1[1] + 80*i - 80*t) == false) {
                                    white_click = false;
                                    return;
                                }
                            }
                            ctx.drawImage(white_bishop, clickX, clickY, 80, 80);
                            white_bishop1[0] = clickX;
                            white_bishop1[1] = clickY;
                            erase_White();
                            return;
                        }
                        else if (clickX == white_bishop1[0] + 80*i && clickY == white_bishop1[1] - 80*i) {
                            for (t = 0; t < i; t++) {
                                if (White_validMove(white_bishop1[0] + 80*i - 80*t, white_bishop1[1] - 80*i + 80*t) == false) {
                                    white_click = false;
                                    return;
                                }
                            }
                            ctx.drawImage(white_bishop, clickX, clickY, 80, 80);
                            white_bishop1[0] = clickX;
                            white_bishop1[1] = clickY;
                            erase_White();
                            return;
                        }
                        else if (clickX == white_bishop1[0] - 80*i && clickY == white_bishop1[1] - 80*i) {
                            for (t = 0; t < i; t++) {
                                if (White_validMove(white_bishop1[0] - 80*i + 80*t, white_bishop1[1] - 80*i + 80*t) == false) {
                                    white_click = false;
                                    return;
                                }
                            }
                            ctx.drawImage(white_bishop, clickX, clickY, 80, 80);
                            white_bishop1[0] = clickX;
                            white_bishop1[1] = clickY;
                            erase_White();
                            return;
                        }
                    }
                    white_click = false;
                    return;
                }
                if (userWhite_clickX == white_bishop2[0] && userWhite_clickY == white_bishop2[1]) {
                   
                    for (i = 0; i< 8; i++) {
                        if (clickX == white_bishop2[0] + 80*i && clickY == white_bishop2[1] - 80*i ) {
                            for (t = 0; t < i; t++) {
                                if (White_validMove(white_bishop2[0] + 80*i - 80*t, white_bishop2[1] - 80*i + 80*t) == false) {
                                    white_click = false;
                                    return;
                                }
                            }
                            ctx.drawImage(white_bishop, clickX, clickY, 80, 80);
                            white_bishop2[0] = clickX;
                            white_bishop2[1] = clickY;
                            erase_White();
                            return;
                        }
                        else if (clickX == white_bishop2[0] - 80*i && clickY == white_bishop2[1] + 80*i) {
                            for (t = 0; t < i; t++) {
                                if (White_validMove(white_bishop2[0] - 80*i + 80*t, white_bishop2[1] + 80*i - 80*t) == false) {
                                    white_click = false;
                                    return;
                                }
                            }
                            ctx.drawImage(white_bishop, clickX, clickY, 80, 80);
                            white_bishop2[0] = clickX;
                            white_bishop2[1] = clickY;
                            erase_White();
                            return;
                        }
                        else if (clickX == white_bishop2[0] + 80*i && clickY == white_bishop2[1] - 80*i) {
                            for (t = 0; t < i; t++) {
                                if (White_validMove(white_bishop2[0] + 80*i - 80*t, white_bishop2[1] - 80*i + 80*t) == false) {
                                    white_click = false;
                                    return;
                                }
                            }
                            ctx.drawImage(white_bishop, clickX, clickY, 80, 80);
                            white_bishop2[0] = clickX;
                            white_bishop2[1] = clickY;
                            erase_White();
                            return;
                        }
                        else if (clickX == white_bishop2[0] - 80*i && clickY == white_bishop2[1] - 80*i) {
                            for (t = 0; t < i; t++) {
                                if (White_validMove(white_bishop2[0] - 80*i + 80*t, white_bishop2[1] - 80*i + 80*t) == false) {
                                    white_click = false;
                                    return;
                                }
                            }
                            ctx.drawImage(white_bishop, clickX, clickY, 80, 80);
                            white_bishop2[0] = clickX;
                            white_bishop2[1] = clickY;
                            erase_White();
                            return;
                        }
                    }
                    white_click = false;
                    return;
                }
                if (userWhite_clickX == pawn_white2[0] && userWhite_clickY == pawn_white2[1]) {
                    if (pawn_white2[1] == 480) {
                        if (clickY == 320 || clickY == 400) {
                            if (clickX == pawn_white2[0]) {
                                ctx.drawImage(pawn_white, clickX, clickY, 80, 80);
                                pawn_white2[0] = clickX;
                                pawn_white2[1] = clickY;
                                erase_White();
                                return;
                            }
                        }
                    }
                    if (clickY == pawn_white2[1]-80 && clickX == pawn_white2[0]) {
                        ctx.drawImage(pawn_white, clickX, clickY, 80, 80);
                        pawn_white2[0] = clickX;
                        pawn_white2[1] = clickY;
                        erase_White();
                        return;
                    }
                    else {
                        white_click = false;
                        return;
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
                                return;
                            }
                        }
                    }
                    if (clickY == pawn_white3[1]-80 && clickX == pawn_white3[0]) {
                        ctx.drawImage(pawn_white, clickX, clickY, 80, 80);
                        pawn_white3[0] = clickX;
                        pawn_white3[1] = clickY;
                        erase_White();
                        return;
                    }
                    else {
                        white_click = false;
                        return;
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
                                return;
                            }
                        }
                    }
                    if (clickY == pawn_white4[1]-80 && clickX == pawn_white4[0]) {
                        ctx.drawImage(pawn_white, clickX, clickY, 80, 80);
                        pawn_white4[0] = clickX;
                        pawn_white4[1] = clickY;
                        erase_White();
                        return;
                    }
                    else {
                        white_click = false;
                        return;
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
                                return;
                            }
                        }
                    }
                    if (clickY == pawn_white5[1]-80 && clickX == pawn_white5[0]) {
                        ctx.drawImage(pawn_white, clickX, clickY, 80, 80);
                        pawn_white5[0] = clickX;
                        pawn_white5[1] = clickY;
                        erase_White();
                        white_turn = false;
                        return;
                    }
                    else {
                        white_click = false;
                        return;
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
                                return;
                            }
                        }
                    }
                    if (clickY == pawn_white6[1]-80 && clickX == pawn_white6[0]) {
                        ctx.drawImage(pawn_white, clickX, clickY, 80, 80);
                        pawn_white6[0] = clickX;
                        pawn_white6[1] = clickY;
                        erase_White();
                        return;
                    }
                    else {
                        white_click = false;
                        return;
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
                                return;
                            }
                        }
                    }
                    if (clickY == pawn_white7[1]-80 && clickX == pawn_white7[0]) {
                        ctx.drawImage(pawn_white, clickX, clickY, 80, 80);
                        pawn_white7[0] = clickX;
                        pawn_white7[1] = clickY;
                        erase_White();
                        return;
                    }
                    else {
                        white_click = false;
                        return;
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
                                return;
                            }
                        }
                    }
                    if (clickY == pawn_white8[1]-80 && clickX == pawn_white8[0]) {
                        ctx.drawImage(pawn_white, clickX, clickY, 80, 80);
                        pawn_white8[0] = clickX;
                        pawn_white8[1] = clickY;
                        erase_White();
                        return;
                    }
                    else {
                        white_click = false;
                        return;
                    }
                }
            }
        }
    }
}
