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
    console.log("gggg");
}

