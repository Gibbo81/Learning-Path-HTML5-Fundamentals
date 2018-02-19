
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
    console.log("With === the two operator must be of the same type, no cast is tried")
    console.log("I am 30! without cast")   
}

if (age !=40){
    console.log("With != js try to cast from string to int")
    console.log("I am not 40 cast successful")
}

if (age !== 30) {
    console.log("With !== the two operator must be of the same type, no cast is tried")
    console.log("I am 40! true because one is a number and the other a string. (without cast)")   
}