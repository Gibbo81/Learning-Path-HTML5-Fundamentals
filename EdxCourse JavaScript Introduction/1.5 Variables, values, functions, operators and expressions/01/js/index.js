
//variables names are in camel case convention
//JavaScript is weakly dinamic typed
var myName;
let YourName;
//this outside any function are global variables

myName="Pippus";

console.log(myName)

//Inside a function:
//var always defines a function variable local to the whole function 
//let instead have as scope only the bloc of instruction where it's created
function f1(){
  if(true){
    let b=4;
  }
  console.log(b);  //error!!!
}

//function always return a value. if a return statement is not present then it will return
//always undefined 
function showandtype(par){
  console.log(par);
  console.log(typeof(par));
}

//function can have a variable numbers of unspecified arguments, an array named "argument" is 
//created automatically in each function, it contains all the call parameters of the function:
function newsum(){
	var result=0;
	for (var i = arguments.length - 1; i >= 0; i--) {
		result += arguments[i];
	}
	return result;
}

//Constants naming convention: use uppercase letters with underscores. 
const TIME_LIMIT = 50;



//data type number - string - boolean - undefined - null(object) - object 
var x=10 ;
console.log(typeof x);  //number float number

x="Micheal" ;
console.log(typeof x);  //string
//A String number in an arithmetic expression is converted to Number, unless the formula 
//is a pure addition.

x=true ;
console.log(typeof x);  //boolean

var y;
console.log(typeof y);  //undefined
if ( y === undefined) {console.log("Yes it's udefined");}
/*
In JavaScript, undefined means a variable has been declared but has not yet been assigned 
a value; null is an assignment value. It can be assigned to a variable as a representation 
of no value
*/

y = null;
console.log(typeof y);  //object
if ( y === undefined) {console.log("Yes it's udefined");} //false null isn't udefined

/*
Use === Instead of == JavaScript utilizes two different kinds of equality operators: === | 
!== and == | != It is considered best practice to always use the first set when comparing. 
"If two operands are of the same type and value, then === produces true and !== produces false.
However, when working with == and !=, you'll run into issues when working with different types.
In these cases, they'll try to coerce the values, unsuccessfully.
*/
var persona = {name: 'Micheal', surname : "pippo"}; //object
console.log(typeof persona);

var array = [1,2,3,4];
console.log(typeof array);  //object
//If you want to add a new element at the end of an array, use the index equal to the length 
//of the array
var l = array.length;
array[l]=5;
console.log(array[l]);
//equivalent to
array.push(6)
console.log(array[array.length-1]);

/*
Numbers variable have 3 specials value : +Infinity | -Infinity | NaN
Infinity (or +Infinity) represents all number values greater than 1.79769313486231570e+308 
and -Infinity represents values smaller than -1.79769313486231570e+308. Nan represents 
not-a-number values,
*/
var n = 0/0 //NaN
showandtype(n); //number

n = 3/0;
showandtype(n); //Infiniti - number

//Any operation with Infinity gives Infinity as a result:
n = n-999999999999
showandtype(n); //Infiniti - number

n = n/n
var u = showandtype(n); //Infiniti - number
console.log(u);

console.log(newsum(1,2,3,4,5,6,7,8,9,10));


f1();

//There are also function data type, we will see them in chapter 2.3