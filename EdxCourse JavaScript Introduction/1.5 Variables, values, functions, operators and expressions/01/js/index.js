
//variables names are in camel case convention
//JavaScript is weakly dinamic typed
var myName;
let YourName;
//this outside any function are global variables

myName="Pippus";

console.log(myName)

//Inside a function:
//var always defines a function local local to the whole function 
//let instead have as scope only the bloc of instruction where it's created
function f1(){
  if(true){
    let b=4;
  }
  console.log(b);  //errror!!!
}


//Constants naming convention: use uppercase letters with underscores. 
const TIME_LIMIT = 50;



//data type number - string - boolean - undefined - null(object) - object 
var x=10 ;
console.log(typeof x);  //number

x="Micheal" ;
console.log(typeof x);  //string

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
if ( y === undefined) {console.log("Yes it's udefined");} //false null is 

/*
Use === Instead of == JavaScript utilizes two different kinds of equality operators: === | 
!== and == | != It is considered best practice to always use the former set when comparing. 
"If two operands are of the same type and value, then === produces true and !== produces false.- 
JavaScript: The Good Parts However, when working with == and !=, you'll run into issues when 
working with different types. In these cases, they'll try to coerce the values, unsuccessfully.
*/
var persona = {name: 'Micheal', surname : "pippo"}; //object
console.log(typeof persona);

var array = [1,2,3,4];
console.log(typeof array);  //object

f1();