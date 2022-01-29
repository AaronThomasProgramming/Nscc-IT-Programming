var canvas = document.getElementById("myCanvas");
var CTXC = canvas.getContext("2d");
var ballR = 10;
var xP = canvas.width/2;
var yP = canvas.height-30;
var dxp = 2;
var dyp = -2;
var paddleH = 10;
var paddleW = 75;
var paddleXp = (canvas.width-paddleW)/2;
var rightP = false;
var leftP = false;
//brick variables
var brickRC = 3;
var brickCC = 5;
var brickW = 75;
var brickH = 20;
var brickP = 10;
var brickOT = 30;
var brickOL = 30;
//hold all allBricks in 2d array
//xP and yP values determine where allBricks get placed
var allBricks = [];
for(var c=0; c<brickCC; c++) {
    allBricks[c] = [];
    for(var r=0; r<brickRC; r++) {
        allBricks[c][r] = { xP: 0, yP: 0 };
    }
}

document.addEventListener("keydown", keyDownH, false);
document.addEventListener("keyup", keyUpH, false);

function keyDownH(e) {
    if(e.key == "Right" || e.key == "ArrowRight") {
        rightP = true;
    }
    else if(e.key == "Left" || e.key == "ArrowLeft") {
        leftP = true;
    }
}

function keyUpH(e) {
    if(e.key == "Right" || e.key == "ArrowRight") {
        rightP = false;
    }
    else if(e.key == "Left" || e.key == "ArrowLeft") {
        leftP = false;
    }
}

function drawB() {
    CTXC.beginPath();
    CTXC.arc(xP, yP, ballR, 0, Math.PI*2);
    CTXC.fillStyle = "#0095DD";
    CTXC.fill();
    CTXC.closePath();
}
function drawP() {
    CTXC.beginPath();
    CTXC.rect(paddleXp, canvas.height-paddleH, paddleW, paddleH);
    CTXC.fillStyle = "#0095DD";
    CTXC.fill();
    CTXC.closePath();
}
//function to loop through brick 2d array and drawC them on screen
function drawAllBricks() {
    for(var c=0; c<brickCC; c++) {
        for(var r=0; r<brickRC; r++) {
            //postion of allBricks for each loop iteration
            //allBricks drawn offset from canvas edges with padding in between them
            var bX = (c*(brickW+brickP))+brickOL;
            var bY = (r*(brickH+brickP))+brickOT;
            allBricks[c][r].xP = bX;
            allBricks[c][r].yP = bY;
            //drawC and fill allBricks
            CTXC.beginPath();
            CTXC.rect(bX, bY, brickW, brickH);
            CTXC.fillStyle = "#0095DD";
            CTXC.fill();
            CTXC.closePath();
        }
    }
}

function drawC() {
    CTXC.clearRect(0, 0, canvas.width, canvas.height);
    //drawC allBricks
    drawAllBricks();
    drawB();
    drawP();
    
    if(xP + dxp > canvas.width-ballR || xP + dxp < ballR) {
        dxp = -dxp;
    }
    if(yP + dyp < ballR) {
        dyp = -dyp;
    }
    else if(yP + dyp > canvas.height-ballR) {
        if(xP > paddleXp && xP < paddleXp + paddleW) {
           if(yP= yP-paddleH){
            dyp = -dyp  ;
			 }
        }
        else {
            alert("GAME OVER");
            document.location.reload();
            clearInterval(interval); // Needed for Chrome to end game
        }
    }
    
    if(rightP && paddleXp < canvas.width-paddleW) {
        paddleXp += 7;
    }
    else if(leftP && paddleXp > 0) {
        paddleXp -= 7;
    }
    
    xP += dxp;
    yP += dyp;
}

var interval = setInterval(drawC, 10);