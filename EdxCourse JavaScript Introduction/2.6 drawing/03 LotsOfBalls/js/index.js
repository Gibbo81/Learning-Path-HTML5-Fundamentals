var canvas, ctx, w, h; 

var balls = []; 

var player = {
  x:10,
  y:10,
  width:20,
  height:20,
  color:'red'
}

window.onload = function init() {
    canvas = document.querySelector("#myCanvas");
  
    w = canvas.width; 
    h = canvas.height;  
  
    ctx = canvas.getContext('2d');
  
    balls = createBalls(10);
    mainLoop();
};

function mainLoop() {
  // 1 - clear the canvas
  ctx.clearRect(0, 0, w, h);
  
  // draw the ball and the player
  drawFilledRectangle(player);
  drawAllBalls(balls);

  // animate the ball that is bouncing all over the walls
  moveAllBalls(balls)
  
  // ask for a new animation frame
  requestAnimationFrame(mainLoop);
}

function createBalls(n) {
  // empty array
  var ballArray = [];
  
  // create n balls
  for(var i=0; i < n; i++) {
     var b = {
        x:w/2,
        y:h/2,
        radius: 5 + 30 * Math.random(), // between 5 and 35
        speedX: -5 + 10 * Math.random(), // between -5 and + 5
        speedY: -5 + 10 * Math.random(), // between -5 and + 5
        color:getARandomColor(),
      }
     // add ball b to the array
     ballArray.push(b);
    }
  // returns the array full of randomly created balls
  return ballArray;
}

function getARandomColor() {
  var colors = ['red', 'blue', 'cyan', 'purple', 'pink', 'green', 'yellow'];
  // a value between 0 and color.length-1
  // Math.round = rounded value
  // Math.random() a value between 0 and 1
  var colorIndex = Math.round((colors.length-1)*Math.random()); 
  var c = colors[colorIndex];
  return c;
}

function drawAllBalls(ballArray) {
    ballArray.forEach(function(b) {
      drawFilledCircle(b);
    });
}

function moveAllBalls(ballArray) {
  ballArray.forEach(function(b) {
      b.x += b.speedX;
      b.y += b.speedY;
  
      testCollisionBallWithWalls(b); 
  });
}

function testCollisionBallWithWalls(b) {
    // COLLISION WITH VERTICAL WALLS ?
    if((b.x + b.radius) > w) {
    // the ball hit the right wall
    // change horizontal direction
    b.speedX = -b.speedX;
    
    // put the ball at the collision point
    b.x = w - b.radius;
  } else if((b.x -b.radius) < 0) {
    // the ball hit the left wall
    // change horizontal direction
    b.speedX = -b.speedX;
    
    // put the ball at the collision point
    b.x = b.radius;
  }
  
  // COLLISIONS WTH HORIZONTAL WALLS ?
  // Not in the else as the ball can touch both
  // vertical and horizontal walls in corners
  if((b.y + b.radius) > h) {
    // the ball hit the right wall
    // change horizontal direction
    b.speedY = -b.speedY;
    
    // put the ball at the collision point
    b.y = h - b.radius;
  } else if((b.y -b.radius) < 0) {
    // the ball hit the left wall
    // change horizontal direction
    b.speedY = -b.speedY;
    
    // put the ball at the collision point
    b.Y = b.radius;
  }  
}

function drawFilledRectangle(r) {
    ctx.save();
    ctx.translate(r.x, r.y);
    ctx.fillStyle = r.color;
    ctx.fillRect(0, 0, r.width, r.height);
    ctx.restore();
}

function drawFilledCircle(c) {
    // GOOD practice: save the context, use 2D trasnformations
    ctx.save();
  
    // translate the coordinate system, draw relative to it
    ctx.translate(c.x, c.y);
  
    ctx.fillStyle = c.color;
    // (0, 0) is the top left corner of the monster.
    ctx.beginPath();
    ctx.arc(0, 0, c.radius, 0, 2*Math.PI);
    ctx.fill();
 
    // GOOD practice: restore the context
    ctx.restore();
}