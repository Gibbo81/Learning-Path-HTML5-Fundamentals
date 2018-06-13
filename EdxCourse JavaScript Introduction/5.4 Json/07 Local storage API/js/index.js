
/*Web Storage provides two interfaces - sessionStorage and localStorage - whose main
 difference is data longevity. This specification defines an API for persistent data 
 storage of key-value pair data in Web clients. With localStorage the data will remain 
 until it is deleted, whereas with sessionStorage the data is erased when the tab/browser 
 is closed.*/

//localStorage is a simple key-value store, in which the keys and values are strings.

localStorage.firstName ="Pippus";
localStorage.lastName = "Disdegnatou";
localStorage.age = "99";
localStorage.setItem('bgcolor', 'red');
	
sessionStorage.firstName ="Plutus";
sessionStorage.lastName = "Bau";
sessionStorage.age = "8";
sessionStorage.setItem('bgcolor', 'blu');

console.log("localStorage.firstName: " + localStorage.firstName);
console.log("localStorage.lastName: " + localStorage.lastName);
console.log("localStorage.age: " + localStorage.age);
console.log("sessionStorage.firstName: " + sessionStorage.firstName);
console.log("sessionStorage.lastName: " + sessionStorage.lastName);
console.log("sessionStorage.age: " + sessionStorage.age);


localStorage.removeItem("firstName");
sessionStorage.removeItem("lastName");
console.log("sessionStorage.lastName: " + sessionStorage.lastName);
console.log("localStorage.firstName: " + localStorage.firstName);