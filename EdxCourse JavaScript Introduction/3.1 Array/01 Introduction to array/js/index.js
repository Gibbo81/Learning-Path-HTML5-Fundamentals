
let letter =['a','s','f','g'];
var persons = [
    {givenName: 'Michel', familyName: 'Buffa', age:51},
    {givenName: 'Pig', familyName: 'Bodine', age:20},
    {givenName: 'Pirate', familyName: 'Prentice', age:32}
];

console.log(letter);

//add an element
letter[letter.length]='h';
console.log(letter);
//same result
letter.push('j');
console.log(letter);

//sort
function compareByAge(a,b){
    if (a.age < b.age)
        return -1;
    if (a.age > b.age)
        return 1;
    return 0;
}
console.log(letter.sort()); //without parameter is alfabetic order

console.log(persons.sort(compareByAge)); //with order function

persons.sort(compareByAge)
       .forEach(function(b){
            console.log(b);
});

//to remove element
persons.splice(0,1); //starting from 0 position (exclude) remove one lements

console.log(persons.sort(compareByAge))

persons.sort(compareByAge)
       .forEach(function(b){
            console.log(b);
});

person.pop()