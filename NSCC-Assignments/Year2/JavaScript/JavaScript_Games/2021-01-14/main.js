window.onload = function(){
    //get canvas tag from index.html
    //var canvas = document.getElementById("myCanvas"); .getElementsByClassName("HighLightMe"), .getElementByTagName("p")
    var canvas = document.querySelector("#myCanvas");
    //get the 2d drawing from the canvas
    var ctx = canvas.getContext("2d");
    //draw rectangle on the canvas using the drawing context
    ctx.fillStyle = "#FF0000";
    ctx.fillRect(0, 0, 150, 75);
    //draw a line
    ctx.moveTo(0, 0);
    ctx.lineTo(200, 100);
    ctx.stroke();
    //draw a circle
    ctx.beginPath();
    ctx.arc(95, 50, 40, 0, 2 * Math.PI);
    //ctx.stroke();
    ctx.fillStyle = "yellow";
    ctx.fill();
}