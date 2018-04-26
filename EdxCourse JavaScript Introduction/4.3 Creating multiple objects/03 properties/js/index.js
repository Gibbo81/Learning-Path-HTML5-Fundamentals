class Hero{
	//THERE CAN BE ONLY ONE CONSTRUCTOR in the class
	constructor(name, side){
		this.name=name;
		this.side=side;
		Hero.numberHeroesCreated++;
	}

	speak(){
		return "name: " + this.name + " works for: " + this.side;
	}

	static wow(){
		return 'We are hero creator';
	}

	//getter and setter are present in js6
	get upperName(){
		return this.name.toUpperCase();
	}

	set upperName(newName){
		this.name = newName + ' -:-:- ';
	}

}

// static property definition is necessarily outside of the class with ES6
Hero.numberHeroesCreated = 0;

console.log(Hero.numberHeroesCreated);
let x = new Hero("Dark","blak");
let y = new Hero("","");
console.log(Hero.numberHeroesCreated);

console.log(Hero.wow());

console.log(x.speak());
x.upperName = 'lord Vader';
console.log(x.upperName);
console.log(x.speak());
