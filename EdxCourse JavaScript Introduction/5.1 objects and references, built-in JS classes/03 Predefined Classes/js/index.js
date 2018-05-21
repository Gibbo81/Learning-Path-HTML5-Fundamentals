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

//String class
var s= "pippo over the top!";

console.log("s.slice(9,16): " + s.slice(9,16) );
console.log("s.substring(9,16): " + s.substring(9,16));
/*
They take two parameters: the start and end index of the slice (element at 
end index will NOT be included in the slice): “please cut from this index, to 
this one, not included!”. 
 There is a difference between slice and substring, IF the second parameter is negative
If you are a beginner, we recommend that you use substring for most common cases 
(as it will behave the same as slice) and that you stay away from negative parameters,
 where slice and substring show small differences.
*/


//Data object
var d = new Date(); 				//current date
console.log(d.toString());

var d2 = new Date('2018 04 24');	//specific date
var d3 = new Date('2012 10 09 8:29');
console.log(d2.toString());
console.log(d3.toString());
//Numerical parameters can also be passed in this order: year, month (0-11), 
//day (1-31), time (0-23), minutes (0-59), seconds , milliseconds (0-999). 
var d3 = new Date(2017, 3, 16, 14, 43, 10, 120); //Apr 16 2017 14:43:10 GMT+0200 (
