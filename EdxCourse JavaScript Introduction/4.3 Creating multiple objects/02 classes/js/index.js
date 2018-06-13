//classes Js6 - same result better sintax!!!
//classes must start with capitalized letter
class Hero{
	//THERE CAN BE ONLY ONE CONSTRUCTOR in the class
	constructor(name, side){
		this.name=name;
		this.side=side;
	}
	//function keyword not needed
	speak(){
		return "name: " + this.name + " works for: " + this.side;
	}
}

let ian = new Hero('Ian Solo', 'Rebels')
let luke = new Hero('Luke', 'Rebels')
let bobba = new Hero('Boba Fett', 'Empire')

console.log(ian);
console.log(luke);
console.log(bobba);

function makeHeroesSpeak(){
	document.body.innerHTML += ian.speak();
	document.body.innerHTML += luke.speak();
	document.body.innerHTML += bobba.speak();
}

/*
Unlike functions, classes must be declared BEFORE using them
function declarations are "hoisted" and class declarations are not. This means that 
you can call a function BEFORE it has been declared in your source code. This is not 
the case with ES6 classes!
Hoisting is JavaScript's default behavior of moving declarations to the top.
*/




