var canvas = document.getElementById("myCanvas");
var c = canvas.getContext("2d");
var ballR = 10;
var xP = canvas.width/2;
var yP = canvas.height-30;
var dxp = 2;
var dyp = -2;
var paddleH = 10;
var paddleW = 75;
var paddleP = (canvas.width-paddleW)/2;
var rightP = false;
var leftP = false;

document.addEventListener("keydown", keyDownH, false);
document.addEventListener("keyup", heyUpH, false);

function keyDownH(e) {
    if(e.key == "Right" || e.key == "ArrowRight") {
        rightP = true;
    }
    else if(e.key == "Left" || e.key == "ArrowLeft") {
        leftP = true;
    }
}

function heyUpH(e) {
    if(e.key == "Right" || e.key == "ArrowRight") {
        rightP = false;
    }
    else if(e.key == "Left" || e.key == "ArrowLeft") {
        leftP = false;
    }
}

function drawB() {
    c.beginPath();
    c.arc(xP, yP, ballR, 0, Math.PI*2);
    c.fillStyle = "#0095DD";
    c.fill();
    c.closePath();
}
function drawP() {
    c.beginPath();
    c.rect(paddleP, canvas.height-paddleH, paddleW, paddleH);
    c.fillStyle = "#0095DD";
    c.fill();
    c.closePath();
}

function drawC() {
    c.clearRect(0, 0, canvas.width, canvas.height);
    drawB();
    drawP();
    
    if(xP + dxp > canvas.width-ballR || xP + dxp < ballR) {
        dxp = -dxp;
    }
    //remove collision from bottom wall
    if(yP + dyp < ballR) {
        dyp = -dyp;
    }
    //if ball hits paddle reverse xP values
    else if(yP + dyp > canvas.height-ballR) {
        if(xP > paddleP && xP < paddleP + paddleW) {
            dyp = -dyp;
        }
        else {
            //if ball hits bottom wall trigger alert
            alert("GAME OVER");
            document.location.reload();
            //restart game
            clearInterval(interval); // Needed for Chrome to end game
        }
    }
    
    if(rightP && paddleP < canvas.width-paddleW) {
        paddleP += 7;
    }
    else if(leftP && paddleP > 0) {
        paddleP -= 7;
    }
    
    xP += dxp;
    yP += dyp;
}

var interval = setInterval(drawC, 10);