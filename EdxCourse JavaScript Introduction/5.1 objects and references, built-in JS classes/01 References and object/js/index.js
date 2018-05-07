//primitive types are passed by copy
var x = 2;
console.log("x is " + x);

var x2 = x;
x2 += 10;
console.log("x2 is " + x2);
console.log("x is " + x);
//x doesn't change, x2 is a copy of it

//objects are passed by references
var y = {a:3};
console.log("y.a is " + y.a);
var y2 = y;
y2.a="pippus";
console.log("y2.a is " + y2.a);
console.log("y.a also changed " + y.a);
//both changed!!
//but if we assign a differentlocation in memory
y2 = {a:"new one"};
console.log("y2.a is: " + y2.a);
console.log("y.a remain the same: " + y.a);
/*When working with objects you use the reference of the object. 
That means you can modify the referenced object. But if you change the reference 
(for example by assigning a new object), the original variable (which now points 
to another object) will not be modifie */

//Comparing two objects will only return true if they point to the same object
var originalObject = {name:'Michel'};
var newObject = {name:'Michel'};
console.log(originalObject==newObject)	//false


/*
Js environment defines a “global object”. When this environment is a Web server this 
global object is named window.
The “global variables” defined with the keyword var are properties of this window object, 
and we can say the same of predefined functions like prompt, alert, etc.
Let instead does not create a property on the global window object.
*/
var a=10
console.log(window.a)
console.log('window.a===a: ' + (window.a===a))



