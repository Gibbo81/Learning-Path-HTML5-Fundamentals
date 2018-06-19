//every js object have some basic properties inherited from special class named Object
//toString() and valueOf()

let x = [1,2,32];
console.log(x.valueOf());   //return x as an array
console.log(x.toString());	//return x as a string
console.log(x.length);


//array
let a1 = new Array(); 	//empty array
let a2 = {};			//empty array
let a3 = new Array(1,2,5,'d'); //equivalent to let a2 = [1,2,5,'d']
let a4 = [1,2,5,'d']
let a5 = new Array(10) //if only one parameter it's the size of the array. NOT USED
for (var y in a3){
	console.log("position "+y+" "+ a3[y]);
}

//array are onject so i can add properties:
a1.name="pippo"; //really bad practice mixing different concepts avoid
//With arrays, only properties with a numerical index are taken into account by the length property!

//it's possible to change array length at run time
a2.length=10;
console.log("a2 after its grow " +  a2);  //full of undefined elements

//take a sub part of an array
var t = a2.slice(1,3);
console.log("a2.slice(1,3) " + t);


