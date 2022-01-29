var canvas = document.getElementById("myCanvas");
var CTXC = canvas.getContext("2d");
var ballR = 10;
var xP = canvas.width/2;
var yP = canvas.height-30;
var dxp = 2;
var dyp = -2;
var paddleH = 10;
var paddleW = 75;
var paddleXP = (canvas.width-paddleW)/2;
var rightP = false;
var leftP = false;
var brickRC = 5;
var brickCC = 3;
var brickW = 75;
var brickH = 20;
var brickP = 10;
var brickOT = 30;
var brickOL = 30;
var points = 0;

var allBricks = [];
for(var c=0; c<brickCC; c++) {
  allBricks[c] = [];
  for(var r=0; r<brickRC; r++) {
    allBricks[c][r] = { xP: 0, yP: 0, status: 1 };
  }
}

document.addEventListener("keydown", keyDownH, false);
document.addEventListener("keyup", keyUpH, false);
//event listener for mouse movement
document.addEventListener("mousemove", mouseMH, false);

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
//handler function to update the paddle position based on the pointer coordinates
function mouseMH(e) {
  //xP value equal to mouse position
  var relX = e.clientX - canvas.offsetLeft;
  //paddle will now follow the position horizontaly of the mouse cursor up to canvas walls
  if(relX > 0 && relX < canvas.width) {
    paddleXP = relX - paddleW/2;
  }
}
function cDetect() {
  for(var c=0; c<brickCC; c++) {
    for(var r=0; r<brickRC; r++) {
      var b = allBricks[c][r];
      if(b.status == 1) {
        if(xP > b.xP && xP < b.xP+brickW && yP > b.yP && yP < b.yP+brickH) {
          dyp = -dyp;
          b.status = 0;
          points++;
          if(points == brickRC*brickCC) {
            alert("YOU WIN, CONGRATS!");
            document.location.reload();
            clearInterval(timer); // Needed for Chrome to end game
          }
        }
      }
    }
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
  CTXC.rect(paddleXP, canvas.height-paddleH, paddleW, paddleH);
  CTXC.fillStyle = "#0095DD";
  CTXC.fill();
  CTXC.closePath();
}
function drawAllB() {
  for(var c=0; c<brickCC; c++) {
    for(var r=0; r<brickRC; r++) {
      if(allBricks[c][r].status == 1) {
        var bX = (r*(brickW+brickP))+brickOL;
        var bY = (c*(brickH+brickP))+brickOT;
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
function drawPoints() {
  CTXC.font = "16px Arial";
  CTXC.fillStyle = "#0095DD";
  CTXC.fillText("Score: "+points, 8, 20);
}

function drawC() {
  CTXC.clearRect(0, 0, canvas.width, canvas.height);
  drawAllB();
  drawB();
  drawP();
  drawPoints();
  cDetect();

  if(xP + dxp > canvas.width-ballR || xP + dxp < ballR) {
    dxp = -dxp;
  }
  if(yP + dyp < ballR) {
    dyp = -dyp;
  }
  else if(yP + dyp > canvas.height-ballR) {
    if(xP > paddleXP && xP < paddleXP + paddleW) {
      dyp = -dyp;
    }
    else {
      alert("GAME OVER");
      document.location.reload();
      clearInterval(timer); // Needed for Chrome to end game
    }
  }

  if(rightP && paddleXP < canvas.width-paddleW) {
    paddleXP += 7;
  }
  else if(leftP && paddleXP > 0) {
    paddleXP -= 7;
  }

  xP += dxp;
  yP += dyp;
}

var timer = setInterval(drawC, 10);