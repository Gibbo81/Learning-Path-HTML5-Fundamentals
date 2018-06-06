var queryURL = "https://jsonplaceholder.typicode.com/users";


function promising(){
  get().then(function(response){
            console.log("ok 1° then");
            console.log(response);
            return JSON.parse(response);
          })
        .then(function(users){
            console.log("ok 2° then");
            console.log(users);
          })
        .catch(function(error){
            console.log('Error during fetch: ' + error.message);
          })

  promiseWithoutSureSync(false).then(function(response){
       console.log("continuation withoout API call");
       console.log(response);
  });
  promiseWithoutSureSync(true).then(function(response){
        console.log("continuation with API call");
        console.log(response);
  });

}

function get(){//converting XMLHttpRequest to a promise-based task
               //return a promise  
  return new Promise(function(resolve, reject){
    var req = new XMLHttpRequest();
  
    req.open("GET", queryURL);
    
    req.onload = function(){// This is called even on 404 etc so check the status
      if(req.status===200){
        resolve(req.response);
      }
      else{  //reject
        reject(Error(req.response));
      }  
    }
    
    req.onerror = function(){
      reject(Error(req.statuText));
    }

    req.send();
  });
  //It's up to the developer to manually call resolve or reject within 
  //the body of the callback based on the result of their given task  
}

/*Sometimes you don't need to complete an async tasks within the promise  if it's 
possible (NOT SURE!) that an async action will be taken returning a promise will be 
best so that you can always count on a promise coming out of a given function*/
function promiseWithoutSureSync(isApiToCall){
  if (!isApiToCall) {
    return Promise.resolve("nothing to do :-)")
  }  

  var request = new Request(queryURL,{
    method: 'GET',
    redirect:'follow',
    headheadersers : new Headers({
      'Content-Type': 'application/json'
    })
  });

  return fetch(request)
        .then(function(response){
          console.log("called api");
          return response.json()
        })
        .catch(function (error) {
            console.log('Error during fetch: ' + error.message);
        });
}




