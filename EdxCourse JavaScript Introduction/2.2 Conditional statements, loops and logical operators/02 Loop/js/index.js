function pippo(){
    console.log("While loop, at the end x = ")    
}

//while loop
var x=1, r=1;
while(x<4) {
    console.log("x = " + x);
    x +=1;
    r +=x; 
}
console.log("While loop, at the end x = " + x + " and r = " + r);

//do while
x=1, r=1;
do {
    console.log("x = " + x);
    x +=1;
    r +=x; 
} while(x<8)
console.log("Do While loop, at the end x = " + x + " and r = " + r);

//for
r=1;
for (var i=0; i<5; i+=2)
    console.log(i);    

var ar = ["a","b","c","d","e","f","g"];
for (var i=0; i<ar.length; i++){
    console.log(ar[i]);  
}
//or you can use the for-in statment
//Before each execution of the block statement, the variable named "property" is assigned 
//with the name of one of the properties (the keys) of the object.
console.log("for-in statment");  
for (var x in ar){
    if (x==3){       //=== wouldn't match
        console.log("x is: " + typeof(x))
        continue;
    }
    console.log("for each element is :" + x);  //pay attention x is 0 - 1 -2 -3 .....
    console.log("ar[x] :" + ar[x]);  
    console.log('property: ' +property);
}


