window.onload=loaded;
//bettere than onload inside <body> to keept separatiobn beteween js and html

window.onresize=resize;

/*
This event occurs when an object has loaded (including all its resources: images, etc.).
This event is very useful when you want to run JS code and be sure that the DOM is 
ready (in other words, be sure that a document.getElementById(...) or 
document.querySelector(...) will not raise an error because the document has not been 
loaded and elements you are looking for are not ready).
*/
function loaded(evt ){
	var t = document.querySelector("#all");
	console.log(t);

	t.addEventListener('click', function(evt) {
    console.log("x = " + evt.clientX);
  });
}
/*
Usually, the load event listener corresponds to a JavaScript function that can be seen 
as "the main" function of your Web application. It is a best practice to start 
everything after the page has been completely loaded
*/

function resize(evt ){
	console.log("Window resized!!");
}