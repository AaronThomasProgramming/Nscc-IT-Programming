//IFIE script at bottom
// (function(){
//     //all code here
// })();

//window load linked to anonymous function script at top
window.onload = function(){
    //all of code here
    const xOffElement = document.querySelector("#xOff");
    const yOffElement = document.querySelector("#yOff");

    //get the canvas tag from the HTML DOM
    let myCanvas = document.querySelector("#myCanvas");
    //get the drawing context for the canvas
    const ctx = myCanvas.getContext("2d");
    //create variables for rect x and y position
    let yPos = 0;
    let xPos = 0;
    let xOffset = 0;
    let yOffset = 0;

function draw(){

    //clear the canvas each time we draw
    ctx.clearRect(0, 0, myCanvas.width, myCanvas.height)

    //draw a rect on the canvas using the drawing context
    ctx.fillStyle = "#FF0000"
    ctx.fillRect(xPos, yPos, 10, 10);

    //increment x and y position
    xPos+= xOffset;
    yPos+= yOffset;

    //report current x and y offset to the webpage
    xOffElement.innerHTML = xOffset;
    yOffElement.innerHTML = yOffset;

    //ask the brower for another animation frame
    requestAnimationFrame(draw);
    }
    //trigger my draw function once
    draw();

    //create a keyDownHandler function to handle new keypresses
    function keyDownHandler(e){
        if(e.key === "Down" || e.key === "ArrowDown"){
            yOffset = 1;
        }
        else if(e.key === "Up" || e.key === "ArrowUp"){
            yOffset = -1;
        }
        else if(e.key === "Left" || e.key === "ArrowLeft"){
            xOffset = -1;
        }
        else if(e.key === "Right" || e.key === "ArrowRight"){
            xOffset = 1;
        } 
    }
    function keyUpHandler(e){
        if(e.key === "Down" || e.key === "ArrowDown" || e.key === "Up" || e.key === "ArrowUp"){
            yOffset = 0;
        }
        else if(e.key === "Up" || e.key === "ArrowUp"|| e.key === "Down" || e.key === "ArrowDown"){
            yOffset = 0;
        }
        else if(e.key === "Left" || e.key === "ArrowLeft"|| e.key === "Right" || e.key === "ArrowRight"){
            xOffset = 0;
        }
        else if(e.key === "Right" || e.key === "ArrowRight"|| e.key === "Left" || e.key === "ArrowLeft"){
            xOffset = 0;
        } 
    }
    function keyLeftHandler(e){
        if(e.key === "Down" || e.key === "ArrowDown"){
            yOffset = 1;
        }
        else if(e.key === "Up" || e.key === "ArrowUp"){
            yOffset = -1;
        }
        else if(e.key === "Left" || e.key === "ArrowLeft"){
            xOffset = -1;
        }
        else if(e.key === "Right" || e.key === "ArrowRight"){
            xOffset = 1;
        } 
    }
    function keyRightHandler(e){
        if(e.key === "Down" || e.key === "ArrowDown"){
            yOffset = 1;
        }
        else if(e.key === "Up" || e.key === "ArrowUp"){
            yOffset = -1;
        }
        else if(e.key === "Left" || e.key === "ArrowLeft"){
            xOffset = -1;
        }
        else if(e.key === "Right" || e.key === "ArrowRight"){
            xOffset = 1;
        } 
    }

    //bind a handler function to the keydown event
    document.addEventListener('keydown', keyDownHandler);
    document.addEventListener('keyup', keyUpHandler);


};