//string are also predefined object
//string are not modificable
var r = 'pippo PLUTO paperino';
r[0] = 'Z';			//no error but the variable didn't change
console.log(r); 	//still pippo
/*
in JavaScript a string is not modifiable at all. 
When we do var s = s + "hello", in fact, we are building a new string somewhere 
in memory, and we assign this new value to the variable s. We never "modify" the 
characters of the string s, we just give to s another address in memory to point to. 
*/

//Ovviously no one of the following command change the original string
r= r.toUpperCase(r)
console.log(r);

r= r.toLowerCase(r)
console.log(r);

console.log('r.substring(0,4):' + r.substring(0,4));

console.log("r.split(' '): " + r.split(' '));	//return an array with differeent token separated by space

var arrayT= r.toUpperCase().split(' ');
console.log("arrayT.join('-***-'): " + arrayT.join('-***-'));	//build back the string



