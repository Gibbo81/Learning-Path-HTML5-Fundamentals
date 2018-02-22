function sum(a, b){
    return a+b;
}

function displayInPage(message, value){
    document.body.innerHTML += message + value +"<br>";
}

displayInPage("result", sum(4,8));

