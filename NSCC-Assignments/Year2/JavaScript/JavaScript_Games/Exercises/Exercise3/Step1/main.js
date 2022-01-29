//store a reference to the <canvas> element to the canvas variable. 
//reate the c variable to store the 2D rendering context 
var canvas = document.getElementById("myCanvas");
var c = canvas.getContext("2d");
//print red square on the canvas.
c.beginPath();
c.rect(20, 40, 50, 50);
c.fillStyle = "#FF0000";
c.fill();
c.closePath();
//print green circle on the canvas.
c.beginPath();
c.arc(240, 160, 20, 0, Math.PI*2, false);
c.fillStyle = "green";
c.fill();
c.closePath();
//print a blue-stroked empty rectangle
c.beginPath();
c.rect(160, 10, 100, 40);
c.strokeStyle = "rgba(0, 0, 255, 0.5)";
c.stroke();
c.closePath();