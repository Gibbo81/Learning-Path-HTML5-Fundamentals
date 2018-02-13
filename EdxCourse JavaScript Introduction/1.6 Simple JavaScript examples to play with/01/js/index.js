function buildTable(){
  addrow("Gianni","Rossi");
  addrow("Simona","Lardi");
  addrow("Erica","Verdi");
}

function addrow(firstName, lastName){
  var tablebody = document.querySelector("#tablebody");
  var newRow = tablebody.insertRow();
  var firstNameCell = newRow.insertCell();
  firstNameCell.innerHTML = firstName;
  var lastNameCell = newRow.insertCell();
  lastNameCell.innerHTML = lastName;
}

var x = 0;

function changeCSS(){
  var div = document.querySelector("#theDiv");
  if (x===0){
    console.log("add border");
    div.style.border = "5px dashed purple";
    div.style.padding ="10px";
    div.style.backgroundColor ="lightGreen";  
    x=x+1;
  }
  else {
    console.log("remove border");
    div.style.border = "0px dashed purple";
    div.style.padding ="0px";
    div.style.backgroundColor ="pink";
    x=x-1;  
  }
}