var canvas = document.getElementById("myCanvas");
var CTXC = canvas.getContext("2d");
var ballR = 10;
var xP = canvas.width/2;
var yP = canvas.height-30;
var dxp = 2;
var dyp = -2;
var paddleH = 10;
var paddleW = 75;
var paddleX = (canvas.width-paddleW)/2;
var rightP = false;
var leftP = false;
var brickRC = 5;
var brickCC = 3;
var brickW = 75;
var brickH = 20;
var brickP = 10;
var brickOT = 30;
var brickOL = 30;
//variable to track scoreNum
var scoreNum = 0;

var allBricks = [];
for(var c=0; c<brickCC; c++) {
  allBricks[c] = [];
  for(var r=0; r<brickRC; r++) {
    allBricks[c][r] = { xP: 0, yP: 0, status: 1 };
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
function cDetection() {
  for(var c=0; c<brickCC; c++) {
    for(var r=0; r<brickRC; r++) {
      var b = allBricks[c][r];
      if(b.status == 1) {
        if(xP > b.xP && xP < b.xP+brickW && yP > b.yP && yP < b.yP+brickH) {
          dyp = -dyp;
          b.status = 0;
          //increment the value of the scoreNum variable each time a brick collision is detected
          scoreNum++;
          //display winning message if all allBricks have been destroyed
          if(scoreNum == brickRC*brickCC) {
            alert("YOU WIN, CONGRATS!");
            document.location.reload();
            //restart game
            clearInterval(timer); // Needed for Chrome to end game
          }
        }
      }
    }
  }
}

function drawb() {
  CTXC.beginPath();
  CTXC.arc(xP, yP, ballR, 0, Math.PI*2);
  CTXC.fillStyle = "#0095DD";
  CTXC.fill();
  CTXC.closePath();
}
function drawP() {
  CTXC.beginPath();
  CTXC.rect(paddleX, canvas.height-paddleH, paddleW, paddleH);
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
//function to create and update the scoreNum display
function drawS() {
  CTXC.font = "16px Arial";
  CTXC.fillStyle = "#0095DD";
  CTXC.fillText("Score: "+scoreNum, 8, 20);
}

function drawC() {
  CTXC.clearRect(0, 0, canvas.width, canvas.height);
  drawAllB();
  drawb();
  drawP();
  //drawC scoreNum to keep the count up to date with every new frame
  drawS();
  cDetection();

  if(xP + dxp > canvas.width-ballR || xP + dxp < ballR) {
    dxp = -dxp;
  }
  if(yP + dyp < ballR) {
    dyp = -dyp;
  }
  else if(yP + dyp > canvas.height-ballR) {
    if(xP > paddleX && xP < paddleX + paddleW) {
      dyp = -dyp;
    }
    else {
      alert("GAME OVER");
      document.location.reload();
      clearInterval(timer); // Needed for Chrome to end game
    }
  }

  if(rightP && paddleX < canvas.width-paddleW) {
    paddleX += 7;
  }
  else if(leftP && paddleX > 0) {
    paddleX -= 7;
  }

  xP += dxp;
  yP += dyp;
}

var timer = setInterval(drawC, 10);