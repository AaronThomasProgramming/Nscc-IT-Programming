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
    //create variables for rect x and y position
    let yPos = 0;
    let xPos = 0;

function draw(){

    //clear the canvas each time we draw
    ctx.clearRect(0, 0, myCanvas.width, myCanvas.height)

    //draw a rect on the canvas using the drawing context
    ctx.fillStyle = "#FF0000"
    ctx.fillRect(xPos, yPos, 10, 10);

    //increment x and y position
    xPos++;
    yPos++;
    }

    setInterval(draw,10);


};