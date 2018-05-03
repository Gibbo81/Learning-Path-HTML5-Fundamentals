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





