/*
A typical animation loop will do the following at regular intervals:

Clear the canvas
Draw graphic objects / shapes
Move graphic shapes / objects
Go to step 1

The trick is to write a function (drawMyMonster, and at the end of this function, to 
ask the browser to call it again in 1/60th of a second if possible
*/
function drawMyMonster(x, y) {
    ctx.save();
    ctx.translate(x, y);
    ctx.strokeRect(0, 0, 100, 100);
    ctx.fillRect(20, 20, 10, 10);
    ctx.fillRect(65, 20, 10, 10);
    ctx.strokeRect(45, 40, 10, 40);   ctx.strokeRect(35, 84, 30, 10);
    ctx.fillRect(38, 84, 10, 10);
    ctx.fillRect(52, 84, 10, 10);
   ctx.restore();
}

var canvas, ctx, w, h; 
var xMonster = 10;
var yMonster = 10;
var monsterSpeed = 3;

window.onload = function init(){
    canvas = document.querySelector("#myCanvas");
    w = canvas.width;
    h = canvas.height;
    ctx = canvas.getContext('2d');

    mainLoop();
}

function mainLoop(){
    //1 clear
    ctx.clearRect(0,0,w,h);

    //2 draw
    drawMyMonster(xMonster,yMonster)

    //3 move the monster
    xMonster += monsterSpeed;
    if ((xMonster + 100> w)||(xMonster<0)) {
        monsterSpeed = -monsterSpeed;
    }

    requestAnimationFrame(mainLoop);
}

