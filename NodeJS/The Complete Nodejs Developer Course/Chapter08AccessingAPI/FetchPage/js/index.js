
function weather(){
  var queryURL = "http://localhost:3000/weather?address=bologna"
  fetch('http://localhost:3000/weather?address=bologna')
  .then(response => Promise.all([response.ok, response.json()]))
  .then(([responseOk, body]) => {
      debugger;
    if (responseOk) {
      return body
    } else {
      throw body
    }
  })
  .then(body => {
      debugger;
      console.log(body)
      window.alert(body.forecast)
  })
  .catch((er) => {
      debugger;
      window.alert("Errore contattare l'assistenza");
  })
  .finally(function () { return 1 });  
}


//OLD
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
      //the resulting callback data has a json method for 
      //converting the raw data to a JavaScript object
      return response.json();  
    })
    .then(function(users){
      displayUsersAsTable(users)      
    })
    .catch(function (error) {
        console.log('Error during fetch: ' + error.message);
    });
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