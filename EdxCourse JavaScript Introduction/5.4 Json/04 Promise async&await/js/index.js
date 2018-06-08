var queryURL = "https://jsonplaceholder.typicode.com/users";
//async and await keywords are used for simplifying promise handling

function asyncawait(){
  fetchContent().then(function(data){
    console.log(data);
  });
}

async function fetchContent(){ //async declaration allows await to be used within
  try{
    let content = await fetch(queryURL); //await keyword is followed by a promise
    //The asynchronous routine (fetch in this case) runs and execution of further code 
    //halts (though not blocking) until the async action finishes
    let text = await content.text();
    console.log(text);
    return text;
    //Essentially you get to keep your code "inline" without the need for callbacks
  }
  catch(e){
    console.log('Error!', e);
  }
}





/////////////////////////////////////////////////////////////////////////////////////

function get(){//converting XMLHttpRequest to a promise-based task
               //return a promise  
  return new Promise(function(resolve, reject){
    var req = new XMLHttpRequest(); //promise with CAP P!!!!
  
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

function promising(){
  /*The first then method callback receives the result given to it by the resolve() call.
    If a promise has already resolved but then is called again, the callback immediately 
    fires. If the promise is rejected and you call then after rejection, the callback is 
    never called */
  get().then(function(response){
            console.log("ok 1° then");
            console.log(response);
            return JSON.parse(response);
          })
        .then(function(users){
            console.log("ok 2° then");
            console.log(users);
          })
        //The catch callback is executed when the promise is rejected
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

  tryPromiseAll();

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

function tryPromiseAll(){
    var request = new Request(queryURL,{
    method: 'GET',
    redirect:'follow',
    headheadersers : new Headers({
      'Content-Type': 'application/json'
    })
  });

  var p1 = fetch(request);
  var p2 = fetch(request);
  var p3 = fetch(request);
  Promise.all([p1,p2,p3])
         .then(function (result){
            console.log("Promise.all");
            console.log(result);  //result is an array with 3 responses!
          })
         .catch(function(err){
            console.log('Catch: ' + err);
         });
    //If any promise is rejected the catch fires for the first rejection

  var p4 = fetch(request);
  var p5 = fetch(request);
  var p6 = fetch(request);
  Promise.race([p4,p5,p6])
         .then(function (result){
            console.log("Promise.race");
            console.log(result);  
          })
         .catch(function(err){
            console.log('Catch: ' + err);
         });

}


