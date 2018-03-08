window.onload=loaded;


function loaded(evt ){
	console.log("Page Loaded, the dom is ready");

	//with .querySelectorAll we take all the elements with tag "img"
	let listImages = document.querySelectorAll("img");

	listImages.forEach(function(currentImage){
		currentImage.style.border = "10px solid red"
		currentImage.style.margin = "10px";
	});
}

function addBorder(){
	console.log("Pippo");
	//seleecr first elemet with id = img1
	let img = document.querySelector("#img1")
	img.style.border = "3px solid green"
}

function resizeAllImages(){
	let listImages = document.querySelectorAll("img");
	//set some css properties
	listImages.forEach(function(currentImage){
		currentImage.width=70	
	});
}

/*
The querySelector(CSSSelector) and querySelectorAll(CSSSelector) methods introduce a 
way to use CSS selectors for requesting the DOM, any CSS
 selector can be passed as a parameter for these methods.
*/


function firstLiClassRedInUl(evt){
	//Select first li (inside tag ul) of class red
	var element = document.querySelector("ul li.red");
	element.style.color = 'red';
}

function allLisInUlOfClassNav(){
	//Underline All li in a ul of class nav
	var elements = document.querySelectorAll("ul.nav > li");
	elements.forEach(function(current){
		current.style.textDecoration = "underline";	
	});
}

/*
Old wasy

document.getElementById(identifier) returns the element which has the id “identifier”.
This is equivalent to 
document.querySelector("#identifier'); 
(just add a # before the id when using a CSS selector). 

Example: var elm = document.getElementById('myDiv'); is equivalent to 
document.querySelector('#myDiv');

document.getElementsByTagName(tagName) returns a list of elements which are named 
“tagName”. This is equivalent to document.querySelectorAll(tagName);

Example: var list = document.getElementByTagName('img'); is equivalent to 
document.querySelector('img');

document.getElementsByClassName(className) returns a list of elements which have the 
class “className”. This is equivalent to 
document.querySelectorAll('.className'); 

Example: var list = document.getElementByClassName('important'); is equivalent to 
document.querySelector('.important'); (just add a '.' before the class name when using 
a CSS selector).
*/
