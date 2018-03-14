var canvas, ctx, w, h; 

window.onload = init;

function init(){
	canvas = document.querySelector("#myCanvas");
	ctx = canvas.getContext('2d');
	//filled rectangle
	ctx.fillStyle = 'red';
	ctx.fillRect(10,10,30,30);

    // wireframe rectangle
    ctx.strokeStyle = 'green';
    ctx.lineWidth = 4;
    ctx.strokeRect(100, 40, 40, 40);
  
    // fill circle, will use current ctx.fillStyle
    ctx.beginPath();
    ctx.arc(60, 60, 10, 0, 2*Math.PI);
    ctx.fill();
  
    // some text
    ctx.fillStyle = "purple";
    ctx.font = "20px Arial";
    ctx.fillText("Hello!", 60, 20);

	drawSecondCanvas();

	canvas = document.querySelector("#MonsterCanvas");
	ctx = canvas.getContext("2d");
	w= canvas.width;
	h= canvas.height;
	drawMyMonster(100, 60);
}



function drawSecondCanvas(){
	canvas = document.querySelector("#myCanvasTwo");
	ctx = canvas.getContext("2d");
	w= canvas.width;
	h= canvas.height;
	drawFilledRectangle(10, 10, 20, 20, "green");
	drawFilledCircle(100, 100, 15, "green");
}

function drawFilledRectangle(x, y, width, height, color){
	/*When a function changes anything to the "global context": filled or stroke color, 
	  line width, or the position of the coordinate system (located by default in 0, 0, 
	  at the top left of the canvas), then it is good practice to save this context at 
	  the beginning of the function, with a call to ctx.save(), and to restore it at the
	   end of the function, with a call to ctx.restore(). In this way, any change to the
	   "global context" won't have any effect outside of the function.
	   We used also ctx.translate(x, y) in order to move the rectangle and the circle 
	   (look, they have been drawn at x=0, y=0, but as we translate the origin of the 
	   coordinate system with ctx.translate, the shapes are located in x, y on in the canvas). 
	*/
	ctx.save();

	ctx.translate(x,y);
	ctx.fillStyle=color;
	ctx.fillRect(0, 0, width, height);	
	//sing coordinates relative to 0, 0, the whole set of shapes will be translated by the 
	//call to ctx.translate(x, y)

	ctx.restore();
}

function drawFilledCircle(x, y, radius, color) {
    ctx.save();
  	ctx.translate(x, y);
  
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(0, 0, radius, 0, 2*Math.PI);
    ctx.fill();
 
    ctx.restore();
}

function drawMyMonster(x, y) {
    // draw a big monster !
    // head
    ctx.save();
    ctx.translate(x, y);
  
    ctx.strokeRect(0, 0, 100, 100);
  
    // eyes
    ctx.fillRect(20, 20, 10, 10);
    ctx.fillRect(65, 20, 10, 10);
  
    // nose
    ctx.strokeRect(45, 40, 10, 40);
  
    // mouth
   ctx.strokeRect(35, 84, 30, 10);
  
   // teeth
   ctx.fillRect(38, 84, 10, 10);
   ctx.fillRect(52, 84, 10, 10);

   ctx.restore();
}