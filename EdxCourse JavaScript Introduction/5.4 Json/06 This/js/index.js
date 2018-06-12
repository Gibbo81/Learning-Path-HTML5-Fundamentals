
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
	console.log(this.b) //same as before
	console.log(x)
	return this;
}

/*Simple call
because the value of this is not set by the call, this will default to the global object.*/
console.log(f1(10));//this is window in a browser.

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









