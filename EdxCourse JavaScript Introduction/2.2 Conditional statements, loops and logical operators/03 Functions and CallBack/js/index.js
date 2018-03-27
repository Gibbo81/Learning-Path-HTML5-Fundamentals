function sum(a, b){
    return a+b;
}

function displayInPage(message, value){
    document.body.innerHTML += message + value +"<br>";
}

displayInPage("result", sum(4,8));

/*
The "function expression" is an "anonymous function", a function without a name, 
that represents a value that can be assigned to a variable. Then, the variable can be 
used to execute the function.
*/

var sumExpression = function(a,b){
    return a+b;
};

var displayInPageExpression = function(message, value){
    document.body.innerHTML += message + value +"<br>";
};

displayInPageExpression("result 2 : ", sumExpression(11,15));
console.log(typeof(sumExpression));


//InLine functions
window.addEventListener('click', function(event){
    document.body.innerHTML += "button clicked<br>";
})