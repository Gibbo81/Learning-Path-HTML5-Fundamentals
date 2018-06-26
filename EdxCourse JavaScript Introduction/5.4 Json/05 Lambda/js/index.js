/*An arrow function expression has a shorter syntax than a function expression and
 does not have its own this, arguments, super*/

//lambda are an improvement over anonymous function
var anon = (a, b) => a + b;
anon = (a, b) => { return a + b};   //equivalent

/*Until arrow functions, every new function defined its own this value 
(a new object in the case of a constructor, undefined in strict mode function calls, 
the base object if the function is called as an "object method", etc.). This proved to be 
less than ideal with an object-oriented style of programming. lambda does not have it's 
own this value. Its this is lexically bound to the enclosing scope. */
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

//to return a literal object it's necessary to use extra parenthesis
var lit = () => ({foo: a+b});
console.log(lit());



