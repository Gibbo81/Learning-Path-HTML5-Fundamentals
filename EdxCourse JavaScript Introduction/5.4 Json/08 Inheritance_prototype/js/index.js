/*
JS onjects are dynamic and do not provide a class implementation per se (the class keyword is 
introduced in ES2015, but is syntactical sugar, JavaScript remains prototype-based
When it comes to inheritance each object has a private property which holds a link to another object 
called its prototype. That prototype object has a prototype of its own, and so on until an object is 
reached with null as its prototype. Null has no prototype.
JavaScript objects are dynamic "bags" of properties, when trying to access a property of an object, the 
property will not only be sought on the object but on the prototype of the object, the prototype of the 
prototype, and so on until either a property with a matching name is found or the end of the prototype chain 
is reached.
*/

//singleton object
let x = {
	age :14,
	nation : "italy"};

let y = { color : "green"};
Object.setPrototypeOf(y, x)					//set object prototype
console.log(y.age);
console.log(Object.getPrototypeOf(y));
Object.getPrototypeOf(y).newone = "NUOVO";	//add new field to prototype (x)
console.log(y.newone);


//constructor anonymous function
let f = function(){
	this.a=1;
	this.b=2;
};
let o = new f();
//add properties in f function's prototype
f.prototype.b = 3;
f.prototype.c = 4;

console.log("o.a: " + o.a);	//1
console.log("o.b: " + o.b);	//2 There's a 'b' own property on o so the prototype'b property is not visited. 
console.log("o.c: " + o.c); //4
console.log("o.d: " + o.d);	//undefined





