var canvas = document.getElementById("myCanvas");
var c = canvas.getContext("2d");
var ballR = 10;
var xP = canvas.width/2;
var yP = canvas.height-30;
var dxp = 2;
var dyp = -2;
//variables for paddle
var paddleH = 10;
var paddleW = 75;
var paddleP = (canvas.width-paddleW)/2;
//boolean for if arrow keys are pressed
var rightP = false;
var leftP = false;
//event listeners to detect key presses
document.addEventListener("keydown", keyDownH, false);
document.addEventListener("keyup", keyUpH, false);
//fire function if right or left keys are being pressed
function keyDownH(e) {
    if(e.key == "Right" || e.key == "ArrowRight") {
        rightP = true;
    }
    else if(e.key == "Left" || e.key == "ArrowLeft") {
        leftP = true;
    }
}
//fire function if right or left keys are not being pressed
function keyUpH(e) {
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
//function to drawC paddle on screen
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
    //drawC the paddle on the canvas
    drawP();
    
    if(xP + dxp > canvas.width-ballR || xP + dxp < ballR) {
        dxp = -dxp;
    }
    if(yP + dyp > canvas.height-ballR || yP + dyp < ballR) {
        dyp = -dyp;
    }
    //if right arrow key is pressed move paddle right
    if(rightP) {
        paddleP += 7;
        if (paddleP + paddleW > canvas.width){
            paddleP = canvas.width - paddleW;
        }
    }
    //if left arrow key is pressed move paddle left
    else if(leftP) {
        paddleP -= 7;
        if (paddleP < 0){
            paddleP = 0;
        }
    }
    
    xP += dxp;
    yP += dyp;
}

setInterval(drawC, 10);