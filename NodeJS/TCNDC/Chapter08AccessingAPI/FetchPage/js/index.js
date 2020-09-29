
function loaded(){
  const form = document.getElementById('only')
  form.addEventListener('submit', (e) =>{
    e.preventDefault()
    const value = document.getElementById('in').value
    console.log(value)
    weather(value)
  })
}

function weather(location){
  const messageOne = document.querySelector('#p1')
  const messagetwo = document.querySelector('#p2')
  messageOne.textContent='loading'
  messagetwo.textContent=''
  var queryURL = "http://localhost:3000/weather?address=" + location
  fetch(queryURL)
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
      messageOne.textContent=body.forecast
      messagetwo.textContent=body.location      
  })
  .catch((er) => {
      debugger;
      messageOne.textContent=JSON.stringify(er)
  })
  .finally(function () { return 1 });  
}