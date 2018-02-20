
var age = "30";

if (age <4)
    console.log("i am a baby");
else if (age<18)
    console.log("i am a baby");
else if (age<50)
    console.log("i am an adult");
else
    console.log("i am a old");

if (age==30){
    console.log("With == js try to cast from string to int")
    console.log("I am 30! cast successful")
}

if (age === 30) {
    console.log("With === the two operator must be of the same type, no type conversion is tried")
    console.log("I am 30! without cast")   
}

if (age !=40){
    console.log("With != js try to cast from string to int")
    console.log("I am not 40 successful type conversion")
}

if (age !== 30) {
    console.log("With !== the two operator must be of the same type, no type conversion is tried")
    console.log("I am 40! true because one is a number 30 and the other a string '30'. (without cast)")   
}
//The triple-equals operator never does type coercion. It returns true if both operands reference 
//the same object, or in the case of value types, have the same value.

var persona = {name: 'Micheal', surname : "pippo"};
var persona2 = {name: 'Micheal', surname : "pippo"};

if (persona===persona2) 
        console.log("Same person")
else
        console.log("Same value but different person")

/*
The following values are evaluated as false :
false - undefined - null - 0 - NaN - the empty string ''
Everything else is evaluated as true!
*/
var boo2 = (0/0) || 43.2 ;
console.log(boo2);   
/*boo2 equals 43.2 because the expression 0/0 equals NaN, which is evaluated as false.
Inside an if statment this would be true for the rule see before*/

/*
NaN works similar to sql null value:
Nan is equal to nothing - not even to itself!  But you do have a function to check the NaN value
*/
console.log("isNaN(0/0): " + isNaN(0/0));

