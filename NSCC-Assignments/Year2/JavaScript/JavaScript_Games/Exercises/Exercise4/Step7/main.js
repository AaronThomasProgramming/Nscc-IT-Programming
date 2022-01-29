var canvas = document.getElementById("myCanvas");
var CTXC = canvas.getContext("2d");
var ballR = 10;
var xP = canvas.width / 2;
var yP = canvas.height - 30;
var dxp = 2;
var dyp = -2;
var paddleH = 10;
var paddleW = 75;
var paddleXp = (canvas.width - paddleW) / 2;
var rightP = false;
var leftP = false;
var brickRC = 3;
var brickCC = 5;
var brickW = 75;
var brickH = 20;
var brickP = 10;
var brickOT = 30;
var brickOL = 30;

var allBricks = [];
for (var c = 0; c < brickCC; c++) {
    allBricks[c] = [];
    //parameters to determine if brick should be drawn or not
    for (var r = 0; r < brickRC; r++) {
        allBricks[c][r] = { xP: 0, yP: 0, status: 1 };
    }
}

document.addEventListener("keydown", keyDownH, false);
document.addEventListener("keyup", keyUpH, false);

function keyDownH(e) {
    if (e.key == "Right" || e.key == "ArrowRight") {
        rightP = true;
    }
    else if (e.key == "Left" || e.key == "ArrowLeft") {
        leftP = true;
    }
}

function keyUpH(e) {
    if (e.key == "Right" || e.key == "ArrowRight") {
        rightP = false;
    }
    else if (e.key == "Left" || e.key == "ArrowLeft") {
        leftP = false;
    }
}
//function to detect collision with ball and allBricks
function cDetection() {
    for (var c = 0; c < brickCC; c++) {
        for (var r = 0; r < brickRC; r++) {
            //store each brick in "b"
            var b = allBricks[c][r];
            if (b.status == 1) {
                //if ball hits brick reverse yP values
                if (xP > b.xP && xP < b.xP + brickW && yP > b.yP && yP < b.yP + brickH) {
                    dyp = -dyp;
                    //change var to 0 to not drawC brick after collision
                    b.status = 0;
                }
            }
        }
    }
}
function drawB() {
    CTXC.beginPath();
    CTXC.arc(xP, yP, ballR, 0, Math.PI * 2);
    CTXC.fillStyle = "#0095DD";
    CTXC.fill();
    CTXC.closePath();
}
function drawP() {
    CTXC.beginPath();
    CTXC.rect(paddleXp, canvas.height - paddleH, paddleW, paddleH);
    CTXC.fillStyle = "#0095DD";
    CTXC.fill();
    CTXC.closePath();
}
function drawAllBricks() {
    for (var c = 0; c < brickCC; c++) {
        for (var r = 0; r < brickRC; r++) {
            //if status == 1 drawC brick
            if (allBricks[c][r].status == 1) {
                var bX = (c * (brickW + brickP)) + brickOL;
                var bY = (r * (brickH + brickP)) + brickOT;
                allBricks[c][r].xP = bX;
                allBricks[c][r].yP = bY;
                CTXC.beginPath();
                CTXC.rect(bX, bY, brickW, brickH);
                CTXC.fillStyle = "#0095DD";
                CTXC.fill();
                CTXC.closePath();
            }
        }
    }
}

function drawC() {
    CTXC.clearRect(0, 0, canvas.width, canvas.height);
    drawAllBricks();
    drawB();
    drawP();
    //activate collision detection
    cDetection();

    if (xP + dxp > canvas.width - ballR || xP + dxp < ballR) {
        dxp = -dxp;
    }
    if (yP + dyp < ballR) {
        dyp = -dyp;
    }
    else if (yP + dyp > canvas.height - ballR) {
        if (xP > paddleXp && xP < paddleXp + paddleW) {
            if (yP = yP - paddleH) {
                dyp = -dyp;
            }
        }
        else {
            alert("GAME OVER");
            document.location.reload();
            clearInterval(interval); // Needed for Chrome to end game
        }
    }

    if (rightP && paddleXp < canvas.width - paddleW) {
        paddleXp += 7;
    }
    else if (leftP && paddleXp > 0) {
        paddleXp -= 7;
    }

    xP += dxp;
    yP += dyp;
}

var interval = setInterval(drawC, 10);