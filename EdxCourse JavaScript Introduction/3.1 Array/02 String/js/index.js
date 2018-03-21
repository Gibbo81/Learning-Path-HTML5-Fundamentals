

//javascript strings are similar to array:

var s = 'pippo';
console.log('first character of ' + s + ' : ' +s[0])
console.log(s +' is long: ' +  s.length)

//but you cannot add elements to strings using a non-existent index, you cannot
//use the push/pop methods for adding/removing  characters at the end of the string
s[s.length] = 'U';  //no error but it' not working
console.log(s);
// Strings are "read only" when using brackets to access individual characters!


function start(){
    let a = ['a','b','c'];
    a.forEach(function(value, index, array){
     document.body.innerHTML += value + ' is at index: ' + index + ' from an array of '+ array.length +'<br>';
    });  

    //otherwise
    for (let i=0; i <a.length; i++){
        document.body.innerHTML += a[i] + '<BR>'
    }

}



