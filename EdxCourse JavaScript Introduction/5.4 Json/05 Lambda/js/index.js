/*An arrow function expression has a shorter syntax than a function expression and
 does not have its own this, arguments, super*/

//lambda are an improvment over anonymous function
var anon = (a, b) => a + b;
anon = (a, b) => { return a + b};   //equivalent

//it does not have it's own this value. Its this is lexically bound to the enclosing scope. 
class Logger {
  dumpData(data) {
    dump(data, outputFile => this.latestLog = outputFile);
  }
}
//There is no arguments variable with lambda

var a = 10;
var b = 14;

//lambda with no parameters should be written with a pair of empty parentheses.
var x = () => {a+b}

//to return a body literal expression it's necessary to use extra parentheis
var lit = () => ({foo: a+b});
console.log(lit());