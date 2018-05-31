
var simpleObject = {name:'Metallica', 
					albums:[{name:"Master of Puppets", year:1986}, 
       						{name:"Black Album", year:1991}]};

var s = JSON.stringify(simpleObject)
console.log(s);

var backToObject = JSON.parse(s);
console.log(backToObject);
