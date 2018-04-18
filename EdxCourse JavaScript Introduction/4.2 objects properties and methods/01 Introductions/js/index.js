
//objects literals or singleton objects is the most basic form of object
var js1 = {
    courseName: 'JavaScript intro',
    weeks: 5,
    madeBy: 'W3Cx',
    author: 'Michel Buffa' 
};


//It is possible to access the object's properties with "." or with brackets
console.log(js1.author);
console.log(js1['author']); //same result, same operation
//Objects are arrays whose indexes are property names!!!!!!!!!


//this can be useful in some specific but rare cases
//js1.1stPublication = '16 april 1943'; //this will give an erro
js1['1stPublication'] = '16 april 1943'; //this is good
console.log(js1);
//console.log(js1.1stPublication);  error :-)
//same would be for name with spaces inside :  js1['date of Publication'] works only with []


//if we have the name of the field in a key value
let key ='weeks';
console.log(js1[key]);
   
//Are equivalent
var louis = {age: 40}; 
var louis = {"age": 40};
var louis = {'age': 40};
//The first version is used most of the time but in same case we mast use the other one:
//when the property's name is a reserved js word or contains spaces/special characters or 
//starts with a number.

luis = {"1 of how much?": 100 }
console.log(luis);

//objects can contains other objects
let book = {
    name: 'Pippus',
    publisher: 1987,
    author:{
        name: 'Plutus',
        nation: 'Italy'
    }
};
console.log(book);
console.log(book.author.name);

//object's functions
var medor ={
    name : 'fido',
    bark : function(){
        alert("bau, bau !")
    }
};

medor.bark();

let job='professor';
let darkVAdor={
    race:'human',
    job:'bad guy',
    describeYourself: function(){
        return "i'm a " + this.race + "and I'm a " + this.job + " in a serie of movies";
    },
    describeYourselfWRONG: function(){
        return "i'm a " + this.race + "and I'm a " + job + " in a serie of movies";
    }
}
console.log(darkVAdor.describeYourself());
//this.* is necessary to access the properties of the object, without it we would have
//access the global variables
console.log(darkVAdor.describeYourselfWRONG());



