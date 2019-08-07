//full functional fetch example

async function myFunction() {
  var myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');
  myHeaders.append('Accept', 'application/json');
  var request = new Request('http://localhost:44356/api/Values',
      {
          method: 'GET',
          headers: myHeaders
      }
  );
  fetch(request)
  .then(handleError)
  .then((response) => response.json())
  .then((responseJSON) => {

       console.log(responseJSON);
    })
  .catch((er) => {
    return er.json();
  })
  .then((responseJSON) => {
       console.log(responseJSON);
    })

}

function handleError(response) {
  if (!response.ok)
    throw response;
  return response;
}
