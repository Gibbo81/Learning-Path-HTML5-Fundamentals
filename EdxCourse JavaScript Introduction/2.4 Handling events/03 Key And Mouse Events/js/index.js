window.onkeyup = processKeyUp;
window.addEventListener('keypress', processKeyDown);
//window.onkeydown = processKeyDown;
//Same result different method

function processKeyUp(evt){
	var k = document.querySelector('#keys');
	k.innerHTML += "keyup: " + evt.key + " code: " + evt.keyCode + "<br>"
}

function processKeyDown(evt){
	var k = document.querySelector('#keys');
	k.innerHTML += "keydown: " + evt.key + " code: " + evt.keyCode + "<br>"
}

function loaded(){
	var k = document.querySelector('#img1');
	k.addEventListener('mousemove', function(evt) {
    	console.log("mouse over image");
  	});
}