var canvas = document.getElementById("myCanvas");
var c = canvas.getContext("2d");
//hold radius of the circle
var ballR = 10;
var xP = canvas.width/2;
var yP = canvas.height-30;
var dxp = 2;
var dyp = -2;

function drawB() {
    c.beginPath();
    //add ballR to drawB()
    c.arc(xP, yP, ballR, 0, Math.PI*2);
    c.fillStyle = "#0095DD";
    c.fill();
    c.closePath();
}

function drawC() {
    c.clearRect(0, 0, canvas.width, canvas.height);
    drawB();
    //reverse ball movement if it touches the canvas wall
    if(xP + dxp > canvas.width-ballR || xP + dxp < ballR) {
        dxp = -dxp;
    }
    if(yP + dyp > canvas.height-ballR || yP + dyp < ballR) {
        dyp = -dyp;
    }
    
    xP += dxp;
    yP += dyp;
}

setInterval(drawC, 10);