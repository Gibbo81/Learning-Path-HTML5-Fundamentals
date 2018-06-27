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
	nation : "italy",
};
/*The newly created object x has Object.prototype as its Prototype, Object.prototype has null as 
its prototype. prototype chain: x ---> Object.prototype ---> null
For array and function is a little different: b ---> Array.prototype ---> Object.prototype ---> null
and  f ---> Function.prototype ---> Object.prototype ---> null*/

let y = { color : "green"};
Object.setPrototypeOf(y, x)					//set object prototype of y to x
console.log(y.age);
console.log(Object.getPrototypeOf(y));
Object.getPrototypeOf(y).newone = "NUOVO";	//add new field to prototype (x)
Object.getPrototypeOf(y).nextYear = function(){
										return this.age+1;	//this points to the inheriting object, not to the prototype object 
									};
console.log(y.newone);
console.log('nextYear(): ' + y.nextYear());	//any function can be added to an object in the form of a property

//constructor anonymous function
let f = function(){
	this.a=1;
	this.b=2;
};
let o = new f();
//add properties in f function's prototype
f.prototype.b = 3;
f.prototype.c = 4;

/*if needed we can put a new prototype for our constructor function
f.prototype = {
  addVertex: function(v) {
    this.vertices.push(v);
  }*/

console.log("o.a: " + o.a);	//1
console.log("o.b: " + o.b);	//2 There's a 'b' own property on o so the prototype'b property is not visited. 
console.log("o.c: " + o.c); //4
console.log("o.d: " + o.d);	//undefined

//class
class Polygon {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
  speak(){
  	return "I'am a polygon";
  }
}

class Square extends Polygon {	//The extends keyword sets up the prototype inheritance relationship between the parent and child classes.
  constructor(sideLength, color) {
    super(sideLength, sideLength);//super must be the first function called in the constructor
    this.color= color;
  }
  get area() {
    return this.height * this.width;
  }
  set sideLength(newLength) {
    this.height = newLength;
    this.width = newLength;
  }
}
/*
Invoking the super function is required even if the parent object does no configuration. The invoking 
of the super constructor is what actually created the new this object to be used in the child class 
(aka subclass).
*/
var s = new Square(2, 'red');
let uu = Object.getPrototypeOf(s);	//Polygoncontains only speak properties all the other are inside sqare
console.log('s.area: '+ s.area);

/*
class is only code sintactic sugar, produce exactly the same object structure. Therefore, while the new 
syntax simply improves the inheritance code, it does not change the result.
*/

