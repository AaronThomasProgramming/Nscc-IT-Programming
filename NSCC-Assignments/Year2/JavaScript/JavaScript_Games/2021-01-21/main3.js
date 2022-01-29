//IFIE script at bottom
// (function(){
//     //all code here
// })();

//window load linked to anonymous function script at top
window.onload = function(){
    //all of code here

    //get the canvas tag from the HTML DOM
    let myCanvas = document.querySelector("#myCanvas");
    //get the drawing context for the canvas
    const ctx = myCanvas.getContext("2d");

    //create a super, secret, second canvas only in memory
    const secondCanvas = document.createElement("canvas");
    const secondCtx = secondCanvas.getContext("2d");
    secondCanvas.width = myCanvas.width;
    secondCanvas.height = myCanvas.height;

    //create variables for rect x and y position
    let yPos = 0;
    let xPos = 0;

function draw(){

    //clear the canvases each time we draw
    ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
    secondCtx.clearRect(0, 0, myCanvas.width, myCanvas.height);

    //draw a rect on the canvas using the drawing context
    secondCtx.fillStyle = "#FF0000";
    secondCtx.fillRect(xPos, yPos, 10, 10);

    //update display canvas with updated contents of second canvas
    ctx.drawImage(secondCanvas, 0, 0, secondCanvas.width, secondCanvas.height);

    //increment x and y position
    xPos++;
    yPos++;

    //ask the brower for another animation frame
    requestAnimationFrame(draw);
    }
    //trigger my draw function once
    draw();

    //setInterval(draw,10);
}