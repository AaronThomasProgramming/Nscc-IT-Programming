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
var brickRC = 5;
var brickCC = 3;
var brickW = 75;
var brickH = 20;
var brickP = 10;
var brickOT = 30;
var brickOL = 30;
var points = 0;
//variable for player trys in a single game
var trys = 3;

var allBricks = [];
for(var c=0; c<brickCC; c++) {
  allBricks[c] = [];
  for(var r=0; r<brickRC; r++) {
    allBricks[c][r] = { xP: 0, yP: 0, status: 1 };
  }
}

document.addEventListener("keydown", keyDownH, false);
document.addEventListener("keyup", keyUpH, false);
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

function mouseMH(e) {
  var relX = e.clientX - canvas.offsetLeft;
  if(relX > 0 && relX < canvas.width) {
    paddleXp = relX - paddleW/2;
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
  CTXC.rect(paddleXp, canvas.height-paddleH, paddleW, paddleH);
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
//life counter similar to points counter
function drawTries() {
  CTXC.font = "16px Arial";
  CTXC.fillStyle = "#0095DD";
  CTXC.fillText("Lives: "+trys, canvas.width-65, 20);
}

function drawC() {
  CTXC.clearRect(0, 0, canvas.width, canvas.height);
  drawAllB();
  drawB();
  drawP();
  drawPoints();
  drawTries();
  cDetect();

  if(xP + dxp > canvas.width-ballR || xP + dxp < ballR) {
    dxp = -dxp;
  }
  if(yP + dyp < ballR) {
    dyp = -dyp;
  }
  else if(yP + dyp > canvas.height-ballR) {
    if(xP > paddleXp && xP < paddleXp + paddleW) {
      dyp = -dyp;
    }
    else {
      //deincrement life if ball hits bottom wall
      trys--;
      //if no trys left game over
      if(!trys) {
        alert("GAME OVER");
        //restart game
        document.location.reload();
      }
      else {
        //reset paddle and ball position if bottom wall is hit
        xP = canvas.width/2;
        yP = canvas.height-30;
        //increase ball speed
        dxp = dxp + 5;
        dyp = dyp - 5;
        paddleXp = (canvas.width-paddleW)/2;
      }
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
  //executed every 10 miliseconds
  //sync framerate accordingly 
  //render shapes when needed
  requestAnimationFrame(drawC);
}

drawC();