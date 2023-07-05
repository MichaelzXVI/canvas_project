// >>>>>>>>>>>>>> Rectangle exercise >>>>>>>>>>>>>>>>>

const canvas = document.getElementById("rectangle");
const ctx = canvas.getContext("2d");

// black
ctx.beginPath();
ctx.lineWidth = "200";
ctx.strokeStyle = "black";
ctx.fillStyle = "black";
ctx.rect(5, 5, 290, 290); // x, y, width, and height
ctx.stroke();
// white
ctx.beginPath();
ctx.lineWidth = "3";
ctx.rect(125, 125, 50, 50);
ctx.stroke();

// >>>>>>>>>>>>>> Circle exercise >>>>>>>>>>>>>>>>>

const circleCanvas = document.getElementById("circle");
const circleCtx = circleCanvas.getContext("2d");

circleCtx.beginPath();
circleCtx.arc(150, 150, 100, 0, 2 * Math.PI); // x y w h
circleCtx.lineWidth = "5";
circleCtx.strokeStyle = "red";
circleCtx.stroke();

// >>>>>>>>>>>>>> Rectangle-intersecting exercise >>>>>>>>>>>>>>>>>

const rectTwo = document.getElementById("rectwo");
const twoCtx = rectTwo.getContext("2d");

//blue
twoCtx.beginPath();
twoCtx.rect(50, 50, 100, 80); // x y width height
twoCtx.globalAlpha = 0.6;
twoCtx.fillStyle = "blue";
twoCtx.fill();

//blue
twoCtx.beginPath();
twoCtx.rect(100, 100, 100, 80); // x y width height
twoCtx.globalAlpha = 0.6;
twoCtx.fillStyle = "red";
twoCtx.fill();

// >>>>>>>>>>>>>> Triangle exercise >>>>>>>>>>>>>>>>>

const tAngle = document.getElementById("triangle");
const triCtx = tAngle.getContext("2d");

triCtx.beginPath();
triCtx.moveTo(50, 50);
triCtx.lineTo(50, 150);
triCtx.lineTo(150, 150);
triCtx.closePath();

triCtx.fill();

// >>>>>>>>>>> Diagonal circle >>>>>>>>>>>>>>>>>>>

const diagonal = document.getElementById("d_circle");
const diactx = diagonal.getContext("2d");

diactx.beginPath();
diactx.arc(250, 250, 15, 0, 2 * Math.PI); // x y w h
diactx.lineWidth = "1.5";
diactx.strokeStyle = "black";
diactx.stroke();
diactx.globalAlpha = "0.8";
diactx.fillStyle = "black";
diactx.fill();

diactx.beginPath();
diactx.arc(210, 210, 15, 0, 2 * Math.PI); // x y w h
diactx.lineWidth = "1.5";
diactx.strokeStyle = "black";
diactx.stroke();
diactx.globalAlpha = "0.7";
diactx.fillStyle = "black";
diactx.fill();

diactx.beginPath();
diactx.arc(170, 170, 15, 0, 2 * Math.PI); // x y w h
diactx.lineWidth = "1.5";
diactx.strokeStyle = "black";
diactx.stroke();
diactx.globalAlpha = "0.5";
diactx.fillStyle = "black";
diactx.fill();

diactx.beginPath();
diactx.arc(130, 130, 15, 0, 2 * Math.PI); // x y w h
diactx.lineWidth = "1.5";
diactx.strokeStyle = "black";
diactx.stroke();
diactx.globalAlpha = "0.4";
diactx.fillStyle = "black";
diactx.fill();

diactx.beginPath();
diactx.arc(90, 90, 15, 0, 2 * Math.PI); // x y w h
diactx.lineWidth = "1.5";
diactx.strokeStyle = "black";
diactx.stroke();
diactx.globalAlpha = "0.2";
diactx.fillStyle = "black";
diactx.fill();

diactx.beginPath();
diactx.arc(50, 50, 15, 0, 2 * Math.PI); // x y w h
diactx.lineWidth = "1.5";
diactx.strokeStyle = "black";
diactx.stroke();
diactx.globalAlpha = "0.0";
diactx.fillStyle = "black";
diactx.fill();

// >>>>>>>>>>>>>>>> smile >>>>>>>>>>>>>>

const smiley = document.getElementById("smile");
const context = smiley.getContext("2d");

// head
context.beginPath();
context.arc(150, 150, 100, 0, 2 * Math.PI);
context.strokeStyle = "black";
context.lineWidth = 2;
context.stroke();

//eyes
context.beginPath();
context.arc(110, 120, 10, 0, 2 * Math.PI);
context.lineWidth = "1";
context.strokeStyle = "black";
context.stroke();

context.beginPath();
context.arc(190, 120, 10, 0, 2 * Math.PI);
context.lineWidth = "1";
context.strokeStyle = "black";
context.stroke();

// mouth
context.beginPath();
context.arc(150, 170, 40, 0.1 * Math.PI, 0.9 * Math.PI);
context.lineWidth = 1;
context.stroke();
