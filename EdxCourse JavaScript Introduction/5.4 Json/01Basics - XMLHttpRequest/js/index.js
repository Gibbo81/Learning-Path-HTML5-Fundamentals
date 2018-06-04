
var simpleObject = {name:'Metallica', 
					albums:
						[
							{name:"Master of Puppets", year:1986}, 
       						{name:"Black Album", year:1991}
       					]
       				};

var s = JSON.stringify(simpleObject)
console.log(s);

var backToObject = JSON.parse(s);
console.log(backToObject);

//--------------------------------------------------------------------------------

function search(){
	var queryURL = "https://jsonplaceholder.typicode.com/users";

    //prepere the Ajax request using XhR2
    var xhr = new XMLHttpRequest();
    xhr.open('GET', queryURL, true);

    // called when the response is arrived
    xhr.onload = function(e) {
      var jsonResponse = xhr.response; //var jsonResponse = this.response; would be the same

      // turn the response into a JavaScript object
      var users = JSON.parse(jsonResponse);
      displayUsersAsTable(users);
    }
    
    // in case of error
    xhr.onerror = function(err) {
      console.log("Error: " + err);
    }
    
    //request is sent in the asynchronously in the background 
    xhr.send();
}

function displayUsersAsTable(users){
    var usersDiv = document.querySelector("#users");
    usersDiv.innerHTML = "";
  
    // creates and populate the table with users
    var table = document.createElement("table");
          
    // iterate on the array of users
    users.forEach(function(currentUser) {
        // creates a row
        var row = table.insertRow();
        // insert cells in the row
        var nameCell = row.insertCell();
        nameCell.innerHTML = currentUser.name;
        var cityCell = row.insertCell();
        cityCell.innerHTML = currentUser.address.city;
     });
  
     // adds the table to the div
     usersDiv.appendChild(table);
}



