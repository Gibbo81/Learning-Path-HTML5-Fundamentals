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
  catch(e){ //for error handling use catch
    console.log('Error!', e);
  }
}

//you can use async-await with every type of method
//anonymous
var a = async function (){
  return await fetch(queryURL);
};
//lambda
var b = async () => { 
  return await fetch(queryURL);
};
//argument
document.body.addEventListener('click', async function(){
  return await fetch(queryURL);
});
//class method
class Pippo{
  async myMethodPippo(){
    return await fetch(queryURL);
  }
}


//A good idea is to avoid stacking awaits, when possible ( if operation can run in parallel)
//trigger multiple tasks immediately and use await after said tasks are triggered:
// Will take 1000ms total!
async function series() {
  await wait(500);
  await wait(500);
  return "done!";
}

// Would take only 500ms total!
async function parallel() {
  const wait1 = wait(500); //both task start before the await 
  const wait2 = wait(500);
  await wait1;
  await wait2;
  return "done!";
}