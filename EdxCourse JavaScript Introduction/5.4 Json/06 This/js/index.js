/*In most cases, the value of this is determined by how a function is called. It can't 
be set by assignment during execution, and it may be different each time the function is 
called. ES5 introduced the bind method to set the value of a function's this regardless 
of how it's called, and ES2015 introduced arrow functions which don't provide their own 
this binding (it retains the this value of the enclosing lexical context).
*/

//In the global execution context (outside of any function), this refers to the global object
this.b=77
console.log("this.b: " + this.b);
console.log("b: " + b);
//*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/
//*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/
//*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/

//Inside a function, the value of this depends on how the function is called.
function f1(x){
	console.log(this.b) 
	console.log(x)
	return this;
}

/*Simple call
whene the value of this is not set by the call, this will default to the global object.*/
console.log(f1(10));//this is window in a browser, same as previous example

//To pass a different value for this from one context to another, use call, or apply:
var obj = { b : "custom b"}
console.log("f1.call(obj,12): " + f1.call(obj,12));
console.log("f1.apply(obj,34): " + f1.apply(obj,[34]));
/*Where a function uses the this keyword in its body, its value can be bound to a particular 
object in the call using the call or apply methods which all functions inherit from 
Function.prototype.
Note that with call and apply, if the value passed as this is not an object, an attempt will 
be made to convert it to an object using the internal ToObject operation*/

/*Arrow functions
In arrow functions, this retains the value of the enclosing lexical context's this. 
In global code, it will be set to the global object*/
var t = () => this;
console.log("Arrow function returning this: ");
console.log(t());  // in this case the global window
//No matter what, foo's this is set to what it was when it was created

//*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/
//*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/
//*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/

/*As an object method
When a function is called as a method of an object, its this is set to the object the 
method is called on.*/
var o = {
  pippus: 99,
  f: function() {
  	console.log('object method');
    return this.pippus;
  }
};
console.log(o.f());
//this behavior is not at all affected by how or where the function was defined

/*As a constructor
Inside a constructor this is bound to the new object being created.*/
class Hero{
	constructor(name, side){
		this.name=name;
		this.side=side;
	}
}

/*If the function has a return statement that returns an object, that object will be the
result of the |new| expression.  Otherwise, the result of the expression is the object
currently bound to |this| (i.e., the common case most usually seen).*/
class HeroWithReturn{
	constructor(name, side){	//obviously is no senso code, only for example 
		this.name=name;
		this.side=side;
		return { name : 'pippus', age : 200};
	}
}

var h1 = new Hero("Hercules", 25);
var h2 = new HeroWithReturn("Hercules", 25);
console.log(h1);
console.log(h2);
/*In the last example (h2), because an object was returned during construction, the new 
object that this was bound to simply gets discarded. 
(This essentially makes the statement "this.a = 37;" dead code. 
This is really bad code never use it :-)*/

//*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/
//*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/
//*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/

/*As a DOM event handler
When a function is used as an event handler, its this is set to the element the event 
fired from */
// When called as a listener, turns the related element blue
function bluify(e) {
  // Always true
  console.log(this === e.currentTarget); 
  // true when currentTarget and target are the same object
  console.log(this === e.target);
  this.style.backgroundColor = '#A5D9F3';
  /*events bubble by default so the difference between the two is:
	target is the element that triggered the event (e.g., the user clicked on)
	currentTarget is the element that the event listener is attached to.*/
}

function load(){
	// Get a list of every element in the document
	var elements = document.getElementsByTagName('p');

	// Add bluify as a click listener so when the
	// element is clicked on, it turns blue
	for (var i = 0; i < elements.length; i++) {
  	elements[i].addEventListener('click', bluify, false);
	}	
}