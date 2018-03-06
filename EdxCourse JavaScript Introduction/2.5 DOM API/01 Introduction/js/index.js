window.onload=loaded;


function loaded(evt ){
	console.log("Page Loaded, the dom is ready");

	//with .querySelectorAll we take all the elemts with tag "img"
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



