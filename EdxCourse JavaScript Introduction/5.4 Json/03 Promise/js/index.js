
function promising(){//converting XMLHttpRequest to a promise-based task
  //return a promise
  var queryURL = "https://jsonplaceholder.typicode.com/users";
  return new promise(function(resolve, reject){
    var req = new XMLHttpRequest();
    req.open("GET", queryURL);
    req.onload = function(){// This is called even on 404 etc so check the status
      if(req.status===200){
        resolve(req.response);
      }
      else{  //reject
        reject(Error(req.statuText));
      }  

    }

  })
  //It's up to the developer to manually call resolve or reject within 
  //the body of the callback based on the result of their given task  



}




function search(){
	var queryURL = "https://jsonplaceholder.typicode.com/users";

  //Only the first parameter, the URL, is required
  var request = new Request(queryURL,{
    method: 'GET',
    redirect:'follow',
    headheadersers : new Headers({
      'Content-Type': 'application/json'
    })
  });

  fetch(request)
    .then(function(response){
      //the resulting callback data has a json method for converting the raw data 
      //to a JavaScript object
      return response.json();  
    })
    .then(function(users){
      displayUsersAsTable(users)      
    })
    .catch(function (error) {
        console.log('Error during fetch: ' + error.message);
    });
}


/*
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
*/


