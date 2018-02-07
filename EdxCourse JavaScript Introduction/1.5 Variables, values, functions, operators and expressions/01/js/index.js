
//variables names are in camel case convention
//JavaScript is weakly typed
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

f1();