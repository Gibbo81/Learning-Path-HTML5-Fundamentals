//constructor function from JS5 (old way)


//by convantion capital letter 'Hero'
function Hero(name, side){
	this.name = name;
	this.side = side;
	this.descriveYourself= function(){
		console.log("name: " + this.name + " works for: " + this.side)
	}
}
//syntax is not the same as the syntax we used for singleton/simple objects. 
//No more ":" and "," between properties. Here we use "=" and ";" like in regular functions.


//build new objects using the new keyword: 
let ian = new Hero('Ian Solo', 'Rebels')
let luke = new Hero('Luke', 'Rebels')
let bobba = new Hero('Boba Fett', 'Empire')

console.log(ian);
console.log(luke);
console.log(bobba);

ian.descriveYourself();
luke.descriveYourself();
bobba.descriveYourself();
