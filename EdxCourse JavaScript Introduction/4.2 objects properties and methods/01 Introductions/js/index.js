
//objects literals or singleton objects is the most basic form of object
var js1 = {
    courseName: 'JavaScript intro',
    weeks: 5,
    madeBy: 'W3Cx',
    author: 'Michel Buffa' 
};

console.log(js1.author);
console.log(js1['author']); //same result, same operation

//this can be useful in some specific but razor rare cases
//js1.1stPublication = '16 april 1943'; //this will give an erro
js1['1stPublication'] = '16 april 1943'; //tis is good
console.log(js1);
//console.log(js1.1stPublication);  error :-)
//same would be for name with spaces inside :  js1['date of Publication'] works only with []


//if we have the name of the field in a key value
let key ='weeks';
console.log(js1[key]);

//objects can contains other objects
let book ={
    name: 'Pippus',
    publisher: 1987,
    author:{
        name: 'Plutus',
        nation: 'Italy'
    }
}
console.log(book);
console.log(book.author.name);
    
