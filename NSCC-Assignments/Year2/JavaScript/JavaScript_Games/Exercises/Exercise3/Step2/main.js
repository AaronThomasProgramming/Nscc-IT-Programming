var canvas = document.getElementById("myCanvas");
var c = canvas.getContext("2d");
var xP = canvas.width/2;
var yP = canvas.height-30;
//ball speed variables
var dxp = 2;
var dyp = -2;
//drawP the ball in its own function
function drawBall() {
    c.beginPath();
    c.arc(xP, yP, 10, 0, Math.PI*2);
    c.fillStyle = "#0095DD";
    c.fill();
    c.closePath();
}
//The drawP() function will be executed within setInterval every 10 milliseconds:
function drawP() {
    //remove ball to give the illusion that it's moving
    c.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    //add a small value to xP and yP after every frame has 
    //been drawn to make it appear that the ball is moving
    xP += dxp;
    yP += dyp;
}

setInterval(drawP, 10);